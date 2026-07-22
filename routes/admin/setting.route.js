const router = require('express').Router();
const settingController = require('../../controller/admin/setting.controller.js')

router.get('/list', settingController.list)

module.exports = router;