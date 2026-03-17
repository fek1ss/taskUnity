'use client'

import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
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
      <div
        onClick={() => setOpen(prev => !prev)}
        className={styles.selectHeader}
      >
        <span>{selected}</span>

        {open ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}
      </div>

      <ul
        className={`${styles.options} ${open ? styles.open : ''}`}
      >
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

    </div>
  )
}
