const db = require('../helpers/db')
module.exports = {
  getDataProjectByIDModel: (id, cb) => {
    db.query(`SELECT * FROM project WHERE id_project = ${id}`, (_err, result, _field) => {
      cb(result)
    })
  },
  createProjectModel: (arr, cb) => {
    const query = `INSERT INTO project (project_name,
            description,
            deadline,
            image,
            id_company,
            createAt,
            updateAt,
            price) VALUES('${arr[0]}', '${arr[1]}', '${arr[2]}', '${arr[3]}', '${arr[4]}', '${arr[5]}', '${arr[6]}', '${arr[7]}')`
    db.query(query, (_err, result, _field) => {
      cb(result)
    })
  },
  putProjectModel: (arr, id_project, cb) => {
    db.query(`SELECT * FROM project WHERE id_project = ${id_project}`, (_err, result, _field) => {
      if (result.length) {
        db.query(`UPDATE project SET project_name='${arr[0]}', description='${arr[1]}', deadline='${arr[2]}', image='${arr[3]}', id_company='${arr[4]}', createAt='${arr[5]}', updateAt='${arr[6]}', price= '${arr[7]}' WHERE id_project= ${id_project}`, (_err, results, _field) => {
          cb(results)
        })
      }
    })
  },
  deleteProjectModel: (id, cb) => {
    db.query(`SELECT * FROM project WHERE id_project = ${id}`, (err, results, field) => {
      console.log(field)
      if (results.length) {
        db.query(`DELETE FROM project WHERE id_project = ${id}`, (_err, result, _field) => {
          cb(result)
        })
      } else {
        cb(err)
      }
    })
  },
  getDataProjectModel: (limit, offset, cb) => {
    db.query(`SELECT project.project_name, project.description, project.deadline, project.image, company.name_company, project.createAt, project.updateAt, project.price, project.id_project FROM project JOIN company ON project.id_company = company.id_company LIMIT ${limit} OFFSET ${offset}`, (_err, result, _fields) => {
      console.log(result);
      cb(result)
    })
  }
}
