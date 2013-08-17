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
    api    : 'SYNO.DSM.Info',
    version: 1,
    method : 'getinfo'
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/info.cgi',
    params: params
  }, callback || null);

  return query;
}

function application() {
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
    api    : 'SYNO.DSM.Application',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/app.cgi',
    params: params
  }, callback || null);

  return query;
}

function autoBlock() {
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
    api    : 'SYNO.DSM.AutoBlock',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/autoblock.cgi',
    params: params
  }, callback || null);

  return query;
}

function connection() {
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
    api    : 'SYNO.DSM.Connection',
    version: 1,
    method : 'list'
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/connection.cgi',
    params: params
  }, callback || null);

  return query;
}

function encryptShare() {
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
    api    : 'SYNO.DSM.EncryptShare',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/encrypt_share.cgi',
    params: params
  }, callback || null);

  return query;
}

function findMe() {
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
    api    : 'SYNO.DSM.FindMe',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/findme.cgi',
    params: params
  }, callback || null);

  return query;
}

function group() {
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
    api    : 'SYNO.DSM.Group',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/group.cgi',
    params: params
  }, callback || null);

  return query;
}

function logViewer() {
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
    //api    : 'SYNO.DSM.LogViewer',
    //version: 1,
    start    : 0,
    limit    : 1000,
    sort     : 'time',
    dir      : 'DESC',
    logtype  : 'syslog',
    datefrom : 0,
    dateto   : 0,
    keyword  : '',
    loglevel : ''
  };
  util._extend(params, userParams);

  var query = this.query({
    //path: '/webapi/dsm/logviewer.cgi',
    path: '/webman/modules/LogViewer/LogViewer.cgi',
    params: params
  }, callback || null);

  return query;
}

function network() {
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
    api    : 'SYNO.DSM.Network',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/network.cgi',
    params: params
  }, callback || null);

  return query;
}

function pkg() {
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
    api    : 'SYNO.DSM.Package',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/package.cgi',
    params: params
  }, callback || null);

  return query;
}
/*
api:SYNO.DSM.Package
service:phpMyAdmin
method:setpackage
version:1
disabled:phpMyAdmin
waitingTime:3000*/

function pushNotification() {
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
    api    : 'SYNO.DSM.PushNotification',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/notification.cgi',
    params: params
  }, callback || null);

  return query;
}

function service() {
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
    api    : 'SYNO.DSM.Service',
    method : 'list',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/service.cgi',
    params: params
  }, callback || null);

  return query;
}

function share() {
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
    api    : 'SYNO.DSM.Share',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/share.cgi',
    params: params
  }, callback || null);

  return query;
}

function system() {
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
    api    : 'SYNO.DSM.System',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/system.cgi',
    params: params
  }, callback || null);

  return query;
}

function systemLoading() {
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
    api    : 'SYNO.DSM.SystemLoading',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/system_loading.cgi',
    params: params
  }, callback || null);

  return query;
}

function user() {
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
    api    : 'SYNO.DSM.User',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/user.cgi',
    params: params
  }, callback || null);

  return query;
}

function volume() {
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
    api    : 'SYNO.DSM.Volume',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/volume.cgi',
    params: params
  }, callback || null);

  return query;
}

function iSCSI() {
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
    api    : 'SYNO.DSM.iSCSI',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/iscsi.cgi',
    params: params
  }, callback || null);

  return query;
}

module.exports = function(syno) {
  return {
    info            : info.bind(syno),
    application     : application.bind(syno),
    autoBlock       : autoBlock.bind(syno),
    connection      : connection.bind(syno),
    encryptShare    : encryptShare.bind(syno),
    findMe          : findMe.bind(syno),
    group           : group.bind(syno),
    logViewer       : logViewer.bind(syno),
    network         : network.bind(syno),
    package         : pkg.bind(syno),
    pushNotification: pushNotification.bind(syno),
    service         : service.bind(syno),
    share           : share.bind(syno),
    system          : system.bind(syno),
    systemLoading   : systemLoading.bind(syno),
    user            : user.bind(syno),
    volume          : volume.bind(syno),
    iSCSI           : iSCSI.bind(syno)
  };
};
