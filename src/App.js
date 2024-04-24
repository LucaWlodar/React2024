import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [n,setn]=useState(0);
  const pepe=()=>{
    setn(n+1)
  }
  const restadorpepe=()=>{
    setn(n-1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo! {n}
        </p>
        <button onClick={() => pepe()}>Sumar</button>
        <button  onClick={()=> restadorpepe()}>Restar</button>
      </header>
    </div>
  );
}

export default App;
