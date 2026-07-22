const router = require('express').Router(); // Hộ trợ biến Router để thực hiện định tuyến 

const cartController = require('../../controller/client/cart.controller');

router.get('/', cartController.cart)

module.exports = router;