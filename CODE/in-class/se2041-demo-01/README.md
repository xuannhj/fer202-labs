# 🌸 Orchid Garden Full-Stack — Lab 1 đến Lab 6 (Hoàn Thành 10/10)

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Môn học:** FER202 - Front-End Web Development with React  
> **Lớp:** SE2041 | **Dự án:** `se2041-demo-01`

Dự án thực hành xuyên suốt từ **Lab 1 đến Lab 6**, nâng cấp ứng dụng **Orchid Garden** từ giao diện tĩnh thành ứng dụng **Full-Stack Single Page Application (SPA)** hoàn chỉnh: tích hợp RESTful API (`MockAPI.io` + `axios`), đầy đủ 4 thao tác CRUD, kiểm tra biểu mẫu bằng `Formik` + `Yup`, chuyển đổi giao diện Sáng / Tối và xác thực đăng nhập **Google OAuth 2.0** giải mã JWT phân quyền quản trị viên.

---

## 🎯 Mục Tiêu & Tính Năng Đã Hoàn Thành (Lab 1 – Lab 6)

### 1. Lab 1 — React Components & Responsive Layout (`10/10`)
- Xây dựng hệ thống Component phân tách rõ ràng: `App` $\rightarrow$ `MainLayout` + `MyNavBar` $\rightarrow$ `Home` $\rightarrow$ `OrchidCard`.
- Bố cục lưới Responsive Grid 4 cột (`xs={1} sm={2} md={4}`) bằng `React-Bootstrap`.
- Bóc tách dữ liệu Props thông qua cú pháp ES6 Destructuring `{ orchid }`.
- Hiển thị nhãn có điều kiện `Special ⭐` bằng toán tử `&&` và phân loại Tự nhiên/Lai tạo bằng toán tử `? :`.

### 2. Lab 2 — React Hooks, Modal Popup & Dark/Light Theme (`10/10`)
- **Orchid Detail Modal (`OrchidDetailModal.jsx`):** Nút *Quick View* ở bất kỳ bông hoa nào mở Modal popup hiển thị ảnh lớn, xuất xứ, màu sắc, phân loại, đánh giá và lượt yêu thích.
- **Quản lý State `selectedOrchid`:** Áp dụng kỹ thuật *Lifting State Up* tại `Home.jsx` bằng `useState(null)`.
- **Giao diện Sáng / Tối (Dark / Light Mode):** Nút chuyển đổi trên `MyNavBar.jsx` tích hợp thuộc tính `data-bs-theme={theme}` của Bootstrap 5.
- **Custom Hook `useTheme` (`src/hooks/useTheme.js`):** Tách biệt logic quản lý theme thành một Custom Hook độc lập.

### 3. Lab 3 — React Router SPA (`10/10`)
- **Cấu trúc Layout Route & `<Outlet />` (`MainLayout.jsx`):** Giữ thanh `MyNavBar` và Dark/Light mode cố định xuyên suốt tất cả các trang (Zero-reload SPA).
- **Trang Chi Tiết Bông Hoa (`/detail/:id` - `Detail.jsx`):** Dùng hook `useParams()` bóc tách `id` từ URL, kèm nút quay lại `useNavigate(-1)`.
- **Trang 404 Bắt Lỗi Đường Dẫn (`*` - `NotFound.jsx`):** Xử lý mọi đường dẫn không hợp lệ.
- **Điều Hướng Không Tải Lại Trang (`MyNavBar.jsx` & `OrchidCard.jsx`):** Sử dụng `<Link>` và `<NavLink>`.

### 4. Lab 4 — Formik & Yup Schema Validation (`10/10`)
- **Trang Liên Hệ (`/contact` - `Contact.jsx`):** Quản lý 6 trường (`name`, `email`, `phone`, `program`, `message`, `agree`) bằng `useFormik`.
- **Xác Thực `Yup.object`:** Kiểm tra bắt buộc nhập (`required`), độ dài tối thiểu (`min`), định dạng `email`, số nguyên (`integer`, `typeError`), chọn dropdown và xác nhận Switch (`oneOf([true])`).
- **Cú Pháp Pro `{...formik.getFieldProps()}`:** Kết nối gọn gàng 4 điểm chạm (`name`, `value`, `onChange`, `onBlur`) và hiển thị lỗi chữ đỏ khi `touched && errors`.

### 5. Lab 5 — Fetch API, MockAPI & Full-Stack CRUD (`10/10`)
- **Biến Môi Trường (`.env`):** Lưu trữ endpoint chuẩn `VITE_API_URL` kết nối tới MockAPI.io (16 loài hoa lan).
- **READ (`GET`):** `Home.jsx` và `Detail.jsx` gọi `axios.get` trong `useEffect` để tải dữ liệu động từ đám mây, có trạng thái `loading` chống chớp lỗi giả.
- **DELETE (`DELETE`):** `OrchidsManagement.jsx` hiển thị bảng quản trị `<Table>`, xác nhận xóa bằng `window.confirm()`, gọi `axios.delete` và cập nhật UI tức thì bằng `.filter()`.
- **CREATE (`POST`) & UPDATE (`PUT`):**
  - `AddOrchid.jsx`: Formik + Yup tạo hoa mới qua `axios.post`, tự động điều hướng về `/management`.
  - `UpdateOrchid.jsx`: Lấy `id` qua `useParams()`, nạp đủ 100% trường dữ liệu cũ bằng `formik.setValues(res.data)` và cập nhật qua `axios.put`.

### 6. Lab 6 — Google Login (OAuth 2.0) & Phân Quyền JWT (`10/10`)
- **Google OAuth Provider (`main.jsx`):** Bọc ứng dụng trong `<GoogleOAuthProvider clientId="...">`.
- **Đăng Nhập & Giải Mã JWT (`MyNavBar.jsx`):** Sử dụng `<GoogleLogin />` nhận `credentialResponse`, giải mã chuỗi token bằng `jwtDecode(credentialResponse.credential)` để lấy `name`, `email`, `picture`.
- **Phân Quyền Hiển Thị & Đăng Xuất:**
  - Khi chưa đăng nhập: Hiện nút Google Login, ẩn mục `📋 Management`.
  - Khi đã đăng nhập: Ẩn nút Google Login, hiển thị `👤 Tên người dùng` + nút `Đăng xuất` (`googleLogout()`) và mở khóa mục `📋 Management`.

---

## 📂 Cấu Trúc Thư Mục Source Code

```text
se2041-demo-01/
├── docs/
│   ├── cac-kien-thuc-can-luu-y-lab1-lab2.md
│   └── superpowers/plans/
│       └── 2026-10-23-lab5-lab6-fetch-api-crud-google-login.md
├── src/
│   ├── components/
│   │   ├── MainLayout.jsx         # Layout bọc MyNavBar và <Outlet />
│   │   ├── MyNavBar.jsx           # Navbar, Dark Mode, Google Login/Logout & Phân quyền Management
│   │   ├── OrchidCard.jsx         # Thẻ hoa lan với 2 nút: Quick View & Detail
│   │   └── OrchidDetailModal.jsx  # Popup Modal xem nhanh bông hoa (Lab 2)
│   │
│   ├── pages/
│   │   ├── Home.jsx               # Trang chủ (GET API): Grid hoa lan & Modal Quick View
│   │   ├── Detail.jsx             # Trang chi tiết (GET API by ID): useParams() + loading state
│   │   ├── OrchidsManagement.jsx  # Bảng quản trị (GET + DELETE API): Table & xóa tức thì
│   │   ├── AddOrchid.jsx          # Trang thêm hoa mới (POST API): Formik + Yup
│   │   ├── UpdateOrchid.jsx       # Trang cập nhật hoa (PUT API): setValues() + Formik + Yup
│   │   ├── Contact.jsx            # Trang liên hệ (Lab 4): Formik 6 trường + Yup Schema
│   │   └── NotFound.jsx           # Trang 404 cho đường dẫn không hợp lệ
│   │
│   ├── hooks/
│   │   └── useTheme.js            # Custom Hook quản lý Dark / Light Theme
│   │
│   ├── ListOfOrchids.js           # Dữ liệu mẫu 16 loài hoa lan gốc
│   ├── orchids.json               # File JSON mẫu để import lên MockAPI
│   ├── App.jsx                    # Cấu hình <Routes> và các <Route>
│   └── main.jsx                   # Bọc <GoogleOAuthProvider> & <BrowserRouter>
│
├── .env                           # Biến môi trường VITE_API_URL (đã đưa vào .gitignore)
├── .gitignore                     # Chặn node_modules, dist, .env, client_secret_*.json
├── package.json
└── vite.config.js
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Ứng Dụng

```bash
# 1. Cài đặt các gói thư viện
npm install

# 2. Tạo file .env tại thư mục gốc (nếu chạy máy mới)
# VITE_API_URL=https://6adb24ee7512f497b3007df5.mockapi.io/api/v1/orchids

# 3. Khởi chạy môi trường phát triển Vite
npm run dev
```
Trình duyệt mở tại: `http://localhost:5173`

---

## 📖 Tài Liệu Tham Khảo & Sổ Tay Thực Chiến
- 🎓 [Sổ tay các kiến thức cần lưu ý (Lab 1 & Lab 2)](./docs/cac-kien-thuc-can-luu-y-lab1-lab2.md)
- 📋 [Kế hoạch & Sổ tay thực chiến Lab 5 & 6 — Fetch API, CRUD & Google Login](./docs/superpowers/plans/2026-10-23-lab5-lab6-fetch-api-crud-google-login.md)
