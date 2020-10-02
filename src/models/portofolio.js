const db = require('../helpers/db')
module.exports = {
  getDataPortofolioByIDModel: (id, cb) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM portofolio WHERE id_portofolio = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createPortofolioModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO portofolio SET ?', body, (err, result, _field) => {
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
  putPortofolioModel: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE portofolio SET ? WHERE id_portofolio='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deletePortofolioModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM portofolio WHERE id_portofolio = '${id}'`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getDataPortofolioModel: (limit, offset, cb) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT engineer.name_engineer, portofolio.aplication_name, portofolio.link_repo, portofolio.image,portofolio.id_portofolio, (SELECT COUNT(*) FROM portofolio) as count FROM portofolio JOIN engineer ON portofolio.id_engineer = engineer.id_engineer LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })

  }
}