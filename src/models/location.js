const db = require('../helpers/db')
module.exports = {
  getDataLocationByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM location WHERE id_loc = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createLocationModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO location SET ?', body, (err, result, _field) => {
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
  putLocationModel: (body, id) => {
    return new Promise ((resolve, reject) => {
      db.query(`UPDATE location SET ? WHERE id_loc='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deleteLocationModel: (id) => {
    return new Promise ((resolve, reject)=> {
      db.query(`DELETE FROM location WHERE id_loc = '${id}'`, (err, result, _field)=>{
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getDataLocationModel: (limit, offset) => {
    return new Promise ((resolve, reject) => {
      db.query(`SELECT *, (SELECT COUNT(*) FROM location) as count FROM location LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })  
  }
}
