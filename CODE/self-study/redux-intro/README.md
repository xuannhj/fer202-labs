# 🟣 Redux Toolkit Từ Đầu — `redux-intro`

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Môn học:** FER202 - Front-End Web Development with React  
> **Tài liệu lý thuyết đi kèm:** [`NOTES/07-context-redux/02_redux_toolkit_hoc_tu_dau.md`](../../../NOTES/07-context-redux/02_redux_toolkit_hoc_tu_dau.md)

Dự án tự học **Redux Toolkit (`@reduxjs/toolkit` + `react-redux`)** từ con số 0, giúp nắm vững luồng dữ liệu một chiều (One-Way Data Flow) trước khi áp dụng vào bài toán gọi API bất đồng bộ.

---

## ✅ Tiến Độ Thực Hành

### Vòng 1: Counter Slice Cơ Bản (Hoàn thành ✅)
- **`src/slices/CounterSlice.jsx`:** Khởi tạo slice bằng `createSlice` với `initialState: { count: 0 }` và 3 reducers (`increment`, `decrement`, `incrementByAmount` dùng `action.payload` và cơ chế bản nháp **Immer**).
- **`src/store/store.js`:** Khởi tạo kho trung tâm bằng `configureStore({ reducer: { counter: counterSlice.reducer } })`.
- **`src/main.jsx`:** Bọc toàn bộ `<App />` trong `<Provider store={store}>`.
- **`src/components/Counter.jsx`:**
  - Dùng `useSelector((state) => state.counter.count)` để **đọc & bám** theo giá trị trong kho.
  - Dùng `useDispatch()` để **gửi phiếu yêu cầu** (`dispatch(increment())`, `dispatch(decrement())`, `dispatch(incrementByAmount(5))`).

### Vòng 2: Gọi API Bất Đồng Bộ Với `createAsyncThunk` (Sắp làm ⏳)
- Kết nối endpoint MockAPI hoa lan (`VITE_API_URL`) qua `createAsyncThunk` và `extraReducers` (3 trạng thái: `pending`, `fulfilled`, `rejected`).

---

## 🚀 Hướng Dẫn Chạy Dự Án

```bash
cd "CODE/self-study/redux-intro"
npm install
npm run dev
```
