const {
  getDataEngineerModel,
  createEngineerModel,
  putEngineerModel,
  deleteEngineerModel,
  getDataEngineerByIDModel
} = require('../models/engineer')

module.exports = {
  getDataEngineerByID: async (req, res) => {
    const {
      id
    } = req.params
    try {
      const result = await getDataEngineerByIDModel(id)
      if (result.length) {
        res.send({
          success: true,
          message: `Data Engineer id ${id}`,
          data: result[0]
        })
    }
  }
    catch (error) {
      res.send({
        success: false,
        message: `Data Engineer ${id} not found`
      })
    }
  },
  createEngineer: async (req, res) => {
    const {name_engineer, id_freelance, id_loc, cost, rate, description_engineer, status, id_account} = req.body
    const setData ={
      name_engineer, id_freelance, id_loc, cost, rate, description_engineer, image: req.file === undefined ? '' : req.file.filename, status, id_account
    }
    try {
      const result = await createEngineerModel(setData)
      res.status(201).send({
        success: true,
        message: 'Engineer data has been created',
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
  putEngineer: async (req, res) => {
    const id = req.params.id
    const {name_engineer, id_freelance, id_loc, cost, rate, description_engineer, status, id_account} = req.body
    const setData ={
      name_engineer, id_freelance, id_loc, cost, rate, description_engineer, image: req.file === undefined ? '' : req.file.filename, status, id_account
    }
    try {
      const result = await putEngineerModel(setData, id)
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
  deleteEngineer: async (req, res) => {
    const id = req.params.id
    try {
      const result = await deleteEngineerModel(id)
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
  getDataEngineer: async (req, res) => {
    let {
      page,
      limit,
      search,
      order
    } = req.query
    let searchKey = ''
    let searchValue = ''
    let orderKey = ''

    if (typeof order==='object') {
      orderKey = Object.keys(order)[0]
    } else {
      orderKey = 'name_engineer'
    }

    if (typeof search==='object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'name_engineer'
      searchValue = search || ''
    }

    if (!limit) {
      limit = 30
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
      const result = await getDataEngineerModel(orderKey, searchKey, searchValue, limit, offset)
      const count = result[0].count
      if (result.length) {
        res.send({
          success: true,
          message: 'List engineer',
          // meta: {
          //   totalRows: count,
          //   totalPages: Math.ceil(count / limit),
          //   pageActive: page

          // },
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
