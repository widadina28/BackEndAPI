const {
  getDataProjectModel,
  createProjectModel,
  putProjectModel,
  deleteProjectModel,
  getDataProjectByIDModel
} = require('../models/project')

module.exports = {
  getDataProjectByID: (req, res) => {
    const {
      id
    } = req.params
    getDataProjectByIDModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data Project id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data Project ${id} not found`
        })
      }
    })
  },
  createProject: (req, res) => {
    const {
      project_name,
      description,
      deadline,
      image,
      id_company,
      createAt,
      updateAt,
      price
    } = req.body
    if (project_name && description && deadline && image && id_company && createAt && updateAt && price) {
      createProjectModel([project_name,
        description,
        deadline,
        image,
        id_company,
        createAt,
        updateAt,
        price], result => {
        res.status(201).send({
          success: true,
          message: 'Project data has been created',
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
  putProject: (req, res) => {
    const id_project = req.params.id
    const {
      project_name,
      description,
      deadline,
      image,
      id_company,
      createAt,
      updateAt,
      price
    } = req.body
    if (project_name && description && deadline && image && id_company && createAt && updateAt && price) {
      putProjectModel([project_name,
        description,
        deadline,
        image,
        id_company,
        createAt,
        updateAt,
        price], id_project, result => {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Project with id ${id_project} has been updated`
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
  deleteProject: (req, res) => {
    const {
      id
    } = req.params
    deleteProjectModel(id, result => {
      if (result === null) {
        res.send({
          message: 'Data not found!'
        })
      } else {
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item Project id ${id} has been deleted`
          })
        }
      }
    })
  },
  getDataProject: (req, res) => {
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
    getDataProjectModel(limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'List Project',
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
