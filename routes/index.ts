/// <reference path="../typings/main.d.ts" />

import {Router} from 'express';

const index = Router();

/* GET home page. */
index.get('/', function(req, res, next) {
  res.send('foobar');
});

export default index;
