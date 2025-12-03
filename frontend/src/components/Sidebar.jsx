import logo from '../assets/E-logo.png'
import MenuIcon from '../assets/Menu.png'
import { Menu } from 'antd';
import { HomeFilled, ShoppingCartOutlined } from '@ant-design/icons';

const Sidebar = ({ isOpen, toggleSidebar, onMenuClick, selectedKey }) => {
  const items = [
    {
      type: 'group',
      label: <span className="text-gray-500 font-regular">Main menu</span>,
      children: [
        {
          key: 'dashboard',
          icon: <HomeFilled style={{ fontSize: '22px' }} />,
          label: 'Dashboard',
        },
        {
          key: 'order-management',
          icon: <ShoppingCartOutlined style={{ fontSize: '22px' }} />,
          label: 'Order Management',
        },
        {
          key: 'customers',
          label: 'Customers',
        },
        {
          key: 'coupon-code',
          label: 'Coupon Code',
        },
        {
          key: 'categories',
          label: 'Categories',
        },
        {
          key: 'transaction',
          label: 'Transaction',
        },
        {
          key: 'brand',
          label: 'Brand',
        },
      ],
    },
    {
      type: 'group',
      label: <span className="text-gray-500">Product</span>,
      children: [
        {
          key: 'add-products',
          label: 'Add Products',
        },
        {
          key: 'product-media',
          label: 'Product Media',
        },
        {
          key: 'product-list',
          label: 'Product List',
        },
        {
          key: 'product-reviews',
          label: 'Product Reviews',
        },
      ],
    },
    {
      type: 'group',
      label: <span className="text-gray-500">Admin</span>,
      children: [
        {
          key: 'admin-role',
          label: 'Admin role',
        },
        {
          key: 'control-authority',
          label: 'Control Authority',
        },
      ],
    },
  ];

  return (
    <>
      <style>{`
        .ant-menu-item-selected {
          background-color: #4EA674 !important;
        }
        .ant-menu-item-selected .ant-menu-title-content {
          color: white !important;
        }
        .ant-menu-item-selected .anticon {
          color: white !important;
        }
      `}</style>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-emerald-500 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white text-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:static lg:z-auto w-64 shadow-lg`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5">
            <img src={logo} alt="logo" className="w-30 h-4.5" />
            <img src={MenuIcon} alt="menu" className="w-6 h-6" />
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            style={{ width: 256 }}
            items={items}
            onClick={({ key }) => {
              onMenuClick(key)
              // Close sidebar on mobile when menu item is clicked
              if (window.innerWidth < 1024) {
                toggleSidebar()
              }
            }}
          />

          {/* Menu Items */}
          {/* <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-gray-300 hover:text-white"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav> */}



          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="text-sm text-gray-400 text-center">
              © 2024 E-Commerce
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

