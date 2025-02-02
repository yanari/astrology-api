const sweph = require('sweph')
const { utcToJulianEt, zodiacSign, degreesToDms } = require('./utils')
const path = require('path')

const { FLAG, PLANETS } = require('../models/Planets')

sweph.set_ephe_path(path.join(__dirname, '/../../eph'))

const getPositionOfAstro = (astro, julianDay) => sweph.calc(julianDay, PLANETS[astro], FLAG)

const isRetrograde = (speed) => speed < 0

const position = (astrologyObject, moment) => {
  const julianDay = utcToJulianEt(moment)
  const { data } = getPositionOfAstro(astrologyObject, julianDay)
  const longitude = data[0]
  const speed = data[3]
  const dms = degreesToDms(longitude)
  const retrograde = isRetrograde(speed)

  return {
    ...dms,
    retrograde,
    sign: zodiacSign(longitude)
  }
}

const planets = (date) => {
  return Object.keys(PLANETS).reduce((accumulator, name) => {
    const planetPosition = position(name, date)
    accumulator[name] = {
      name,
      ...planetPosition
    }
    return accumulator
  }, {})
}

module.exports = {
  position,
  planets
}
