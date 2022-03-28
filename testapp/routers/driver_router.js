const express = require('express');


const router = express.Router();

const driver_service = require('../service/driver_service');


router.post('/savedetails',driver_service.savedetails);
router.get('/getdetails',driver_service.getdetails);
router.get('/getdetailbyid/:driver_id',driver_service.getdetailsbyid);







module.exports = router;