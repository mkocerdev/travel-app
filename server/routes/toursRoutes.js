const express = require('express')
const toursModel = require('../models/toursModel')
const router = express.Router()

router.get('/api/tours/all', async (req, res, next) => {
  try {
    const toursResults = await toursModel.all()
    res.json(toursResults)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = router
