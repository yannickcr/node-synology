var
  util     = require('util'),
  FormData = require('form-data'),
  request = require('request'),
  fs = require('fs'),
  path = require('path')
;

function list() {
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
    api           : 'SYNO.FileStation.List',
    method        : userParams.folder_path === '/' ? 'list_share' : 'list',
    node          : userParams.folder_path === '/' ? 'fm_root' : null,
    version       : 1,
    action        : 'list',
    filetype      : 'all',
    folder_path   : '/home',
    limit         : 1000,
    offset        : 0,
    sort_by       : 'name',
    sort_direction: 'ASC'
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/FileStation/file_share.cgi',
    params: params
  }, callback || null);

  return query;
}

function upload() {
  var
    userParams =
      typeof arguments[0] === 'object' ? arguments[0] :
      {},
    callback =
      typeof arguments[1] === 'function' ? arguments[1] :
      typeof arguments[0] === 'function' ? arguments[0] :
      null,
    form = new FormData(),
    syno = this,
    data = [],
    dataLength = 0,
    query
  ;
  var params = {
    api             : 'SYNO.FileStation.Upload',
    method          : 'upload',
    version         : '1',
    overwrite       : 'false',
    create_parents  : 'true',
    dest_folder_path: '/home'
  };

  util._extend(params, userParams);

  for (var label in params) {
    form.append(label, params[label]);
  }

  form.on('data', function(chunk) {
    chunk = new Buffer(chunk);
    dataLength += chunk.length;
    data.push(chunk);
  });

  form.on('end', function() {
    query = syno.query({
      path: '/webapi/FileStation/api_upload.cgi',
      method: 'POST',
      qs: params,
      headers: {
        "Content-Type": "multipart/form-data; boundary=" + form.getBoundary(),
        "Cookie": "id=" + syno.options.sid
      },
      body: Buffer.concat(data, dataLength + 2) // Magic number !
    }, callback || null);
  });

  form.submit('http' + (syno.options.secure ? 's' : '') + '://' + syno.options.host + ':' + syno.options.port + '/webapi/FileStation/api_upload.cgi');

  return query;
}

function share() {
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
    path   : null,
    api    : 'SYNO.FileStation.Sharing',
    method : 'create',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/FileStation/file_sharing.cgi',
    params: params
  }, callback || null);

  return query;
}

function unshare() {
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
    id     : null,
    api    : 'SYNO.FileStation.Sharing',
    method : 'delete',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/FileStation/file_sharing.cgi',
    params: params,
    method: 'POST'
  }, callback || null);

  return query;
}

module.exports = function(syno) {
  return {
    list   : list.bind(syno),
    upload : upload.bind(syno),
    share  : share.bind(syno),
    unshare: unshare.bind(syno)
  };
};
