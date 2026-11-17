const QuickChart = require('quickchart-js')

const getChartImage = async (calculation) => {
  const labels = calculation.map(i => i.name)
  const percentage = calculation.map(i => i.percentage)
  const colors = calculation.map(i => i.color)

  const chart = new QuickChart()
  chart.setConfig({
    type: 'pie',
    data: {
      labels,
      datasets: [{
        data: percentage,
        backgroundColor: colors,
        fontColor: 'white'
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        }
      }
    }
  })

  // the image is optional: a QuickChart outage must not break the whole horoscope
  try {
    return await chart.getShortUrl()
  } catch (e) {
    console.error('QuickChart failed', e.message)
    return chart.getUrl()
  }
}

module.exports = { getChartImage }
