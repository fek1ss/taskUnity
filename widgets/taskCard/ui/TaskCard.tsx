"use client"

import styles from "./TaskCard.module.scss"

type TaskCardProps = {
  title: string
  description: string
  assignee: string
  date: string
  time: string
  commentsCount: number
}

export function TaskCard({
  title,
  description,
  assignee,
  date,
  time,
  commentsCount,
}: TaskCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>

        <button className={styles.editButton}>✏️</button>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.footer}>
        <div className={styles.assignee}>
          <span>👤</span>
          <span>{assignee}</span>
        </div>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span>📅</span>
            <span>{date}</span>
          </div>

          <div className={styles.metaItem}>
            <span>⏰</span>
            <span>{time}</span>
          </div>

          <div className={styles.metaItem}>
            <span>💬</span>
            <span>{commentsCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
