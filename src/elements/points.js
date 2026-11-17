const { Elements } = require('../models/Signs')

// fixed order so the same chart always produces the same code, e.g. f4e2a3w4
const ORDER = [
  [Elements.Fire, 'f'],
  [Elements.Earth, 'e'],
  [Elements.Air, 'a'],
  [Elements.Water, 'w']
]

const POINTS_REGEX = /^f(\d{1,2})e(\d{1,2})a(\d{1,2})w(\d{1,2})$/

const encodePoints = (calculation) => {
  return ORDER.map(([element, letter]) => {
    const found = calculation.find((item) => item.name === element)
    return letter + (found ? found.points : 0)
  }).join('')
}

// returns { Fire: 4, Earth: 2, Air: 3, Water: 4 } or null when the code is invalid
const decodePoints = (code) => {
  const match = POINTS_REGEX.exec(String(code || '').toLowerCase())

  if (!match) {
    return null
  }

  const points = Object.fromEntries(ORDER.map(([element], i) => [element, Number(match[i + 1])]))
  const total = Object.values(points).reduce((acc, value) => acc + value, 0)

  return total > 0 ? points : null
}

module.exports = {
  ORDER,
  encodePoints,
  decodePoints
}
