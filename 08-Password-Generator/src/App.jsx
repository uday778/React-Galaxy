import { useState, useCallback, useEffect , useRef} from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)

  const [numberAllowed, setnumberAllowed] = useState(false);

  const [charAllowed, setcharAllowed] = useState(false);

  const [password, setpassword] = useState();
  
  //useref hook 
  const passowrdref=useRef(null);


  const passwordGenerator = useCallback(() => {

    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*_-+=~`"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)


  }, [length, numberAllowed, charAllowed, setpassword])
  //setpassword is added in dependencies to change passowrd in every rerender

  const copyPasswordToClipboard=useCallback(()=>{
    passowrdref.current?.select();
    // passowrdref.current?.setSelectionRange(0,6)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passowrdref}
            
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={16}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input
      type='checkbox'
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={()=>{
        setnumberAllowed((prev)=>!prev)
      }}
      />
      <label>Numbers</label>
      <input
      type='checkbox'
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={()=>{
        setcharAllowed((prev)=>!prev)
      }}
      />
      <label>Characters</label>
      </div>
      
    </div>
</div>
    
  )
}

        export default App
