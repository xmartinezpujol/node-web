var routes = require('express').Router();

routes.get('/', (req, res) => {
  var data = req.app.get('appData');

  res.render('index', {
    pageTitle: 'Xavier Martínez Pujol',
    pageID: 'home',
    sections: data
  });

});

module.exports = routes;
