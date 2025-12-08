import { Card } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined, MoreOutlined } from '@ant-design/icons'
import React from 'react'

const StatCard = ({ title, value, percentage, trend, description = 'Last 7 days' }) => {
  const getTrendIcon = () => {
    if (trend === 'up') {
      return <ArrowUpOutlined style={{ fontSize: '16px', color: '#1EB564' }} />
    } else if (trend === 'down') {
      return <ArrowDownOutlined style={{ fontSize: '16px', color: '#EF4343' }} />
    }
    return null
  }

  const getPercentageColor = () => {
    if (trend === 'up') {
      return 'text-green-500'
    } else if (trend === 'down') {
      return 'text-red-500'
    }
    return 'text-green-500'
  }

  return (
    <Card className='w-full'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row items-start justify-between'>
          <p className='font-bold text-lg text-zinc-800'>{title}</p>
          <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row gap-4 items-center justify-start'>
            <p className='font-bold text-2xl text-teal-950'>{value}</p>
            {percentage !== undefined && (
              <p className='font-regular text-base text-black'>
                {getTrendIcon()}
                <span className={`font-medium text-sm ${getPercentageColor()}`}>{percentage}%</span>
              </p>
            )}
          </div>
          <p className='font-regular text-sm text-gray-500'>{description}</p>
        </div>
      </div>
    </Card>
  )
}

export default StatCard

