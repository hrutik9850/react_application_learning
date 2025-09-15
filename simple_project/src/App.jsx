import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
      
      <div className="w-full h-screen duration-300  " style= {{ backgroundColor: color }} >    
        <div className="fixed flex flex-wrap justify-center bootom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-color  px-3 py-2 rounded-3xl">
                  <button onClick={()=> setColor("olive")} className="outlinge-none bg-olive px-4 py-1 rounded-full text-white shadow-lg  "
                   style={{backgroundColor:"olive"}}>olive</button>
                  <button onClick={()=>setColor("Crimson")} className="outlinge-none px-4 py-1 rounded-full text-white shadow-lg "
                  style={{backgroundColor:"Crimson"}}>Crimson</button>
                  <button onClick={() => setColor("DarkOrchid")} className="outlinge-none px-4 py-1 rounded-full text-white shadow-lg "
                  style={{backgroundColor:"DarkOrchid"}}>DarkOrchid</button>
                  <button onClick={() => setColor("DarkSlateGray")} className="outlinge-none px-4 py-1 rounded-full text-white shadow-lg "
                  style={{backgroundColor:"DarkSlateGray"}}>DarkSlateGray</button>
                  <button onClick={()=> setColor("LightGreen")} className="outlinge-none px-4 py-1 rounded-full text-white shadow-lg "
                  style={{backgroundColor:"LightGreen"}}>LightGreen</button>
            
          </div>
        </div>
      </div>
    
  )
}

export default App
