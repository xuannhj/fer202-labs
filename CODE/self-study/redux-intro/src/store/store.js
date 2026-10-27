import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/CounterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

export default store

//xây cái kho và khai báo: trong kho có ngăn counter (dùng reducer của counterSlice)