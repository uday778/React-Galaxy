import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")


  return (
   <div>
      <div className='w-full h-screen duration-200 transition-all relative' 
      style={{backgroundColor:color}}
      >
      <div className='fixed flex flex-wrap justify-center bottom-32 inset-x-0 px-2'>
        <div className='gap-3 bg-white flex flex-wrap justify-center shadow-lg px-2 rounded-3xl'>
        <button onClick={()=>setColor("red")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}
        >Red
        </button>
        <button onClick={()=>setColor("orange")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:"Orange"}}
        >Orange
        </button>

        <button onClick={()=>setColor("green")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:"Green"}}
        >Green
        </button>
        <button onClick={()=>setColor("olive")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:"olive"}}
        >Olive
        </button>
        <button onClick={()=>setColor("yellow")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:"Yellow"}}
        >Yellow
        </button>
        
        <button onClick={()=>setColor("indigo")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:"indigo"}}
        >Indigo
        </button>
      
        <button onClick={()=>setColor("violet")}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
          style={{backgroundColor:"violet"}}
        >Violet
        </button>
      
        

        </div>
      </div>
      
      </div>
   </div>
  )
}

export default App
