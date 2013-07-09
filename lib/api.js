var
  events  = require('events'),
  request = require('request'),
  util    = require('util')
;

var Synology = function(options) {
  events.EventEmitter.call(this);

  var syno = this;

  // Default options
  syno.options = {
    host    : 'localhost',
    port    : 5000,
    secure  : false,
    user    : 'admin',
    password: 'admin'
  };

  // Override the default options by the user's one
  util._extend(syno.options, options);


  /**
   * Raw query to the API
   * @param  {string}   path     The API path to query
   * @param  {string}   method   The method to use for the query (optional, default to GET). Possible values: GET, POST, PUT, DELETE
   * @param  {object}   params   Request parameters
   * @param  {function} callback Function to execute at the end of the request. Passed the response of the request and the response code (optional, default to null)
   * @return {Synology}          Synology object
   */
  syno.query = function() {
    var
      path = arguments[0],
      method =
        typeof(arguments[1]) == 'string' ? arguments[1].toUpperCase() :
        'GET',
      params =
        typeof arguments[2] === 'object' ? arguments[2] :
        typeof arguments[1] === 'object' ? arguments[1] :
        {},
      callback =
        typeof arguments[3] === 'function' ? arguments[3] :
        typeof arguments[2] === 'function' ? arguments[2] :
        typeof arguments[1] === 'function' ? arguments[1] :
        null,
      apiRes, timerStart, time
    ;

    if (!syno.options.sid && params.api != 'SYNO.API.Auth') {
      syno.query('/webapi/auth.cgi', {
        api: 'SYNO.API.Auth',
        version: 2,
        method: 'login',
        account: syno.options.user,
        passwd: syno.options.password,
        session: 'NodeSynologyAPI' + Math.round(Math.random() * 1e9),
        format: 'sid'
      }, function(err, data) {
        if (err) return (callback || console.error)(err);

        syno.options.sid = data.data.sid;

        syno.query(path, method, params, callback);
      });
      return;
    }

    var
      // Request object
      apiReq = {
        path: path,
        method: method,
        params: params
      },

      // Ask the API for data
      _apiCall = function() {
        syno.emit('queryStart', apiReq);
        timerStart = process.hrtime();

        return request({
          url: 'http' + (syno.options.secure ? 's' : '') + '://' + syno.options.host + ':' + syno.options.port + '/' + path,
          qs: params,
          method: method,
          timeout: 30 * 1e3
        }, callback ? _apiCallback : null);
      },

      _apiCallback = function (err, res, data) {
        if (err) return (callback || console.error)(err);

        // Parse the JSON response
        try {
          data = JSON.parse(data);
        } catch(e) {
          return (callback || console.error)(e);
        }

        // Emit the queryEnd event
        time = process.hrtime(timerStart);
        syno.emit('queryEnd', apiReq, {
          code: res.statusCode,
          data: data,
          time: Math.round(time[0] * 1e3 + time[1] / 1e6) // Because returning a int is too mainstream
        });

        if (callback) return callback(undefined, data);
      }
    ;

    // Call the API
    return _apiCall();
  };

  return syno;
};
util.inherits(Synology, events.EventEmitter);

module.exports = Synology;
