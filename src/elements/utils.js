const joinEntries = (astros, axes) => {
  const all = [...Object.entries(astros), ...Object.entries(axes)];
  return all;
};

const joinValues = (astros, axes) => {
  const all = [...Object.values(astros), ...Object.values(axes)];
  return all;
};

const reduceInto = (dispositorPoints, astroPoints) => {
  const all = [...Object.entries(dispositorPoints), ...Object.entries(astroPoints),];
  const points = all.reduce((accumulator, [key, value], i) => {
    let pointToAdd = 0;
    const foundIndex = accumulator.findIndex((i) => key === i.name)
    const index = foundIndex > -1 ? foundIndex : i;

    if (accumulator[index]) {
      pointToAdd = accumulator[index].points;
    }

    accumulator[index] = {
      name: key,
      points: value + pointToAdd,
    }
    return accumulator
  }, []);
  return points.filter((item) => item !== null);
};

module.exports = {
  joinEntries,
  joinValues,
  reduceInto,
}