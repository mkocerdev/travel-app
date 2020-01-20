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
      'SELECT DISTINCT s.id, s.name, s.descr, s.photo, COUNT(e.id) as count FROM states as s LEFT JOIN experience as e ON s.id = e.stateId WHERE s.photo <> "" GROUP BY s.id LIMIT 5 ',
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
    sql.query(
      'SELECT id,name,descr FROM states WHERE id = ? ',
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
states.updateStateExperience = (filters, stateId, page, sort, price) => {
  return new Promise((resolve, reject) => {
    const filterParams = [] // filter params
    const offset = (page - 1) * 2 // offset sql
    filterParams.push(stateId) // stateid
    let filterQuery =
      'SELECT e.id, e.title, e.photo, ep.price, s.name as stateName, CONVERT(AVG(DISTINCT er.star), DECIMAL(10,1)) as avgRate FROM experience as e LEFT JOIN experience_property as ep ON e.id = ep.experienceId LEFT JOIN states as s ON ep.stateId = s.id LEFT JOIN experience_rating as er ON e.id = er.experienceId WHERE ( ep.stateId = ? )'
    if (price.length > 0) {
      filterQuery = filterQuery + 'AND ep.price >= ? AND ep.price <= ?'
      filterParams.push(price[0])
      filterParams.push(price[1])
    }
    if (filters.length > 0) {
      filters.forEach((item) => {
        filterQuery = filterQuery + ' AND ('
        for (const key in item.filter) {
          filterParams.push(item.filter[key])
          filterQuery = filterQuery + 'ep.' + item.filterType + ' = ?'
          if (key < item.filter.length - 1) {
            filterQuery = filterQuery + ' OR '
          }
        }
        filterQuery = filterQuery + ') '
      })
    }
    filterQuery = filterQuery + ' GROUP BY e.id'
    filterQuery = filterQuery + ' ORDER BY ' + sort
    filterQuery = filterQuery + ' LIMIT 2 OFFSET ?'
    filterParams.push(offset)
    sql.query(filterQuery, filterParams, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}
states.updateStateExperienceCount = (filters, stateId, price) => {
  return new Promise((resolve, reject) => {
    const filterParams = [] // filter params
    filterParams.push(stateId) // stateid
    let filterQuery =
      'SELECT COUNT(*) as totalCount from experience_property as ep WHERE ( ep.stateId = ? )'
    if (price.length > 0) {
      filterQuery = filterQuery + 'AND ep.price >= ? AND ep.price <= ?'
      filterParams.push(price[0])
      filterParams.push(price[1])
    }
    if (filters.length > 0) {
      filters.forEach((item) => {
        filterQuery = filterQuery + ' AND ('
        for (const key in item.filter) {
          filterParams.push(item.filter[key])
          filterQuery = filterQuery + 'ep.' + item.filterType + ' = ?'
          if (key < item.filter.length - 1) {
            filterQuery = filterQuery + ' OR '
          }
        }
        filterQuery = filterQuery + ') '
      })
    }
    sql.query(filterQuery, filterParams, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}

states.getStateFilterPrice = (filters, stateId) => {
  return new Promise((resolve, reject) => {
    const filterParams = [] // filter params
    filterParams.push(stateId) // stateid
    let filterQuery =
      'SELECT MIN(price) as minPrice, MAX(price) as maxPrice FROM `experience_property` WHERE ( stateId = ? )'
    if (filters.length > 0) {
      filters.forEach((item) => {
        filterQuery = filterQuery + ' AND ('
        for (const key in item.filter) {
          filterParams.push(item.filter[key])
          filterQuery = filterQuery + '' + item.filterType + ' = ?'
          if (key < item.filter.length - 1) {
            filterQuery = filterQuery + ' OR '
          }
        }
        filterQuery = filterQuery + ') '
      })
    }
    sql.query(filterQuery, filterParams, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}
states.getStateFilterDifficulty = (filters, price, stateId) => {
  return new Promise((resolve, reject) => {
    const filterParams = [] // filter params
    filterParams.push(stateId) // stateid
    let filterQuery =
      'SELECT DISTINCT(difficulty) as value, COUNT(difficulty) as count FROM `experience_property` WHERE (stateId = ?) '
    if (price.length > 0) {
      filterQuery = filterQuery + 'AND price >= ? AND price <= ? '
      filterParams.push(price[0])
      filterParams.push(price[1])
    }
    if (filters.length > 0) {
      filters.forEach((item) => {
        filterQuery = filterQuery + ' AND ('
        for (const key in item.filter) {
          filterParams.push(item.filter[key])
          filterQuery = filterQuery + '' + item.filterType + ' = ?'
          if (key < item.filter.length - 1) {
            filterQuery = filterQuery + ' OR '
          }
        }
        filterQuery = filterQuery + ') '
      })
    }
    filterQuery = filterQuery + 'GROUP BY difficulty'
    sql.query(filterQuery, filterParams, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}
states.getStateFilterTime = (filters, price, stateId) => {
  return new Promise((resolve, reject) => {
    const filterParams = [] // filter params
    filterParams.push(stateId) // stateid
    let filterQuery =
      'SELECT DISTINCT(time) as value, COUNT(time) as count FROM `experience_property` WHERE (stateId = ?) '
    if (price.length > 0) {
      filterQuery = filterQuery + 'AND price >= ? AND price <= ? '
      filterParams.push(price[0])
      filterParams.push(price[1])
    }
    if (filters.length > 0) {
      filters.forEach((item) => {
        filterQuery = filterQuery + ' AND ('
        for (const key in item.filter) {
          filterParams.push(item.filter[key])
          filterQuery = filterQuery + '' + item.filterType + ' = ?'
          if (key < item.filter.length - 1) {
            filterQuery = filterQuery + ' OR '
          }
        }
        filterQuery = filterQuery + ') '
      })
    }
    filterQuery = filterQuery + 'GROUP BY time'
    sql.query(filterQuery, filterParams, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}
states.getStateFilterLanguage = (filters, price, stateId) => {
  return new Promise((resolve, reject) => {
    const filterParams = [] // filter params
    filterParams.push(stateId) // stateid
    let filterQuery =
      'SELECT DISTINCT(language) as value, COUNT(language) as count FROM `experience_property` WHERE (stateId = ?) '
    if (price.length > 0) {
      filterQuery = filterQuery + 'AND price >= ? AND price <= ? '
      filterParams.push(price[0])
      filterParams.push(price[1])
    }
    if (filters.length > 0) {
      filters.forEach((item) => {
        filterQuery = filterQuery + ' AND ('
        for (const key in item.filter) {
          filterParams.push(item.filter[key])
          filterQuery = filterQuery + '' + item.filterType + ' = ?'
          if (key < item.filter.length - 1) {
            filterQuery = filterQuery + ' OR '
          }
        }
        filterQuery = filterQuery + ') '
      })
    }
    filterQuery = filterQuery + 'GROUP BY language'
    sql.query(filterQuery, filterParams, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}
states.getStateFilterCapacity = (filters, price, stateId) => {
  return new Promise((resolve, reject) => {
    const filterParams = [] // filter params
    filterParams.push(stateId) // stateid
    let filterQuery =
      'SELECT DISTINCT(capacity) as value, COUNT(capacity) as count FROM `experience_property` WHERE (stateId = ?) '
    if (price.length > 0) {
      filterQuery = filterQuery + 'AND price >= ? AND price <= ? '
      filterParams.push(price[0])
      filterParams.push(price[1])
    }
    if (filters.length > 0) {
      filters.forEach((item) => {
        filterQuery = filterQuery + ' AND ('
        for (const key in item.filter) {
          filterParams.push(item.filter[key])
          filterQuery = filterQuery + '' + item.filterType + ' = ?'
          if (key < item.filter.length - 1) {
            filterQuery = filterQuery + ' OR '
          }
        }
        filterQuery = filterQuery + ') '
      })
    }
    filterQuery = filterQuery + 'GROUP BY capacity'
    sql.query(filterQuery, filterParams, (err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    })
  })
}
module.exports = states
