import { useState } from 'react'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: 'Home', icon: '🏠', path: '/' },
    { name: 'Products', icon: '🛍️', path: '/products' },
    { name: 'Categories', icon: '📦', path: '/categories' },
    { name: 'Cart', icon: '🛒', path: '/cart' },
    { name: 'Orders', icon: '📋', path: '/orders' },
    { name: 'Profile', icon: '👤', path: '/profile' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
  ]

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-auto w-64 shadow-lg`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-blue-400">E-Commerce</h2>
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-4">
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
          </nav>

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

