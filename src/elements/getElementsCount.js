const { getAscendantDispositor } = require('./getDispositorCount');
const { getAstroCount } = require('./getAstroCount');
const { 
  TailwindColors,
  RGBColors,
 } = require('../models/Colors');
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

  const { ogTitle, params } = getMeta(dominantTitle, highest);

  return {
    dominant: dominantJson,
    lack: lackJson,
    dominantTitle,
    lackTitle,
    ogTitle,
    params,
  };
};

const getMeta = (dominantTitle, highestElements) => {
  const pre = dominantTitle.replace('your', 'my');
  let elementNames = '';
  let params = '';
  const highestFirstLetter = highestElements.map((element) => Array.from(element)[0].toLowerCase());

  console.log(highestElements);

  if (highestElements.length > 1) {
    elementNames = highestElements.join(' and ');
    params = highestFirstLetter.join('');
  } else {
    elementNames = highestElements[0];
    params = highestFirstLetter[0];
  }
  return {
    ogTitle: `${pre} ${elementNames}`,
    params
  };
}

const getJsonFor = (calculation, arraySet, filePrefix) => {
  const elements = calculation.filter((element) => {
    return arraySet.includes(element.name);
  });

  const jsonFiles = elements.map((element) => {
    const elementName = element.name.toLowerCase();
    const tailwindColor = TailwindColors[element.name]
    const rgbColor = RGBColors[element.name]
    return {
      backgroundColor: 'bg-' + tailwindColor,
      textColor: 'text-' + tailwindColor,
      color: rgbColor,
      ...require(`../content/${filePrefix}_${elementName}.json`)
    };
  });
  return jsonFiles;
};

module.exports = {
  getElementsCount,
  getContent,
};