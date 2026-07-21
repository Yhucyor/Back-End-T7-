const router = require('express').Router(); // Hộ trợ biến Router để thực hiện định tuyến 

const tourController = require('../../controller/client/tourController');

router.get('/tours', tourController.list)
router.get('/tours/create', tourController.list)
router.get('/tours/delete', tourController.list)
router.get('/tours/edit', tourController.list)

module.exports = router;