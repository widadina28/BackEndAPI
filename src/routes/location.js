const { Router } = require('express')
const {
  getDataLocationByID,
  createLocation,
  putLocation,
  deleteLocation,
  getDataLocation
} = require('../controller/location')
const router = Router()

router.get('/:id', getDataLocationByID)
router.post('/', createLocation)
router.put('/:id', putLocation)
router.delete('/:id', deleteLocation)
router.get('/', getDataLocation)

module.exports = router
