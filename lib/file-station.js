var util = require('util');

function list() {
  var
    params =
      typeof arguments[0] === 'object' ? arguments[0] :
      {},
    callback =
      typeof arguments[1] === 'function' ? arguments[1] :
      typeof arguments[0] === 'function' ? arguments[0] :
      null
  ;
  util._extend(params,{
    api    : 'SYNO.FileStation.List',
    version: 1
  });
  return this.query('/webapi/FileStation/file_share.cgi', params, callback || null);
}

module.exports = function(syno) {
  return {
    list: list.bind(syno)
  };
};
