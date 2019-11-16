const express = require('express')
const statesModel = require('../models/statesModel')
const router = express.Router()

router.get('/api/states/all', async (req, res, next) => {
  try {
    const statesResults = await statesModel.all()
    res.json(statesResults)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = router
