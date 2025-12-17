import React, { useState } from 'react'
import { Card, Input, Button, Avatar, Select, DatePicker, Space } from 'antd'
import { EditOutlined, ShareAltOutlined, EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, CalendarOutlined, PlusOutlined, DeleteOutlined, EditFilled, UserOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

const { TextArea } = Input
const { Option } = Select

const AdminRole = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showReenterPassword, setShowReenterPassword] = useState(false)
  const [showProfilePassword, setShowProfilePassword] = useState(false)

  const [formData, setFormData] = useState({
    firstName: 'Wade',
    lastName: 'Warren',
    email: 'wade.warren@example.com',
    phone: '(406) 555-0120',
    dateOfBirth: dayjs('1999-01-12'),
    location: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    creditCard: '843-4359-4444',
    biography: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, dateOfBirth: date }))
  }

  return (
    <div className="flex gap-6 flex-col lg:flex-row">
      {/* Left Column */}
      <div className="flex flex-col gap-6 flex-1">
        {/* Profile Section */}
        <Card className="w-full">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-teal-950">Profile</h2>
              <div className="flex gap-2">
                <Button type="text" icon={<EditOutlined />} />
                <Button type="text" icon={<ShareAltOutlined />} />
              </div>
            </div>

            {/* Avatar and User Info */}
            <div className="flex flex-col items-center gap-4">
              <Avatar size={120} src="https://i.pravatar.cc/150?img=12" icon={<UserOutlined />} />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-teal-950">{formData.firstName} {formData.lastName}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-600">{formData.email}</span>
                  <Button type="text" size="small" icon={<EditOutlined />} />
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-600">Linked with Social media</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">G</div>
                  <span className="text-sm font-medium">Linked</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">f</div>
                  <span className="text-sm font-medium">Linked</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">X</div>
                  <span className="text-sm font-medium">Linked</span>
                </div>
              </div>
              <Button 
                type="default" 
                icon={<PlusOutlined />} 
                className="w-full rounded-full"
                style={{ height: '40px' }}
              >
                Social media
              </Button>
            </div>
          </div>
        </Card>

        {/* Change Password Section */}
        <Card className="w-full">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-teal-950">Change Password</h2>
              <div className="flex items-center gap-2">
                <a href="#" className="text-sm text-blue-600">Need help?</a>
                <InfoCircleOutlined className="text-gray-400" />
              </div>
            </div>

            {/* Current Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Current Password</label>
              <Input.Password
                placeholder="Enter password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{ height: '48px' }}
              />
              <a href="#" className="text-sm text-blue-600">Forgot Current Password? Click here</a>
            </div>

            {/* New Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">New Password</label>
              <Input.Password
                placeholder="Enter password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{ height: '48px' }}
              />
            </div>

            {/* Re-enter Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Re-enter Password</label>
              <Input.Password
                placeholder="Enter password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{ height: '48px' }}
              />
            </div>

            {/* Save Button */}
            <Button 
              type="primary" 
              className="w-full"
              style={{ 
                backgroundColor: '#4EA674', 
                height: '48px',
                borderColor: '#4EA674'
              }}
            >
              Save Change
            </Button>
          </div>
        </Card>
      </div>

      {/* Right Column */}
      <div className="flex-1">
        <Card className="w-full">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-teal-950">Profile Update</h2>
              <Button 
                type="text" 
                icon={<EditOutlined />}
                onClick={() => setIsEditing(!isEditing)}
              >
                Edit
              </Button>
            </div>

            {/* Avatar Upload */}
            <div className="flex items-center gap-4">
              <Avatar size={80} src="https://i.pravatar.cc/150?img=12" icon={<UserOutlined />} />
              <div className="flex gap-2">
                <Button 
                  type="primary"
                  style={{ backgroundColor: '#4EA674', borderColor: '#4EA674' }}
                >
                  Upload New
                </Button>
                <Button>
                  Delete
                </Button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <Input 
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                //   disabled={!isEditing}
                  style={{ height: '48px' }}
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <Input 
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                //   disabled={!isEditing}
                  style={{ height: '48px' }}
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <Input.Password
                  placeholder="Enter password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                //   disabled={!isEditing}
                  style={{ height: '48px' }}
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <Input.Group compact>
                  <Select 
                    defaultValue="us" 
                    style={{ width: '80px' }}
                    // disabled={!isEditing}
                  >
                    <Option value="us">
                      <span className="text-xl">🇺🇸</span>
                    </Option>
                  </Select>
                  <Input 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    // disabled={!isEditing}
                    style={{ width: 'calc(100% - 80px)', height: '38px' }}
                  />
                </Input.Group>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">E-mail</label>
                <Input 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                //   disabled={!isEditing}
                  style={{ height: '48px' }}
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                <DatePicker
                  value={formData.dateOfBirth}
                  onChange={handleDateChange}
                //   disabled={!isEditing}
                  format="DD- MMMM- YYYY"
                  suffixIcon={<CalendarOutlined />}
                  style={{ width: '100%', height: '48px' }}
                />
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <Input 
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                // disabled={!isEditing}
                style={{ height: '48px' }}
              />
            </div>

            {/* Credit Card */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Credit Card</label>
              <Input 
                value={formData.creditCard}
                onChange={(e) => handleInputChange('creditCard', e.target.value)}
                // disabled={!isEditing}
                prefix={
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  </div>
                }
                suffix={<span className="text-gray-400">▼</span>}
                style={{ height: '48px' }}
              />
            </div>

            {/* Biography */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Biography</label>
              <div className="relative">
                <TextArea
                  value={formData.biography}
                  onChange={(e) => handleInputChange('biography', e.target.value)}
                  placeholder="Enter a biography about you"
                  rows={6}
                //   disabled={!isEditing}
                  style={{ paddingBottom: '40px' }}
                />
                <div className="absolute bottom-2 right-2 flex gap-2">
                  <Button 
                    type="text" 
                    icon={<EditFilled />}
                    // disabled={!isEditing}
                  />
                  <Button 
                    type="text" 
                    // icon={<MagicWandOutlined />}
                    // disabled={!isEditing}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AdminRole
