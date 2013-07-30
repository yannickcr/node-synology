var util = require('util');

function info(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.Info',
    version: 1,
    method : 'getinfo'
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/info.cgi',
    qs: params
  }, callback || null);

  return query;
}

function application(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.Application',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/app.cgi',
    qs: params
  }, callback || null);

  return query;
}

function autoBlock(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.AutoBlock',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/autoblock.cgi',
    qs: params
  }, callback || null);

  return query;
}

function connection(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.Connection',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/connection.cgi',
    qs: params
  }, callback || null);

  return query;
}

function encryptShare(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.EncryptShare',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/encrypt_share.cgi',
    qs: params
  }, callback || null);

  return query;
}

function findMe(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.FindMe',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/findme.cgi',
    qs: params
  }, callback || null);

  return query;
}

function group(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.Group',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/group.cgi',
    qs: params
  }, callback || null);

  return query;
}

function logViewer(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.LogViewer',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/logviewer.cgi',
    qs: params
  }, callback || null);

  return query;
}

function network(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.Network',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/network.cgi',
    qs: params
  }, callback || null);

  return query;
}

function package(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.Package',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/package.cgi',
    qs: params
  }, callback || null);

  return query;
}

function pushNotification(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.PushNotification',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/notification.cgi',
    qs: params
  }, callback || null);

  return query;
}

function service(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.Service',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/service.cgi',
    qs: params
  }, callback || null);

  return query;
}

function share(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.Share',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/share.cgi',
    qs: params
  }, callback || null);

  return query;
}

function system(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.System',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/system.cgi',
    qs: params
  }, callback || null);

  return query;
}

function systemLoading(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.SystemLoading',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/system_loading.cgi',
    qs: params
  }, callback || null);

  return query;
}

function user(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.User',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/user.cgi',
    qs: params
  }, callback || null);

  return query;
}

function volume(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.Volume',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/volume.cgi',
    qs: params
  }, callback || null);

  return query;
}

function iSCSI(userParams, callback) {
  if (typeof params === 'function') {
    callback = userParams;
    userParams = {};
  }
  var params = {
    api    : 'SYNO.DSM.iSCSI',
    version: 1
  };
  util._extend(params, userParams);

  var query = this.query({
    path: '/webapi/dsm/iscsi.cgi',
    qs: params
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
    package         : package.bind(syno),
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
