var http = require('http');

module.exports = (app) => {
  app.onRequestHandler = (req, res) => {};
  let server = http.createServer(app.onRequestHandler);
  
  app.start = (port=8888) => {
    server.listen(port);
    console.log(`Server has started on : ${port}`);
  };
  
  app.stop = () => server.close(() => console.log(`Server has stoped`));
};

