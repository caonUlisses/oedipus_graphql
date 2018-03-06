'use strict';

require('dotenv/config');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _master = require('./config/master');

var _master2 = _interopRequireDefault(_master);

var _client_schema = require('./graphql/schemas/client_schema');

var _client_schema2 = _interopRequireDefault(_client_schema);

var _user_schema = require('./graphql/schemas/user_schema');

var _user_schema2 = _interopRequireDefault(_user_schema);

require('./db/mongose');

var _sphynx = require('./midlleware/sphynx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = _master2.default.server.port;
var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_sphynx.checkUser);
app.use(_sphynx.checkClient);

app.use('/clients/graphiql', (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: '/clients/graphql' }));
app.use('/clients/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({ schema: _client_schema2.default }));
app.use('/users/graphiql', (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: '/users/graphql' }));
app.use('/users/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)(function (req) {
  return { schema: _user_schema2.default, context: { user: req.user } };
}));

app.listen(port, function () {
  console.log(_chalk2.default.green('Live at port ' + _chalk2.default.yellow(port)));
});