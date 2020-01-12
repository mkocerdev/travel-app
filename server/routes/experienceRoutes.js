const express = require('express')
const experienceModel = require('../models/experienceModel')
const router = express.Router()
const helper = require('../helpers/helpers.js')

router.get('/api/experience/all', async (req, res, next) => {
  try {
    const data = await experienceModel.all()
    const result = data.map(function(el) {
      const o = { ...el }
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
    const result = data.map(function(experience) {
      const o = { ...experience }
      o.seoLink = helper.getSeoLink(experience.title)
      o.difficulty = helper.getDifficultyName(experience.difficulty)
      o.time = experience.time + ' gün'
      o.language = helper.getLanguageName(experience.language)
      o.capacity = experience.capacity + ' kişi'
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
      const o = { ...el }
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
router.post('/api/experience/RateInfo', async (req, res, next) => {
  try {
    const data = await experienceModel.getExperienceRateInfo(req.body.id)
    const result = Object.assign({}, data)
    res.json(result[0])
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/experience/category', async (req, res, next) => {
  try {
    const data = await experienceModel.getExperiencePrimaryCategory(req.body.id)
    const result = Object.assign({}, data)
    res.json(result[0])
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/experience/reservations', async (req, res, next) => {
  try {
    const data = await experienceModel.getExperienceReservations(req.body.id)
    res.json(data)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = router
