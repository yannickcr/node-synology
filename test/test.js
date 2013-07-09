var Synology = require('..');

var syno = new Synology({
	host    : 'localhost',
	user    : 'mylogin',
	password: 'mypassword'
});

syno.query('/webapi/query.cgi', {
	api    : 'SYNO.API.Info',
	version: 1,
	method : 'query',
	query  : 'ALL'
}, function(err, data) {
	console.log(arguments);
});

syno.query('/webapi/DownloadStation/info.cgi', {
	api    : 'SYNO.DownloadStation.Info',
	version: 1,
	method : 'getinfo'
}, function(err, data) {
	console.log(arguments);
});
