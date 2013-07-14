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
  return this.query('/webapi/dsm/info.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/app.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/autoblock.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/connection.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/encrypt_share.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/findme.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/group.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/logviewer.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/network.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/package.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/notification.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/service.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/share.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/system.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/system_loading.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/user.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/volume.cgi', userParams, callback || null);
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
  return this.query('/webapi/dsm/iscsi.cgi', userParams, callback || null);
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
