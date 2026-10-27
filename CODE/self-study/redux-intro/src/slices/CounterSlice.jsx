import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers:{
        increment: (state) => {
            state.count += 1
        }, 
        decrement: (state) => {
            state.count -=1;
            //mọi reducer đều nhận (state, action)
            //nếu có nút gửi dữ liệu thì phải cần thêm action
            //vì phải đọc action.payload
        }, incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice