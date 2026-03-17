'use client'

import { useState } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { LuLayoutDashboard, LuUser, LuBuilding2 } from 'react-icons/lu'


export function Header() {
  const isAdmin = true
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>PR DEPARTMENT</h1>

        <nav className={styles.nav}>
          <div className={styles.boardWrapper}>
            <button
              onClick={() => setOpen(prev => !prev)}
              className={`${styles.boardButton} ${open ? styles.active : ''}`}
            >
              <LuLayoutDashboard size={18} />
              Доска
            </button>

            {open && (
              <div className={styles.dropdown}>
                <ul>
                  <li><a href="#">Личная</a></li>
                  <li><a href="#">Общая</a></li>
                </ul>
              </div>
            )}
          </div>

          {isAdmin && (
            <Link href="/admin" className={styles.navLink}>
              <LuBuilding2 size={18} />
              Департаменты
            </Link>
          )}

          <Link href="/profile" className={styles.navLink}>
            <LuUser size={18} />
            Профиль
          </Link>
        </nav>
      </div>
    </header>
  )
}
