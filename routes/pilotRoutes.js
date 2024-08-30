const express = require('express');

const router = express.Router();

const upload = require('../util/upload');



const {registerPilot} = require('../controller/pilot');



router.post('/pilot/register', upload.fields([
    {
        name: "photo",
        maxCount : 1
    }, 
    {
        name: "medicalAssessment",
        maxCount : 1
    }
])  ,  registerPilot)



module.exports = router;
