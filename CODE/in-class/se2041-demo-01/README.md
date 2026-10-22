# 🌸 Lab 1, Lab 2 & Lab 3: React Components, Hooks, Router & Orchid Store

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Môn học:** FER202 - Front-End Web Development with React  
> **Lớp:** SE2041 | **Dự án:** `se2041-demo-01`

Dự án thực hành kết hợp hoàn chỉnh giữa **Lab 1 (React Components)**, **Lab 2 (React Hooks)** và **Lab 3 (React Router)**, xây dựng ứng dụng danh mục hoa lan phong phú với tính năng xem nhanh dạng Modal, xem chi tiết qua URL parameter `/detail/:id`, trang liên hệ hoàn chỉnh, chuyển đổi giao diện Sáng / Tối và cấu trúc Layout Route chuẩn SPA.

---

## 🎯 Mục Tiêu & Tính Năng Đã Hoàn Thành

### 1. Lab 1 - React Components & Responsive Layout
- Xây dựng hệ thống Component phân tách rõ ràng: `App` $\rightarrow$ `MyNavBar` + `Orchid` $\rightarrow$ `OrchidCard`.
- Quản lý và duyệt mảng 16 loài hoa lan từ `src/ListOfOrchids.js` bằng hàm `.map()` kèm `key` duy nhất.
- Bố cục lưới Responsive Grid 4 cột (`xs={1} sm={2} md={4}`) bằng `React-Bootstrap`.
- Bóc tách dữ liệu Props thông qua cú pháp ES6 Destructuring `{ orchid }`.
- Hiển thị nhãn có điều kiện `Special ⭐` bằng toán tử `&&` và phân loại Tự nhiên/Lai tạo bằng toán tử `? :`.

### 2. Lab 2 - React Hooks, Modal Popup & Dark/Light Theme
- **Orchid Detail Modal (`OrchidDetailModal.jsx`):** Nút *Quick View* ở bất kỳ bông hoa nào sẽ mở Modal popup hiển thị ảnh lớn, xuất xứ, màu sắc, phân loại, đánh giá và lượt yêu thích.
- **Quản lý State `selectedOrchid`:** Áp dụng kỹ thuật *Lifting State Up* để quản lý bông hoa được chọn tại `Home.jsx` bằng `useState(null)`.
- **Giao diện Sáng / Tối (Dark / Light Mode):** Nút chuyển đổi trên `MyNavBar.jsx` tích hợp thuộc tính `data-bs-theme={theme}` của Bootstrap 5 để phủ màu tối/sáng lên toàn bộ trang web.
- **Custom Hook `useTheme` (`src/hooks/useTheme.js`):** Tách biệt logic quản lý theme thành một Custom Hook độc lập, sạch sẽ và tái sử dụng dễ dàng.

### 3. Lab 3 - React Router, Detail Page & Contact
- **Cấu trúc Layout Route & `<Outlet />` (`MainLayout.jsx`):** Giữ thanh `MyNavBar` và Dark/Light mode cố định xuyên suốt tất cả các trang, không bị load lại (Zero-reload SPA).
- **Trang Chi Tiết Bông Hoa (`/detail/:id` - `Detail.jsx`):** Dùng hook `useParams()` bóc tách `id` từ thanh URL, tìm kiếm bông hoa bằng `.find()`, hiển thị chi tiết thông số kèm nút quay lại và nút liên hệ tư vấn.
- **Trang Liên Hệ (`/contact` - `Contact.jsx`):** Cung cấp biểu mẫu gửi lời nhắn và thông tin liên hệ vườn hoa Orchid Garden bằng React-Bootstrap.
- **Trang 404 Bắt Lỗi Đường Dẫn (`*` - `NotFound.jsx`):** Xử lý mọi đường dẫn không hợp lệ với thông báo thân thiện và nút quay về trang chủ.
- **Điều Hướng Không Tải Lại Trang (`MyNavBar.jsx` & `OrchidCard.jsx`):** Sử dụng component `<Link>` và `<NavLink>` để chuyển trang mượt mà.

---

## 📂 Cấu Trúc Thư Mục Source Code

```text
se2041-demo-01/
├── src/
│   ├── components/
│   │   ├── MainLayout.jsx         # Layout bọc MyNavBar và <Outlet />
│   │   ├── MyNavBar.jsx           # Thanh Menu, NavLink (Home, Contact) & Nút gạt Dark Mode
│   │   ├── OrchidCard.jsx         # Thẻ hoa lan với 2 nút: Quick View & Detail
│   │   └── OrchidDetailModal.jsx  # Popup Modal xem nhanh bông hoa (Lab 2)
│   │
│   ├── pages/
│   │   ├── Home.jsx               # Trang chủ: Grid 16 loài hoa & Modal Quick View
│   │   ├── Detail.jsx             # Trang chi tiết: useParams() bóc tách ID hoa lan
│   │   ├── Contact.jsx            # Trang liên hệ: Form liên hệ & thông tin vườn lan
│   │   └── NotFound.jsx           # Trang 404 cho đường dẫn không hợp lệ
│   │
│   ├── hooks/
│   │   └── useTheme.js            # Custom Hook quản lý Dark / Light Theme
│   │
│   ├── ListOfOrchids.js           # Dữ liệu 16 loài hoa lan chuẩn
│   ├── App.jsx                    # Cấu hình <Routes> và các <Route>
│   └── main.jsx                   # Bọc <BrowserRouter> khởi chạy React DOM
│
├── package.json
└── vite.config.js
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Ứng Dụng

```bash
# 1. Cài đặt các gói thư viện
npm install

# 2. Khởi chạy môi trường phát triển Vite
npm run dev
```
Trình duyệt mở tại: `http://localhost:5173`

---

## 📖 Tài Liệu Tham Khảo & Kiến Thức Cần Lưu Ý
- 🎓 [Sổ tay các kiến thức cần lưu ý (Lab 1 & Lab 2)](./docs/cac-kien-thuc-can-luu-y-lab1-lab2.md)