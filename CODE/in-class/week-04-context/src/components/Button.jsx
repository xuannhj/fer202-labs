import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../slices/CounterSlice'

//5. để thay đổi state, dùng hook useDispatch() để đưa thông tin hàm muốn gọi 
//dispatch: là 1 hàm để gửi action đến reducer để thay đổi state
//khi bam onclick, dispatch sẽ gọi action trong CounterSlice để thay đổi state.count
export default function Button() {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(10)
    return (
        <>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <br/>
            <input
            value={amount} onChange={(e) => setAmount(Number(e.target.value))}
            />
            <button onClick={() => dispatch(incrementByAmount(amount))}> + by amount </button>
        </>
    )
}
//onChange: 
//e:
//target 
//khi ma thay nhap so vo trong cai o, 
