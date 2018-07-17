'use strict';

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

  syno.errors = {
    100: 'Unknown error',
    101: 'Invalid parameter',
    102: 'The requested API does not exist',
    103: 'The requested method does not exist',
    104: 'The requested version does not support the functionality',
    105: 'The logged in session does not have permission',
    106: 'Session timeout',
    107: 'Session interrupted by duplicate login'
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
  syno.query = function(userOptions, callback) {
    var
      options = {
        path   : '/',
        method : 'GET',
        params : {},
        headers: null
      },
      timerStart, time
    ;
    util._extend(options, userOptions);

    if (!syno.options.sid && options.params.api !== 'SYNO.API.Auth') {
      syno.api.auth({
        account: syno.options.user,
        passwd: syno.options.password
      }, function(err, data) {
        if (err) {
          syno.emit('error', err);
          return callback && callback(err, data);
        }

        syno.options.sid = data.data.sid;

        syno.query(options, callback);
      });
      return;
    } else {
      options.params._sid = syno.options.sid;
    }

    var
      // Ask the API for data
      _apiCall = function() {
        syno.emit('request', options);

        timerStart = process.hrtime();

        return request({
          url    : 'http' + (syno.options.secure ? 's' : '') + '://' + syno.options.host + ':' + syno.options.port + '/' + options.path,
          qs     : options.params,
          body   : options.body,
          method : options.method,
          headers: options.headers,
          timeout: 30 * 1e3,
          encoding: null,
        }, callback ? _apiCallback : null);
      },

      _apiCallback = function (err, res, data) {
        if (err) {
          syno.emit('error', err);
          return callback && callback(err, data);
        }
        
        // Try to parse the JSON response
        try {
          data = JSON.parse(data);
        } catch(e) {
        }

        if (!data.success && data.error) {
          var error = new Error(syno.errors[data.error.code] || syno.errors[100]);
          syno.emit('error', error);
          return callback && callback(error, data);
        }

        time = process.hrtime(timerStart);
        syno.emit('complete', options, {
          code: res.statusCode,
          data: data,
          time: Math.round(time[0] * 1e3 + time[1] / 1e6) // Because returning a int is too mainstream
        });

        return callback && callback(null, data);
      }
    ;

    // Call the API
    return _apiCall();
  };

  syno.api                 = require(__dirname + '/api')(syno);
  syno.audioStation        = require(__dirname + '/audio-station')(syno);
  syno.downloadStation     = require(__dirname + '/download-station')(syno);
  syno.dsm                 = require(__dirname + '/dsm')(syno);
  syno.dtv                 = require(__dirname + '/dtv')(syno);
  syno.fileStation         = require(__dirname + '/file-station')(syno);
  syno.folderSharing       = require(__dirname + '/folder-sharing');
  syno.surveillanceStation = require(__dirname + '/surveillance-station')(syno);
  syno.videoController     = require(__dirname + '/video-controller')(syno);
  syno.videoStation        = require(__dirname + '/video-station')(syno);

  return syno;
};
util.inherits(Synology, events.EventEmitter);

module.exports = Synology;
