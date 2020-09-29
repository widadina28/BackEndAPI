const {
  getDataPortofolioModel,
  createPortofolioModel,
  putPortofolioModel,
  deletePortofolioModel,
  getDataPortofolioByIDModel
} = require('../models/portofolio')

module.exports = {
  getDataPortofolioByID:async (req, res) => {
    const {
      id
    } = req.params
    try {
      const result = await getDataPortofolioByIDModel(id)
      if (result.length) {
        res.send({
          success: true,
          message: `Data Portofolio id ${id}`,
          data: result[0]
        })
      }
    } catch (error) {
      res.send({
        success: false,
        message: `Data Portofolio ${id} not found`
      })

    }
  },
  createPortofolio: async (req, res) => {
    const {id_engineer, aplication_name, link_repo, type_porto} = req.body
    const setData = {
      id_engineer, aplication_name, link_repo, image:req.file === undefined ? '' : req.file.filename, type_porto
    }
    try {
      const result = await createPortofolioModel(setData)
      res.status(201).send({
        success: true,
        message: 'Portofolio data has been created',
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
  putPortofolio: async (req, res) => {
    const id = req.params.id
    const {id_engineer, aplication_name, link_repo, type_porto} = req.body
    const setData = {
      id_engineer, aplication_name, link_repo, image:req.file === undefined ? '' : req.file.filename, type_porto
    }
    try {
      const result = await putPortofolioModel(setData, id)
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
  deletePortofolio:  async (req, res) => {
    const id = req.params.id
    try {
      const result = await deletePortofolioModel(id)
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item portofolio id ${id} has been deleted`
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
  getDataPortofolio: async (req, res) => {
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
      const result = await getDataPortofolioModel(limit, offset)
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
