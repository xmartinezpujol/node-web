var express = require('express');
/*var reload = require('reload');*/
var sassMiddleware = require('node-sass-middleware');
var app = express();
var dataFile = require('./data/data_en.json');
/*var io = require('socket.io')();*/
var path = require('path');

app.use(sassMiddleware({
src: path.join(__dirname, 'sass'),
dest: path.join(__dirname, 'public'),
/*debug: true*/
}));

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'CV';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
/*app.use(require('./routes/chat'));*/

var server = app.listen(app.get('port'), () => console.log('Escuchando a puerto ' + app.get('port')));

/*io.attach(server);
io.on('connection', socket => socket.on('postMessage', data => io.emit('updateMessages', data)));*/

/*reload(server, app);*/
