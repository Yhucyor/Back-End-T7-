const router = require('express').Router(); // Hộ trợ biến Router để thực hiện định tuyến 

const tourController = require('../../controller/client/tourController');

router.get('/', tourController.list)
router.get('/detail', tourController.detail)

module.exports = router;