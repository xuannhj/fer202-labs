# 📝 Ghi Chú Lý Thuyết & Bí Kíp Ôn Tập FER202

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170

Tổng hợp kiến thức cốt lõi, cú pháp thường dùng và các lỗi kinh điển cần tránh trong quá trình học và làm bài thi React.

---

## ⚡ Tóm Tắt Kiến Thức Trọng Tâm

### 1. Component & Props
- **Component:** Luôn viết hoa chữ cái đầu (ví dụ: `function OrchidCard() {}`).
- **Props:** Dữ liệu truyền một chiều từ component cha xuống con (read-only, không được gán đè trực tiếp `props.title = ...`).
- **Destructuring Props:** `function OrchidCard({ orchid, onSelect })` giúp code ngắn gọn và dễ đọc.

### 2. State & React Hooks
- **`useState`:** Quản lý trạng thái nội tại của component.
  ```jsx
  const [count, setCount] = useState(0);
  // Khi cập nhật state phụ thuộc vào giá trị cũ:
  setCount(prev => prev + 1);
  ```
- **`useEffect`:** Xử lý Side Effects (gọi API, timer, lắng nghe sự kiện).
  ```jsx
  useEffect(() => {
    // Chạy 1 lần duy nhất sau khi component được render lần đầu
    fetchData();
  }, []); // Dependency array rỗng
  ```

### 3. React Router (`react-router-dom`)
- `<BrowserRouter>`: Bọc toàn bộ ứng dụng ở `main.jsx` hoặc `App.jsx`.
- `<Routes>` & `<Route path="/products/:id" element={<ProductDetail />} />`.
- `useNavigate()`: Điều hướng trang bằng code (ví dụ sau khi submit form thành công).
- `useParams()`: Lấy tham số động từ URL (ví dụ `const { id } = useParams();`).

### 4. Context API (Quản lý State Toàn Cục)
- `createContext()`: Tạo Context.
- `<MyContext.Provider value={{ state, actions }}>`: Cung cấp dữ liệu cho toàn bộ cây component con.
- `useContext(MyContext)`: Tiêu thụ dữ liệu ở bất kỳ component con nào mà không cần truyền props qua nhiều tầng.

---

## ⚠️ Top 5 Lỗi Thường Gặp Cần Tránh Khi Thi
1. **Quên `key` khi dùng `.map()`:** Dẫn đến warning ở console và sai lệch khi cập nhật danh sách.
2. **Lặp vô tận (Infinite Loop) trong `useEffect`:** Cập nhật state bên trong `useEffect` mà dependency array lại chứa chính state đó.
3. **Gọi Hooks sai quy tắc:** Gọi `useState`/`useEffect` bên trong vòng lặp `for`, câu lệnh điều kiện `if` hoặc sau lệnh `return`.
4. **Mutate State trực tiếp:** Gán trực tiếp `list.push(newItem)` thay vì tạo mảng mới `setList([...list, newItem])`.
5. **Quên import CSS của Bootstrap:** Quên `import 'bootstrap/dist/css/bootstrap.min.css';` dẫn đến giao diện bị vỡ.