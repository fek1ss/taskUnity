'use client'

import { useState } from 'react'
import styles from './Header.module.scss'

export function Header() {
  const isAdmin = true
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>PR DEPARTMENT</h1>

        <nav className={styles.nav}>
          {/* Кнопка */}
          <button
            onClick={() => setOpen(prev => !prev)}
            className={`${styles.boardButton} ${open ? styles.active : ''}`}
          >
            Доска
            <svg
              className={`${styles.arrow} ${open ? styles.rotated : ''}`}
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
            <div className={styles.dropdown}>
              <ul>
                <li>
                  <a href="#">Личная</a>
                </li>
                <li>
                  <a href="#">Общая</a>
                </li>
              </ul>
            </div>
          )}

          {isAdmin && (
            <button className={styles.adminButton}>
              Departments
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}