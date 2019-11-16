const sql = require('../config/db') // reference of db.js
const tours = {}

tours.all = () => {
  return new Promise((resolve, reject) => {
    sql.query('Select * from tours', (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}

module.exports = tours
