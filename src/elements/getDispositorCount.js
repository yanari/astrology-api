const { Rulers } = require('../models/Signs')
const { PLANETS } = require('../models/Planets')

const getAscendantDispositor = (axis, birthChart) => {
  const ascPlanet = axis.asc.sign.name
  const sunPlanet = birthChart.astros.sun.sign.name

  // both dispositors can fall in the same element, so add instead of overwriting
  const points = {}
  for (const sign of [ascPlanet, sunPlanet]) {
    const element = calculateDispositor(sign, birthChart.astros)
    points[element] = (points[element] || 0) + 1
  }
  return points
}

const calculateDispositor = (planetToCalculate, astros) => {
  const dispositor = Rulers[planetToCalculate]

  const dispositorsPlanet = Object.keys(PLANETS).find((key) => {
    return PLANETS[key] === dispositor
  })

  const dispositorsPlanetElementInChart = Object.keys(astros).find((key) => {
    return key === dispositorsPlanet
  })

  const planetInChart = astros[dispositorsPlanetElementInChart]

  return planetInChart.sign.element
}

module.exports = { getAscendantDispositor }
