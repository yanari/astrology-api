const { PLANETS } = require('./Planets')

const SignsEnum = {
  Aries: 'Aries',
  Taurus: 'Taurus',
  Gemini: 'Gemini',
  Cancer: 'Cancer',
  Leo: 'Leo',
  Virgo: 'Virgo',
  Libra: 'Libra',
  Scorpio: 'Scorpio',
  Sagittarius: 'Sagittarius',
  Capricorn: 'Capricorn',
  Aquarius: 'Aquarius',
  Pisces: 'Pisces'
}

const Elements = {
  Fire: 'Fire',
  Earth: 'Earth',
  Air: 'Air',
  Water: 'Water'
}

const Rulers = {
  [SignsEnum.Aries]: PLANETS.mars,
  [SignsEnum.Taurus]: PLANETS.venus,
  [SignsEnum.Gemini]: PLANETS.mercury,
  [SignsEnum.Cancer]: PLANETS.moon,
  [SignsEnum.Leo]: PLANETS.sun,
  [SignsEnum.Virgo]: PLANETS.mercury,
  [SignsEnum.Libra]: PLANETS.venus,
  [SignsEnum.Scorpio]: PLANETS.mars,
  [SignsEnum.Sagittarius]: PLANETS.jupiter,
  [SignsEnum.Capricorn]: PLANETS.saturn,
  [SignsEnum.Aquarius]: PLANETS.saturn,
  [SignsEnum.Pisces]: PLANETS.jupiter
}

const ZodiacSymbols = {
  [Elements.Water]: [
    {
      name: 'Scorpio',
      symbol: '♏︎'
    },
    {
      name: 'Pisces',
      symbol: '♓︎'
    },
    {
      name: 'Cancer',
      symbol: '♋︎'
    }
  ],
  [Elements.Fire]: [
    {
      name: 'Aries',
      symbol: '♈︎'
    },
    {
      name: 'Leo',
      symbol: '♌︎'
    },
    {
      name: 'Sagittarius',
      symbol: '♐︎'
    }
  ],
  [Elements.Earth]: [
    {
      name: 'Taurus',
      symbol: '♉︎'
    },
    {
      name: 'Virgo',
      symbol: '♍︎'
    },
    {
      name: 'Capricorn',
      symbol: '♑︎'
    }
  ],
  [Elements.Air]: [
    {
      name: 'Gemini',
      symbol: '♊︎'
    },
    {
      name: 'Libra',
      symbol: '♎︎'
    },
    {
      name: 'Aquarius',
      symbol: '♒︎'
    }
  ]
}

class Signs {
  static MappedSigns = {
    1: { name: SignsEnum.Aries, element: Elements.Fire },
    2: { name: SignsEnum.Taurus, element: Elements.Earth },
    3: { name: SignsEnum.Gemini, element: Elements.Air },
    4: { name: SignsEnum.Cancer, element: Elements.Water },
    5: { name: SignsEnum.Leo, element: Elements.Fire },
    6: { name: SignsEnum.Virgo, element: Elements.Earth },
    7: { name: SignsEnum.Libra, element: Elements.Air },
    8: { name: SignsEnum.Scorpio, element: Elements.Water },
    9: { name: SignsEnum.Sagittarius, element: Elements.Fire },
    10: { name: SignsEnum.Capricorn, element: Elements.Earth },
    11: { name: SignsEnum.Aquarius, element: Elements.Air },
    12: { name: SignsEnum.Pisces, element: Elements.Water }
  }

  static get (number) {
    return {
      name: Signs.MappedSigns[number].name,
      element: Signs.MappedSigns[number].element
    }
  }

  // static getZodiacSymbol (element, sign) {
  //   const zodiacSigns = ZodiacSymbols[element]
  //   return zodiacSigns.find(zodiacSign => zodiacSign.name === sign)
  // }

  static getAllZodiacSymbolsByElement () {
    return ZodiacSymbols
  }
}

module.exports = {
  Signs,
  Elements,
  Rulers,
  ZodiacSymbols
}
