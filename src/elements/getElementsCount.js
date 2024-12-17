const { getAscendantDispositor } = require('./getDispositorCount');
const { getAstroCount } = require('./getAstroCount');
const { ElementColors } = require('../models/Colors');
// const { check29degrees } = require('./check29degrees');
const {
  joinEntries,
  reduceInto,
  getPercentage,
  getElementsNamesSet,
  getTitleForPresenting
} = require('./utils');

const getElementsCount = (chart) => {
  const { astros, axes } = chart;

  const all = joinEntries(astros, axes);

  const astroPoints = getAstroCount(all);
  
  const dispositorPoints = getAscendantDispositor(axes, chart);
  // const values = joinValues(astros, axes);
  
  // const splittedPoints = check29degrees(values);

  const points = reduceInto(dispositorPoints, astroPoints);

  const withPercentage = getPercentage(points);
  
  return withPercentage;
};

const getContent = (calculation) => {
  const percentages = calculation.map(i => i.percentage);
  const [highestElement, lowestElement] = [
    Math.max(...percentages),
    Math.min(...percentages),
  ];

  const [highest, lowest] = [
    getElementsNamesSet(calculation, highestElement),
    getElementsNamesSet(calculation, lowestElement),
  ];

  const dominantJson = getJsonFor(calculation, highest, 'dominant');
  const lackJson = getJsonFor(calculation, lowest, 'lack');

  const dominantTitle = getTitleForPresenting(highest, 'dominant');
  const lackTitle = getTitleForPresenting(lowest, 'lack');

  return {
    dominant: dominantJson,
    lack: lackJson,
    dominantTitle,
    lackTitle,
  };
};

const getJsonFor = (calculation, arraySet, filePrefix) => {
  const elements = calculation.filter((element) => {
    return arraySet.includes(element.name);
  });

  const jsonFiles = elements.map((element) => {
    const elementName = element.name.toLowerCase();
    const color = ElementColors[element.name]
    return {
      backgroundColor: 'bg-' + color,
      textColor: 'text-' + color,
      ...require(`../content/${filePrefix}_${elementName}.json`)
    };
  });
  return jsonFiles;
};

module.exports = {
  getElementsCount,
  getContent,
};