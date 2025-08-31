import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter ,setCounter]= useState(15)
  // let counter = 5;

   const addValue =() =>{
    console.log("add value called " + Math.random());
    if(counter >= 20){
      alert("counter value should not exceed 20");
      return;
    }
  
    setCounter(counter +1);
   }
   const removeValue =() =>{
   if(counter <= 0){
    alert("counter value should not be less than 0");
    return;
   }
    setCounter(counter -1);
    }

  return (
    <>
      <h1>Counter App</h1>
      <h2> counter value :{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
