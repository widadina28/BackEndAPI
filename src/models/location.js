const db = require('../helpers/db')
module.exports = {
  getDataLocationByIDModel: (id_loc, cb) => {
    db.query(`SELECT * FROM location WHERE id_loc = ${id_loc}`, (_err, result, _field) => {
      cb(result)
    })
  },
  createLocationModel: (arr, cb) => {
    const query = `INSERT INTO location (name_loc) VALUES('${arr[0]}')`
    db.query(query, (_err, result, _field) => {
      cb(result)
    })
  },
  putLocationModel: (arr, id_loc, cb) => {
    console.log(arr)
    db.query(`SELECT * FROM location WHERE id_loc = ${id_loc}`, (_err, result, _field) => {
      if (result.length) {
        db.query(`UPDATE location SET name_loc='${arr[0]}' WHERE id_loc= ${id_loc}`, (_err, results, _field) => {
          cb(results)
        })
      }
    })
  },
  deleteLocationModel: (id, cb) => {
    db.query(`SELECT * FROM location WHERE id_loc = ${id}`, (_err, results, _field) => {
      if (results.length) {
        db.query(`DELETE FROM location WHERE id_loc = ${id}`, (_err, result, _field) => {
          cb(result)
        })
      } else {cb(_err)}
    })
  },
  getDataLocationModel: (limit, offset, cb) => {
    db.query(`SELECT * FROM location LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
      if (!err) {
        cb(result)
      }
    })
  }
}
