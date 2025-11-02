import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculator from './calculator';
import Quiz from './Quiz';
import Weather from './Weather';
import Stopwatch from './Stopwatch';
import PasswordStrengther from './PasswordStrengther';
//import Todo from './Todo';
import Business from './Business';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
   <>
     <App></App>
<Quiz></Quiz>
<PasswordStrengther></PasswordStrengther>
<Stopwatch></Stopwatch>
<Calculator/>
<Weather></Weather>
   </>
  
     
    
    

    
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
