# Synology

A simple wrapper for the Synology NAS API.

# Installation

    $ npm install synology

# Usage

```javascript
var Synology = require('synology');

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
	if (err) return console.error(err);
	console.log(data);
});
```

# TODO
 * Documentation
 * Tests
 * Helpers

# License

Node Chrome Logger is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
