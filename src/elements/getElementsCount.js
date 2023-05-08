const { getAscendantDispositor } = require('./getDispositorCount');
const { getAstroCount } = require('./getAstroCount');
// const { check29degrees } = require('./check29degrees');
const {
  joinEntries,
  reduceInto,
  getPercentage,
  getElementsNamesSet,
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

  console.log('highest', highest)
  console.log('lowest', lowest);

  const dominantJson = getJsonFor(calculation, highest, 'dominant');
  const lackJson = getJsonFor(calculation, lowest, 'lack');

  return {
    dominant: dominantJson,
    lack: lackJson,
  };
};

const getJsonFor = (calculation, arraySet, filePrefix) => {
  const elements = calculation.filter((element) => {
    return arraySet.includes(element.name);
  });

  const jsonFiles = elements.map((element) => {
    const elementName = element.name.toLowerCase();
    return require(`../content/${filePrefix}_${elementName}.json`);
  });
  console.log(jsonFiles);
  return jsonFiles;
};

module.exports = {
  getElementsCount,
  getContent,
};