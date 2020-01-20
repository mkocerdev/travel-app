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
    const getFilters = req.body.filter
    const filters = []
    // price data catch

    const getPriceData = []
    getFilters.filter((item) => {
      if (item.filterType === 'price') {
        getPriceData.push(...item.filter)
      }
    })
    // price
    const priceObj = {
      filterType: 'price',
      label: 'Fiyat Aralığı',
      data: null
    }

    const exPrice = []
    getFilters.filter(function(item) {
      if (item.filterType !== 'price') {
        exPrice.push(item)
      }
    })

    const resultPrice = await statesModel.getStateFilterPrice(
      exPrice,
      req.body.id
    )
    priceObj.data = { ...resultPrice }
    filters.push(priceObj)

    // difficulty obj
    const difficultyObj = {
      filterType: 'difficulty',
      label: 'Deneyim Seviyesi',
      data: null
    }
    // filter without difficulty
    const exDifficulty = []
    exPrice.filter(function(item) {
      if (item.filterType !== 'difficulty') {
        exDifficulty.push(item)
      }
    })
    // post difficulty filters model
    const difficultyData = await statesModel.getStateFilterDifficulty(
      exDifficulty,
      getPriceData,
      req.body.id
    )
    // model result edit name
    const resultDifficulty = difficultyData.map(function(el) {
      const o = { ...el }
      o.label = helper.getDifficultyName(el.value)
      return o
    })
    difficultyObj.data = { ...resultDifficulty }
    // push difficulty obj
    filters.push(difficultyObj)

    const timeObj = {
      filterType: 'time',
      label: 'Deneyim Süresi',
      data: null
    }

    const exTime = []
    exPrice.filter(function(item) {
      if (item.filterType !== 'time') {
        exTime.push(item)
      }
    })

    const timeData = await statesModel.getStateFilterTime(
      exTime,
      getPriceData,
      req.body.id
    )
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

    const exLanguage = []
    exPrice.filter(function(item) {
      if (item.filterType !== 'language') {
        exLanguage.push(item)
      }
    })

    const languageData = await statesModel.getStateFilterLanguage(
      exLanguage,
      getPriceData,
      req.body.id
    )
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

    const exCapacity = []
    exPrice.filter(function(item) {
      if (item.filterType !== 'capacity') {
        exCapacity.push(item)
      }
    })

    const capacityData = await statesModel.getStateFilterCapacity(
      exCapacity,
      getPriceData,
      req.body.id
    )
    const resultCapacity = capacityData.map(function(el) {
      const o = { ...el }
      o.label = el.value + ' kişi'
      return o
    })
    capacityObj.data = { ...resultCapacity }
    filters.push(capacityObj)

    const experiencesDb = await statesModel.updateStateExperience(
      exPrice,
      req.body.id,
      req.body.page,
      req.body.sort,
      getPriceData
    )
    const experienceResult = experiencesDb.map(function(experience) {
      const o = { ...experience }
      o.seoLink = helper.getSeoLink(experience.title)
      o.stateSeoLink = helper.getSeoLink(experience.stateName)
      return o
    })
    const countResult = await statesModel.updateStateExperienceCount(
      exPrice,
      req.body.id,
      getPriceData
    )
    const returnObj = {
      filters: [],
      experience: [],
      experienceCount: 0
    }
    returnObj.experience = experienceResult
    returnObj.experienceCount = countResult[0].totalCount
    returnObj.filters = filters

    // return filters
    res.json(returnObj)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})
module.exports = router
