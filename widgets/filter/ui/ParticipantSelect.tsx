'use client'

import { useState } from 'react'
import styles from './ParticipantSelect.module.scss'

export function ParticipantSelect() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('Выберите участника')

  const participants = [
    'Kairzhanov Damir',
    'Aruzhan Mustafina',
    'Aruzhan Smarulova',
    'Agilya Ismailova',
  ]

  return (
    <div className={styles.participantSelect}>
      {/* Header */}
      <div
        onClick={() => setOpen(prev => !prev)}
        className={styles.selectHeader}
      >
        <span>{selected}</span>

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
      </div>

      {/* Options */}
      {open && (
        <ul className={styles.options}>
          {participants.map(p => (
            <li
              key={p}
              onClick={() => {
                setSelected(p)
                setOpen(false)
              }}
              className={styles.option}
            >
              {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
