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

  if (isNaN(date.getTime()) || isNaN(parseFloat(latitude)) || isNaN(parseFloat(longitude))) {
    return res.status(400).json({ message: 'time, latitude and longitude are required and must be valid' })
  }

  const chart = astrologer.natalChart(date, latitude, longitude, houseSystem)

  const calculation = elements.getElementsCount(chart)

  const { dominant, lack, dominantTitle, lackTitle, ogTitle, params } = elements.getContent(calculation)

  const chartImage = await getChartImage(calculation)

  const zodiacSigns = Signs.getAllZodiacSymbolsByElement()

  res.status(200).json({
    p: elements.encodePoints(calculation),
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

// rebuilds a shared result from its points code (e.g. f4e2a3w4) without any birth data
router.get('/content', async (req, res) => {
  const points = elements.decodePoints(req.query.p)

  if (!points) {
    return res.status(400).json({ message: 'p must look like f4e2a3w4' })
  }

  const calculation = elements.getCalculationFromPoints(points)

  const { dominant, lack, dominantTitle, lackTitle, ogTitle, params } = elements.getContent(calculation)

  res.status(200).json({
    p: elements.encodePoints(calculation),
    calculation,
    dominant,
    lack,
    dominantTitle,
    lackTitle,
    ogTitle,
    params,
    zodiacSigns: Signs.getAllZodiacSymbolsByElement()
  })
})

module.exports = router
