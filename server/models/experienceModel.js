const sql = require('../config/db') // reference of db.js
const experience = {}

experience.all = () => {
  return new Promise((resolve, reject) => {
    sql.query('Select * from experience', (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}
experience.stateId = (id) => {
  return new Promise((resolve, reject) => {
    sql.query('SELECT * FROM experience WHERE stateId = ?', id, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}

module.exports = experience
