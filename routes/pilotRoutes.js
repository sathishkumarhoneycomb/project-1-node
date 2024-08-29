const express = require('express');

const router = express.Router();


router.post('/pilot/register', async (req, res) => {

    // const { name, email, PilotLicenseType, mobile_no, gender, address, pan, aadhar, dgca, NameofAirline, airline_others, base, position, aircraft, aircraft_others, member_type, dob, license_no, password, agree, is_nag, is_gmc } = req.body;

    // Convert checkbox values to boolean
    // const isNag = is_nag === 'on' ? 1 : 0;
    // const isGmc = is_gmc === 'on' ? 1 : 0;
    // const isAccepted = agree === 'on' ? 1 : 0;

    console.log(req.body);

    res.json({"status" : "success" , "message": "pilot registered successfully"})

    



  
})

module.exports = router;
