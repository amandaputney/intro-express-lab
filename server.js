//load express
const express = require('express');
const path = require('path');

//require native plant database
const canativeplantsDb = require('./data/canativeplants-db');

//create express app
const app = express();

//configure the app using a method that lives on the app object called set
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//mount middleware (app.use)

//define root route on app
// app.get('/', function (req, res) {
//     res.send('<h1>Express Lab</h1>');
// });

//redirect path must start with slash
app.get('/', function (req, res) {
    res.redirect('/nativeplants');
});

// app.get('/home', function (req, res) {
//     res.send('<h4>Home Page</h4>');
// });

//never use a leading slash with render
app.get('/home', function (req, res) {
    res.render('home');
});

app.get('/nativeplants', function (req, res) {
    const nativeplants = canativeplantsDb.getAll();
    res.render('nativeplants/index', { nativeplants });
});

app.listen(3001, function () {
    console.log('Listening on port 3001');
});