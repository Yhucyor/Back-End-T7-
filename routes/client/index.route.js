const Router = require('express').Router();

const homeRouter = require("./home.route");
const tourRouter = require("./tour.route");
const cartRouter = require("./cart.route");
Router.use('/', homeRouter);
Router.use('/tours', tourRouter);
Router.use('/cart', cartRouter);

module.exports = Router;
