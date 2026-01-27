import { ParticipantSelect } from "@/widgets/filter/ui/ParticipantSelect"
import { KanbanColumn } from "@/widgets/kanbanColumn/ui/KanbanColumn"
import styles from "./Board.module.scss"

export function Board() {
  return (
    <div className={styles.board}>
      <ParticipantSelect />

      <div className={styles.columns}>
        <KanbanColumn
          title="К исполнению"
          color="#F3E788"
          tasks={[
            {
              title: 'МЕРОПРИЯТИЕ С ДИП КЛУБОМ “SDG PROJECT EXHIBITION”',
              description: 'Описание задачи что-то написано, файл вложен...',
              assignee: 'Дамир Каиржанов',
              date: '22 – 26 ноября',
              time: '18:00',
              commentsCount: 3,
            },
          ]}
        />

        <KanbanColumn
          title="В процессе"
          color="#7AABF9"
          tasks={[
            {
              title: 'ЗАГОЛОВОК ЧТО-ТО НАПИСАНО ДЛИННОЕ ФАЛ',
              description: 'Описание задачи что-то написано...',
              assignee: 'Ксюша',
              date: '22 – 26 ноября',
              time: '18:00',
              commentsCount: 3,
            },
          ]}
        />

        <KanbanColumn
          title="Готово"
          color="#7EF178"
          tasks={[
            {
              title: 'ЗАГОЛОВОК ЧТО-ТО НАПИСАНО ДЛИННОЕ ФАЛ',
              description: 'Описание задачи что-то написано...',
              assignee: 'Еркежан',
              date: '22 – 26 ноября',
              time: '18:00',
              commentsCount: 3,
            },
          ]}
        />
      </div>
    </div>
  )
}
