import React from 'react'
import { useSelector } from 'react-redux'

//lamf sao tu counter len store de lay ra duoc gia tri count -> dung redux
//4. để truy cập thông tin store
//dùng hook useSelector
//khai báo biến count = useSelector(state => state.counter.count)
//state: là state hiện tại của store
//state.counter: là state của slice counter
//state.counter.count: là giá trị count trong state của slice counter
export default function Counter() {
    const count = useSelector(state => state.counter.count)
  return (
    <div>Counter: {count} </div>
  )
}
