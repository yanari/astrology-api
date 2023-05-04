const sweph = require('sweph')

const {
  SE_SUN,
  SE_MOON,
  SE_MEAN_APOG,
  SE_MERCURY,
  SE_VENUS,
  SE_MARS,
  SE_JUPITER,
  SE_SATURN,
  SE_URANUS,
  SE_NEPTUNE,
  SE_PLUTO,
  SE_VESTA,
  SE_JUNO,
  SE_CHIRON,
  SE_CERES,
  SE_PALLAS,
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
  uranus: SE_URANUS,
  neptune: SE_NEPTUNE,
  pluto: SE_PLUTO,
  chiron: SE_CHIRON,
  lilith: SE_MEAN_APOG,
  ceres: SE_CERES,
  vesta: SE_VESTA,
  pallas: SE_PALLAS,
  juno: SE_JUNO
}

const FLAG = SEFLG_SPEED | SEFLG_SWIEPH

module.exports = {
  PLANETS,
  FLAG,
}