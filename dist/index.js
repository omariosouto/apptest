'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'production');

app.get('/', function (req, res) {
  res.json({ name: "Babel ES6 Node <3" });
});

app.listen(app.get('port'), function (err) {
  if (err) {
    return console.error(err);
  }
  console.info('Server running on http://localhost:' + app.get('port'));
});