const router = require('express').Router(); // Hộ trợ biến Router để thực hiện định tuyến 

const tourController = require('../../controller/client/tourController');

router.get('/', tourController.list)
router.get('/create', tourController.list)
router.get('/delete', tourController.list)
router.get('/edit', tourController.list)

module.exports = router;