
import { useState ,useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const[password ,setPassword] = useState("");
  //useRef for input field
  const passwordRef = useRef(null);
  const passwordGenerater = useCallback(() => { 
    let password = "";
    let result = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed)str +="0123456789";
    if(charAllowed)str +="!@#$%^&*()_+";
    for(let i=0;i < length;i++){
       result = Math.floor(Math.random() * str.length +1);
      password += str.charAt(result);
    }
    setPassword(password);
   },[length,numberAllowed,charAllowed])
    
   //copy password function
   const copyPasswordClickBord= useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
   },[password ])

   useEffect(() => {
    passwordGenerater();
   },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h3 className="text-2xl text-white text-center py-4">Password Generater</h3>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordClickBord}
          className="outline-none   py-0.5 px-3 shrink-0 text-blue hover:text-blue transition-colors"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-4">
        <div className="flex items-center gap-x-2">
          <label>
            Length: {length}
            <input
              type="range"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              min="8"
              max="12"
              className="accent-blue-500"
            />
          </label>

          <label className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-blue-500"
            />
            Number
          </label>

          <label className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-blue-500"
            />
            Special Char
          </label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
