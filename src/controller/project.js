const {
  getDataProjectModel,
  createProjectModel,
  putProjectModel,
  deleteProjectModel,
  getDataProjectByIDModel
} = require('../models/project')

module.exports = {
  getDataProjectByID: async (req, res) => {
    const {
      id
    } = req.params
    try {
      const result = await getDataProjectByIDModel(id)
      if (result.length) {
        res.send({
          success: true,
          message: `Data project id ${id}`,
          data: result[0]
        })
      }
    } catch (error) {
      res.send({
        success: false,
        message: `Data project ${id} not found`
      })

    }
  },
  createProject: async (req, res) => {
    const {project_name, description, deadline, id_company, price} = req.body
    const setData = {project_name, description, deadline, image:req.file === undefined ? '' : req.file.filename, id_company, price}
    try {
      const result = await createProjectModel(setData)
      res.status(201).send({
        success: true,
        message: 'Project data has been created',
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
  putProject: async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
      const result = await putProjectModel(body, id)
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
  deleteProject: async (req, res) => {
    const id = req.params.id
    try {
      const result = await deleteProjectModel(id)
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item project id ${id} has been deleted`
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
  getDataProject: async (req, res) => {
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
      const result = await getDataProjectModel(limit, offset)
      const count = result[0].count
      if (result.length) {
        res.send({
          success: true,
          message: 'List project',
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
