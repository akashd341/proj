const express = require('express');


const router = express.Router();
const vehicleservice = require('../service/vehicle_service');


router.post('/savedetails',vehicleservice.save_vehicle);
router.get('/track/:vehicle_number',vehicleservice.trackvehicle);
router.get('/getallvehicles',vehicleservice.getallvehicles);
router.delete('/removedetails',vehicleservice.removevehicle);




module.exports = router