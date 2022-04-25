require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');
const MongoDbStore = require('connect-mongo');
const PORT = process.env.PORT || 4500;

//DB connection

const url = process.env.MONGO_CONNECTION_URL;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// mongoose connection

const connection = mongoose.connection;
connection
    .on('error', (err) => {
        console.log('Database connection error');
    })
    .on('close', () => {
        console.log('Database connection closed.');
    })
    .once('open', () => {
        console.log('Database Connected');
    });

// express session

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoDbStore.create({
            mongoUrl: process.env.MONGO_CONNECTION_URL,
            autoRemove: 'native',
        }),
        cookie: { maxAge: 1000 * 60 * 24 * 60 },
    })
);

//different data for express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Assets
app.use(express.static(path.join(__dirname, '/public')));

//set Template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

//routes
require('./routes/web')(app);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
