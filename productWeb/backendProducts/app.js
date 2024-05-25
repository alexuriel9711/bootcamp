var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');

var app = express();

/*
 * Vars for definition API
 */
var baseApiPath = "/api/";
var apiVersion = "v1";
var productsPath = "/products";

/*
 * global configs for project
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use(baseApiPath + apiVersion + productsPath, productsRouter);

module.exports = app;
