'use client'

import { useState } from 'react'

export function Header() {
  const isAdmin = true
  const [open, setOpen] = useState(false)

  return (
    <header style={{ background: '#D41E1C' }} className="px-16 h-24 w-full">
      <div className="flex items-center justify-between h-full">
        <h1 className="text-lg font-semibold">PR DEPARTMENT</h1>

        <nav className="relative flex items-center gap-4">
          {/* Кнопка */}
          <button
            onClick={() => setOpen(prev => !prev)}
            style={{ background: '#E21F1D'}}
            className="font-inter inline-flex items-center gap-1 rounded px-3 py-2 text-sm font-medium "
          >
            Доска
            <svg
              className={`h-4 w-4 transition-transform ${
                open ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m19 9-7 7-7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dropdown */}
          {open && (
            <div style={{background: "#E21F1D"}} className="absolute top-full left-0 mt-2 z-10 rounded-md shadow-md">
              <ul className="py-1 text-sm">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Личная
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Общая
                  </a>
                </li>
              </ul>
            </div>
          )}

          {isAdmin && (
            <button className="rounded px-3 py-2 text-sm hover:bg-gray-100">
              Departments
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}
