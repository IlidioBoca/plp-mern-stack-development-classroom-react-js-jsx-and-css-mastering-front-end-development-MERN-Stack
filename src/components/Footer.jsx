import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t">
      <div className="container mx-auto px-4 py-4 text-center text-sm">
        © {new Date().getFullYear()} Ilídio Boca — Projeto Semana 3
      </div>
    </footer>
  )
}