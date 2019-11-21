const express = require('express')
const statesModel = require('../models/statesModel')
const router = express.Router()
const helper = require('../helpers/helpers.js')

router.get('/api/states/all', async (req, res, next) => {
  try {
    const statesResults = await statesModel.all()
    const result = statesResults.map(function(el) {
      const o = Object.assign({}, el)
      o.seoLink = helper.getSeoLink(el.name)
      return o
    })
    res.json(result)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = router
