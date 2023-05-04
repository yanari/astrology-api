const sweph = require('sweph')

const {
  SE_SUN,
  SE_MOON,
  SE_MERCURY,
  SE_VENUS,
  SE_MARS,
  SE_JUPITER,
  SE_SATURN,
  SEFLG_SWIEPH,
  SEFLG_SPEED,
} = sweph.constants

const PLANETS = {
  sun: SE_SUN,
  moon: SE_MOON,
  mercury: SE_MERCURY,
  venus: SE_VENUS,
  mars: SE_MARS,
  jupiter: SE_JUPITER,
  saturn: SE_SATURN,
}

const FLAG = SEFLG_SPEED | SEFLG_SWIEPH

module.exports = {
  PLANETS,
  FLAG,
}