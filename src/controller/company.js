const {
  getDataCompanyByIDModel,
  createCompanyModel,
  putCompanyModel,
  deleteCompanyModel,
  getDataCompanyModel
} = require('../models/company')

module.exports = {
  getDataCompanyByID: async (req, res) => {
    const {
      id
    } = req.params
    try {
      const result = await getDataCompanyByIDModel(id)
      if (result.length) {
        res.send({
          success: true,
          message: `Data company id ${id}`,
          data: result[0]
        })
      }
    } catch (error) {
      res.send({
        success: false,
        message: `Data company ${id} not found`
      })

    }
  },
  createCompany: async (req, res) => {
    const body = req.body
    try {
      const result = await createCompanyModel(body)
      res.status(201).send({
        success: true,
        message: 'Company data has been created',
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
  putCompany: async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
      const result = await putCompanyModel(body, id)
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
  deleteCompany: async (req, res) => {
    const id = req.params.id
    try {
      const result = await deleteCompanyModel(id)
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item company id ${id} has been deleted`
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
  getDataCompany: async (req, res) => {
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
      const result = await getDataCompanyModel(limit, offset)
      const count = result[0].count
      if (result.length) {
        res.send({
          success: true,
          message: 'List company',
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
