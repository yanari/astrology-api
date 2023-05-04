const { Rulers } = require('../models/Signs');
const { PLANETS } = require('../models/Planets');

const getAscendantDispositor = (axis, birthChart) => {

  const ascPlanet = axis.asc.sign.name;
  const sunPlanet = birthChart.astros.sun.sign.name;


  return {
    [calculateDispositor(ascPlanet, birthChart.astros)]: 1,
    [calculateDispositor(sunPlanet, birthChart.astros)]: 1,
  }
};

const calculateDispositor = (planetToCalculate, astros) => {
  const dispositor = Rulers[planetToCalculate];

  const dispositorsPlanet = Object.keys(PLANETS).find((key) => {
    return PLANETS[key] === dispositor;
  });

  const dispositorsPlanetElementInChart = Object.keys(astros).find((key) => {
    return key === dispositorsPlanet;
  });

  const planetInChart = astros[dispositorsPlanetElementInChart];

  return planetInChart.sign.element;
};

module.exports = { getAscendantDispositor }