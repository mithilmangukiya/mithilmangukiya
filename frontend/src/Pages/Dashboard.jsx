import { MoreOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'

const Dashboard = () => {
    return (

        <div className='flex flex-row justify-between gap-4'>
            <Card className='w-full '>
                <div className='top-5 left-5 '>
                    <div className='flex flex-row items-start justify-between'>
                        <p className='font-bold text-lg text-zinc-800'>Total Sales</p>
                        <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} />
                    </div>
                </div>
            </Card>
            <Card className='w-full'>
                <div className='top-5 left-5 '>
                    <div className='flex flex-row items-start justify-between'>
                        <p className='font-bold text-lg text-zinc-800'>Total Orders</p>
                        <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} />
                    </div>
                </div>
            </Card>
            <Card className='w-full'>
                <div className='top-5 left-5 '>
                    <div className='flex flex-row items-start justify-between'>
                        <p className='font-bold text-lg text-zinc-800'>Pending & Canceled</p>
                        <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Dashboard