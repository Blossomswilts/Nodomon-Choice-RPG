const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: { origin: '*' },
    transports: ['websocket', 'polling'],
});

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const WebPORT = process.env.PORT || 8081;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 60 * 60 * 1000, //increase time copy from mini project
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

const sessionParser = session(sess);

app.use(sessionParser);

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
io.engine.use(sessionParser);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

io.use(wrap(sessionParser));

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        io.emit('broadcast', `Player said ${message} ${socket.request.session}`);
    });
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
    http.listen(WebPORT, () => console.log('WebSocket listening'));
});
