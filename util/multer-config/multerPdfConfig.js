const  multer = require('multer');

module.exports.files={
    storage:function(){
        var storage = multer.diskStorage({
        destination:  (req, file, cb) => {
          cb(null, 'uploads/pdf/pilot-medical-assessment')
        },
        filename:  (req, file, cb) => {
            cb(null, new Date().toISOString() + "-" +file.originalname)
        }
      })
      
      return storage;
},
 fileFilter : (req, file, cb) =>{
    if(file.mimetype === 'application/pdf') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
}

