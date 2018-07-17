'use strict';

var util = require('util');


function Camera(syno) {
  this.syno = syno;
  return this;
}

Camera.prototype.getSnapshot = function() {
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
    api    : 'SYNO.SurveillanceStation.Camera',
    version: 9,
    method : 'GetSnapshot'
  };
  util._extend(params, userParams);

  var query = this.syno.query({
    path: '/webapi/entry.cgi',
    params: params,
    headers: {
      'Accept': 'image/jpeg',
    }
  }, callback || null);

  return query;
}

module.exports = function(syno) {
  return {
    camera: new Camera(syno),
  };
};
