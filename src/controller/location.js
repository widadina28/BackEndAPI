const {
  getDataLocationByIDModel,
  createLocationModel,
  putLocationModel,
  deleteLocationModel,
  getDataLocationModel
} = require('../models/location')

module.exports = {
  getDataLocationByID: async (req, res) => {
    const {
      id
    } = req.params
    try {
      const result = await getDataLocationByIDModel(id)
      if (result.length) {
        res.send({
          success: true,
          message: `Data location id ${id}`,
          data: result[0]
        })
      }
    } catch (error) {
      console.log(error);
      res.send({
        success: false,
        message: `Data location ${id} not found`
      })
    }
  },
  createLocation: async (req, res) => {
    const body = req.body
    try {
      const result = await createLocationModel(body)
      res.status(201).send({
        success: true,
        message: 'Location data has been created',
        data: result
      })
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  putLocation: async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
      const result = await putLocationModel(body, id)
      if (result.affectedRows) {
        res.send({
          success: true,
          message: `Location with id ${id} has been updated`
        })
      } else {
        res.send({
          success: false,
          message: 'Failed to update data!'
        })
      }
    } catch (error) {
      res.send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  deleteLocation: async (req, res) => {
    const id = req.params.id
    try {
      const result = await deleteLocationModel(id)
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item location id ${id} has been deleted`
          })
      } else {
        res.send({
              message: 'Data not found!'
            })
      }
    } catch (error) {
      res.send({
        success: false,
        message: 'bad request!'
      })
    }
  },
  getDataLocation: async (req, res) => {
    let { page, limit } = req.query
    if (!limit) {
      limit = 10
    } else { limit = parseInt(limit) }

    if (!page) {
      page = 1
    } else { page = parseInt(page) }

    const offset = (page - 1) * limit
    try {
      const result = await getDataLocationModel(limit, offset)
      const count = result[0].count
      if (result.length) {
        res.send({
          success: true,
          message: 'List location',
          meta: {
            totalRows: count,
            totalPages: Math.ceil(count / limit),
            pageActive: page

          },
          data: result
        })
      }
    } catch (error) {
      res.send({
        success: true,
        message: 'There is no item on list'
      })
    }
  }
}
