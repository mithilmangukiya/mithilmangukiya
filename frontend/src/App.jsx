import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
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
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center gap-4 mb-4">
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
            </div>
            
            <div className="card bg-white p-6 rounded-lg shadow-md">
              <button 
                onClick={() => setCount((count) => count + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                count is {count}
              </button>
              <p className="mt-4 text-gray-600">
                Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
              </p>
            </div>
            
            <p className="text-center mt-6 text-gray-500">
              Click on the Vite and React logos to learn more
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
