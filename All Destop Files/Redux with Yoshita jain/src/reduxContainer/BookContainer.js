import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {purchaseBook} from './BookAction'

const BookContainer = () => {
    // state holds use useSelector
    // value return NumberOfBooks
  const noOfBooks = useSelector(state => state.NumberOfBooks)

  // it is return Dispatch function refrence
  const dispatch = useDispatch()
  return (
    <div>
      <h1>BookContainer</h1>
      <h2>No of Books - {noOfBooks}</h2>
      <button onClick={()=>{dispatch(purchaseBook())}}>Buy Book</button>
    </div>
  )
}

export default BookContainer;
