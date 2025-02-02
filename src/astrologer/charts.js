const { houses } = require('./houses')
const { planets } = require('./astros')

const natalChart = (date, latitude, longitude, houseSystem = 'P') => {
  const astrosList = planets(date)
  const housesList = houses(
    date, {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude)
    },
    houseSystem
  )

  return {
    astros: {
      ...astrosList
    },
    ...housesList
  }
}

module.exports = {
  natalChart
}
