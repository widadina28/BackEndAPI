const { Router } = require('express')
const {
  getDataHireByID,
  createHire,
  putHire,
  deleteHire,
  getDataHire
} = require('../controller/hire')
const router = Router()
const { authorizationcomp} = require('../middleware/auth')

router.get('/:id',authorizationcomp, getDataHireByID)
router.post('/',authorizationcomp, createHire)
router.put('/:id',authorizationcomp, putHire)
router.delete('/:id',authorizationcomp, deleteHire)
router.get('/',authorizationcomp, getDataHire)

module.exports = router
