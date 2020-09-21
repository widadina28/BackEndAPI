const db = require('../helpers/db')
module.exports = {
  getDataFreelanceByIDModel: (id_freelance, cb) => {
    db.query(`SELECT * FROM freelance WHERE id_freelance = ${id_freelance}`, (_err, result, _field) => {
      cb(result)
    })
  },
  createFreelanceModel: (arr, cb) => {
    const query = `INSERT INTO freelance (name_freelance) VALUES('${arr[0]}')`
    db.query(query, (_err, result, _field) => {
      cb(result)
    })
  },
  putFreelanceModel: (arr, id_freelance, cb) => {
    db.query(`SELECT * FROM freelance WHERE id_freelance = ${id_freelance}`, (_err, result, _field) => {
      if (result.length) {
        db.query(`UPDATE freelance SET name_freelance='${arr[0]}' WHERE id_freelance= ${id_freelance}`, (_err, results, _field) => {
          console.log(result)
          cb(results)
        })
      }
    })
  },
  deleteFreelanceModel: (id, cb) => {
    db.query(`SELECT * FROM freelance WHERE id_freelance = ${id}`, (_err, results, _field) => {
      if (results.length) {
        db.query(`DELETE FROM freelance WHERE id_freelance = ${id}`, (_err, result, _field) => {
          cb(result)
        })
      } else {cb (_err)} 
    })
  },
  getDataFreelanceModel: (limit, offset, cb) => {
    db.query(`SELECT * FROM freelance LIMIT ${limit} OFFSET ${offset}`, (_err, result, _fields) => {
      cb(result)
    })
  }
}
