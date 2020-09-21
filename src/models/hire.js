const db = require('../helpers/db')
module.exports = {
  getDataHireByIDModel: (id, cb) => {
    db.query(`SELECT * FROM hire WHERE id_hire = ${id}`, (_err, result, _field) => {
      cb(result)
    })
  },
  createHireModel: (arr, cb) => {
    const query = `INSERT INTO hire (id_project,
            id_engineer,
            description,
            price,
            status,
            confirm_date,
            createAt,
            updateAt) VALUES('${arr[0]}', '${arr[1]}', '${arr[2]}', '${arr[3]}', '${arr[4]}', '${arr[5]}', '${arr[6]}', '${arr[7]}')`
    db.query(query, (_err, result, _field) => {
      cb(result)
    })
  },
  putHireModel: (arr, id_hire, cb) => {
    db.query(`SELECT * FROM hire WHERE id_hire = ${id_hire}`, (_err, result, _field) => {
      if (result.length) {
        db.query(`UPDATE hire SET id_project='${arr[0]}', id_engineer='${arr[1]}', description='${arr[2]}', price='${arr[3]}', status='${arr[4]}', confirm_date='${arr[5]}', createAt='${arr[6]}', updateAt='${arr[7]}' WHERE id_hire= ${id_hire}`, (_err, results, _field) => {
          cb(results)
        })
      }
    })
  },
  deleteHireModel: (id, cb) => {
    db.query(`SELECT * FROM Hire WHERE id_hire = ${id}`, (err, results, field) => {
      console.log(field)
      if (results.length) {
        db.query(`DELETE FROM Hire WHERE id_hire = ${id}`, (_err, result, _field) => {
          cb(result)
        })
      } else {
        cb(err)
      }
    })
  },
  getDataHireModel: (limit, offset, cb) => {
    db.query(`SELECT hire.id_hire, project.project_name, engineer.name_engineer, hire.description, hire.price, hire.status, hire.confirm_date, hire.createAt, hire.updateAt FROM hire JOIN project ON hire.id_project=project.id_project JOIN engineer ON hire.id_engineer=engineer.id_engineer LIMIT ${limit} OFFSET ${offset}`, (_err, result, _fields) => {
      cb(result)
    })
  }
}
