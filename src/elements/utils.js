const joinEntries = (astros, axes) => {
  const all = [...Object.entries(astros), ...Object.entries(axes)];
  return all;
};

const joinValues = (astros, axes) => {
  const all = [...Object.values(astros), ...Object.values(axes)];
  return all;
};

const reduceInto = (dispositorPoints, astroPoints) => {
  const points = Object.entries(dispositorPoints).reduce((accumulator, [key, _]) => {
    accumulator[key] = accumulator[key] + dispositorPoints[key]
    return accumulator;
  }, astroPoints);
  return points;
};

module.exports = {
  joinEntries,
  joinValues,
  reduceInto,
}