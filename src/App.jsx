import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TasksPage from './pages/Tasks'
import ApiPage from './pages/ApiPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const ThemeContext = createContext()

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/api" element={<ApiPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
