const express = require('express')
const statesModel = require('../models/statesModel')
const router = express.Router()
const helper = require('../helpers/helpers.js')

router.get('/api/states/all', async (req, res, next) => {
  try {
    const statesResults = await statesModel.all()
    const result = statesResults.map(function(el) {
      const o = { ...el }
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
      const o = { ...el }
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
router.post('/api/state', async (req, res, next) => {
  try {
    const data = await statesModel.getStateName(req.body.id)
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
router.post('/api/state/filter', async (req, res, next) => {
  try {
    const filters = []
    /* difficulty */
    const difficultyObj = {
      filterType: 'difficulty',
      label: 'Deneyim Seviyesi',
      data: null
    }
    const difficultyData = await statesModel.getStateFilterDifficulty(
      req.body.id
    )
    const resultDifficulty = difficultyData.map(function(el) {
      const o = { ...el }
      o.label = helper.getDifficultyName(el.value)
      return o
    })
    difficultyObj.data = { ...resultDifficulty }
    filters.push(difficultyObj)
    /* time */
    const timeObj = {
      filterType: 'time',
      label: 'Deneyim Süresi',
      data: null
    }
    const timeData = await statesModel.getStateFilterTime(req.body.id)
    const resultTime = timeData.map(function(el) {
      const o = { ...el }
      o.label = el.value + ' gün'
      return o
    })
    timeObj.data = { ...resultTime }
    filters.push(timeObj)
    /* language */
    const languageObj = {
      filterType: 'language',
      label: 'Deneyim Dili',
      data: null
    }
    const languageData = await statesModel.getStateFilterLanguage(req.body.id)
    const resultLanguage = languageData.map(function(el) {
      const o = { ...el }
      o.label = helper.getLanguageName(el.value)
      return o
    })
    languageObj.data = { ...resultLanguage }
    filters.push(languageObj)
    /* capacity */
    const capacityObj = {
      filterType: 'capacity',
      label: 'Misafir Sayısı',
      data: null
    }
    const capacityData = await statesModel.getStateFilterCapacity(req.body.id)
    const resultCapacity = capacityData.map(function(el) {
      const o = { ...el }
      o.label = el.value + ' kişi'
      return o
    })
    capacityObj.data = { ...resultCapacity }
    filters.push(capacityObj)

    res.json(filters)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/state/filter/price', async (req, res, next) => {
  try {
    const price = { filterType: 'price', label: 'Fiyat Aralığı', data: null }
    const data = await statesModel.getStateFilterPrice(req.body.id)
    price.data = { ...data[0] }
    res.json(price)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/state/filter/difficulty', async (req, res, next) => {
  try {
    const difficulty = {
      filterType: 'difficulty',
      label: 'Zorluk Düzeyi',
      data: null
    }
    const data = await statesModel.getStateFilterDifficulty(req.body.id)
    difficulty.data = { ...data[0] }
    res.json(difficulty)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/state/filter/time', async (req, res, next) => {
  try {
    const data = await statesModel.getStateFilterTime(req.body.id)
    res.json(data)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/state/filter/language', async (req, res, next) => {
  try {
    const data = await statesModel.getStateFilterLanguage(req.body.id)
    res.json(data)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
router.post('/api/state/filter/capacity', async (req, res, next) => {
  try {
    const data = await statesModel.getStateFilterCapacity(req.body.id)
    res.json(data)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = router
