const db = require('../helpers/db')
module.exports = {
  getDataCompanyByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM company JOIN  account ON company.idacc=account.id_account WHERE idacc = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createCompanyModel: (body) => {
    return new Promise((resolve, reject) => {
      // console.log(body);
      db.query('INSERT INTO company SET ?', body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          const newResult = {
            id: result.insertId,
            ...setData
          }
          resolve(newResult)
        }
      })
    })
  },
  putCompanyModel: (body, id) => {
    return new Promise ((resolve, reject) => {
      db.query(`UPDATE company SET ? WHERE id_company='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deleteCompanyModel: (id) => {
return new Promise ((resolve, reject)=> {
  db.query(`DELETE FROM company WHERE id_company = '${id}'`, (err, result, _field)=>{
    if (err) {
      reject(new Error(err))
    } else {
      resolve(result)
    }
  })
})
  },
getDataCompanyModel: (limit, offset) => {
  return new Promise ((resolve, reject) => {
    db.query(`SELECT company.name_company,company.field, company.position, company.description_company,company.instagram_company,company.telp_company,company.linkedin_company,company.image,company.createAt,company.updateAt,location.name_loc, account.name_account, (SELECT COUNT(*) FROM company) as count FROM company JOIN location ON company.id_loc = location.id_loc JOIN account ON company.idacc=account.id_account LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
      if (err) {
        reject(new Error(err))
      } else {
        resolve(result)
      }
    })
  })
}
}
