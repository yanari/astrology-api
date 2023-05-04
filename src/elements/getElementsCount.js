const { getAscendantDispositor } = require('./getDispositorCount');
const { getAstroCount } = require('./getAstroCount');

const getElementsCount = (chart) => {
  const { astros, axes } = chart;

  const all = [...Object.entries(astros), ...Object.entries(axes)];

  const astroPoints = getAstroCount(all);

  const dispositorPoints = getAscendantDispositor(axes, chart);

  const points = reduceInto(dispositorPoints, astroPoints)
  
  return points;
};

const reduceInto = (dispositorPoints, astroPoints) => {
  const points = Object.entries(dispositorPoints).reduce((accumulator, [key, _]) => {
    accumulator[key] = accumulator[key] + dispositorPoints[key]
    return accumulator;
  }, astroPoints);
  return points;
};

module.exports = {
  getElementsCount,
};