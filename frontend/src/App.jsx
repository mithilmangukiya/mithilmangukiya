import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Dashboard from './Pages/Dashboard'
import OrderManagement from './Pages/OrderManagement'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import AdminRole from './Pages/AdminRole'
import { Avatar, Input, Dropdown, message } from 'antd'
import SearchIcon from './assets/search.png'
import BellIcon from './assets/Bell outline.png'
import { UserOutlined } from '@ant-design/icons'
import { logout as logoutApi, me as meApi } from './api/auth'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedPage, setSelectedPage] = useState('dashboard')
  const [user, setUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    const checkSession = async () => {
      try {
        const current = await meApi()
        setUser(current)
        setSelectedPage('dashboard')
      } catch (error) {
        setUser(null)
        setSelectedPage('login')
      } finally {
        setAuthChecked(true)
      }
    }
    checkSession()
  }, [])

  const handleLogout = async () => {
    try {
      await logoutApi()
    } catch (error) {
      // proceed even if logout request fails
      console.error(error)
    } finally {
      message.success('Logged out')
      setUser(null)
      setSelectedPage('login')
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleMenuClick = (key) => {
    setSelectedPage(key)
  }

  const renderPage = () => {
    if (!authChecked) {
      return <div className="flex items-center justify-center h-full">Loading...</div>
    }

    if (!user && selectedPage !== 'login' && selectedPage !== 'sign-up') {
      setSelectedPage('login')
      return <Login onSwitchPage={setSelectedPage} onAuthSuccess={setUser} />
    }

    switch (selectedPage) {
      case 'dashboard':
        return <Dashboard />
      case 'order-management':
        return <OrderManagement />
      case 'admin-role':
        return <AdminRole />
      case 'login':
        return <Login onSwitchPage={setSelectedPage} onAuthSuccess={setUser} />
      case 'sign-up':
        return <SignUp onSwitchPage={setSelectedPage} onAuthSuccess={setUser} />
      default:
        return <Dashboard />
    }
  }

  const getPageTitle = () => {
    switch (selectedPage) {
      case 'dashboard':
        return 'Dashboard'
      case 'order-management':
        return 'Order Management'
      case 'admin-role':
        return 'Admin Role'
      case 'login':
        return 'Login'
      case 'sign-up':
        return 'Sign Up'
      default:
        return 'Dashboard'
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} onMenuClick={handleMenuClick} selectedKey={selectedPage} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4 flex items-center gap-4">
         
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-600 hover:text-gray-900 p-2"
          >
            ☰
          </button>
          {/* <div className="flex justify-between gap-2"> */}
          <h1 className="text-xl font-lato font-bold text-teal-950">{getPageTitle()}</h1>
          <div className="flex-1 flex items-center justify-end gap-8">
            <Input
              placeholder="Search data, users, or reports"
              suffix={<img src={SearchIcon} alt="search" className="w-5 h-5" />}
              className="rounded-full max-w-md"
              style={{
                backgroundColor: '#F9FAFB',
                borderRadius: '9999px',
                height: '40px',
                border: 'none',
              }}
            />
            <img src={BellIcon} alt="bell" className="w-6 h-6" />
            {/* <Switch  size="default"  /> */}
            <Dropdown
              menu={{
                items: [
                  { key: 'profile', label: 'Profile (placeholder)', disabled: true },
                  { type: 'divider' },
                  { key: 'logout', label: 'Logout', onClick: handleLogout },
                ],
              }}
              trigger={['click']}
              placement="bottomRight"
            >
              <Avatar size={40} style={{ backgroundColor: '#87d068', cursor: 'pointer' }} icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </header>
        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App
