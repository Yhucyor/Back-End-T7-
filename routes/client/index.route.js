const Router = require('express').Router();

const homeRouter = require("./home.route");
const tourRouter = require("./tour.route");

Router.use('/', homeRouter);
Router.use('/tours', tourRouter);

module.exports = Router;
