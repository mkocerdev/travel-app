const sql = require('../config/db') // reference of db.js
const experience = {}

experience.all = () => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT e.*, ep.price, s.name as stateName FROM experience e INNER JOIN experience_property ep ON e.id = ep.id LEFT JOIN states as s ON ep.stateId = s.id',
      (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      }
    )
  })
}

experience.getExperience = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT * FROM experience e INNER JOIN experience_property ep ON e.id = ep.id WHERE e.id = ?',
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
experience.getExperienceRating = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT *, DATE_FORMAT(createDate, "%d %M %Y") as formatDate FROM experience_rating WHERE experienceId = ?',
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
experience.getExperienceRateInfo = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT COUNT(id) as totalRate, CONVERT(AVG(DISTINCT star),DECIMAL(10,1))  as avgRate FROM `experience_rating` WHERE experienceId = ?',
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
experience.getExperiencePrimaryCategory = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT categories.categoryName FROM experience INNER JOIN categories ON experience.primaryCategory = categories.id where experience.id = ?',
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
experience.getExperienceReservations = (id) => {
  return new Promise((resolve, reject) => {
    sql.query(
      'SELECT DATE_FORMAT(startDate, "%d %M %Y") as startDate, DATE_FORMAT(endDate, "%d %M %Y") as endDate,capacity,status FROM reservation WHERE reservation.experienceId = ?',
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
