import { ArrowDownOutlined, ArrowUpOutlined, MoreOutlined } from '@ant-design/icons'
import { Button, Card, Divider, Segmented, Table, Input } from 'antd'
import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import WeeklyReportChart from '../components/charts/WeeklyReportChart'
import UsersBarChart from '../components/charts/UsersBarChart'

const Dashboard = () => {
  const [weekFilter, setWeekFilter] = useState('this-week')

  // Line Chart Data for Report
  const lineChartData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Revenue',
        data: [15, 25, 45, 16, 30, 40, 20],
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

  // Bar Chart Data for Users
  const barChartData = {
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

  // Transaction Table Data
  const transactionColumns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      align: 'center',
    },
    {
      title: 'Id Customer',
      dataIndex: 'customerId',
      key: 'customerId',
      align: 'center',
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status) => (
        <span className="flex items-center justify-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor:
                status === 'Paid' ? '#1EB564' : status === 'Pending' ? '#F59E0B' : '#EF4343',
            }}
          />
          {status}
        </span>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      align: 'center',
      render: (amount) => <span className="font-semibold">${amount}</span>,
    },
  ]

  const transactionData = [
    {
      key: '1',
      no: '#6545',
      customerId: '#6545',
      orderDate: '01 Oct | 11:29 am',
      status: 'Paid',
      amount: 64,
    },
    {
      key: '2',
      no: '#5412',
      customerId: '#5412',
      orderDate: '01 Oct | 11:29 am',
      status: 'Pending',
      amount: 557,
    },
    {
      key: '3',
      no: '#6622',
      customerId: '#6622',
      orderDate: '01 Oct | 11:29 am',
      status: 'Paid',
      amount: 156,
    },
    {
      key: '4',
      no: '#6623',
      customerId: '#6623',
      orderDate: '01 Oct | 11:29 am',
      status: 'Paid',
      amount: 265,
    },
    {
      key: '5',
      no: '#6624',
      customerId: '#6624',
      orderDate: '01 Oct | 11:29 am',
      status: 'Pending',
      amount: 265,
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      {/* Top Stats Cards */}
      <div className="flex flex-row justify-between gap-4">
        <Card className="w-full">
          <div className="top-5 left-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-start justify-between">
                  <p className="font-bold text-lg text-zinc-800">Total Sales</p>
                  <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} />
                </div>
                <p className="font-regular text-sm text-gray-500">Last 7 days</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4 items-center justify-start">
                  <p className="font-bold text-2xl text-teal-950">$350K</p>
                  <p className="font-regular text-base text-black">
                    Sales <ArrowUpOutlined style={{ fontSize: '16px', color: '#1EB564' }} />
                    <span className="font-medium text-sm text-green-500">10.4%</span>
                  </p>
                </div>
                <p className="font-regular text-sm text-gray-500">
                  Previous 7days <span className="font-bold text-sm text-indigo-500">($235)</span>
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-end">
                <Button className="Details-btn">Details</Button>
              </div>
            </div>
          </div>
        </Card>
        <Card className="w-full">
          <div className="top-5 left-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-start justify-between">
                  <p className="font-bold text-lg text-zinc-800">Total Orders</p>
                  <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} />
                </div>
                <p className="font-regular text-sm text-gray-500">Last 7 days</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4 items-center justify-start">
                  <p className="font-bold text-2xl text-teal-950">10.7K</p>
                  <p className="font-regular text-base text-black">
                    order <ArrowUpOutlined style={{ fontSize: '16px', color: '#1EB564' }} />
                    <span className="font-medium text-sm text-green-500">14.4%</span>
                  </p>
                </div>
                <p className="font-regular text-sm text-gray-500">
                  Previous 7days <span className="font-bold text-sm text-indigo-500">(7.6K)</span>
                </p>
              </div>
              <div className="flex flex-row items-center justify-end">
                <Button className="Details-btn">Details</Button>
              </div>
            </div>
          </div>
        </Card>
        <Card className="w-full">
          <div className="top-5 left-5 ">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-start justify-between">
                  <p className="font-bold text-lg text-zinc-800">Pending & Canceled</p>
                  <MoreOutlined style={{ fontSize: '20px', color: '#6A717F' }} />
                </div>
                <p className="font-regular text-sm text-gray-500">Last 7 days</p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-start justify-between">
                    <p className="font-regular text-sm text-black">Pending</p>
                  </div>
                  <p className="font-bold text-2xl text-teal-950">
                    509 <span className="font-normal text-base text-green-500">user 204</span>
                  </p>
                </div>
                <Divider orientation="vertical" className="divider-vertical" />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-start ">
                    <p className="font-regular text-sm text-black">Canceled</p>
                  </div>
                  <p className="font-bold text-2xl text-red-500">
                    94{' '}
                    <ArrowDownOutlined style={{ fontSize: '16px', color: '#F87272' }} />
                    <span className="font-normal text-base text-red-400">14.4%</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-end">
                <Button className="Details-btn">Details</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Middle Section - Charts */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Report for this week - Line Chart */}
        <Card className="flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-teal-950">Report for this week</h2>
              <Segmented
                options={['This week', 'Last week']}
                value={weekFilter === 'this-week' ? 'This week' : 'Last week'}
                onChange={(value) => setWeekFilter(value === 'This week' ? 'this-week' : 'last-week')}
                className="tabs-segmented"
              />
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-5 gap-4">
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-teal-950">52k</p>
                <p className="text-sm text-gray-600">Customers</p>
                <div className="w-full h-1 bg-green-500 mt-1"></div>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-teal-950">3.5k</p>
                <p className="text-sm text-gray-600">Total Products</p>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-teal-950">2.5k</p>
                <p className="text-sm text-gray-600">Stock Products</p>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-teal-950">0.5k</p>
                <p className="text-sm text-gray-600">Out of Stock</p>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-teal-950">250k</p>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
            </div>

            {/* Line Chart */}
            <div style={{ height: '250px' }}>
              <WeeklyReportChart data={lineChartData} weekFilter={weekFilter} />
            </div>
          </div>
        </Card>

        {/* Right Column - Users and Sales by Country */}
        <div className="flex flex-col gap-6 lg:w-96">
          {/* Users in last 30 minutes */}
          <Card>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-teal-950">Users in last 30 minutes</h2>
              <p className="text-3xl font-bold text-teal-950">21.5K</p>
              <div style={{ height: '150px' }}>
                <UsersBarChart data={barChartData} />
              </div>
              <p className="text-sm text-gray-500 text-center">Users per minute</p>
            </div>
          </Card>

          {/* Sales by Country */}
          <Card>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-teal-950">Sales by Country</h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-medium">US</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">30k</span>
                    <span className="text-green-500 text-sm">↑ 25.8%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇧🇷</span>
                    <span className="font-medium">Brazil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">30k</span>
                    <span className="text-red-500 text-sm">↓ 15.8%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇦🇺</span>
                    <span className="font-medium">Australia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">25k</span>
                    <span className="text-green-500 text-sm">↑ 35.8%</span>
                  </div>
                </div>
              </div>
              <Button className="Details-btn w-full">View Insight</Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Section - Transaction Table and Top Products */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Transaction Table */}
        <Card className="flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-teal-950">Transaction</h2>
              <Button className="Details-btn">Filter</Button>
            </div>
            <Table
              columns={transactionColumns}
              dataSource={transactionData}
              pagination={false}
              className="table-custom"
            />
          </div>
        </Card>

        {/* Top Products */}
        <Card className="lg:w-96">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-teal-950">Top Products</h2>
              <a href="#" className="text-sm text-blue-600">
                All product
              </a>
            </div>
            <Input
              placeholder="Search products"
              prefix={<SearchOutlined />}
              className="rounded-lg"
            />
            <div className="flex flex-col gap-4">
              {/* Product 1 */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-teal-950">Apple iPhone 13</p>
                  <p className="text-sm text-gray-500">Item: #FXZ-4567</p>
                </div>
                <p className="font-bold text-teal-950">$999.00</p>
              </div>
              {/* Product 2 */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👟</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-teal-950">Nike Air Jordan</p>
                  <p className="text-sm text-gray-500">Item: #FXZ-4567</p>
                </div>
                <p className="font-bold text-teal-950">$72.40</p>
              </div>
              {/* Product 3 */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👕</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-teal-950">T-shirt</p>
                  <p className="text-sm text-gray-500">Item: #FXZ-4567</p>
                </div>
                <p className="font-bold text-teal-950">$35.40</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
