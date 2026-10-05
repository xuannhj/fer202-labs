import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: 'counter',

    initialState: {
        count: 40
    },

    reducers: {
        //định nghĩa các hàm thay đổi
        //vd: hàm tăng giá trị count lên 1
        //action: hàm cụ thể để thay đổi state 
        increment: (state) => {
            //react toolkit cho phep viet giong nhu
            //la gan gtri moi cho state
            //nhung thuc chat no dung thu vien immer de viet code co ve nhu la gan gia tri - nhung thuc chat la tao ra mot ban sao cua state roi tra ve sau khi da thay doi gia tri count
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        //payload: thong tin ben ngoai gui kem vao 
        //vd: incrememntByAmount(10) -> payload sẽ là amount
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }

})
//ham createSlice() có sẵn trong thư viện toolkit, nó giúp mình tạo ra 1 slice (1 phần của store) bao gồm state, reducer và action
//name: tên của slice
//initialState: state ban đầu của slice, giá trị khởi tạo của state muốn quản lý. 
//trong initialState có thể là 1 object, 1 array, 1 string, 1 number, 1 boolean, 1 null, 1 undefined
//reducers: hàm xử lý các hành động thay đổi state, nhận vào state hiện tại và action, trả về state mới

//export các action để bên ngoài gọi
//CounterSlice.actions là 1 object chứa tất cả các action của slice: increment, decrement, incrementByAmount
export const { increment, decrement, incrementByAmount } = CounterSlice.actions

//export CounterSlice để cấu hình store (hoặc export CounterSlice.reducer)
export default CounterSlice