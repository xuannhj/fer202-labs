# 📋 Sổ Tay & Checklist Tự Code: `useEffect` & `React Router`

> **Môn học:** FER202 - Front-End Web Development with React  
> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Mục tiêu:** Tự tay code lại từ đầu từ số 0, nắm vững bản chất, tự tin 100% khi gặp bài thi PE và Assignment.

---

## 📚 PHẦN 1: TÀI LIỆU HỌC CHUẨN TỪ REACT.DEV & REACT ROUTER

Dưới đây là các bài đọc chính thức từ trang tài liệu chuẩn của React (`react.dev`) và React Router (`reactrouter.com`) được chọn lọc đúng trọng tâm môn học:

### 🌟 1. Tài liệu về `useEffect` trên React Dev
1. 📖 **[Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)** *(Bắt buộc đọc)*  
   * **Nội dung:** Bản chất Effect là gì, tại sao không gọi API trực tiếp trong thân component, cách viết dependency array `[]`, vòng đời của Effect.
2. 📖 **[You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)** *(Cực hay để nâng cao tư duy)*  
   * **Nội dung:** Những trường hợp lạm dụng `useEffect` sai cách (như tính toán dữ liệu từ props, xử lý sự kiện click button) và cách viết chuẩn sạch.
3. 📖 **[API Reference: `useEffect`](https://react.dev/reference/react/useEffect)**  
   * **Nội dung:** Tra cứu nhanh cú pháp, tham số, cleanup function, và ví dụ mẫu chuẩn về fetching data.

### 🌟 2. Tài liệu về `React Router`
1. 📖 **[React Router: Declarative Mode](https://reactrouter.com/start/modes#declarative)** *(Đúng tài liệu thầy gửi trên lớp)*  
   * **Nội dung:** Cách khai báo Routes theo kiểu component `<Routes>` & `<Route>`.
2. 📖 **[React Router Tutorial: Getting Started](https://reactrouter.com/en/main/start/tutorial)**  
   * **Nội dung:** Dựng SPA, liên kết trang không reload với `<Link>`, điều hướng động với `useParams()`.
3. 📖 **[Hooks Reference: `useParams`](https://reactrouter.com/en/main/hooks/use-params) & [`useNavigate`](https://reactrouter.com/en/main/hooks/use-navigate)**  
   * **Nội dung:** Chi tiết cách lấy ID từ URL và cách chuyển trang tự động bằng mã JavaScript.

---

## 🧠 PHẦN 2: TƯ DUY & BẢN CHẤT CỐT LÕI (CHEATSHEET)

### A. Bản chất của `useEffect` (Quản lý Side Effect)
* **Side Effect là gì?** Là bất cứ hành động nào tương tác với "thế giới bên ngoài" component (gọi API, hẹn giờ `setTimeout`, đổi title trang `document.title`).
* **Bảng so sánh 3 dạng Dependency Array (Hay bị hỏi vấn đáp & thi trắc nghiệm):**

| Cú pháp | Thời điểm chạy | Ứng dụng thực tế |
| :--- | :--- | :--- |
| `useEffect(() => { ... })` *(Không có mảng)* | Chạy sau **mỗi lần** render | Hầu như không dùng, rất dễ gây lag |
| `useEffect(() => { ... }, [])` *(Mảng rỗng `[]`)* | Chạy đúng **1 lần duy nhất** khi component vừa xuất hiện (mount) | **Gọi API lấy danh sách bài hát/sản phẩm ban đầu** |
| `useEffect(() => { ... }, [id, category])` | Chạy lần đầu + chạy lại mỗi khi `id` hoặc `category` đổi giá trị | **Gọi API lấy chi tiết sản phẩm khi ID trên URL thay đổi** |

* **Mẫu code gọi API chuẩn với Axios + `async/await`:**
```jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://6ad040de03feaa52b21f292c.mockapi.io/api/v1/SE201170');
      // Sắp xếp A-Z bằng localeCompare trước khi lưu vào State:
      const sorted = [...response.data].sort((a, b) => a.title.localeCompare(b.title));
      setData(sorted);
    } catch (error) {
      console.error('Lỗi khi fetch API:', error);
    }
  };

  fetchData();
}, []); // Mảng rỗng đảm bảo chỉ gọi 1 lần
```

---

### B. Bản chất của `React Router` (Điều hướng Single Page Application)
1. **`<BrowserRouter>`**: "Bộ não" quản lý lịch sử duyệt web của trình duyệt. Luôn bọc ngoài cùng ở `main.jsx`.
2. **`<Routes>` & `<Route>`**: Bản đồ phân luồng đường dẫn.
3. **Thẻ `<Link to="...">`**: Thay thế cho thẻ `<a href="...">` để chuyển trang mà **không bị tải lại trang (reload)**.
4. **Dynamic Segment (`/:id`)**: Giúp 1 giao diện Detail phục vụ cho hàng triệu sản phẩm khác nhau.
5. **`useParams()`**: Chiếc "chìa khóa" lấy giá trị `:id` trên thanh địa chỉ URL xuống để dùng.
6. **`useNavigate()`**: Chiếc "công tắc" chuyển trang bằng logic code (ví dụ: bấm nút Save $\rightarrow$ lưu xong tự chuyển về trang chủ).

---

## 🎯 PHẦN 3: CHECKLIST TỰ CODE TỪNG BƯỚC (STEP-BY-STEP CHALLENGE)

Hãy tích dấu `[x]` vào từng mục sau khi bạn tự tay code xong mà không cần nhìn code mẫu:

### 📍 Giai đoạn 1: Master `useEffect` & Gọi API Mock
- [ ] **Bước 1.1:** Mở terminal, chạy lệnh test MockAPI bằng trình duyệt hoặc Postman để kiểm tra endpoint hoạt động:  
  `https://6ad040de03feaa52b21f292c.mockapi.io/api/v1/SE201170`
- [ ] **Bước 1.2:** Tạo 1 state `const [songs, setSongs] = useState([])`.
- [ ] **Bước 1.3:** Tự viết `useEffect` với dependency array `[]`.
- [ ] **Bước 1.4:** Tự viết hàm `async () => { const res = await axios.get(...) }` bên trong Effect.
- [ ] **Bước 1.5:** Tự viết logic sắp xếp bài hát theo thứ tự bảng chữ cái A-Z bằng `.sort((a, b) => a.title.localeCompare(b.title))`.
- [ ] **Bước 1.6:** Render danh sách ra giao diện bằng thẻ `Row`, `Col` và `Card` của Bootstrap (nhớ thêm `key={song.id}`).
- [ ] **Bước 1.7:** Tự format thời lượng bài hát chuẩn: `Math.floor(song.durationSec / 60) + ':' + String(song.durationSec % 60).padStart(2, '0')`.

---

### 📍 Giai đoạn 2: Master `React Router` cơ bản
- [ ] **Bước 2.1:** Mở file `main.jsx`, import `{ BrowserRouter } from 'react-router'` và bọc component `<App />`.
- [ ] **Bước 2.2:** Mở file `App.jsx`, import `{ Routes, Route } from 'react-router'`.
- [ ] **Bước 2.3:** Tạo thanh `MyNavBar.jsx` dùng React Bootstrap:
  - Dùng thuộc tính `as={Link}` và `to="/duong-dan"` để link không bị reload trang.
- [ ] **Bước 2.4:** Định nghĩa 3 routes cơ bản:
  - Route trang chủ: `path="/"`.
  - Route danh sách: `path="/music-library"`.
  - Route quản lý: `path="/music-management"`.
- [ ] **Bước 2.5:** Tạo trang `NotFound.jsx` và cấu hình Splat Route bắt lỗi 404: `path="*" element={<NotFound />}`.

---

### 📍 Giai đoạn 3: Kết hợp `React Router` + `useEffect` (Trang Xem Chi Tiết)
- [ ] **Bước 3.1:** Khai báo route chi tiết có dynamic segment:  
  `<Route path="/song-detail/:id" element={<SongDetail />} />`.
- [ ] **Bước 3.2:** Trên mỗi thẻ bài hát ở trang Thư viện, thêm nút `<Button>` hoặc `<Link>` dẫn đến:  
  `to={'/song-detail/' + song.id}`.
- [ ] **Bước 3.3:** Tạo trang `SongDetail.jsx`:
  - Dùng `const { id } = useParams();` để lấy mã bài hát người dùng vừa bấm.
  - Dùng `useEffect` gọi API chi tiết theo ID:  
    `axios.get(API_URL + '/' + id)`
  - Hiển thị đầy đủ thông tin: Ảnh to, Tên bài hát, Nghệ sĩ, Thể loại, Trạng thái Trending.
- [ ] **Bước 3.4:** Thêm nút "Quay lại" (Back):
  - Dùng `const navigate = useNavigate();`
  - Gắn sự kiện `onClick={() => navigate(-1)}` hoặc `navigate('/music-library')`.

---

### 📍 Giai đoạn 4: Thử thách đề thi PE thực tế (90 Phút)
- [ ] **Bước 4.1:** Dựng trang `MusicManagement.jsx` dạng `<Table striped bordered hover>`.
- [ ] **Bước 4.2:** Dùng `useEffect` lấy danh sách bài hát và sắp xếp theo **ID giảm dần** (`(a, b) => b.id - a.id`).
- [ ] **Bước 4.3:** Viết hàm xóa bài hát `handleDelete(id)`:
  - Có hộp thoại hỏi trước: `if (window.confirm("Bạn có chắc muốn xóa bài hát này?")) { ... }`.
  - Gọi `await axios.delete(API_URL + '/' + id)`.
  - Gọi lại hàm lấy dữ liệu để cập nhật lại bảng mà không cần F5 trình duyệt.
- [ ] **Bước 4.4:** Nút Edit trên bảng dẫn sang trang chỉnh sửa:  
  `onClick={() => navigate('/update-song/' + song.id)}`.

---

## ⚠️ PHẦN 4: 5 LỖI TỐI KỴ CẦN TRÁNH (DỄ BỊ TRỪ ĐIỂM HOẶC 0 ĐIỂM)

1. ❌ **Lỗi gọi API trực tiếp trong thân component (Không dùng `useEffect`):**
   * *Hậu quả:* Gây re-render vô tận, làm treo trình duyệt hoặc MockAPI bị cấm vì gửi hàng nghìn request/giây.
2. ❌ **Quên mảng `[]` trong `useEffect`:**
   * *Hậu quả:* `useEffect(() => { fetchApi() })` không có `[]` sẽ bị kích hoạt sau mỗi lần `setData` $\rightarrow$ lặp vô tận.
3. ❌ **Hardcode URL API trực tiếp trong code:**
   * *Hậu quả:* Thầy chấm bài sẽ cho 0 điểm phần cấu hình. Luôn đọc từ `import.meta.env.VITE_API_URL`.
4. ❌ **Dùng thẻ `<a href="...">` thay vì `<Link to="...">`:**
   * *Hậu quả:* Làm ứng dụng React bị tải lại toàn bộ trang (mất hết state đang có, vi phạm nguyên lý Single Page App).
5. ❌ **Quên thuộc tính `key` trong hàm `.map()`:**
   * *Hậu quả:* Báo warning đỏ ở Console F12 $\rightarrow$ Bị trừ điểm chấm giao diện.
