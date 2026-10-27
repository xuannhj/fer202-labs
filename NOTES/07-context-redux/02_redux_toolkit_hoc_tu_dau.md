# 🏪 Tuần 5 (Tự học): Redux Toolkit Từ Đầu — Ẩn Dụ Tiệm 24/7 & Dự Án `redux-intro`

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170
> **Dự án thực hành:** [`CODE/self-study/redux-intro/`](../../CODE/self-study/redux-intro/)
> **Trình độ khi viết bài này:** Mới nắm sương sương Counter slice đầu tiên (chưa đi sâu).

---

## 🏪 1. Ẩn Dụ Gốc: Tiệm 24/7 Có Kho Hàng

Redux giải quyết vấn đề **props drilling** + **nhiều component chia sẻ 1 dữ liệu nhưng nằm ở 2 nhánh khác nhau** + **không ai "làm chủ" state (ai đổi gì, lúc nào?)**.

Cách của Redux: gom hết state vào **1 kho duy nhất**, ai muốn đọc/đổi phải qua quy trình cứng.

### 4 nhân vật cốt lõi

| Vai | Tên Redux | Nhiệm vụ |
| :--- | :--- | :--- |
| Kho tổng (duy nhất) | **Store** | Nơi chứa toàn bộ state — "single source of truth" |
| Ngăn kéo chuyên ngành | **Slice** | 1 phần của kho: `initialState` + quy tắc đổi hàng |
| Phiếu yêu cầu | **Action** | "Tôi muốn làm gì đó", có thể kèm **payload** (hàng gửi kèm) |
| Nhân viên kho | **Reducer** | **Người duy nhất được đụng kho**: nhận (state cũ + phiếu) → trả state mới |

**`react-redux`** không nằm trong bảng — nó là **dây điện nối kho với các quầy (component)**:
- `<Provider>` = kéo **đường dây điện chính** vào nhà (bọc 1 lần duy nhất ở `main.jsx`)
- `useSelector` = **ổ điện đọc** (gọi trong từng component)
- `useDispatch` = **ổ điện viết** (gọi trong từng component)

> ⚠️ **Provider KHÔNG "gồm" useSelector/useDispatch.** 3 thứ này là 3 thành phần riêng cùng nằm trong package `react-redux`. Provider là đường dây, 2 hook là ổ điện — có đường dây thì mới có ổ điện, nhưng đường dây không phải là ổ điện.

### 2 gói = 2 vai

| Gói | Vai |
| :--- | :--- |
| `@reduxjs/toolkit` | Người **xây & quản lý kho**: `createSlice()`, `configureStore()`, tự sinh actions |
| `react-redux` | Người **lắp dây điện**: `<Provider>`, `useSelector`, `useDispatch` |

---

## 🔄 2. Luồng 1 Chiều (Vòng Tuần Hoàn — Phải Nhớ)

```
Bấm nút (quầy)
  ① dispatch(incrementByAmount(10))     → khách "viết phiếu"
  ② Store nhận phiếu, tra sổ theo action.type
      'counter/incrementByAmount' → reducer nào?
  ③ Reducer chạy: state.count += action.payload
      (Immer tạo bản state MỚI)
  ④ Store lưu state mới → mọi component đang
      useSelector bám vào count → TỰ render lại (không ai gọi lại gì)
```

**Data chỉ chảy 1 chiều: Component → Store → Component. Không có gì chảy ngược.**

### ⚠️ Chỗ hay nhầm nhất: 2 thời điểm khác nhau

| Thời điểm | Chạy gì | Bao nhiêu lần |
| :--- | :--- | :--- |
| **Xây kho** (app khởi động) | `createSlice()` sinh reducers + actions; `configureStore()` lắp vào kho | **1 lần duy nhất**, xong không chạy lại |
| **Khi bấm nút** (runtime) | Chỉ **reducer** (đã sinh sẵn) chạy — KHÔNG phải `createSlice` chạy lại | Mỗi lần bấm 1 lần |

> ❌ Lầm tưởng: "bấm nút → store zô createSlice". createSlice là **thợ xây** — xây xong kho thì về. Bấm nút là gọi **nhân viên** (reducer), không gọi thợ xây.

---

## 📦 3. 3 File & 3 Vai Trong Project (Thứ Tự Ghi Nhớ)

| File | Bên nào | Nhiệm vụ |
| :--- | :--- | :--- |
| `slices/CounterSlice.jsx` | Kho | Khai báo ngăn "counter": tên, state ban đầu, 3 quy tắc đổi |
| `store/store.js` | Kho | Lắp ngăn counter vào kho tổng (chỉ lấy `.reducer`) |
| `components/Counter.jsx` | Quầy (React) | Hiển thị count + 3 nút bấm → `useSelector`/`useDispatch` |

Thứ tự đúng: **kho trước, quầy sau** (slice → store → Provider trong main.jsx → component).

---

## 📝 4. Bộ Code Đã Gõ Trong `redux-intro` (Ghi Nhớ Cú Pháp)

### 4.1 `CounterSlice.jsx` (khoảng 20 dòng — "trái tim" của Redux)

```jsx
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',                       // → quyết định state.counter.count
    initialState: { count: 0 },           // hàng ban đầu trong ngăn
    reducers: {
        increment: (state) => {
            state.count += 1              // Immer lo bản sao, cứ viết "trông như mutate"
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {   // có "gửi hàng kèm" → cần action
            state.count += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
//        ^ component import CÁI NÀY (phiếu)
export default counterSlice
//        ^ store.js import CÁI NÀY (để lấy .reducer)
```

### 4.2 `store.js` (5 dòng — bản khai "kho gồm ngăn gì")

```jsx
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/CounterSlice'

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer   // tủ chỉ lấy "sách" (reducer), không lấy "bút + giấy" (actions)
    }
})
export default store
```

### 4.3 `main.jsx` (đóng điện 1 lần duy nhất)

```jsx
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(...).render(
  <Provider store={store}>     // bọc NGOÀI CÙNG, trên <App />
    <StrictMode>...</StrictMode>
  </Provider>
)
```

### 4.4 `Counter.jsx` (quầy: 1 dây đọc + 1 dây viết)

```jsx
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../slices/CounterSlice'
//      ^ phiếu lấy THẲNG từ slice, không qua store!

export default function Counter() {
    const count = useSelector(state => state.counter.count)
    //                                ^slice name (trong store.js)  ^trường (trong initialState)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            //      ^ con 5 là payload, reducer đọc action.payload
        </div>
    )
}
```

---

## 🧠 5. Những Chỗ Nhỏ Nhưng Phải Nắm

### 5.1 Immer (đã ghi chi tiết ở FAQ Câu 27)
- Luật Redux: **không sửa state cũ** (immutability) — vì React phát hiện đổi state bằng "object mới", sửa cũ → không render → bug.
- Immer (chạy ẩn trong RTK): em sửa **bản nháp (draft proxy)** trông như object thật; khi ra khỏi reducer, Immer **tự tạo object mới thật** và trả về.
- → Viết `state.count += 1` thoải mái, **không cần** `return { ...state, ... }` thủ công, **không cần return gì cả** (đặc quyền RTK).

### 5.2 Reducer có `action` hay không (đã ghi chi tiết ở FAQ Câu 28)
- Mọi reducer đều **nhận được** `(state, action)` — khác nhau ở **dùng tới hay không**.
- Nút cố định (+1, -1, toggle) → chỉ khai `(state)` (bỏ tham số thừa).
- Nút gửi dữ liệu (cộng số gõ, thêm item cart, user login) → khai `(state, action)` vì phải đọc `action.payload`.

### 5.3 `state.counter.count` — 2 chữ "counter" nghĩa khác nhau
- Chữ 1 = **tên slice** (em khai trong `store.js`: `reducer: { counter: ... }`)
- Chữ 2 = **tên trường** trong `initialState` (`{ count: 0 }`)
- Đổi tên slice → đổi cả chữ 1. Đổi tên trường → đổi cả chữ 2.

### 5.4 Payload giống payload trong JWT
- Cả 2 đều là "bì + hàng gửi kèm": JWT kèm user info (em học ở Lab 6 Q24), Redux action kèm giá trị (+5, item mới). **Kèm dữ liệu đi cùng mệnh lệnh, không truyền riêng.**

---

## ✅ 6. Kết Quả & Hạn Chế Hiện Tại

* ✅ Counter slice đầu tiên hoàn thành, 3 nút +1/-1/+5 chạy được (chưa chạy thử build).
* ⚠️ **Chưa học (chưa làm trong dự án):**
  - Chưa có màn hình "loading" khi gọi API bằng Redux (`createAsyncThunk` / RTK Query)
  - Chưa thêm **slice thứ 2** (để thấy nhiều slice ghép trong 1 store)
  - Chưa dùng **Redux DevTools** (mở DevTools xem từng action log lại)
  - Chưa phân biệt Context vs Redux ở bài tập thực tế (tuần 4 mới học so sánh nhanh)
