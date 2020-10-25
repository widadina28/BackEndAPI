const db = require('../helpers/db')
module.exports = {
  getDataHireByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM hire WHERE id_engineer = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createHireModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO hire SET ?', body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          const newResult = {
            id: result.insertId,
            ...body
          }
          resolve(newResult)
        }
      })
    })
  },
  putHireModel: (body, id) => {
    return new Promise ((resolve, reject) => {
      db.query(`UPDATE hire SET ? WHERE id_hire='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deleteHireModel: (id) => {
    return new Promise ((resolve, reject)=> {
      db.query(`DELETE FROM hire WHERE id_hire = '${id}'`, (err, result, _field)=>{
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getDataHireModel: (limit, offset) => {
    return new Promise ((resolve, reject)=>{
      db.query(`SELECT hire.id_hire, project.project_name, engineer.name_engineer, hire.description, hire.price, hire.status, hire.confirm_date, hire.createAt, hire.updateAt, (SELECT COUNT(*) FROM hire) as count FROM hire JOIN project ON hire.id_project=project.id_project JOIN engineer ON hire.id_engineer=engineer.id_engineer LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
   
  }
}
