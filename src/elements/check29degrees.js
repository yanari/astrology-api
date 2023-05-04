const check29degrees = (allValues) => {
  const has29Degrees = allValues.filter((value) => {
    return value.degrees === 29;
  });

  console.log(has29Degrees);
};

module.exports = {
  check29degrees,
}