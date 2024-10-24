const express = require('express');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const path = require('path');
const home = require('./routes/home');
const store = require('./routes/store');
const about = require('./routes/about');
const login = require('./routes/login');
const signup = require('./routes/register');
const { register } = require('module');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(
  session({
    secret: '123',
    resave: false,
    saveUninitialized: true,
    cookie: { secured: false },
  })
);

app.use('/', home);
app.use('/store', store);
app.use('/about', about);
app.use('/login', login);
app.use('/signup', signup);

app.listen(8000, () => {
  console.log('Listening at PORT 8000');
});
