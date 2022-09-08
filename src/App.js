/*Импорт библиотеки React, стилей и компонентов*/
import React, { useEffect, useMemo, useState } from 'react'  
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

/*Создание функции приложения*/
function App() {
  const [todos, setTodos] = useState([]) /*Объявление пустого массива нашего списка задач*/
  const [sortedText, seSortedText] = useState('') /*Объявление новой переменной состояня sortedText*/

  const [widths, setWidths] = useState([0.5, 0.5]) /*Объявление новой переменной состояния ширины*/

  useEffect(() => {},)

  /*Функция добавления задания в список по title*/
  const addTodo = (title) => { /*Создаём массив addTodo по title*/
    let id = 1 /*Задаём временной значение переменной id =1*/
    if (todos.length > 0) { /*Если количество переменных > 0, тогда зизменяем значение id*/
      id = todos[0].id + 1
    }
    let todo = { id: id, title: title, status: 'waiting' } /*передаём новые значения переменным (id, title, ststus)*/
    let newTodos = [todo, ...todos] /*Заполняем массив*/
    setTodos(newTodos) /*Сохраняем значение*/
  }

  /*Функция удаления задачи по id*/
  const removeTodo = (id) => {  /*Задаём удаление значений по id*/
    let updatedTodos = [...todos].filter((todo) => todo.id !== id) /*Удаляем задачу*/
    setTodos(updatedTodos)/*Созханяем значение*/
  }

  /*Функция изменения значение переменной status*/
  const updateStatus = (todo) => { /**/
    switch (todo.status) { /* Создаём инструкцию на изменения статуса */
      case 'waiting':  /*Если статус = waiting, тогда статус изменится на progress*/
        return { ...todo, status: 'progress' }
      case 'progress': /*Если статус = progress, тогда статус изменится на complete*/
        return { ...todo, status: 'complete' }
      case 'complete': /*Если статус = complete, тогда статус изменится на  waiting*/
        return { ...todo, status: 'waiting' }
        default: 
        return null
    }
  }

  /*Изменение ширины списка*/
  const changeWidth = (e) => { /*Создаём значение щирины*/
    const left = document.querySelector('.todo-items') /*Задаём левое значение*/
    const leftWidth = getComputedStyle(left).width /*Задаём прамаеры изменения*/
    const right = document.querySelector('.todo-form') /*Задаём парвое значение*/
    const rightWidth = getComputedStyle(right).width /*Задаём прамаеры изменения*/
    console.log(leftWidth) /*Вывод значения*/
    console.log(rightWidth) /*ВЫвод значения*/
    setWidths([0.4, 0.6]) /*Параметры сдвига*/
  }
/* Изменение статуса задачи */
  const statusHandle = (id) => {
    let updatedTodos = todos.map((todo) => { /* Поиск по массиву todo по которому кликнули  */
      if (todo.id === id) {
        todo = updateStatus(todo) /* изменение статуса */
      }
      return todo /* Возврат значения */
    })
    setTodos(updatedTodos) /* Изменение стэйта Todos */
  }

  /*Функция сортировки по поиску задачи*/
  const sortedTodos = useMemo(() => { /*Создаём мемоизированную переменную фильтрованного массива*/
    const newTodos = todos.filter(  /*Задаём параметры сортировки по item*/
      (item) =>
        item.title.toLowerCase().indexOf(sortedText.toLowerCase()) !== -1,
    )
    return newTodos /*Возвращаём полуенное значение*/
  }, 
  [todos, sortedText]) /*Отслеживаемые переменные */


  /*Возвращаём верстку*/
  return ( 
    <div className="todo-app">   {/* Создаём класс todo-app */}
      <h1>Todo List</h1> {/* задаём наименование заголовока списку задач */}
      <div className="todo-container" > {/* Создаём класс todo-container */}
        <div
          className="todo-items" /*Создаём класс todo-items*/
          style={{ flex: widths[0], paddingLeft: 30, paddingRight: 30 }} /* Задаём стиль для класса */
        >
          <input
            value={sortedText} /*Установка атрибута Value для поля ввода  в котором буду отображаться значения sortedText*/
            onChange={(e) => seSortedText(e.target.value)} /*Изменение значение с помощью обработчика*/
            className="todo-input" /*Создание класса todo-input */
            placeholder="Поиск..." /* Дефолтное значение input*/
          />
          
          {/* Рендер сортированного списка по параметрам */}
          {sortedTodos.map((todo) => {
            return (
              <TodoItem
                removeTodo={removeTodo}
                statusHandle={statusHandle}
                todo={todo}
                key={todo.id}
              />
            )
          })}
        </div>

        {/* Создание класса todo-border для изменения ширины */}
        <div className="todo-border" onClick={changeWidth}></div>
        <TodoForm addTodo={addTodo} width={widths[1]} /> {/* Форма для создания Todo */}
      </div>
    </div>
  )
}

export default App
