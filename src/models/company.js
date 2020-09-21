const db = require('../helpers/db')
module.exports = {
  getDataCompanyByIDModel: (id, cb) => {
    db.query(`SELECT * FROM company WHERE id_company = ${id}`, (_err, result, _field) => {
      cb(result)
    })
  },
  createCompanyModel: (arr, cb) => {
    const query = `INSERT INTO company (name_company, field, id_loc, description_company, instagram_company, telp_company, linkedin_company, image, createAt, updateAt, id_acc_company) VALUES('${arr[0]}','${arr[1]}', '${arr[2]}', '${arr[3]}', '${arr[4]}', '${arr[5]}', '${arr[6]}', '${arr[7]}', '${arr[8]}', '${arr[9]}', '${arr[10]}')`
    db.query(query, (_err, result, _field) => {
      cb(result)
    })
  },
  putCompanyModel: (arr, id_company, cb) => {
    db.query(`SELECT * FROM company WHERE id_company = ${id_company}`, (_query, result, _field) => {
      if (result.length) {
        db.query(`UPDATE company SET name_company='${arr[0]}', field='${arr[1]}', id_loc='${arr[2]}', description_company='${arr[3]}', instagram_company='${arr[4]}', telp_company='${arr[5]}', linkedin_company='${arr[6]}', image='${arr[7]}', createAt='${arr[8]}', updateAt='${arr[9]}', id_acc_company='${arr[10]}' WHERE id_company= ${id_company}`, (_err, results, _field) => {
          console.log(_err);
          cb(results)
        })
      }
    })
  },
  deleteCompanyModel: (id, cb) => {
    db.query(`SELECT * FROM company WHERE id_company = ${id}`, (err, results, _field) => {
      console.log(results);
      if (results.length) {
        db.query(`DELETE FROM company WHERE id_company = ${id}`, (err, result, _field) => {
          console.log(err);
          cb(result)
        })
      } else {
        cb(err)
      }
    })
  },
  getDataCompanyModel: (limit, offset, cb) => {
    db.query(`
        SELECT company.name_company,company.field,company.description_company,company.instagram_company,company.telp_company,company.linkedin_company,company.image,company.createAt,company.updateAt,location.name_loc, (SELECT COUNT(*) FROM company) as count FROM company JOIN location ON company.id_loc = location.id_loc LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
      if (!err) {
        cb(result)
      }
    })
  }
}
