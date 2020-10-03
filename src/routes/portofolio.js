const { Router } = require('express')
const {
  getDataPortofolioByID,
  createPortofolio,
  putPortofolio,
  deletePortofolio,
  getDataPortofolio
} = require('../controller/portofolio')
const router = Router()
const { authorizationeng} = require('../middleware/auth')
const uploadImage = require('../middleware/multer')

router.get('/:id', getDataPortofolioByID)
router.post('/',authorizationeng, uploadImage, createPortofolio)
router.put('/:id',authorizationeng, uploadImage, putPortofolio)
router.delete('/:id',authorizationeng, deletePortofolio)
router.get('/', getDataPortofolio)

module.exports = router
