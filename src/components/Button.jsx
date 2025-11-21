import React from 'react'

export default function Button({ variant = 'primary', children, ...props }) {
  const base = 'px-4 py-2 rounded-md font-medium transition-transform active:scale-95'
  const styles = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white',
    danger: 'bg-red-600 text-white'
  }
  return (
    <button className={`${base} ${styles[variant] || styles.primary}`} {...props}>
      {children}
    </button>
  )
}