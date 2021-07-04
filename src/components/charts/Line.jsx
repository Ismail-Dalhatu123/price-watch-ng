import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: '# of Submissions',
      data: [12, 19, 3, 5, 2, 3, 14, 5, 0, 14, 24, 69],
      fill: false,
      backgroundColor: 'rgb(255, 0, 0)',
      borderColor: 'rgba(255, 0, 0, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
    <div>
        <Line data={data} options={options} />
    </div>
);

export default LineChart;