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

experience.getExperience = (id) => {
  return new Promise((resolve, reject) => {
    sql.query('SELECT * FROM experience WHERE id = ?', id, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}

experience.getExperienceState = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT states.name, states.descr FROM experience INNER JOIN states ON experience.stateId = states.id WHERE experience.id = ?',
      id,
      (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      }
    )
  })
}

experience.getExperienceGallery = (data) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT photo FROM experience_gallery WHERE type = ' +
        data.type +
        ' and experienceId = ' +
        data.id +
        '',
      (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      }
    )
  })
}
experience.getExperienceNeeds = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT title FROM experience_guest_needs WHERE experienceId = ?',
      id,
      (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      }
    )
  })
}
experience.getExperienceProgram = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT * FROM experience_program WHERE experienceId = ? ORDER BY day',
      id,
      (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      }
    )
  })
}

module.exports = experience
