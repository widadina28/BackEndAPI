const {
  getDataExpertiseModel,
  createExpertiseModel,
  putExpertiseModel,
  deleteExpertiseModel,
  getDataExpertiseByIDModel
} = require('../models/expertise')

module.exports = {
  getDataExpertiseByID: async (req, res) => {
    const {
      id
    } = req.params
    try {
      const result = await getDataExpertiseByIDModel(id)
      if (result.length) {
        res.send({
          success: true,
          message: `Data expertise id ${id}`,
          data: result[0]
        })
      }
    } catch (error) {
      res.send({
        success: false,
        message: `Data expertise ${id} not found`
      })

    }
  },
  createExpertise: async (req, res) => {
    const body = req.body
    try {
      const result = await createExpertiseModel(body)
      res.status(201).send({
        success: true,
        message: 'Expertise data has been created',
        data: result
      })
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  putExpertise: async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
      const result = await putExpertiseModel(body, id)
      if (result.affectedRows) {
        res.send({
          success: true,
          message: `Project with id ${id} has been updated`
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
  deleteExpertise: async (req, res) => {
    const id = req.params.id
    try {
      const result = await deleteExpertiseModel(id)
      if (result.affectedRows) {
        res.send({
          success: true,
          message: `Item expertise id ${id} has been deleted`
        })
      } else {
        res.send({
          message: 'Data not found!'
        })
      }
    } catch (error) {
      console.log(error.message);
      res.send({
        success: false,
        message: 'bad request!'
      })
    }
  },
  getDataExpertise: async (req, res) => {
    let {
      page,
      limit
    } = req.query
    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const offset = (page - 1) * limit
    try {
      const result = await getDataExpertiseModel(limit, offset)
      const count = result[0].count
      if (result.length) {
        res.send({
          success: true,
          message: 'List expertise',
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