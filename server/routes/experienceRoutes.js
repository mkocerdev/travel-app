const express = require('express')
const experienceModel = require('../models/experienceModel')
const router = express.Router()
const helper = require('../helpers/helpers.js')

router.get('/api/experience/all', async (req, res, next) => {
  try {
    const data = await experienceModel.all()
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

router.post('/api/experience', async (req, res, next) => {
  try {
    const data = await experienceModel.getExperience(req.body.id)
    const result = data.map(function(el) {
      const o = Object.assign({}, el)
      o.seoLink = helper.getSeoLink(el.title)
      return o
    })
    res.json(result[0])
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

router.post('/api/experience/state', async (req, res, next) => {
  try {
    const data = await experienceModel.getExperienceState(req.body.id)
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

router.post('/api/experience/gallery', async (req, res, next) => {
  try {
    const data = await experienceModel.getExperienceGallery(req.body)
    res.json(data)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/experience/needs', async (req, res, next) => {
  try {
    const data = await experienceModel.getExperienceNeeds(req.body.id)
    res.json(data)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/experience/program', async (req, res, next) => {
  try {
    const data = await experienceModel.getExperienceProgram(req.body.id)
    res.json(data)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/experience/rating', async (req, res, next) => {
  try {
    const data = await experienceModel.getExperienceRating(req.body.id)
    res.json(data)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = router
