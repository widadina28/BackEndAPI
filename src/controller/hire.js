const {
  getDataHireModel,
  createHireModel,
  putHireModel,
  deleteHireModel,
  getDataHireByIDModel,
  getDataHireByIDHireModel,
  patchHireModel
} = require('../models/hire')

module.exports = {
  getDataHireByID: async (req, res) => {
    const {
      id
    } = req.params
    try {
      const result = await getDataHireByIDModel(id)
      if (result.length) {
        res.send({
          success: true,
          message: `Data hire id ${id}`,
          data: result
        })
      }
    } catch (error) {
      res.send({
        success: false,
        message: `Data hire ${id} not found`
      })

    }
  },
  getDataHireByIDHire: async (req, res) => {
    const {
      id
    } = req.params
    try {
      const result = await getDataHireByIDHireModel(id)
      if (result.length) {
        res.send({
          success: true,
          message: `Data hire id ${id}`,
          data: result
        })
      }
    } catch (error) {
      res.send({
        success: false,
        message: `Data hire ${id} not found`
      })

    }
  },
  createHire: async (req, res) => {
    const body = req.body
    try {
      const result = await createHireModel(body)
      res.status(201).send({
        success: true,
        message: 'Hire data has been created',
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
  putHire: async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
      const result = await putHireModel(body, id)
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
  patchHire: async (req, res) => {
    const id = req.params.id
    const data = {status}
    try {
      const result = await patchHireModel(data, id)
      if (result.affectedRows) {
        res.send({
          success: true,
          message: `Project Status with id ${id} has been updated`
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
  deleteHire:  async (req, res) => {
    const id = req.params.id
    try {
      const result = await deleteHireModel(id)
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item hire id ${id} has been deleted`
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
  getDataHire: async (req, res) => {
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
      const result = await getDataHireModel(limit, offset)
      const count = result[0].count
      if (result.length) {
        res.send({
          success: true,
          message: 'List hire',
          // meta: {
          //   totalRows: count,
          //   totalPages: Math.ceil(count / limit),
          //   pageActive: page

          // },
          data: result
        })
      }
    } catch (error) {
      console.log(error);
      res.send({
        success: true,
        message: 'There is no item on list'
      })
    }
  }
}
