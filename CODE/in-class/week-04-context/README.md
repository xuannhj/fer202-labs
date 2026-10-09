# 📦 Week 4: State Management (Context API & Redux Toolkit) + Formik & Yup Validation

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Môn học:** FER202 - Front-End Web Development with React

---

## 🎯 Mục Tiêu Bài Học

Dự án thực hành **Tuần 4** tập trung vào các giải pháp quản lý State toàn cục (Global State Management), xử lý bất đồng bộ (Call API) và xử lý biểu mẫu xác thực dữ liệu (Form Handling & Validation) trong React:

1. **Context API (`createContext`, `useContext`)**:
   - Tránh hiện tượng **Props Drilling** (truyền props qua nhiều tầng component).
   - Xây dựng Provider component quản lý danh sách yêu thích (`FavContext`) và demo truyền dữ liệu nội bộ (`HangDongContext`).

2. **Redux Toolkit (`@reduxjs/toolkit` & `react-redux`)**:
   - Quản lý state tập trung tại một **Single Store** duy nhất.
   - Sử dụng `createSlice` để định nghĩa `name`, `initialState` và `reducers` (`increment`, `decrement`, `incrementByAmount`).
   - Cấu hình store với `configureStore`.
   - Kết nối component với Redux qua:
     - `<Provider store={store}>`: Bọc component cấp cao nhất.
     - `useSelector`: Lấy dữ liệu state từ store (vd: `state.counter.count`).
     - `useDispatch`: Gửi (dispatch) các action làm thay đổi state.

3. **Form Management & Validation (`Formik` + `Yup`)**:
   - Quản lý vòng đời dữ liệu Form gọn gàng thông qua Hook `useFormik`.
   - Xây dựng schema kiểm tra tính hợp lệ dữ liệu với `Yup.object()`, `.required()`, `.email()`, `.min()`.
   - Tích hợp trực tiếp với các thẻ giao diện của `React-Bootstrap` (`Form.Group`, `Form.Control`, `Form.Text`, `Form.Check`).
   - Quy tắc "4 điểm chạm": `name`, `value`, `onChange`, `onSubmit`.

4. **Call API & Asynchronous Handling**:
   - So sánh `fetch()` và `axios`.
   - Sử dụng `useEffect()` kết hợp `async/await` để load dữ liệu.
   - Tích hợp mock API (`drama.json` / `json-server` / `mockapi.io`).

---

## 📂 Cấu Trúc Thư Mục `week-04-context`

```text
week-04-context/
├── drama.json                 # Mock data danh sách drama
├── pages/                     # Các trang ứng dụng
│   ├── Fav.jsx                # Trang hiển thị danh sách yêu thích
│   └── Home.jsx               # Trang chủ hiển thị danh sách item
├── src/
│   ├── components/            # Components tái sử dụng
│   │   ├── Button.jsx         # Component nút bấm dispatch action (tăng/giảm/tăng theo amount)
│   │   ├── Counter.jsx        # Component hiển thị giá trị count qua useSelector
│   │   └── DeTu.jsx           # Demo tiêu thụ dữ liệu từ Context
│   ├── contexts/              # Context API Providers
│   │   ├── FavContext.jsx     # Context quản lý Favorite items
│   │   └── HangDongContext.jsx
│   ├── slices/                # Redux Toolkit Slices
│   │   └── CounterSlice.jsx   # Slice quản lý state Counter & reducers
│   ├── store/                 # Cấu hình Redux Store
│   │   └── store.jsx          # configureStore kết hợp các slices
│   ├── App.jsx                # Root Component demo Redux / Formik & Yup
│   └── main.jsx               # Entry point ứng dụng
├── package.json
└── vite.config.js
```

---

## 🛠️ Công Nghệ Sử Dụng

- **React 19** + **Vite**
- **Bootstrap 5** & **React-Bootstrap** (v2.x)
- **Formik** (v2.x) & **Yup** (v1.x)
- **@reduxjs/toolkit** (v2.x) & **react-redux** (v9.x)
- **React Router DOM** (v7.x)
- **Axios** (v1.x)
- **JSON-Server**

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### 1. Cài đặt các thư viện cần thiết:
```bash
npm install
```

*(Nếu cài thêm Formik + Yup vào project mới: `npm install formik yup`)*  
*(Nếu cài thêm Redux Toolkit: `npm install @reduxjs/toolkit react-redux axios`)*

### 2. Chạy ứng dụng ở chế độ Development:
```bash
npm run dev
```

### 3. (Tùy chọn) Chạy mock JSON-Server:
```bash
npx json-server --watch drama.json --port 3000
```
Ứng dụng sẽ có API mock tại: `http://localhost:3000/drama`

---

## 📝 Ghi Chú Kiến Thức Cốt Lõi (Cheat Sheet)

### 🔹 1. Formik & Yup Pattern:
```jsx
const formik = useFormik({
  initialValues: { email: '', password: '', check: false },
  validationSchema: Yup.object({
    email: Yup.string().required('Bắt buộc nhập email').email('Email không hợp lệ'),
    password: Yup.string().required('Bắt buộc nhập mật khẩu').min(6, 'Tối thiểu 6 ký tự')
  }),
  onSubmit: (values) => {
    alert(JSON.stringify(values));
  }
});

// JSX:
<Form onSubmit={formik.handleSubmit}>
  <Form.Control 
    name="email" 
    value={formik.values.email} 
    onChange={formik.handleChange} 
  />
  <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
  <Button type="submit">Submit</Button>
</Form>
```

### 🔹 2. Redux Toolkit Flow:
```
UI Component (Button)
  └─► dispatch(incrementByAmount(10))
        └─► Action Creator: { type: 'counter/incrementByAmount', payload: 10 }
              └─► Reducer trong CounterSlice xử lý: state.count += action.payload
                    └─► Store cập nhật State mới
                          └─► useSelector trong Counter.jsx re-render UI
```