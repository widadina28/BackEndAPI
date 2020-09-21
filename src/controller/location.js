const {
  getDataLocationByIDModel,
  createLocationModel,
  putLocationModel,
  deleteLocationModel,
  getDataLocationModel
} = require('../models/location')

module.exports = {
  getDataLocationByID: (req, res) => {
    const {
      id
    } = req.params
    getDataLocationByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data location id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data location ${id} not found`
        })
      }
    })
  },
  createLocation: (req, res) => {
    const {
      name_loc
    } = req.body
    if (name_loc) {
      createLocationModel([name_loc], result => {
        res.status(201).send({
          success: true,
          message: 'Location data has been created',
          data: req.body
        })
      })
    } else {
      res.status(500).send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  putLocation: (req, res) => {
    const id_loc = req.params.id
    const {
      name_loc
    } = req.body
    console.log(name_loc)
                    if (name_loc) {
      putLocationModel([name_loc], id_loc, result => {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Location with id ${id_loc} has been updated`
          })
        } else {
          res.send({
            success: false,
            message: 'Failed to update data!'
          })
        }
      })
    } else {
      res.send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  deleteLocation: (req, res) => {
    const { id } = req.params
    deleteLocationModel(id, result => {
      if (result == null) {
        res.send({
          message: 'Data not found!'
        })
      } else {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item experience id ${id} has been deleted`
          })
        }
      }
    })
  },
  getDataLocation: (req, res) => {
    let { page, limit } = req.query
    if (!limit) {
      limit = 10
    } else { limit = parseInt(limit) }

    if (!page) {
      page = 1
    } else { page = parseInt(page) }

    const offset = (page - 1) * limit
    getDataLocationModel(limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'List location',
          data: result
        })
      } else {
        res.send({
          success: true,
          message: 'There is no item on list'
        })
      }
    })
  }
}
