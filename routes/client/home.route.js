const router = require('express').Router();

const homeController = require('../../controller/client/homeController');

router.get('/', homeController.home);

module.exports = router;
