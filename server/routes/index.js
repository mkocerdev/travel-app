const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  return 'Hello'
})

module.exports = router
