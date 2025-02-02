const check29degrees = (allValues) => {
  const has29Degrees = allValues.filter((value) => {
    return value.degrees === 29
  })

  if (has29Degrees.length > 0) {
    console.log(has29Degrees)
    // TODO: calculate when astro is 29 degrees
  }
}

module.exports = {
  check29degrees
}
