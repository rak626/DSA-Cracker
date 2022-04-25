require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 4500;

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
