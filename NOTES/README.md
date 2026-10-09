# 📝 Sổ Tay Ghi Chú Lý Thuyết & Bí Kíp Ôn Thi FER202

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> 🔗 **Notion Notebook:** [nhom nhom (Sổ tay trực tuyến)](https://app.notion.com/p/nhom-nhom-3db95ae094f9807994f1fa500fdff6d1)

Khu vực tổng hợp toàn bộ ghi chú học tập, tài liệu lý thuyết xuất từ Notion và bí kíp ôn thi môn **FER202 (Front-End Web Development with React)**.

---

## 📑 Danh Mục Ghi Chú Chi Tiết

| Thư mục | Chủ đề ghi chú | Nội dung chi tiết | Link Notion |
| :--- | :--- | :--- | :---: |
| 📁 [`01-js-review/`](./01-js-review) | **JavaScript Review** | Khai báo biến (`let`, `const`), Arrow Functions, xử lý mảng (`map`, `filter`, `find`) | 📖 [nhom nhom](https://app.notion.com/p/nhom-nhom-3db95ae094f9807994f1fa500fdff6d1) |
| 📁 [`02-bootstrap-intro/`](./02-bootstrap-intro) | **Bootstrap 5 & UI Grid** | Hệ thống Grid (`Container`, `Row`, `Col`), Breakpoints responsive, Cards, Badges | 📖 [nhom nhom](https://app.notion.com/p/nhom-nhom-3db95ae094f9807994f1fa500fdff6d1) |
| 📁 [`03-react-hooks/`](./03-react-hooks) | **React Hooks Core & Lab 2** | Cơ chế `useState`, Theme Sáng/Tối & Modal Popup ([Đọc ngay](./03-react-hooks/01_tong_hop_useState_theme_va_modal.md)) | 📖 [nhom nhom](https://app.notion.com/p/nhom-nhom-3db95ae094f9807994f1fa500fdff6d1) |
| 📁 [`04-react-router/`](./04-react-router) | **React Router DOM v6** | Single Page Application, cấu hình Routes, Route, Link, useParams & Dynamic URL | 📖 [nhom nhom](https://app.notion.com/p/nhom-nhom-3db95ae094f9807994f1fa500fdff6d1) |
| 📁 [`05-lab1-components/`](./05-lab1-components) | **React Components & Props** | Cú pháp JSX, Functional Components, Props Destructuring & Grid hoa lan | 📖 [nhom nhom](https://app.notion.com/p/nhom-nhom-3db95ae094f9807994f1fa500fdff6d1) |
| 📁 [`06-formik-yup/`](./06-formik-yup) | **Formik & Yup Validation** | Quản lý Form (`useFormik`), Xác thực Schema (`Yup.object`), Error Text & React-Bootstrap ([Đọc ngay](./06-formik-yup/01_formik_va_yup_validation.md)) | 📖 [nhom nhom](https://app.notion.com/p/nhom-nhom-3db95ae094f9807994f1fa500fdff6d1) |

---

## ⚡ Tóm Tắt Bí Kíp Cốt Lõi Khi Làm Bài

### 1. Component & Props
- **Component:** Luôn viết hoa chữ cái đầu (ví dụ: `function OrchidCard() {}`).
- **Props:** Dữ liệu truyền một chiều từ cha xuống con (read-only, không gán đè trực tiếp).
- **Destructuring Props:** `function OrchidCard({ orchid, onSelect })` giúp code ngắn gọn và dễ đọc.

### 2. State & Hooks
- **`useState`:** Quản lý trạng thái nội tại của component.
  ```jsx
  const [count, setCount] = useState(0);
  setCount(prev => prev + 1); // Cập nhật dựa trên state trước
  ```
- **`useEffect`:** Xử lý Side Effects (gọi API, timer, lắng nghe sự kiện).
  ```jsx
  useEffect(() => {
    fetchData();
  }, []); // Dependency array rỗng -> chạy 1 lần sau khi mount
  ```

### 3. React Router DOM
- `<BrowserRouter>`: Bọc toàn bộ ứng dụng ở `main.jsx` hoặc `App.jsx`.
- `<Routes>` & `<Route path="/products/:id" element={<ProductDetail />} />`.
- `useNavigate()`: Điều hướng trang bằng code (sau khi submit form).
- `useParams()`: Lấy id động từ URL (`const { id } = useParams();`).

### 4. Form Handling & Validation (Formik + Yup)
- **`useFormik`**: Quản lý state của Form và bắt các sự kiện submit.
  ```jsx
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().required('Bắt buộc').email('Email sai định dạng'),
      password: Yup.string().required('Bắt buộc').min(6, 'Tối thiểu 6 ký tự')
    }),
    onSubmit: (values) => { /* Xử lý dữ liệu */ }
  });
  ```
- **Liên kết 4 điểm chạm**: `<Form onSubmit={formik.handleSubmit}>` + `<Form.Control name="email" value={formik.values.email} onChange={formik.handleChange} />` + hiển thị lỗi `{formik.errors.email}`.

---

## ⚠️ Top 6 Lỗi Thường Gặp Cần Tránh Khi Thi
1. **Quên `key` khi dùng `.map()`:** Gây warning ở console và sai lệch khi render danh sách.
2. **Infinite Loop trong `useEffect`:** Cập nhật state bên trong `useEffect` mà dependency array chứa chính state đó.
3. **Mutate State trực tiếp:** Gán trực tiếp `list.push(newItem)` thay vì tạo mảng mới `setList([...list, newItem])`.
4. **Quên import CSS Bootstrap:** Quên `import 'bootstrap/dist/css/bootstrap.min.css';`.
5. **Gọi Hooks sai vị trí:** Gọi Hooks trong vòng lặp `for`, lệnh `if` hoặc sau lệnh `return`.
6. **Sai `name` trong Formik:** Thuộc tính `name` ở ô Input không trùng khớp với key trong `initialValues`.