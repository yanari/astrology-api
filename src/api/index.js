const Router = require('express-promise-router')
const astrologer = require('../astrologer')
const elements = require('../elements');

const router = new Router()

router.get('/', async (req, res) => res.status(200).json({ message: 'Welcome to Astrology api!' }))

router.get('/horoscope', async (req, res) => {
  const date = new Date(req.query.time)
  const { latitude, longitude, houseSystem } = req.query

  const chart = astrologer.natalChart(date, latitude, longitude, houseSystem)

  const calculation = elements.getElementsCount(chart);

  const { dominant, lack } = elements.getContent(calculation);

  res.status(200).json({
    // data: chart,
    calculation,
    dominant,
    lack,
  })
})


module.exports = router
