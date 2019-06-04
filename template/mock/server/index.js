const Koa = require('koa');
const Oxz = require('oxz');
const oxzConfig = require('../oxz.config');

const app = new Koa();

Oxz.install(app, oxzConfig);
app.listen(oxzConfig.port);
