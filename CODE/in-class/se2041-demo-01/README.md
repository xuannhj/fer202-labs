# 🌸 Lab 1 & Lab 2: React Components, Hooks & Orchid Store

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Môn học:** FER202 - Front-End Web Development with React  
> **Lớp:** SE2041 | **Dự án:** `se2041-demo-01`

Dự án thực hành kết hợp hoàn chỉnh giữa **Lab 1 (React Components)** và **Lab 2 (React Hooks)**, xây dựng ứng dụng danh mục hoa lan phong phú với tính năng xem chi tiết dạng Modal Popup, chuyển đổi giao diện Sáng / Tối và Custom Hook.

---

## 🎯 Mục Tiêu & Tính Năng Đã Hoàn Thành

### 1. Lab 1 - React Components & Responsive Layout
- Xây dựng hệ thống Component phân tách rõ ràng: `App` $\rightarrow$ `MyNavBar` + `Orchid` $\rightarrow$ `OrchidCard`.
- Quản lý và duyệt mảng 16 loài hoa lan từ `src/ListOfOrchids.js` bằng hàm `.map()` kèm `key` duy nhất.
- Bố cục lưới Responsive Grid 4 cột (`xs={1} sm={2} md={4}`) bằng `React-Bootstrap`.
- Bóc tách dữ liệu Props thông qua cú pháp ES6 Destructuring `{ orchid }`.
- Hiển thị nhãn có điều kiện `Special ⭐` bằng toán tử `&&` và phân loại Tự nhiên/Lai tạo bằng toán tử `? :`.

### 2. Lab 2 - React Hooks, Modal Popup & Dark/Light Theme
- **Orchid Detail Modal (`OrchidDetailModal.jsx`):** Bấm nút *Explore more* ở bất kỳ bông hoa nào sẽ mở Modal popup hiển thị ảnh lớn, xuất xứ, màu sắc, phân loại, đánh giá và lượt yêu thích.
- **Quản lý State `selectedOrchid`:** Áp dụng kỹ thuật *Lifting State Up* để quản lý bông hoa được chọn tại `Orchid.jsx` bằng `useState(null)`.
- **Giao diện Sáng / Tối (Dark / Light Mode):** Nút chuyển đổi trên `MyNavBar.jsx` tích hợp thuộc tính `data-bs-theme={theme}` của Bootstrap 5 để phủ màu tối/sáng lên toàn bộ trang web.
- **Custom Hook `useTheme` (`src/hooks/useTheme.js`):** Tách biệt logic quản lý theme thành một Custom Hook độc lập, sạch sẽ và tái sử dụng dễ dàng.

---

## 📂 Cấu Trúc Thư Mục Source Code

```text
se2041-demo-01/
├── src/
│   ├── components/
│   │   ├── MyNavBar.jsx           # Thanh Menu & Nút gạt Dark Mode
│   │   ├── Orchid.jsx             # Kệ hoa lan (Grid) & Quản lý selectedOrchid state
│   │   ├── OrchidCard.jsx         # Thẻ hoa lan & Bắt sự kiện onSelect
│   │   └── OrchidDetailModal.jsx  # Popup Modal chi tiết bông hoa
│   │
│   ├── hooks/
│   │   └── useTheme.js            # Custom Hook quản lý Dark / Light Theme
│   │
│   ├── ListOfOrchids.js           # Dữ liệu 16 loài hoa lan chuẩn
│   ├── App.jsx                    # Component gốc ứng dụng
│   └── main.jsx                   # Điểm khởi chạy React DOM
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