import { ArrowDownOutlined, ArrowUpOutlined, MoreOutlined } from '@ant-design/icons'
import { Button, Card, Divider } from 'antd'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='flex flex-row justify-between gap-4'>
            <Card className='w-full '>
                <div className='top-5 left-5'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row items-start justify-between'>
                                <p className='font-bold text-lg text-zinc-800'>Total Sales</p>
                                <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} />
                            </div>
                            <p className='font-regular text-sm text-gray-500'>Last 7 days</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4 items-center justify-start'>
                                <p className='font-bold text-2xl text-teal-950'>$350K</p>
                                <p className='font-regular text-base text-black'>Sales <ArrowUpOutlined style={{ fontSize: '16px', color: '#1EB564' }} /><span className='font-medium text-sm text-green-500'>10.4%</span></p>
                            </div>
                            <p className='font-regular text-sm text-gray-500'>Previous 7days <span className='font-bold text-sm text-indigo-500'>($235)</span></p>
                        </div>
                        <div className='flex flex-row gap-4 items-center justify-end'>
                            <Button className='Details-btn'>Details</Button>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className='w-full'>
                <div className='top-5 left-5'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row items-start justify-between'>
                                <p className='font-bold text-lg text-zinc-800'>Total Orders</p>
                                <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} />
                            </div>
                            <p className='font-regular text-sm text-gray-500'>Last 7 days</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4 items-center justify-start'>
                                <p className='font-bold text-2xl text-teal-950'>10.7K</p>
                                <p className='font-regular text-base text-black'>order <ArrowUpOutlined style={{ fontSize: '16px', color: '#1EB564' }} /><span className='font-medium text-sm text-green-500'>14.4%</span></p>
                            </div>
                            <p className='font-regular text-sm text-gray-500'>Previous 7days <span className='font-bold text-sm text-indigo-500'>(7.6K)</span></p>
                        </div>
                        <div className='flex flex-row items-center justify-end'>
                            <Button className='Details-btn'>Details</Button>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className='w-full'>
                <div className='top-5 left-5 '>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row items-start justify-between'>
                                <p className='font-bold text-lg text-zinc-800'>Pending & Canceled</p>
                                <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} />
                            </div>
                            <p className='font-regular text-sm text-gray-500'>Last 7 days</p>
                        </div>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-row items-start justify-between'>
                                    <p className='font-regular text-sm text-black'>Pending</p>
                                    {/* <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} /> */}
                                </div>
                                <p className='font-bold text-2xl text-teal-950'>509 <span className='font-normal text-base text-green-500'>user 204</span></p>
                            </div>
                            <Divider orientation='vertical' className='divider-vertical' />
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-row items-start '>
                                    <p className='font-regular text-sm text-black'>Canceled</p>
                                    {/* <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} /> */}
                                </div>
                                <p className='font-bold text-2xl text-red-500'>94  <ArrowDownOutlined style={{ fontSize: '16px', color: '#F87272' }} /><span className='font-normal text-base text-red-400'>14.4%</span></p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-end'>
                            <Button className='Details-btn'>Details</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Dashboard