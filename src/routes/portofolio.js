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

router.get('/:id',authorizationeng, getDataPortofolioByID)
router.post('/',authorizationeng, uploadImage, createPortofolio)
router.put('/:id',authorizationeng, putPortofolio)
router.delete('/:id',authorizationeng, deletePortofolio)
router.get('/',authorizationeng, getDataPortofolio)

module.exports = router
