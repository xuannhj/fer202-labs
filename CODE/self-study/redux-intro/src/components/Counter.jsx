import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../slices/CounterSlice'

export default function Counter() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
  return (
            <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
  )
}
