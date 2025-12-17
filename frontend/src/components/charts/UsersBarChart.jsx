import React from 'react'
import { Bar } from 'react-chartjs-2'
import './chartConfig'

const UsersBarChart = ({ data }) => {
  // Default data if not provided
  const chartData = data || {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Users per minute',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 500),
        backgroundColor: '#E5E7EB',
        borderRadius: 4,
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
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  }

  return <Bar data={chartData} options={chartOptions} />
}

export default UsersBarChart

