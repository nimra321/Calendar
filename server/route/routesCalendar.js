const express= require('express');
const { holidayController } = require('../controllers/controllers');


// router object
const router = express.Router()

// routes
router.post('/holidays', holidayController);
router.post('/', )


// exports

module.exports = router;