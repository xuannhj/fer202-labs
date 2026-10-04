# 🎓 FER202 - Front-End Web Development with React

<p align="left">
  <img src="https://img.shields.io/badge/Student-Nguyễn%20Phạm%20Xuân%20Nhi-blue?style=for-the-badge&logo=github" alt="Student" />
  <img src="https://img.shields.io/badge/MSSV-SE201170-green?style=for-the-badge" alt="MSSV" />
  <img src="https://img.shields.io/badge/Framework-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Build_Tool-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/UI_Library-Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
</p>

---

## 👤 Thông Tin Sinh Viên
- **Họ và tên:** Nguyễn Phạm Xuân Nhi
- **Mã số sinh viên (MSSV):** SE201170
- **Môn học:** FER202 - Front-End Web Development with React
- **Repository:** [https://github.com/xuannhj/fer202-labs](https://github.com/xuannhj/fer202-labs)

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
FER202/
├── CODE/                    # Source code thực hành theo tuần & Lab
│   ├── se2041-demo-01/      # Lab 1: React Components, Props & Orchid Store
│   ├── week-03-router/      # Tuần 3: React Router, Navigation & Products
│   ├── week-04-context/     # Tuần 4: Context API, Global State & Fav List
│   └── node-intro/          # Ôn tập Javascript căn bản & Node.js
│
├── LAB/                     # Đề bài & tài liệu hướng dẫn Lab chính thức
│   ├── Lab 1 - React Components.docx
│   ├── Lab 2 - React Hook.docx
│   └── Lab 3 - React Router.docx
│
├── EXAMS/                   # 🎯 Khu vực đề thi PE (Practical Exam) & ôn tập
│   ├── past-exams/          # Đề thi thực tế các kỳ trước (SP, SU, FA)
│   ├── mock-tests/          # Đề thi thử bấm giờ 90 phút
│   └── README.md            # Chiến thuật & checklist ôn thi PE
│
├── NOTES/                   # 📝 Ghi chú lý thuyết & bí kíp ôn tập React
│   └── README.md
│
├── .gitignore               # Tự động bỏ qua node_modules, dist, zip, .env...
└── README.md                # Tài liệu tổng quan môn học (file này)
```

---

## 🗺️ Bản Đồ Tiến Độ Học Tập & Thực Hành

| STT | Bài học / Lab | Nội dung chính | Thư mục mã nguồn | Trạng thái |
| :-: | :--- | :--- | :--- | :-: |
| 1 | **Node & JS Basics** | Variables, ES6, Arrow Functions, Modules | [`CODE/node-intro`](./CODE/node-intro) | ✅ Hoàn thành |
| 2 | **Lab 1: Components & Props** | JSX, Functional Components, Props, Bootstrap Grid | [`CODE/se2041-demo-01`](./CODE/se2041-demo-01) | ✅ Hoàn thành |
| 3 | **Week 3: React Router** | `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>` | [`CODE/week-03-router`](./CODE/week-03-router) | ✅ Hoàn thành |
| 4 | **Week 4: Context API** | `createContext`, `useContext`, Global State | [`CODE/week-04-context`](./CODE/week-04-context) | 🔄 Đang học |
| 5 | **Lab 2: React Hooks** | `useState`, `useEffect`, Custom Hooks | [`CODE/lab-02`](./CODE) | ⏳ Sắp tới |
| 6 | **Lab 3: React Router & CRUD** | Nested Routes, URL Params, Quản lý sản phẩm | [`CODE/lab-03`](./CODE) | ⏳ Sắp tới |
| 7 | **PE Exam Preparation** | Luyện đề thi thực hành PE 90 phút | [`EXAMS`](./EXAMS) | 🎯 Chuẩn bị |

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

Mỗi thư mục trong `CODE/` là một dự án React/Vite độc lập. Để chạy bất kỳ tuần nào:

```bash
# 1. Di chuyển vào thư mục bài học (ví dụ: se2041-demo-01)
cd CODE/se2041-demo-01

# 2. Cài đặt các thư viện phụ thuộc (chỉ cần chạy lần đầu)
npm install

# 3. Khởi chạy môi trường phát triển (Development Server)
npm run dev
```

---

## 📌 Quy Tắc Viết Commit (Conventional Commits)

Để lịch sử Git luôn sạch sẽ, rõ ràng và chuyên nghiệp:

```text
<type>(<phạm vi>): <mô tả ngắn gọn hành động>
```

- `feat(lab1)`: Thêm tính năng / component / màn hình mới.
- `fix(week3)`: Sửa lỗi hiển thị, sửa bug state hoặc logic.
- `docs(notes)`: Cập nhật tài liệu, đề lab hoặc bí kíp ôn thi.
- `style(ui)`: Chỉnh sửa giao diện CSS, màu sắc, layout.
- `refactor(code)`: Tối ưu cấu trúc mã nguồn, chia nhỏ component.

*Ví dụ thực tế:*
- `feat(lab1): complete orchid cards grid layout with bootstrap badges`
- `fix(week4): handle favorite toggle duplicate state`
- `docs(exams): add SP24 PE practical exam mock test`

---

## ✍️ Tác Giả
- **Họ và tên:** Nguyễn Phạm Xuân Nhi
- **MSSV:** SE201170
- **GitHub:** [@xuannhj](https://github.com/xuannhj)