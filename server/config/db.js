const mysql = require('mysql')
const config = require('../../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
let connection = ''
if (config.dev) {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'travel'
  })
} else {
  connection = mysql.createConnection({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'bedef9d3dab3d5',
    password: 'b8ec2290',
    database: 'heroku_775e0b22e092b02'
  })
}

connection.connect(function(err) {
  if (err) throw err
})

module.exports = connection
