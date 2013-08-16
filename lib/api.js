'use strict';

var util = require('util');

function auth() {
  /*jshint validthis:true */
  var
    userParams =
      typeof arguments[0] === 'object' ? arguments[0] :
      {},
    callback =
      typeof arguments[1] === 'function' ? arguments[1] :
      typeof arguments[0] === 'function' ? arguments[0] :
      null
  ;
  var params = {
    api    : 'SYNO.API.Auth',
    method : 'login',
    version: 2,
    account: 'admin',
    passwd : 'admin',
    session: 'NodeSynologyAPI' + Math.round(Math.random() * 1e9),
    format : 'sid'
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/auth.cgi',
    params: params
  }, callback || null);

  return query;
}

function info() {
  /*jshint validthis:true */
  var
    userParams =
      typeof arguments[0] === 'object' ? arguments[0] :
      {},
    callback =
      typeof arguments[1] === 'function' ? arguments[1] :
      typeof arguments[0] === 'function' ? arguments[0] :
      null
  ;
  var params = {
    api    : 'SYNO.API.Info',
    version: 1,
    method : 'query',
    query  : 'ALL'
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/query.cgi',
    params: params
  }, callback || null);

  return query;
}

module.exports = function(syno) {
  return {
    auth: auth.bind(syno),
    info: info.bind(syno)
  };
};
