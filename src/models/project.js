const db = require('../helpers/db')
module.exports = {
  getDataProjectByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM project WHERE id_project = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createProjectModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO project SET ?', body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  putProjectModel: (body, id) => {
    return new Promise((resolve, reject) => {
      console.log(body);
      db.query(`UPDATE project SET ? WHERE id_project='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deleteProjectModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM project WHERE id_project = '${id}'`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getDataProjectModel: (limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT project.project_name, project.description, project.deadline, project.image, company.name_company, project.createAt, project.updateAt, project.price, project.id_project, (SELECT COUNT(*) FROM project) as count FROM project JOIN company ON project.id_company = company.id_company LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
        console.log(result);
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })

  }
}