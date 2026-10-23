# 📦 Tuần 4: Quản Lý State Toàn Cục (Context API & Redux Toolkit)

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Môn học:** FER202 - Front-End Web Development with React  
> **Mã nguồn thực hành:** [`CODE/in-class/week-04-context/`](../../CODE/in-class/week-04-context/)

---

## 🎯 1. Tại Sao Phải Cần State Toàn Cục? (Vấn Nạn Props Drilling)

Khi ứng dụng React phát triển lớn:
* Một biến state nằm ở component ông cố (`App.jsx`), nhưng component chắt chít nằm sâu bên trong (`Button.jsx` hoặc `DeTu.jsx`) lại cần sử dụng hoặc cập nhật.
* **Cách cũ (Props Drilling):** Phải chuyền `props` qua từng tầng trung gian dù các tầng đó hoàn toàn không sử dụng. Code bị rối rắm, khó bảo trì.
* **Giải pháp:** Sử dụng **Context API** (sẵn có trong React) hoặc **Redux Toolkit** (thư viện ngoài chuyên nghiệp).

---

## 💡 2. Context API (`createContext` & `useContext`)

Context API hoạt động theo cơ chế **Nhà cung cấp (Provider)** và **Người tiêu thụ (Consumer / Hook `useContext`)**.

### Bước 1: Tạo Context & Provider
*(Xem ví dụ tại [`FavContext.jsx`](../../CODE/in-class/week-04-context/src/contexts/FavContext.jsx))*:
```jsx
import { createContext, useState } from "react";

// 1. Khởi tạo Context
export const FavContext = createContext();

// 2. Tạo Provider bọc quanh các component con
export const FavProvider = ({ children }) => {
  const [fav, setFav] = useState([{ id: 1, name: "banhflan" }]);

  const addToFav = (item) => {
    // Thêm món mới vào danh sách yêu thích bằng Spread Operator
    setFav([...fav, item]);
  };

  return (
    <FavContext.Provider value={{ fav, addToFav }}>
      {children}
    </FavContext.Provider>
  );
};
```

### Bước 2: Bọc Provider ở cấp cha (`App.jsx`)
```jsx
import { FavProvider } from './contexts/FavContext';

export default function App() {
  return (
    <FavProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </FavProvider>
  );
}
```

### Bước 3: Lấy dữ liệu và hàm ở component con bất kỳ (`useContext`)
*(Xem ví dụ tại [`Home.jsx`](../../CODE/in-class/week-04-context/pages/Home.jsx) và [`Fav.jsx`](../../CODE/in-class/week-04-context/pages/Fav.jsx))*:
```jsx
import { useContext } from 'react';
import { FavContext } from '../src/contexts/FavContext';

export default function Home() {
  // Bóc tách hàm addToFav trực tiếp từ Context, không qua props!
  const { addToFav } = useContext(FavContext);

  return (
    <button onClick={() => addToFav({ id: 2, name: "banhmi" })}>
      Thêm vào Yêu thích
    </button>
  );
}
```

---

## 🏪 3. Redux Toolkit (`@reduxjs/toolkit` & `react-redux`)

Khi ứng dụng cực lớn (như đồ án SWP), Redux Toolkit cung cấp một **Single Store** tập trung duy nhất và chuẩn hóa luồng dữ liệu (Data Flow).

### 4 Khái niệm cốt lõi:
1. **Store:** "Kho tổng" chứa toàn bộ state của ứng dụng.
2. **Slice:** Mỗi lát cắt chức năng (ví dụ `CounterSlice`, `AuthSlice`, `CartSlice`) chứa `initialState` và các `reducers`.
3. **`useSelector`:** Rút trích state từ Store về component (`const count = useSelector(state => state.counter.count)`).
4. **`useDispatch`:** Gửi hành động (Action) lên Store để kích hoạt Reducer thay đổi state (`dispatch(increment())`).

---

## ⚖️ 4. So Sánh Nhanh: Khi Nào Dùng Context API vs Redux?

| Tiêu chí | Context API | Redux Toolkit |
| :--- | :--- | :--- |
| **Cài đặt thư viện** | Không cần (Tích hợp sẵn trong React) | Cần cài `@reduxjs/toolkit react-redux` |
| **Độ phức tạp cấu hình** | Rất đơn giản, nhanh gọn | Cần thiết lập Slice, Store, Actions |
| **Quy mô dự án** | Vừa & nhỏ (Theme, Danh sách Yêu thích, User Login) | Lớn (Thương mại điện tử, SWP, Quản lý đa phân hệ) |
| **Tần suất cập nhật** | Thấp đến trung bình | Cao (Tối ưu render component con tốt hơn) |
