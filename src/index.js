import React from 'react'; /* импортирование react*/
import ReactDOM from 'react-dom';/* импортирование react-dom*/
import App from './App';/*импортируем компонент App*/ 
/*Для того чтобы запустить всё приложение обращаемся к библиотеке ReactDom и вызываем метод render и складывваем в div с id 'root'*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
