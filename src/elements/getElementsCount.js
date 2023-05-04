const { getAscendantDispositor } = require('./getDispositorCount');
const { getAstroCount } = require('./getAstroCount');

const getElementsCount = (chart) => {
  const { astros, axes } = chart;

  const all = [...Object.entries(astros), ...Object.entries(axes)];

  const astroPoints = getAstroCount(all);

  const dispositorPoints = getAscendantDispositor(all);

  return {
    ...dispositorPoints,
    ...astroPoints
  };
};

module.exports = {
  getElementsCount,
};