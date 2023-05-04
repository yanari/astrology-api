# astrology-api

 ![Node.js CI](https://github.com/ryuphi/astrology-api/workflows/Node.js%20CI/badge.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/ryuphi/astrology-api/badge.svg)](https://coveralls.io/github/ryuphi/astrology-api) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/ryuphi/astrology-api?label=version)

## Getting started

### Prerequisites

* Nodejs >= 14 (also you can use docker)
* python (python is used for node-gyp to compile c++ swiss ephemeris library)

### Setup

0. You need to install dependencies of [node-gyp](https://github.com/nodejs/node-gyp) depending on your OS. Follow the instructions to install it depending on your OS [https://github.com/nodejs/node-gyp#installation](https://github.com/nodejs/node-gyp#installation)


1. Clone the repo

    ```bash
    git clone git@github.com:ryuphi/astrology-api.git
    ```

2. Install dependencies

    ##### without Docker

    ```bash
    npm install
    ```

    ```bash
    npm start
    ```

    *Also you can use `npm run dev`, this option run with nodemon to watch changes.*

### Usage

Example: Get the horoscope for date `1993-08-06`, time `16:50:00` with timezone `-04:00` at Santiago, Chile (latitude `-33.41167` and longitude `-70.66647`) using Placidus houses system.

Fist, you need to transform the date & time to ISO8601, for this example `1993-08-06T16:50:00-04:00`.

Second, __you must escape the date and time when you make the request__.
This is because if the time zone is with a positive sign, for example +05:00,
when sending it through the request, the url will take the + sign as a space and not as the + sign.
For this example it would be `1993-08-06T16%3A50%3A00-04%3A00`. See issue [#10](https://github.com/ryuphi/astrology-api/issues/10)

If you don't want to escape the date and time, you can always send it to UTC 🙂

In UTC: `1993-08-06T20:50:00Z`

Then, you need to select the house system from the houses system table.. in this case for the placidus system you need to send the `P` value in the `houseSystem` query param.

Now you can send this...

##### Using cURL

```bash
# escaped
curl --request GET \
  --url 'http://localhost:3000/horoscope?time=1993-08-06T16%3A50%3A00-04%3A00&latitude=-33.41167&longitude=-70.66647&houseSystem=P'
```

```bash
# in utc
curl --request GET \
  --url 'http://localhost:3000/horoscope?time=1993-08-06T20:50:00Z&latitude=-33.41167&longitude=-70.66647&houseSystem=P'
```


### House system table

The values from each house system is extracted from sweph source code

| Code value | House system |
|--- | ---
| A | equal | 
| B | Alcabitius |
| C | Campanus |
| D | equal (MC) |
| E | equal |
| F | Carter poli-equ. |
| G | Gauquelin sectors |
| H | horizon/azimut |
| I | Sunshine |
| i | Sunshine/alt. |
| K | Koch |
| L | Pullen SD |
| M | Morinus |
| N | equal/1=Aries |
| O | Porphyry |
| Q | Pullen SR |
| R | Regiomontanus |
| S | Sripati |
| T | Polich/Page |
| U | Krusinski-Pisa-Goelzer |
| V | equal/Vehlow |
| W | equal/ whole sign |
| X | axial rotation system/Meridian houses |
| Y | APC houses |

## Calculation Instructions – for assessing the Balance of Elements

### Give 2 points to each of the following elements:

- element of Sun sign
- element of Moon sign
Give 1 point to each of the following elements:

- element of Rising Sign (the Ascendant)
- element of midheaven sign (the M.C.)
- element of Mercury sign
- element of Venus sign
- element of Mars sign
- element of Jupiter sign
- element of Saturn sign
### Add an extra point for each of the following:

- element of the sign of the dispositor of the Ascendant (using traditional ruling planets, not Uranus, Neptune, or Pluto)
- element of the sign of the dispositor of the Sun (using traditional ruling planets)
If one of the above happens to be in the 29th degree of any sign, split the point between that element and the element of the next sign, since it is so close to 0° of the next sign. So give each element in that case half a point. There should be a total of 13 points. Now, count the points for each element.

An element is dominant if it gets 5 or more points, but 5 is not so bad. Having 6 or more points is overly dominant.

An element is weak (or lacking) if it gets zero points, or 1 point. Also, if it has 2 or more points but those happen to be the farther planets like Neptune and Pluto, then consider that element weak.