# 🎓 Khu vực Đề thi & Luyện thi PE (Practical Exam) - FER202

Khu vực này dùng để lưu trữ các đề thi thử (Mock Tests), đề thi các kỳ trước (Past Exams) và bài giải mẫu cho môn học **FER202 - Front-End Web Development with React**.

---

## 📁 Cấu trúc thư mục

`	ext
EXAMS/
├── past-exams/        # Đề thi thực tế các kỳ trước (Fall, Spring, Summer)
│   ├── SP24_PE_FER202/
│   └── FA24_PE_FER202/
└── mock-tests/        # Bài luyện tập trước khi thi theo giới hạn thời gian
    ├── Mock_Test_01/
    └── Mock_Test_02/
`

---

## ⏱️ Kỹ năng và Quy trình làm bài thi PE (90 phút)

1. **Khởi tạo & Cài đặt (5 phút):**
   - Giải nén template đề thi (nếu có) hoặc cài đặt 
pm install.
   - Chạy 
pm run dev để kiểm tra project chạy mượt mà.
   - Cài đặt thư viện theo đề bài (ví dụ: eact-bootstrap, ootstrap, eact-router-dom, xios, eact-icons).

2. **Dựng Router & Navigation (15 phút):**
   - Thiết lập <BrowserRouter>, <Routes>, <Route>.
   - Tạo Header/NavBar với <Link> hoặc <NavLink> chuyển trang.

3. **Xử lý State & Hiển thị Dữ liệu (40 phút):**
   - Fetch dữ liệu hoặc đọc từ mock json/data file.
   - Hiển thị danh sách (Grid, Table, Card) bằng map().
   - Quản lý State bằng useState, useEffect.

4. **Xử lý Tương tác & Form (20 phút):**
   - Chức năng CRUD (Thêm, Sửa, Xóa, Xem chi tiết).
   - Form Validation, Search, Filter, Pagination hoặc Modal Confirm.

5. **Kiểm tra & Đóng gói (10 phút):**
   - Xóa console.log thừa, kiểm tra lỗi console (F12).
   - Đảm bảo không có lỗi key warning trong map().
   - Nộp bài theo đúng định dạng yêu cầu của giám thị.

---

## 📌 Checklist Ôn thi PE
- [ ] Thành thạo tạo Components và truyền Props.
- [ ] Thành thạo useState (quản lý mảng, object, cập nhật state bất đồng bộ).
- [ ] Thành thạo useEffect (gọi API với axios/fetch, xử lý dependency array).
- [ ] Thành thạo eact-router-dom (Routes, Route, useNavigate, useParams, Link).
- [ ] Thành thạo làm việc với React Bootstrap (Navbar, Card, Modal, Table, Form, Button, Badge).
- [ ] Thành thạo xử lý mảng JavaScript: ilter(), map(), ind(), educe(), sort().
