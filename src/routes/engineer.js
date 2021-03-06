const { Router } = require('express')
const {
  getDataEngineerByID,
  createEngineer,
  putEngineer,
  deleteEngineer,
  getDataEngineer, 
  getDataEngineerByIDacc
} = require('../controller/engineer')
const router = Router()
const { authorizationeng} = require('../middleware/auth')
const uploadImage = require('../middleware/multer')

router.get('/account/:id', getDataEngineerByIDacc)
router.get('/:id', getDataEngineerByID)
router.post('/', authorizationeng, uploadImage, createEngineer)
router.put('/:id',authorizationeng, uploadImage, putEngineer)
router.delete('/:id',authorizationeng, deleteEngineer)
router.get('/' ,getDataEngineer)

module.exports = router
