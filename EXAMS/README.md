# 🎓 Khu Vực Đề Thi & Luyện Thi PE (Practical Exam) - FER202

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170

Tài liệu hướng dẫn, lưu trữ đề thi thực tế và các bài luyện thi thực hành có giới hạn thời gian (90 phút) cho môn **FER202 - Front-End Web Development with React**.

---

## 📁 Cấu Trúc Thư Mục

```text
EXAMS/
├── past-exams/        # Đề thi thực tế các kỳ trước (Fall, Spring, Summer)
│   ├── SP24_PE_FER202/
│   └── FA24_PE_FER202/
└── mock-tests/        # Bài luyện tập trước khi thi theo giới hạn thời gian
    ├── Mock_Test_01/
    └── Mock_Test_02/
```

---

## ⏱️ Chiến Thuật Phân Bổ Thời Gian Thi PE (90 Phút)

| Thời gian | Giai đoạn | Nhiệm vụ chính |
| :---: | :--- | :--- |
| **0 - 5 phút** | **Khởi tạo & Cài đặt** | Giải nén template, chạy `npm install`, kiểm tra `npm run dev`, cài thêm `react-bootstrap`, `react-router-dom`, `axios` nếu đề yêu cầu. |
| **5 - 20 phút** | **Thiết lập Router & Layout** | Dựng `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Navbar>` điều hướng các trang theo đúng đường dẫn URL yêu cầu. |
| **20 - 60 phút** | **Quản lý State & Hiển thị Data** | Fetch/import mock data, quản lý mảng với `useState`, render danh sách bằng `.map()`, hiển thị chi tiết (Detail) bằng `useParams`. |
| **60 - 80 phút** | **Tương tác, Form & CRUD** | Xử lý thêm, sửa, xóa, tìm kiếm (Search/Filter), form validation và modal xác nhận. |
| **80 - 90 phút** | **Kiểm tra & Nộp bài** | F12 kiểm tra console không còn lỗi đỏ/warning `key`, xóa `console.log` thừa, đóng gói và nộp đúng quy định. |

---

## 📌 Checklist Kiến Thức Trọng Tâm Cần Ôn
- [ ] Thành thạo tạo Components và truyền / nhận `Props`.
- [ ] Thành thạo `useState` (quản lý state mảng, object, cập nhật bất đồng bộ).
- [ ] Thành thạo `useEffect` (gọi API với Axios/Fetch, dependency array `[]`).
- [ ] Thành thạo `react-router-dom` (Routes, Route, useNavigate, useParams, Link/NavLink).
- [ ] Thành thạo giao diện `React Bootstrap` (Navbar, Card, Modal, Table, Form, Button, Badge).
- [ ] Thành thạo xử lý mảng JavaScript: `filter()`, `map()`, `find()`, `slice()`, `sort()`.