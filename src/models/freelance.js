const db = require('../helpers/db')
module.exports = {
  getDataFreelanceByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM freelance WHERE id_freelance = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createFreelanceModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO freelance SET ?', body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  putFreelanceModel: (body, id) => {
    return new Promise ((resolve, reject) => {
      db.query(`UPDATE freelance SET ? WHERE id_freelance='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deleteFreelanceModel: (id) => {
    return new Promise ((resolve, reject)=> {
      db.query(`DELETE FROM freelance WHERE id_freelance = '${id}'`, (err, result, _field)=>{
        console.log(err);
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getDataFreelanceModel: (limit, offset) =>{
    return new Promise ((resolve, reject) => { db.query(`SELECT *, (SELECT COUNT(*) FROM freelance) as count FROM freelance LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
      if (err) {
        reject(new Error(err))
      } else {
        resolve(result)
      }
    })
    })
  }
}
