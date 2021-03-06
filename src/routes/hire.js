const { Router } = require('express')
const {
  getDataHireByID,
  createHire,
  putHire,
  deleteHire,
  getDataHire,
  getDataHireByIDHire, 
  patchHire,
  getHireProject
} = require('../controller/hire')
const router = Router()
const { authorizationcomp, authorizationeng} = require('../middleware/auth')

router.get('/idhire/:id', getDataHireByIDHire)
router.get('/:id', getDataHireByID)
router.post('/',authorizationcomp, createHire)
router.put('/:id', putHire)
router.delete('/:id',authorizationcomp, deleteHire)
router.get('/', getDataHire)
router.get('/project/:id', getHireProject)
router.patch('/:id', patchHire)

module.exports = router
