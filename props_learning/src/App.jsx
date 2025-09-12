import { useState } from 'react'

import viteLogo from '/vite.svg'
import Profile from './card/profile.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

   let socila = { twitter: "#", linkedin: "#", github: "#" }  
  
  return (
    <>
      <div className="App" >
        name, role, image,bio,bio,social
        
        <Profile  name ="Alexandra Smith"role="CEO & Founder"image="https://picsum.photos/200?random=30" bio="Leading innovation in tech for over 15 years"social={socila} />
        <Profile  name ="Robert Johnson"role="CTO"image="https://picsum.photos/200?random=31" bio="Building scalable solutions for tomorrow"social />
        <Profile  name ="Maria Garcia"role="Head of Design"image="https://picsum.photos/200?random=32" bio="Creating beautiful experiences that matter"social />  
        </div>        
    </>
  )
}

export default App
