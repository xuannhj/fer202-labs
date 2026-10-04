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
├── CODE/                           # Mã nguồn thực hành
│   ├── in-class/                   # 🏫 1. Code học & demo trên lớp cùng thầy cô
│   │   ├── se2041-demo-01/         # Lab 1: React Components, Props & Orchid Store
│   │   ├── week-03-router/         # Tuần 3: React Router, Navigation & Products
│   │   ├── week-04-context/        # Tuần 4: Context API, Global State & Fav List
│   │   └── node-intro/             # Ôn tập Javascript căn bản & Node.js
│   │
│   └── self-study/                 # 🏠 2. Code tự học ở nhà & Bài tập về nhà
│       └── (Dự án tự học, mini projects thêm...)
│
├── LAB/                            # Đề bài & tài liệu hướng dẫn Lab chính thức
│   ├── Lab 1 - React Components.docx
│   ├── Lab 2 - React Hook.docx
│   └── Lab 3 - React Router.docx
│
├── EXAMS/                          # 🎯 Khu vực đề thi PE (Practical Exam) & ôn tập
│   ├── past-exams/                 # Đề thi thực tế các kỳ trước (SP, SU, FA)
│   ├── mock-tests/                 # Đề thi thử bấm giờ 90 phút
│   └── README.md                   # Chiến thuật & checklist ôn thi PE
│
├── NOTES/                          # 📝 Ghi chú lý thuyết & bí kíp ôn tập React
│   └── README.md
│
├── .gitignore                      # Tự động bỏ qua node_modules, dist, zip, .env...
└── README.md                       # Tài liệu tổng quan môn học (file này)
```

---

## 🗺️ Bản Đồ Tiến Độ Học Tập & Thực Hành

### 🏫 1. Code Trên Lớp (`CODE/in-class/`)
| STT | Bài học / Tuần | Nội dung chính | Thư mục mã nguồn | Trạng thái |
| :-: | :--- | :--- | :--- | :-: |
| 1 | **Node & JS Basics** | Variables, ES6, Arrow Functions, Modules | [`CODE/in-class/node-intro`](./CODE/in-class/node-intro) | ✅ Hoàn thành |
| 2 | **Lab 1: Components & Props** | JSX, Functional Components, Props, Bootstrap Grid | [`CODE/in-class/se2041-demo-01`](./CODE/in-class/se2041-demo-01) | ✅ Hoàn thành |
| 3 | **Week 3: React Router** | `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>` | [`CODE/in-class/week-03-router`](./CODE/in-class/week-03-router) | ✅ Hoàn thành |
| 4 | **Week 4: Context API** | `createContext`, `useContext`, Global State | [`CODE/in-class/week-04-context`](./CODE/in-class/week-04-context) | 🔄 Đang học |

### 🏠 2. Code Tự Học & Luyện Thi (`CODE/self-study/` & `EXAMS/`)
| STT | Phân mục | Nội dung chính | Thư mục | Trạng thái |
| :-: | :--- | :--- | :--- | :-: |
| 1 | **Tự học ở nhà** | Bài tập về nhà, mini project tự luyện | [`CODE/self-study`](./CODE/self-study) | 🔄 Đang cập nhật |
| 2 | **Luyện thi PE** | Luyện đề thi thực hành PE 90 phút | [`EXAMS`](./EXAMS) | 🎯 Chuẩn bị |

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

Mỗi thư mục trong `CODE/in-class/` hoặc `CODE/self-study/` là một dự án React/Vite độc lập. Để chạy bất kỳ tuần nào:

```bash
# 1. Di chuyển vào thư mục bài học (ví dụ: se2041-demo-01)
cd CODE/in-class/se2041-demo-01

# 2. Cài đặt các thư viện phụ thuộc (chỉ cần chạy lần đầu)
npm install

# 3. Khởi chạy môi trường phát triển
npm run dev
```

---

## 📌 Quy Tắc Viết Commit (Conventional Commits)

```text
<type>(<phạm vi>): <mô tả ngắn gọn hành động>
```

- `feat(class-w4)`: Thêm bài học / demo mới trên lớp.
- `feat(self-study)`: Thêm bài tập tự luyện tại nhà.
- `fix(router)`: Sửa lỗi điều hướng trang.
- `docs(exams)`: Thêm đề thi hoặc tài liệu ôn thi.

---

## ✍️ Tác Giả
- **Họ và tên:** Nguyễn Phạm Xuân Nhi
- **MSSV:** SE201170
- **GitHub:** [@xuannhj](https://github.com/xuannhj)