const { getAscendantDispositor } = require('./getDispositorCount');
const { getAstroCount } = require('./getAstroCount');
const { check29degrees } = require('./check29degrees');
const {
  joinEntries,
  joinValues,
  reduceInto,
} = require('./utils');

const getElementsCount = (chart) => {
  const { astros, axes } = chart;

  const all = joinEntries(astros, axes);

  const astroPoints = getAstroCount(all);
  
  const dispositorPoints = getAscendantDispositor(axes, chart);
  const values = joinValues(astros, axes);
  
  const splittedPoints = check29degrees(values);
  // console.log(dispositorPoints);

  const points = reduceInto(dispositorPoints, astroPoints)

  console.log(points);
  
  return points;
};


module.exports = {
  getElementsCount,
};