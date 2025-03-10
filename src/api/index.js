const Router = require('express-promise-router')
const astrologer = require('../astrologer')
const elements = require('../elements')
const { getChartImage } = require('../chart/getChartImage')
const { Signs } = require('../models/Signs')

const router = new Router()

router.get('/', async (req, res) => res.status(200).json({ message: 'Welcome to Astrology api!' }))

router.get('/horoscope', async (req, res) => {
  const date = new Date(req.query.time)
  const { latitude, longitude, houseSystem } = req.query

  const chart = astrologer.natalChart(date, latitude, longitude, houseSystem)

  const calculation = elements.getElementsCount(chart)

  const { dominant, lack, dominantTitle, lackTitle, ogTitle, params } = elements.getContent(calculation)

  const chartImage = await getChartImage(calculation)

  const zodiacSigns = Signs.getAllZodiacSymbolsByElement()

  res.status(200).json({
    calculation,
    dominant,
    lack,
    dominantTitle,
    lackTitle,
    chartImage,
    ogTitle,
    params,
    zodiacSigns
  })
})

module.exports = router
