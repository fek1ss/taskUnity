'use client'

import styles from "./KanbanColumnHeader.module.scss";

type KanbanColumnHeaderProps = {
  title: string;
  color: string;
  onAddClick?: () => void; // функция для обработки клика по кнопке "+"
};



export function KanbanColumnHeader({ title, color, onAddClick }: KanbanColumnHeaderProps) {
  return (
        <div className={styles.header} style={{ backgroundColor: `${color}` }}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.addButton} onClick={onAddClick}>
            +
          </button>
        </div>
  );
}
