import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from "dotenv";
import session from "express-session";

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

var app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));

// use session
app.use(session({
  secret: '2434ed03929f238943aff87380791a63d56f05b5f33e63068fe8029e874315989b6fc7afe2642a8770d0272f1192be8b354bce010fad8aac8df1204e80901c15',
  resave: true,
  saveUninitialized: true
}))

// use dotenv config
dotenv.config()

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
