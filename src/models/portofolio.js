const db = require('../helpers/db')
module.exports = {
  getDataPortofolioByIDModel: (id, cb) => {
    db.query(`SELECT * FROM portofolio WHERE id_portofolio = ${id}`, (_err, result, _field) => {
      cb(result)
    })
  },
  createPortofolioModel: (arr, cb) => {
    const query = `INSERT INTO portofolio (id_engineer,
            aplication_name,
            link_repo,
            image) VALUES('${arr[0]}', '${arr[1]}', '${arr[2]}', '${arr[3]}')`
    db.query(query, (_err, result, _field) => {
      cb(result)
    })
  },
  putPortofolioModel: (arr, id_portofolio, cb) => {
    db.query(`SELECT * FROM portofolio WHERE id_portofolio = ${id_portofolio}`, (_err, result, _field) => {
      if (result.length) {
        db.query(`UPDATE portofolio SET id_engineer='${arr[0]}', aplication_name='${arr[1]}', link_repo='${arr[2]}', image='${arr[3]}' WHERE id_portofolio= ${id_portofolio}`, (_err, results, _field) => {
          cb(results)
        })
      }
    })
  },
  deletePortofolioModel: (id, cb) => {
    db.query(`SELECT * FROM portofolio WHERE id_portofolio = ${id}`, (_err, results, _field) => {
      if (results.length) {
        db.query(`DELETE FROM portofolio WHERE id_portofolio = ${id}`, (_err, result, _field) => {
          cb(result)
        })
      } else {
        cb(_err)
      }
    })
  },
  getDataPortofolioModel: (limit, offset, cb) => {
    db.query(`SELECT engineer.name_engineer, portofolio.aplication_name, portofolio.link_repo, portofolio.image,portofolio.id_portofolio FROM portofolio JOIN engineer ON portofolio.id_engineer = engineer.id_engineer LIMIT ${limit} OFFSET ${offset}`, (_err, result, _fields) => {
      cb(result)
    })
  }
}
