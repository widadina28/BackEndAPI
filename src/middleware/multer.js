const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  console.log('File Filter:' + file );
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    return cb(new Error('Extension file must be JPG or PNG'), false)
  }
}

const limits = {
  fileSize: 1024 * 1024 * 1
}

let upload = multer({
  storage,
  fileFilter,
  limits
}).single('image')

const uploadFilter = (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          //A Multer error accured when uploading
          res.status(400).send({
            success: false,
            message: err.message
          })
        } else if (err) {
          // An unknown error accured when uploading
          res.status(400).send({
            success: false,
            message: err.message
          })
        }
        next()
      })
    }

    module.exports = uploadFilter