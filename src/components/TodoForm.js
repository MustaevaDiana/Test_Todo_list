import React, { useState } from 'react'/* Испорт react */
/* Создание компоненты  TodoForms */
export default function TodoForm(props) { /* Экспорт компоненты TodoForms */
  const [title, setTitle] = useState('') /* Создание стэйта названия Todo */

  const handleSubmit = (e) => {  /* Добавление Todo */
    e.preventDefault() /* Отмена действий по умолчанию */
    if (title) { /*Проверка текста на содержимое */
      props.addTodo(title) /* Пополнение функции addTodo полученной из props */
      setTitle('') /* Очистка input */
    } else {
      alert(`Введите название`)
    }
  }

  return (
    <form /* Создание формы Todo */
      onSubmit={handleSubmit}
      className="todo-form"
      style={{ flex: props.width }}
    >
      <input /* Создание input со значением title */
        value={title}
        onChange={(e) => setTitle(e.target.value)} /* Присваивание значений при изменении текста */
        className="todo-input"
        placeholder="Название"
      />
      <button type="submit" className="todo-button"> {/* Создание кнопки добавить */}
        Добавить Todo
      </button>
    </form>
  )
}
