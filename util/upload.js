const multer = require('multer')
const upload_mutter = require('./multerConfig');


const upload = multer({storage: upload_mutter.files.storage()})

module.exports = upload