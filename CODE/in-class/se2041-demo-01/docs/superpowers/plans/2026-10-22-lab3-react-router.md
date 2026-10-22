# Lab 3 - React Router (Multi-Page Navigation, Detail Page & Contact) Implementation Plan

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Dự án:** `CODE/in-class/se2041-demo-01`  
> **Phương pháp hướng dẫn:** "Anh ra chiêu - Nhi múa phím" (Nhi tự tay gõ code từng bước).

---

## 🎯 Mục Tiêu Đề Bài Lab 3
1. Cài đặt và tích hợp thư viện `react-router` vào dự án hoa lan `se2041-demo-01`.
2. Tạo trang chi tiết `Detail.jsx` nhận URL parameter `/:id` thông qua hook `useParams()`.
3. Tạo trang liên hệ `Contact.jsx` với giao diện trực quan, đẹp mắt bằng React-Bootstrap.
4. Cập nhật `MyNavBar.jsx` với các liên kết điều hướng (`Home`, `Contact`) và `OrchidCard.jsx` với 2 nút (`Quick View` bật Modal và `Detail` chuyển hướng trang).
5. Sử dụng cấu trúc **Layout Route** với component `<Outlet />` để giữ thanh Navbar và Theme đồng nhất.

---

## 🗺️ Các Bước Thực Hiện (Micro-Steps Checklist)

- [x] **Bước 1: Cài đặt thư viện `react-router`**
  - Mở terminal tại thư mục `CODE/in-class/se2041-demo-01`
  - Chạy lệnh: `npm i react-router`
  - Kiểm tra `package.json` đã có `"react-router"` ✅ *(Đã có version 8.5.0)*

- [x] **Bước 2: Cấu hình `BrowserRouter` tại `src/main.jsx`**
  - Import `BrowserRouter` từ `'react-router'`
  - Bọc component `<App />` bên trong `<BrowserRouter>` ✅ *(Đã hoàn thành chuẩn)*

- [x] **Bước 3: Tạo component `src/components/MainLayout.jsx`**
  - Sử dụng `<Outlet />` từ `'react-router'`
  - Nhận props `{ theme, toggleTheme }` và truyền vào `MyNavBar`
  - Đặt `<Outlet />` bên trong `<main className="container pb-5">` ✅ *(Nhi đã gõ chuẩn 100%)*

- [x] **Bước 4: Tạo trang `src/pages/Home.jsx`**
  - Đổi tên/tách từ `src/components/Orchid.jsx` sang `src/pages/Home.jsx`
  - Giữ nguyên hiển thị Grid 16 loài hoa và Modal Quick View ✅ *(Nhi đã tạo chuẩn 100%)*

- [x] **Bước 5: Tạo trang chi tiết `src/pages/Detail.jsx`**
  - Sử dụng hook `useParams()` để lấy `id` từ thanh URL
  - Tìm kiếm hoa trong mảng `ListOfOrchids` bằng `find()`
  - Hiển thị Card lớn: hình ảnh, tên, xuất xứ, màu sắc, đánh giá, lượt thích, và nút "Back to Home" (`useNavigate(-1)` hoặc `Link to="/"`) ✅ *(Nhi đã gõ chuẩn 100%)*

- [x] **Bước 6: Tạo trang liên hệ `src/pages/Contact.jsx`**
  - Hiển thị Form gửi thông tin (Name, Email, Message)
  - Hiển thị Khối thông tin liên hệ Orchid Garden (Địa chỉ, Hotline, Giờ mở cửa) ✅ *(Nhi đã tạo chuẩn 100%)*

- [x] **Bước 7: Tạo trang `src/pages/NotFound.jsx` (Trang 404)**
  - Hiển thị thông báo khi người dùng gõ sai đường link + nút về Trang chủ ✅ *(Đã tạo xong)*

- [x] **Bước 8: Cập nhật `src/components/OrchidCard.jsx`**
  - Bổ sung nút `Detail` dẫn đến đường dẫn `/detail/${orchid.id}` bằng component `<Link>`
  - Giữ nút `Quick View` để mở Modal Lab 2 ✅ *(Đã cập nhật chuẩn)*

- [x] **Bước 9: Cập nhật thanh menu `src/components/MyNavBar.jsx`**
  - Thay thẻ `<a>` thông thường bằng `<NavLink>` hoặc `<Link>` từ `'react-router'`
  - Liên kết về `/` (Home) và `/contact` (Contact) ✅ *(Đã cập nhật chuẩn)*

- [x] **Bước 10: Ráp toàn bộ Routes vào `src/App.jsx`**
  - Import `Routes`, `Route` từ `'react-router'`
  - Khai báo Layout Route bọc các Route con: `/`, `/detail/:id`, `/contact`, `*` ✅ *(Đã kết nối hoàn chỉnh)*

- [x] **Bước 11: Kiểm tra chạy thử và nghiệm thu**
  - Kiểm tra chuyển trang không bị reload F5 (chuẩn SPA)
  - Thử đổi Dark/Light mode xem có giữ nguyên trên tất cả các trang
  - Thử bấm nút Detail trên hoa số 1, 2, 3 xem URL có đổi sang `/detail/1`, `/detail/2`
  - Chạy `npm run build` xác nhận không có lỗi cú pháp. ✅ *(Build thành công 100% không lỗi)*
