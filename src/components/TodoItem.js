import React from 'react'/* Импорт react */
/*Создание клмпоненты TodoItem*/
export default function TodoItem(props) { /* Экспорт компоненты TodoItems */
  const { todo, removeTodo, statusHandle } = props /* Введение переменных */
  return (
    <div
    /*Задание стилей для статуса */
      className={todo.completed ? 'todo-row complete' : 'todo-row'}
      style={{
        backgroundColor:
          todo.status === 'waiting' /* Если стоит статус waiting, то цвет серый */
            ? 'gray'
            : todo.status === 'progress' /* Если стоит статус progress, то цвет голубой, иначе зеленый */
            ? 'blue'
            : 'green',
      }}
    >
      <h4 /*Обрезание конца наименования задачи*/
        style={{
          maxWidth: '400px', /* максимальнная ширина */
          overflow: 'hidden', /* Обрезаем всё за пределами блока */
          textOverflow: 'ellipsis', /* Добавляем многоточие */
        }}
      >
        {todo.title}
      </h4>
      <div className="iconsContainer"> {/*Создание класса iconsContainer. Наименование статуса задачи(кнопки).*/}
        <button onClick={() => statusHandle(todo.id)} className="click-btn"> {/* Функця нажатия на кнопку */}
          {todo.status === 'waiting' /* Если кнопка в статусе waiting, тогда напистаь ожидание */
            ? 'ожидание'
            : todo.status === 'progress' /* Если кнопка в статусе progress, тогда написать в процессе, иначе выполнена */
            ? 'в процессе'
            : 'выполнена'}
        </button>
        <button onClick={() => removeTodo(todo.id)} className="click-btn"> {/* Создание кнопки: удаление задачи из списка */}
          Удалить
        </button>
      </div>
    </div>
  )
}
