const { getAscendantDispositor } = require('./getDispositorCount');
const { getAstroCount } = require('./getAstroCount');
// const { check29degrees } = require('./check29degrees');
const {
  joinEntries,
  reduceInto,
  getPercentage,
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


module.exports = {
  getElementsCount,
};