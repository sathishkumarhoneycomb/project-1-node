const  multer = require('multer');
module.exports.files={
    storage:function(){
        
        var storage = multer.diskStorage({
        destination:  (req, file, cb) => {
            
            if(file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg") {
                cb(null, 'uploads/images/pilot-profiles')
            } else if(file.mimetype == "application/pdf") {
                cb(null, 'uploads/images/pilot-medical-assessment')
            }
        },
        filename:  (req, file, cb) => {
            cb(null, new Date().toISOString().replace(/:/g, '-') + "-" +file.originalname)
        }
      })

      return storage;
},
 fileFilter : (req, file, cb) =>{
    if(file.mimetype  === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'application/pdf') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
}