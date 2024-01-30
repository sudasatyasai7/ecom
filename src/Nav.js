import React from 'react'
import './App.css';
import {useSelector} from 'react-redux'
export const Nav = () => {
  const sss=useSelector((state) =>state.reducer.cartValue.length)
  const aj=useSelector((state) =>state.reducer.totalPrice)
  return (
    <div className='auto' style={{textAlign:"center"}}>
      <button className='special'>Total Items :{sss} </button>
      <button className='special'>Total Price :{aj} </button>
    </div>
  )
}
export default Nav