import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../App'

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">Semana 3</Link>
        <div className="flex items-center gap-4">
          <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>Home</NavLink>
          <NavLink to="/tasks" className={({ isActive }) => isActive ? 'underline' : ''}>Tasks</NavLink>
          <NavLink to="/api" className={({ isActive }) => isActive ? 'underline' : ''}>API</NavLink>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-3 py-1 rounded-md border"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}