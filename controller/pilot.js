const SelfDeclaration = require('../model/selfDeclarations');
const UnapprovedPilot = require('../model/unapprovedPilot');
const randomUniqueCode = require('../util/generateRandomId');




const registerPilot = async (req, res) => {

    let {
        name,
        email,
        dob,
        mobile,
        gender,
        pan,
        aadhar,
        dgca,
        airline,
        base,
        position,
        aircraft,
        licenceType,
        licenseNumber,
        memberType,
        noofmonth,
        password,
        confirmPassword,
        address,
        is_gmc,
        acceptTC
    } = req.body;

    is_gmc = is_gmc == "Yes" ? 1 : 0;
  
    const memberId = await randomUniqueCode();
    let addedBy = "self";
    let photo;
    let medicalAssessment;
    let healthRecord;

    if(memberType == "ALPA Member") {
         photo = req.files.photo[0].filename;
    } 
    else if (memberType == "ALPA Member + Benevolent Fund Member") {

        healthRecord = {
            require_hospitalization: req.body.require_hospitalization,
            previous_illness: req.body.previous_illness,
            mental_illness: req.body.mental_illness,
            sleep_disorder: req.body.sleep_disorder,
            Impairment: req.body.Impairment,
            suicide_attempt: req.body.suicide_attempt,
            head_injury: req.body.head_injury,
            migraine: req.body.migraine,
            dizziness: req.body.dizziness,
            unconsciousness: req.body.unconsciousness,
            back_pain: req.body.back_pain,
            vascular_trouble: req.body.vascular_trouble,
            anaemia: req.body.anaemia,
            bp: req.body.bp,
            chest_pain: req.body.chest_pain,
            pneumonia: req.body.pneumonia,
            intestinal_trouble: req.body.intestinal_trouble,
            indigestion: req.body.indigestion,
            jaundice: req.body.jaundice,
            kidney_trouble: req.body.kidney_trouble,
            urine_trouble: req.body.urine_trouble,
            ear_trouble: req.body.ear_trouble,
            vision_trouble: req.body.vision_trouble,
            wearing_anything: req.body.wearing_anything,
            night_blindness: req.body.night_blindness,
            leprosy: req.body.leprosy,
            malaria: req.body.malaria,
            cancer: req.body.cancer,
            fever: req.body.fever,
            diabetes: req.body.diabetes,
            hormone_disorder: req.body.hormone_disorder,
            std: req.body.std,
            hiv: req.body.hiv,
            skin_condition: req.body.skin_condition,
            drug_allergy: req.body.drug_allergy,
            alcohol: req.body.alcohol,
            dental_problems: req.body.dental_problems,
            failed_examination: req.body.failed_examination,
            drug_medicines: req.body.drug_medicines,
            past_history: req.body.past_history
        };  

        photo = req.files.photo[0].filename
        medicalAssessment =req.files.medicalAssessment[0].filename
    }

    if(!acceptTC) {
        res.json({status: "failed", message: "kindly accept terms and conditions"})
    }

    // Database operation
    try {

        const newPilot = await UnapprovedPilot.create({
            ...req.body,  "addedBy": addedBy, "memberId" : memberId, "photo": photo
        }) 

        if(memberType == "ALPA Member + Benevolent Fund Member") {
            const newSelfDeclaration  = await SelfDeclaration.create({
                ...healthRecord, memberId : newPilot.memberId, "medicalAssessment" : medicalAssessment
            })   
        }

        res.json({"status" : "success" , "message": "pilot registered successfully"})
    
    } catch(err) {
        console.log(err);
        res.json({"status" : "error" , "message": "Database Error. Please try again!"})
    }
}


module.exports = {
    registerPilot
}