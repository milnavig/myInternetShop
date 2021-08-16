require('dotenv').config();
const express = require('express');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const fileupload = require('express-fileupload');
const path = require('path');
const cookieParser = require('cookie-parser');

const sequelize = require('./db');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));
app.use(express.json());
// need cookieParser middleware before we can do anything with cookies
app.use(cookieParser());

/*
// set a cookie
app.use(function (req, res, next) {
  // check if client sent cookie
  let cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    // no: set a new cookie
    let randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie('cookieName', randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  next();
});
*/

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileupload({})); // image download
app.use('/api', router);
// middleware для обработки ошибок должен идти последним!!!
app.use(errorHandler); // middleware for error handling

app.get('/', function(req, res) {
    res.status(200).json({
        message: "Fine!"
    })
    // res.send('qwerty') sets the content type to text/Html
});

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync(); // создает таблицы при отсутствии
        app.listen(PORT, () => console.log('Hello!'));
    } catch(err) {
        console.log(err);
    }
}

start();

// websocket for chat

const ws = require('ws');

const wss = new ws.Server({
  port: 5001,
}, () => console.log('WebSocket server was launched'));

wss.on('connection', function connection(ws) {
  ws.id = Date.now();
  console.log('New connection appeared');
  ws.on('message', (message) => {
    message = JSON.parse(message);
    /*
    switch(message.event) {
      case 'message':
        //ws.send(JSON.stringify(message));
        broadcastMessage(message, null);
        break;
      case 'connection':
        break;
    }
    */
    broadcastMessage(message, ws.id);
    console.log(message);
  })
});

function broadcastMessage(message, id) {
  wss.clients.forEach(client => {
    if (id !== client.id) {
      client.send(JSON.stringify(message))
    }
  })
}