'use strict';

var util = require('util');

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
    api    : 'SYNO.AudioStation.Info',
    version: 2,
    method : 'getInfo'
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/AudioStation/info.cgi',
    params: params
  }, callback || null);

  return query;
}

function folder() {
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
    api    : 'SYNO.AudioStation.Folder',
    version: 1,
    method : 'list',
    id     : ''
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/AudioStation/folder.cgi',
    params: params
  }, callback || null);

  return query;
}

function album() {
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
    api    : 'SYNO.AudioStation.Album',
    version: 1,
    method : 'list'
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/AudioStation/album.cgi',
    params: params
  }, callback || null);

  return query;
}

module.exports = function(syno) {
  return {
    album: album.bind(syno),
    info  : info.bind(syno),
    folder: folder.bind(syno)
  };
};
