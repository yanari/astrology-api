const getAstroCount = (allAspects) => {
  const astroPoints = allAspects.reduce((accumulator, [key, astro]) => {
    const element = astro.sign.element;

    if (!astro.name) {
      astro.name = key;
    }
    const points = (astro.name === 'sun' || astro.name === 'moon') ? 2 : 1;
    const elementCount = accumulator[element] || 0;

    accumulator[element] = points + elementCount;
    return accumulator;
  }, {})

  return astroPoints;
};

module.exports = { getAstroCount }