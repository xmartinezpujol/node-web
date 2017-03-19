var routes = require('express').Router();

routes.get('/chat', (req, res) => {
  res.render('chat', { 
    pageTitle: 'Chat',
    pageID: 'chat' }
  );});

module.exports = routes;
