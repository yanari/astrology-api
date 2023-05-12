const QuickChart = require('quickchart-js');

const getChartImage = async (calculation) => {
  const labels = calculation.map(i => i.name);
  const percentage = calculation.map(i => i.percentage);
  const colors = calculation.map(i => i.color);

  const chart = new QuickChart();
  chart.setConfig({
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: percentage,
        backgroundColor: colors,
        fontColor: 'white'
      }],
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
  });

  const url = await chart.getShortUrl();

  console.log(url);
  
  return url;
};

module.exports = { getChartImage }