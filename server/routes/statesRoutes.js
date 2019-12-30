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

router.get('/api/states/popular', async (req, res, next) => {
  try {
    const statesResults = await statesModel.popular()
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

router.post('/api/state/experience', async (req, res, next) => {
  try {
    const data = await statesModel.getStateExperience(req.body.id)
    const result = data.map(function(el) {
      const o = Object.assign({}, el)
      o.seoLink = helper.getSeoLink(el.title)
      return o
    })
    res.json(result)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/state', async (req, res, next) => {
  try {
    const data = await statesModel.getStateName(req.body.id)
    const result = data.map(function(el) {
      const o = Object.assign({}, el)
      o.seoLink = helper.getSeoLink(el.name)
      return o
    })
    res.json(result[0])
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = router
