# 🧪 Danh Mục Đề Bài & Hướng Dẫn Thực Hành Lab — FER202

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Môn học:** FER202 - Front-End Web Development with React  
> **Dự án thực hành chính:** [`CODE/in-class/se2041-demo-01/`](../CODE/in-class/se2041-demo-01/)

---

## 📋 Danh Sách 4 Bài Lab Chính Thức

| Bài Lab | Chủ Đề Cốt Lõi | File Đề Bài (Markdown / Word) | Trạng Thái / Mã Nguồn Thực Hiện |
| :--- | :--- | :--- | :--- |
| **Lab 1** | **React Components & Props** | [Lab 1 Markdown](./Lab%201%20-%20React%20Components%20(1).md) · [Word (.docx)](./Lab%201%20-%20React%20Components%20(1).docx) | ✅ **10/10** — [`se2041-demo-01`](../CODE/in-class/se2041-demo-01/) (Grid 16 hoa lan, Props `orchid`) |
| **Lab 2** | **React Hooks & State** | [Lab 2 Markdown](./Lab%202%20-%20React%20Hook.md) · [Word (.docx)](./Lab%202%20-%20React%20Hook.docx) | ✅ **10/10** — [`se2041-demo-01`](../CODE/in-class/se2041-demo-01/) (Theme Sáng/Tối + Modal Quick View) |
| **Lab 3** | **React Router SPA** | [Lab 3 Markdown](./Lab%203%20-%20React%20Router.md) · [Word (.docx)](./Lab%203%20-%20React%20Router.docx) | ✅ **10/10** — [`se2041-demo-01`](../CODE/in-class/se2041-demo-01/) (`useParams`, `useNavigate(-1)`, `<Outlet />`, `NavLink`) |
| **Lab 4** | **Formik, Yup & UI Library** | [Lab 4 Markdown](./Lab%204%20-%20React%20UI%20Library,%20Formik,%20Yup.md) | ✅ **10/10** — [`Contact.jsx`](../CODE/in-class/se2041-demo-01/src/pages/Contact.jsx) (Formik 6 trường, Yup Schema, `getFieldProps`, Alert JSON) |
| **Lab 5** | **Fetch API & Full-Stack CRUD** | [Lab 5+6 Markdown](./Lab%205%2B6%20-%20Fetch.md) | ✅ **10/10** — [`se2041-demo-01`](../CODE/in-class/se2041-demo-01/) (GET Home & Detail, DELETE Table, POST Add, PUT Update) |
| **Lab 6** | **Google Login (OAuth 2.0)** | [Lab 5+6 Markdown](./Lab%205%2B6%20-%20Fetch.md) | ⏳ Sắp thực hiện (Google OAuth, JWT Decode, Phân quyền Admin) |

---

## 🛠️ Hướng Dẫn Mở & Chạy Dự Án Hoa Lan (Lab 1 -> Lab 5)

```bash
cd "CODE/in-class/se2041-demo-01"
npm install
npm run dev
```

* Ứng dụng chạy tại: `http://localhost:5173/`
* Xem Trang chủ: `/`
* Xem Chi tiết hoa theo ID: `/detail/1`
* Xem Trang Liên hệ: `/contact`
* Bắt lỗi trang không tồn tại: `/bat-ky-duong-dan-sai` (Splat Route `*`)
