const { PLANETS, position, planets } = require('./astros')
const { houses } = require('./houses')
const charts = require('./charts')

module.exports = {
  houses,
  position,
  PLANETS,
  planets,
  ...charts
}
