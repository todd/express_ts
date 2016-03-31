/// <reference path="../typings/main.d.ts" />

import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import index from './routes/index';

declare global {
    interface Error {
        status?: number;
    }
}

const app = express();

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err: any, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err: any, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen('3000', () => { console.log('Listening on port 3000...') });
