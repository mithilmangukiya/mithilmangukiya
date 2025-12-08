import { Avatar, Button, Card, Checkbox, Input, Segmented, Table, Tabs } from 'antd'
import React, { useState } from 'react'
import PlusIcon from '../assets/PlusIcon.png'
import { ArrowLeftOutlined, ArrowRightOutlined, MoreOutlined, UserOutlined } from '@ant-design/icons'
import StatCard from '../components/StatCard'
import BellIcon from '../assets/Bell outline.png'
import SearchIcon from '../assets/search.png'
import SortIcon from '../assets/sort.png'
import { CgSortAz } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";


const OrderManagement = () => {

  const [alignValue, setAlignValue] = useState('All order');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: 'No.',
      dataIndex: 'no',
      align: 'center',
      render: (text, record) => (
        <div className='flex flex-row items-center justify-center gap-2'>
          <Checkbox
            checked={selectedRowKeys.includes(record.key || record.no)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedRowKeys([...selectedRowKeys, record.key || record.no]);
              } else {
                setSelectedRowKeys(selectedRowKeys.filter(key => key !== (record.key || record.no)));
              }
            }}
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Order Id',
      dataIndex: 'orderId',
      align: 'center',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      align: 'center',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      align: 'center',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      align: 'center',
    },
    {
      title: 'Payment',
      dataIndex: 'payment',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
    }
  ];
  const data = [
    {
      key: '1',
      no: '1',
      orderId: 'John Brown',
      product: 32,
      date: 'New York No. 1 Lake Park',
      price: 32,
      payment: 'New York No. 1 Lake Park',
      status: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      no: '2',
      orderId: 'Jim Green',
      product: 42,
      date: 'London No. 1 Lake Park',
      price: 32,
      payment: 'New York No. 1 Lake Park',
      status: 'New York No. 1 Lake Park',
    },
    {
      key: '3',
      no: '3',
      orderId: 'Joe Black',
      product: 32,
      date: 'Sydney No. 1 Lake Park',
      price: 32,
      payment: 'New York No. 1 Lake Park',
      status: 'New York No. 1 Lake Park',
    },
    {
      key: '4',
      no: '4',
      orderId: 'Disabled User',
      product: 99,
      date: 'Sydney No. 1 Lake Park',
      price: 32,
      payment: 'New York No. 1 Lake Park',
      status: 'New York No. 1 Lake Park',
    },
  ];

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between'>
        <p className='font-bold text-xl text-teal-950'>Order List</p>
        <div className='flex flex-row items-center justify-start gap-3'>
          <Button className='Add-btn'><img src={PlusIcon} alt="PlusIcon" className='w-6 h-6' /> Add Order</Button>
          <Button className='More-Action-btn'>More Action <MoreOutlined style={{ fontSize: '20px', color: '#023337' }} /></Button>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between gap-4'>
        <StatCard
          title="Total Orders"
          value="1240"
          percentage="14.4"
          trend="up"
        />
        <StatCard
          title="New Orders"
          value="240"
          percentage="20"
          trend="up"
        />
        <StatCard
          title="Completed Orders"
          value="960"
          percentage="85"
        />
        <StatCard
          title="Canceled Orders"
          value="$350K"
          percentage="5"
          trend="down"
        />
      </div>
      <Card className='w-full'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-row items-center justify-between gap-4'>
            <Segmented
              value={alignValue}
              style={{ marginBottom: 8 }}
              onChange={setAlignValue}
              options={['All order', 'Completed', 'Pending', 'Canceled']}
              className='tabs-segmented'
            />
            <div className="flex-1 flex items-center justify-end gap-3">
              <Input
                placeholder="Search order report  "
                suffix={<img src={SearchIcon} alt="search" className="w-5 h-5" />}
                className="rounded-b-sm max-w-2xs"
                style={{
                  backgroundColor: '#F9FAFB',
                  borderRadius: '8px',
                  height: '40px',
                  border: 'none',
                }}
              />

              <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white cursor-pointer hover:bg-gray-50">
                <CgSortAz style={{ fontSize: '25px', color: '#4B5563' }} />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white cursor-pointer hover:bg-gray-50">
                <TbArrowsSort style={{ fontSize: '25px', color: '#4B5563' }} />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white cursor-pointer hover:bg-gray-50">
                <BsThreeDots style={{ fontSize: '25px', color: '#4B5563' }} />
              </div>
            </div>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            className='table-custom'
            pagination={{
              pageSize: 3,
              showPrevNextJumpers: false,
              showSizeChanger: false,
              showQuickJumper: false,
              showTotal: false,
              itemRender: (page, type, originalElement) => {
                if (type === 'prev') {
                  return <a className='next-btn'><ArrowLeftOutlined /> Previous</a>;
                }
                if (type === 'next') {
                  return <a className='next-btn'>Next <ArrowRightOutlined /></a>;
                }
                return originalElement;
              },
            }}
          />
        </div>
      </Card>
    </div>
  )
}

export default OrderManagement