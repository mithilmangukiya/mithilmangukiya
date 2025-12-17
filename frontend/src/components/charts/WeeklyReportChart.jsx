import React from 'react'
import { Line } from 'react-chartjs-2'
import './chartConfig'

const WeeklyReportChart = ({ data, weekFilter = 'this-week' }) => {
  // Default data if not provided
  const chartData = data || {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Revenue',
        data: [8, 12, 14, 16, 14, 18, 20],
        borderColor: '#4EA674',
        backgroundColor: 'rgba(78, 166, 116, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#4EA674',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 50,
        ticks: {
          callback: function(value) {
            return value + 'k'
          },
          stepSize: 10,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return <Line data={chartData} options={chartOptions} />
}

export default WeeklyReportChart

