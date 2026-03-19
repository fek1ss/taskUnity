'use client'

import { TaskCard } from "@/components/card/TaskCard";
import styles from "./KanbanColumn.module.scss";
import { KanbanColumnHeader } from "./KanbanColumnHeader";

type TaskCardProps = {
  title: string;
  description: string;
  assignee: string;
  date: string;
  time: string;
  commentsCount: number;
};

type KanbanColumnProps = {
  title: string;
  color: "#F3E788" | "#7AABF9" | "#7EF178";
  tasks: TaskCardProps[];
};

export function KanbanColumn({ title, color, tasks }: KanbanColumnProps) {
  const handleAddTask = () => {
    console.log("Добавление задачи...");
    // здесь позже будет твоя логика добавления задачи
  };

  return (
    <div  className={styles.column}>
      <KanbanColumnHeader title={title} color={color} onAddClick={handleAddTask} />

      <div className={styles.tasks} style={{ background: color }}>
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </div>
    </div>
  );
}