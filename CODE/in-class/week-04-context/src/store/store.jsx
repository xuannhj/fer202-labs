import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../slices/CounterSlice'
//1. khởi tạo store từ các slice
const store = configureStore({
    reducer: {
        //định nghĩa reducer counter
        //sử dụng slice nào 
        //CounterSlice nãy mình định nghĩa bên kia 
        counter: CounterSlice.reducer
    }

})

export default store