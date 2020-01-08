const sql = require('../config/db') // reference of db.js
const states = {}

states.all = () => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT id,name, descr, photo FROM states WHERE countryId = 223 ',
      (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      }
    )
  })
}
states.popular = () => {
  return new Promise((resolve, reject) => {
    sql.query(
      // 'SELECT s.name, s.descr, s.photo, SUM(t.id) as toursSum FROM states as s INNER JOIN tours as t ON t.stateId = s.id;',
      'SELECT id,name, descr, photo FROM states WHERE photo <> "" LIMIT 5',
      (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      }
    )
  })
}

states.getStateName = (id) => {
  return new Promise((resolve, reject) => {
    sql.query('SELECT id,name FROM states WHERE id = ? ', id, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}

states.getStateExperience = (id) => {
  return new Promise((resolve, reject) => {
    sql.query('SELECT * FROM experience WHERE stateId = ?', id, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}
states.getStateFilterPrice = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT MIN(price) as minPrice, MAX(price) as maxPrice FROM `experience_property` WHERE stateId = ?',
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

states.getStateFilterDifficulty = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT DISTINCT(difficulty) as value, COUNT(difficulty) as count FROM `experience_property` WHERE stateId = ? GROUP BY difficulty',
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
states.getStateFilterTime = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT DISTINCT(time) as value, COUNT(time) as count FROM `experience_property` WHERE stateId = ? GROUP BY time',
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
states.getStateFilterLanguage = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT DISTINCT(languageId) as value, COUNT(languageId) as count FROM `experience_property` WHERE stateId = ? GROUP BY languageId',
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
states.getStateFilterCapacity = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT DISTINCT(capacity) as value, COUNT(capacity) as count FROM `experience_property` WHERE stateId = ? GROUP BY capacity',
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

module.exports = states
