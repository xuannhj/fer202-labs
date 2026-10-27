# 📋 Kế Hoạch & Sổ Tay Thực Chiến Lab 5 & 6 — Fetch API, CRUD & Google Login

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Môn học:** FER202 - Front-End Web Development with React  
> **Dự án thực hiện:** [`CODE/in-class/se2041-demo-01/`](../../README.md)  
> **Đề bài gốc:** [`LAB/Lab 5+6 - Fetch.md`](../../../../LAB/Lab%205%2B6%20-%20Fetch.md)

---

## 🎯 Mục Tiêu Cốt Lõi
Nâng cấp toàn bộ ứng dụng hoa lan `se2041-demo-01` từ **dữ liệu tĩnh trong file `ListOfOrchids.js`** thành một **ứng dụng Full-Stack chuẩn RESTful API**:
1. Dữ liệu lưu trữ tập trung trên máy chủ đám mây **MockAPI.io**.
2. Gọi API bất đồng bộ (`axios` + `async/await` + `useEffect`) để hiển thị danh sách và chi tiết hoa.
3. Trang quản trị viên thực hiện đầy đủ 4 thao tác CRUD (**C**reate, **R**ead, **U**pdate, **D**elete).
4. Xác thực đăng nhập bằng tài khoản Google (**Google OAuth 2.0**) để mở khóa trang quản trị.

---

## 🗺️ Lộ Trình 5 Giai Đoạn (Anh Ra Chiêu – Nhi Múa Phím)

```text
Giai đoạn 1: MockAPI & .env  ───►  Giai đoạn 2: GET API & Hiển thị
                                            │
                                            ▼
Giai đoạn 4: Form Thêm & Sửa ◄───  Giai đoạn 3: Bảng Quản Lý & Xóa
             │
             ▼
Giai đoạn 5: Đăng Nhập Google & Phân Quyền
```

---

## 🚀 GIAI ĐOẠN 1: THIẾT LẬP MOCKAPI VÀ BIẾN MÔI TRƯỜNG (.env)

### 📚 Kiến thức cốt lõi cần nhớ:
1. **RESTful API là gì?**  
   Là một chuẩn giao tiếp giữa Frontend (React) và Backend/Database thông qua các phương thức HTTP:
   * `GET`: Lấy dữ liệu về đọc.
   * `POST`: Thêm dữ liệu mới.
   * `PUT`: Ghi đè cập nhật dữ liệu cũ theo ID.
   * `DELETE`: Xóa dữ liệu theo ID.
2. **Tại sao phải dùng file `.env`?**  
   Cấm tuyệt đối hardcode đường link API dài ngoằng trong code. Dùng `import.meta.env.VITE_API_URL` để khi nộp bài hoặc đổi endpoint chỉ cần sửa đúng 1 dòng trong file `.env`.

### 📝 Các bước thực hiện:
- [x] **Bước 1.1:** Mở trang [mockapi.io](https://mockapi.io), tạo project mới (hoặc dùng endpoint hiện có). Tạo resource tên là `orchids`.
- [x] **Bước 1.2:** Cấu hình Schema cho `orchids` gồm các trường:
  * `id`: string/number
  * `name`: string
  * `rating`: number
  * `isSpecial`: boolean
  * `isNatural`: boolean
  * `image`: string (URL ảnh)
  * `color`: string
  * `numberOfLike`: number
  * `origin`: string
  * `category`: string
- [x] **Bước 1.3:** Nạp sẵn 16 bông hoa lan mẫu từ `ListOfOrchids.js` vào MockAPI.
- [x] **Bước 1.4:** Cài đặt thư viện `axios` vào `se2041-demo-01`:
  ```bash
  npm install axios
  ```
- [x] **Bước 1.5:** Tạo file `.env` tại thư mục gốc của `se2041-demo-01`:
  ```env
  VITE_API_URL=https://<your-mockapi-id>.mockapi.io/api/v1/orchids
  ```

---

## 🌐 GIAI ĐOẠN 2: LẤY DỮ LIỆU ĐỘNG TỪ API (GET API)

### 📚 Kiến thức cốt lõi cần nhớ:
* **`useEffect(() => { ... }, [])`:** Chạy đúng 1 lần sau khi giao diện render lần đầu để kéo dữ liệu từ server về.
* ⚠️ **Cạm bẫy:** Luôn nhớ mảng dependency `[]` rỗng ở cuối, nếu quên sẽ gây **vòng lặp vô tận (Infinite Loop)** làm sập ứng dụng và vượt hạn mức MockAPI!

### 📝 Các bước thực hiện:
- [x] **Bước 2.1 — Cập nhật `Home.jsx`:**
  * Khai báo state: `const [orchids, setOrchids] = useState([]);`
  * Gọi API trong `useEffect`:
    ```jsx
    useEffect(() => {
      const fetchOrchids = async () => {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setOrchids(response.data);
      };
      fetchOrchids();
    }, []);
    ```
  * Render danh sách hoa lan từ state `orchids` thay cho file tĩnh cũ.
- [x] **Bước 2.2 — Cập nhật `Detail.jsx`:**
  * Lấy `id` từ URL qua `useParams()`.
  * Gọi API lấy riêng chi tiết hoa đó: `axios.get(import.meta.env.VITE_API_URL + '/' + id)`.
  * Hiển thị chi tiết hoa lan lấy trực tiếp từ server.

---

## 🗑️ GIAI ĐOẠN 3: BẢNG QUẢN LÝ VÀ CHỨC NĂNG XÓA (DELETE API)

### 📚 Kiến thức cốt lõi cần nhớ:
* **Hộp thoại xác nhận `window.confirm()`:** Bắt buộc phải có để tránh người dùng bấm nhầm làm mất dữ liệu vĩnh viễn trên server.
* **Cập nhật State tức thì (Optimistic UI):** Sau khi gọi `axios.delete`, dùng `.filter(item => item.id !== id)` để loại bỏ dòng đó khỏi giao diện ngay lập tức mà không cần load lại trang.

### 📝 Các bước thực hiện:
- [x] **Bước 3.1:** Tạo file trang mới `src/pages/OrchidsManagement.jsx`.
- [x] **Bước 3.2:** Dùng component `<Table striped bordered hover>` của React-Bootstrap hiển thị danh sách:
  * ID, Ảnh thu nhỏ (Thumbnail), Tên hoa, Xuất xứ, Rating, Phân loại, Cột Thao tác (Actions).
- [x] **Bước 3.3:** Viết hàm xử lý xóa hoa:
  ```jsx
  const handleDelete = async (id, name) => {
    if (window.confirm(`Bạn có chắc muốn xóa hoa lan "${name}" không?`)) {
      await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
      setOrchids(orchids.filter(item => item.id !== id));
      alert("Đã xóa thành công!");
    }
  };
  ```

---

## ✍️ GIAI ĐOẠN 4: THÊM MỚI VÀ CẬP NHẬT HOA LAN (POST & PUT API)

### 📚 Kiến thức cốt lõi cần nhớ:
1. **Thêm mới (POST):** Gửi dữ liệu từ Formik lên server $\rightarrow$ Server tự sinh ID $\rightarrow$ Dùng `navigate('/management')` quay về bảng quản lý.
2. **Cập nhật (PUT):**
   * Phải gọi GET theo ID để lấy dữ liệu cũ đắp vào form bằng `formik.setValues(oldData)`.
   * ⚠️ **Cạm bẫy sống còn:** Phải nạp đủ 100% tất cả các trường để khi PUT không làm trắng các trường cũ!

### 📝 Các bước thực hiện:
- [x] **Bước 4.1 — Trang Thêm mới `AddOrchid.jsx`:**
  * Dựng Formik + Yup cho các trường hoa lan.
  * Trong `onSubmit`: Gọi `await axios.post(API_URL, values)` $\rightarrow$ `navigate('/management')`.
- [x] **Bước 4.2 — Trang Cập nhật `UpdateOrchid.jsx`:**
  * `const { id } = useParams();`
  * `useEffect` nạp dữ liệu cũ:
    ```jsx
    useEffect(() => {
      const getOrchid = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
        formik.setValues(res.data);
      };
      getOrchid();
    }, [id]);
    ```
  * `onSubmit`: Gọi `await axios.put(`${API_URL}/${id}`, values)` $\rightarrow$ `navigate('/management')`.

---

## 🔑 GIAI ĐOẠN 5: ĐĂNG NHẬP GOOGLE & PHÂN QUYỀN TRUY CẬP

### 📚 Kiến thức cốt lõi cần nhớ:
* **Google OAuth 2.0:** Cơ chế ủy quyền đăng nhập an toàn từ Google, trả về một chuỗi mã hóa gọi là `credential` (JWT Token).
* **`jwt-decode`:** Thư viện giúp giải mã chuỗi JWT để đọc tên người dùng, email và ảnh đại diện (avatar).

### 📝 Các bước thực hiện:
- [ ] **Bước 5.1:** Cài đặt các thư viện hỗ trợ Google Login:
  ```bash
  npm install @react-oauth/google jwt-decode
  ```
- [ ] **Bước 5.2:** Lấy Google Client ID từ Google Cloud Console (hoặc dùng Client ID mẫu thực hành của trường).
- [ ] **Bước 5.3:** Bọc toàn bộ ứng dụng bằng `<GoogleOAuthProvider clientId="...">` trong `main.jsx`.
- [ ] **Bước 5.4 — Cập nhật `MyNavBar.jsx`:**
  * Đặt nút `<GoogleLogin onSuccess={...} onError={...} />`.
  * Giải mã thông tin: `const user = jwtDecode(credentialResponse.credential);`
  * Lưu vào state `user` (hoặc `localStorage`).
- [ ] **Bước 5.5 — Phân quyền hiển thị:**
  * Nếu chưa đăng nhập: Navbar chỉ hiện nút Login, ẩn menu "Quản lý hoa lan".
  * Nếu đã đăng nhập: Hiện avatar + tên người dùng + nút Logout, đồng thời mở khóa menu "Quản lý hoa lan"!

---

## 🏁 BẢNG TỔNG KẾT TIÊU CHÍ ĐÁNH GIÁ ĐIỂM 10/10

| Chức năng | Tiêu chí kỹ thuật bắt buộc | Trạng thái |
| :--- | :--- | :-: |
| **MockAPI & .env** | Đầy đủ 16 hoa lan, dùng `import.meta.env.VITE_API_URL` | ✅ Hoàn thành (10/10) |
| **GET API** | `useEffect` load danh sách Trang chủ & Chi tiết | ✅ Hoàn thành (10/10) |
| **DELETE API** | `window.confirm`, `axios.delete`, cập nhật state tức thì | ✅ Hoàn thành (10/10) |
| **POST & PUT** | Formik + Yup nạp đủ 100% trường, điều hướng `navigate` | ✅ Hoàn thành (10/10) |
| **Google Login** | Đăng nhập Google thành công, giải mã JWT, phân quyền Admin | ⏳ Sắp làm |



