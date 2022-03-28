const express = require('express');
const router = express.Router();

const user_service = require('../service/user_service');

router.post('/savedetails',user_service.savedetails);
router.get('/getdetails',user_service.getdetails);
module.exports = router;