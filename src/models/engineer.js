const db = require('../helpers/db')
module.exports = {
    getDataEngineerByIDModel: (id, cb) => {
        db.query(`SELECT * FROM engineer WHERE id_engineer = ${id}`, (err, result, field) => {
            if (!err){
                cb(result)
            } else {
                res.send({
                    success: false,
                    message:'Internal Server Error' + err
                })
            }
        })
    },
    createEngineerModel: (arr, cb) => {
        const query = `INSERT INTO engineer (name_engineer,
            id_freelance,
            id_loc,
            cost,
            rate,
            id_acc_engineer,
            description_engineer,
            image,
            createAt,
            updateAt,
            status) VALUES('${arr[0]}', '${arr[1]}', '${arr[2]}', '${arr[3]}', '${arr[4]}', '${arr[5]}', '${arr[6]}', '${arr[7]}','${arr[8]}','${arr[9]}', '${arr[10]}')`
        db.query(query, (err, result, field) => {
                cb(result)
        })
    },
    putEngineerModel: (arr, id_engineer, cb) => {
        db.query(`SELECT * FROM engineer WHERE id_engineer = ${id_engineer}`, (err, result, field) => {
            if (result.length) {
                db.query(`UPDATE engineer SET name_engineer='${arr[0]}', id_freelance='${arr[1]}', id_loc='${arr[2]}', cost='${arr[3]}', rate='${arr[4]}', id_acc_engineer='${arr[5]}', description_engineer='${arr[6]}', image='${arr[7]}', createAt='${arr[8]}', updateAt='${arr[9]}', status='${arr[10]}' WHERE id_engineer= ${id_engineer}`, (err, results, field) => {
                    cb(results)
                })
            }
        })
    },
    deleteEngineerModel: (id, cb) => {
        db.query(`SELECT * FROM engineer WHERE id_engineer = ${id}`, (err, results, field) => {
            console.log(field);
            if (results.length) {
                db.query(`DELETE FROM engineer WHERE id_engineer = ${id}`, (err, result, field) => {
                  console.log(result);
                  console.log(err);
                        cb(result)
                })
            } else {
                cb(err)
            }
        })

    },
    getDataEngineerModel: (orderKey, searchKey, searchValue ,limit, offset, cb) => {
        db.query(`SELECT engineer.id_engineer, engineer.name_engineer, GROUP_CONCAT(skill.name_skill), freelance.name_freelance,account_engineer.name_account,location.name_loc, engineer.cost, engineer.rate, engineer.description_engineer, engineer.image, engineer.createAt, engineer.updateAt, engineer.status FROM engineer JOIN expertise ON engineer.id_engineer=expertise.id_engineer JOIN skill ON skill.id_skill=expertise.id_skill JOIN freelance ON freelance.id_freelance=engineer.id_freelance JOIN account_engineer ON account_engineer.id_acc_engineer=engineer.id_acc_engineer JOIN location ON location.id_loc=engineer.id_loc WHERE ${searchKey} LIKE '%${searchValue}%' GROUP BY expertise.id_engineer ORDER BY ${orderKey} DESC LIMIT ${limit}  OFFSET ${offset}`, (err, result, fields)=>{
                cb(result)
                // console.log(result);
        })
    }
}