import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <div>
      <button onClick={() => {
        document.querySelector('#oi').style.backgroundColor = 'black';
      }}>butão</button>
      <p id='oi'>oi</p>
      texto solto
      {[1, 2, 3, 4, 'banadadadsana', '   ', 'lol']}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
