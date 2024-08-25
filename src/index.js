import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyFun()
{
  const x=[];
  const first=()=>{x.push('9');}
  const second=()=>{x.push('8');}
  const third=()=>{x.push('7');}
  const fourth=()=>{x.push('6');}
  const fifth=()=>{x.push('5');}
  const sixth=()=>{x.push('4');}
  const seventh=()=>{x.push('3');}
  const eighth=()=>{x.push('2');}
  const nineth=()=>{x.push('1');}
  const tenth=()=>{x.push('0');}
  const dbzero=()=>{x.push('00');}
  const doth=()=>{x.push('.');}
  const back=()=>{x.pop();}
  const reset=()=>{window.location.reload()}
  const division=()=>{x.push('/');}
  const mul=()=>{x.push('*');}
  const minus=()=>{x.push('-');}
  const plus=()=>{x.push('+');}
  const fill=()=>{
  let y=x.join("");
  let z=eval(y);
  document.getElementById('demo').innerHTML=y+" = "+z;
  }
  return(
  <>
  <h1>calculator</h1>
  <div>
    <p id='demo'></p>
    <table>
      <tr>
        <td><button id='cancel' onClick={reset}>C</button></td>
        <td><button id='back' onClick={back}>b</button></td>
        <td><button onClick={division}>/</button></td>
        <td><button onClick={mul}>*</button></td>
      </tr>
      <tr>
        <td><button onClick={first}>9</button></td>
        <td><button onClick={second}>8</button></td>
        <td><button onClick={third}>7</button></td>
        <td><button onClick={minus}>-</button></td>
      </tr>
      <tr>
      <td><button onClick={fourth}>6</button></td>
      <td><button onClick={fifth}>5</button></td>
      <td><button onClick={sixth}>4</button></td>
      <td><button onClick={plus}>+</button></td>
      </tr>
      <tr>
      <td><button onClick={seventh}>3</button></td>
      <td><button onClick={eighth}>2</button></td>
      <td><button onClick={nineth}>1</button></td>
      <td rowSpan={2}><button id="btn" style={{backgroundColor:'chartreuse'}} onClick={fill}>=</button></td>
      </tr>
      <tr>
      <td><button onClick={tenth}>0</button></td>
      <td><button onClick={dbzero}>00</button></td>
      <td><button onClick={doth}>.</button></td>
      </tr>
    </table>
  </div>
  </>);
}







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyFun />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
