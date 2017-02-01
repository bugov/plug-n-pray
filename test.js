const assert = require('assert');
var PlugNPray = require('./index.js');

{
  let app = (new PlugNPray).plug('./tests/000_addName.js');
  assert(app.name === 'Test', 'App does not have name');

  app = new PlugNPray;
  assert(app['name'] === undefined, 'Has name but should not');
}

{
  let app = (new PlugNPray).plug('./plug-n-pray/httpServer.js');
  app.start();
  app.stop();
}
