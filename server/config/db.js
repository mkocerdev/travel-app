const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'TnjwFdgLmL',
  password: 'NQvLJyfALG',
  database: 'TnjwFdgLmL'
})

connection.connect(function(err) {
  if (err) throw err
})

module.exports = connection
