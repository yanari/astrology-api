const { ElementColors } = require('../models/Colors');

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
    const foundIndex = accumulator.findIndex((item) => key === item?.name)
    const index = foundIndex > -1 ? foundIndex : i;

    if (accumulator[index]) {
      pointToAdd = accumulator[index].points;
    }

    accumulator[index] = {
      name: key,
      points: value + pointToAdd,
      color: ElementColors[key],
    }
    return accumulator
  }, []);
  return points.filter((item) => item !== null);
};

const getPercentage = (reducedArray) => {
  const totalPoints = reducedArray.reduce((acc, element) => {
    acc += element.points;
    return acc;
  }, 0);
  
  return reducedArray.map(element => {
    const calculation = (element.points * 100) / totalPoints;
    return {
      percentage: parseFloat(calculation.toFixed(2)),
      ...element,
    };
  });
};

const getElementsNamesSet = (elements, filter) => {
  const elementsSet = elements.filter((item) => item.percentage === filter);
  return elementsSet.map(item => item.name);
};

module.exports = {
  joinEntries,
  joinValues,
  reduceInto,
  getPercentage,
  getElementsNamesSet,
}