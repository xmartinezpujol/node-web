var routes = require('express').Router();

routes.get('/chat', function(req, res) {

  res.render('chat', {
    pageTitle: 'Chat',
    pageID: 'chat'
  });

});

module.exports = routes;
