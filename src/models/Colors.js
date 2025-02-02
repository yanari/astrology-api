const { Elements } = require('./Signs')

const TailwindColors = {
  [Elements.Air]: 'amber-300',
  [Elements.Earth]: 'lime-800',
  [Elements.Water]: 'teal-600',
  [Elements.Fire]: 'red-800'
}

const RGBColors = {
  // [Elements.Air]: 'rgb(249, 199, 79)', // #f9c74f
  [Elements.Air]: 'rgb(252,211,77)',
  // [Elements.Earth]: 'rgb(58, 90, 64)', // #3a5a40
  [Elements.Earth]: 'rgb(63,98,18)',
  // [Elements.Water]: 'rgb(42, 157, 143)', // #2A9D8F
  [Elements.Water]: 'rgb(13,148,136)',
  // [Elements.Fire]: 'rgb(155, 34, 38)', //  #9b2226
  [Elements.Fire]: 'rgb(153,27,27)'
}

module.exports = { TailwindColors, RGBColors }
