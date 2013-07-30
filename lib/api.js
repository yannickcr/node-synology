var util = require('util');

function info(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.API.Info',
    version: 1,
    method : 'query',
    query  : 'ALL'
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/query.cgi',
    qs: params
  }, callback || null);

  return query;
}


module.exports = function(syno) {
  return {
    info: info.bind(syno)
  };
};
