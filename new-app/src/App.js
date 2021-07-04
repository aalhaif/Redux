import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, log, contactAdded} from './action'
import { useState } from 'react'
const App = () => {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const contactList=useSelector(state=>state.contactList)
  const [phone, setPhone]=useState({})
  const dispatch = useDispatch()
  const handleChange =(event)=>{
    const att = event.target.name
    const value = event.target.value
    const updatedValue={...phone}
    updatedValue[att]=value
    console.log("updatedValue", updatedValue)
    setPhone(updatedValue)
    
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    dispatch(contactAdded(phone))
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged? <h2>Hello World</h2> : <h2>Bye World</h2>}
      <button onClick={() => dispatch(log())}>Click me</button>

      <ul>{contactList.map((item, index)=>{
        return(
          <div key={index}>
            <li>
              name {item.name}
              number {item.number}
            </li>
          </div>
        )
      })}

      </ul>


      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="number" onChange={handleChange} /> number
        </label>
        <label>
          <input type="text" name="name" onChange={handleChange} /> name
        </label>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}
export default App