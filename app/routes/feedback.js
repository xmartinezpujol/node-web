var routes = require('express').Router();

routes.get('/feedback', (req, res) => {

  res.render('feedback', {
    pageTitle: 'Feedback',
    pageID: 'feedback'
  });

});

module.exports = routes;
