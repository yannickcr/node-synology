# Node Synology

[![NPM version](https://badge.fury.io/js/synology.png)](https://npmjs.org/package/synology) [![Dependency Status](https://gemnasium.com/yannickcr/node-synology.png)](https://gemnasium.com/yannickcr/node-synology)

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

syno.fileStation.upload({
  file: fs.createReadStream(path.join(__dirname, 'foo.txt')),
  dest_folder_path: '/home'
}, function(err, data) {
  if (err) throw err;
  console.log(data);
});
```

API documentation can be found on the [Wiki](https://github.com/yannickcr/node-synology/wiki)

It's a pretty big (non-documented) API and I need to reverse every methods and guess the parameters, document it then do a usable wrapper.
Not very difficult for the majority of the methods but really time consuming. Help is welcome ;)

For now you can still use directly the Synology.query method to do a raw query but it is not very user friendly.

# TODO
 * Documentation (In progress)
 * Helpers (In progress)
 * Tests

# License

Node Synology is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
