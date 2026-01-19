import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [todo, setTodo] = useState([])


  const handelOnchange = (value) => {
    setInputValue(value)


  }

  let handelFormSubmit = (event) => {
    event.preventDefault()

    if (!inputValue) {
      return;
    }
    if (todo.includes(inputValue)) {
      setInputValue("")
      return;
    }

    setTodo((prev) => [...prev, inputValue])
    setInputValue("")

  }


  // for delete 
  // const hendelOnclick = (index) => {
  //   let result = todo.filter((_,idx)=> idx !== index){

  //   }
  // }


  return (
    <>
      <form onSubmit={handelFormSubmit}>
        <div className=' flex flex-col gap-4'>
          <h1 className='text-red-500 text-5xl'> Hello todo</h1>

          <div className=' w-1/5 bg-blue-950 text-white p-2'>
            <input value={inputValue}
              placeholder='Type your todo...'
              type="text"
              onChange={(event) => handelOnchange(event.target.value)}
            />
            <button className='p-3 ml-4 bg-green-800 rounded-md '>Add todo</button>


          </div>
        </div>
      </form>


      <section>
        {
          todo.map((item, index) => {
            return (
              <li className='flex gap-4' key={index}>
                {item}
                <button className='bg-red-800 rounded-2xl p-1.5' > delete</button>
              </li>
            )
          })
        }
      </section>
    </>
  )
}

export default App
