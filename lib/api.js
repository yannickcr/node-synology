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
  return this.query('/webapi/query.cgi', params, callback || null);
}


module.exports = function(syno) {
  return {
    info: info.bind(syno)
  };
};
