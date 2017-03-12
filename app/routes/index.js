var routes = require('express').Router();

routes.get('/', function(req, res) {
  var data = req.app.get('appData');

  res.render('index', {
    pageTitle: 'Xavier Martínez Pujol',
    pageID: 'home',
    sections: data
  });

});

module.exports = routes;
