# 🎓 FER202 - Front-End Web Development with React

<p align="left">
  <img src="https://img.shields.io/badge/Course-FER202-blue?style=for-the-badge&logo=react" alt="Course FER202" />
  <img src="https://img.shields.io/badge/Framework-React_18%2F19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Tool-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/UI-Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Status-In_Progress-success?style=for-the-badge" alt="Status" />
</p>

Kho lưu trữ toàn bộ mã nguồn bài tập, bài thực hành Lab, ghi chú lý thuyết và tài liệu luyện thi cho môn học **FER202 (Front-End Web Development with React)**.

---

## 📂 Cấu trúc Thư mục Tổng thể

`	ext
FER202/
├── 📁 CODE/                 # Source code thực hành theo tuần & lab
│   ├── 📁 se2041-demo-01/   # Lab 1: React Components & Bootstrap UI
│   ├── 📁 week-03-router/   # Tuần 3: React Router & Điều hướng trang
│   ├── 📁 week-04-context/  # Tuần 4: React Context API & State toàn cục
│   └── 📁 node-intro/       # Ôn tập Javascript & Node.js căn bản
│
├── 📁 LAB/                  # Đề bài & Tài liệu hướng dẫn Lab chính thức
│   ├── Lab 1 - React Components.docx
│   ├── Lab 2 - React Hook.docx
│   └── Lab 3 - React Router.docx
│
├── 📁 EXAMS/                # 🎯 Khu vực đề thi thử & ôn luyện PE (Practical Exam)
│   ├── 📁 past-exams/       # Đề thi thực tế các kỳ trước
│   ├── 📁 mock-tests/       # Đề luyện tập bấm giờ
│   └── README.md            # Hướng dẫn chi tiết & Checklist ôn thi PE
│
├── 📁 NOTES/                # 📝 Ghi chú lý thuyết & Bí kíp ôn tập React
│   └── README.md
│
├── .gitignore               # Cấu hình bỏ qua node_modules, build, secrets...
└── README.md                # Tài liệu tổng quan môn học (file này)
`

---

## 🗺️ Bản đồ Tiến độ Học tập & Thực hành

| STT | Nội dung / Bài học | Chủ đề chính | Thư mục mã nguồn | Trạng thái |
| :-: | :--- | :--- | :--- | :-: |
| 1 | **Node & JS Basics** | Variables, ES6, Arrow Functions, Modules | [CODE/node-intro](./CODE/node-intro) | ✅ Xong |
| 2 | **Lab 1: Components & Props** | JSX, Functional Components, Props, Bootstrap Grid | [CODE/se2041-demo-01](./CODE/se2041-demo-01) | ✅ Xong |
| 3 | **Week 3: React Router** | <BrowserRouter>, <Routes>, <Route>, <Link> | [CODE/week-03-router](./CODE/week-03-router) | ✅ Xong |
| 4 | **Week 4: Context API** | createContext, useContext, Global State | [CODE/week-04-context](./CODE/week-04-context) | 🔄 Đang học |
| 5 | **Lab 2: React Hooks** | useState, useEffect, Custom Hooks | [CODE/lab-02](#) | ⏳ Sắp tới |
| 6 | **Lab 3: React Router & CRUD** | Nested Routes, URL Params, Quản lý sản phẩm | [CODE/lab-03](#) | ⏳ Sắp tới |
| 7 | **PE Exam Preparation** | Luyện đề thi thực hành PE 90 phút | [EXAMS](./EXAMS) | 🎯 Chuẩn bị |

---

## 🚀 Hướng dẫn Chạy Thử Dự án Bất kỳ

Mỗi thư mục trong CODE/ là một dự án React/Vite độc lập. Để chạy bất kỳ tuần nào:

`ash
# 1. Di chuyển vào thư mục bài học (ví dụ: se2041-demo-01)
cd "CODE/se2041-demo-01"

# 2. Cài đặt các gói thư viện (chỉ cần chạy lần đầu)
npm install

# 3. Khởi động server phát triển
npm run dev
`

---

## 📌 Quy tắc Viết Commit (Conventional Commits)

Để lịch sử Git luôn sạch sẽ và chuyên nghiệp:

`	ext
<type>(<phạm vi>): <mô tả ngắn gọn hành động>
`

- eat(lab1): Thêm tính năng / màn hình / component mới.
- ix(week3): Sửa lỗi logic, sửa bug hiển thị.
- docs(notes): Cập nhật ghi chú, đề lab hoặc tài liệu ôn thi.
- style(ui): Chỉnh sửa giao diện, CSS, màu sắc.
- efactor(code): Tối ưu lại cấu trúc file, dọn dẹp mã nguồn.

*Ví dụ:* eat(lab1): complete orchid cards grid layout with badges

---

## 👨‍💻 Tác giả
- Sinh viên: **FER202 Student**
- Repository: [https://github.com/xuannhj/fer202-labs](https://github.com/xuannhj/fer202-labs)
