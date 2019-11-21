const express = require('express')
const experienceModel = require('../models/experienceModel')
const router = express.Router()

const helper = require('../helpers/helpers.js')

router.get('/api/experience/all', async (req, res, next) => {
  try {
    const result = await experienceModel.all()
    res.json(result)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/experience/state', async (req, res, next) => {
  try {
    const data = await experienceModel.stateId(req.body.id)

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

module.exports = router
