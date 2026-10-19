# 📋 SỔ TAY HỌC TẬP & CHECKLIST THỰC CHIẾN BÀI PE TRIAL

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Môn học:** FER202 - Front-End Web Development with React  
> **Đề thi:** FER202 Trial PE (Music Library & Management)  
> **Thời gian làm bài chuẩn:** 85 phút  
> **Mục tiêu:** Nắm vững bản chất kiến thức, tự tin code từ số 0, đạt điểm tối đa 10/10.

---

## 🎯 PHẦN 1: TIẾN ĐỘ THỰC TẾ HIỆN TẠI

- [x] **Task 1: Tạo MockAPI & Cấu hình `.env`**
  - Endpoint: `https://6ad040de03feaa52b21f292c.mockapi.io/api/v1/SE201170`
  - Đã nạp 10 bài hát từ file `music_library.json`.
- [x] **Task 2: Trang Music Library (`/se201170/music-library`)**
  - Đã có Navbar với 2 link điều hướng chuẩn URL.
  - Sắp xếp A–Z theo Title (`localeCompare`).
  - Hiển thị Grid Card, format `durationSec` sang `mm:ss`, hiển thị badge `Trending`.
- [x] **Cấu hình Routes trong [App.jsx](file:///e:/SEMESTER%205/FER202/EXAMS/mock-tests/FER202_TRIAL_PE/fer/src/App.jsx)**:
  - `/se201170/music-library`
  - `/se201170/music-management`
  - `/se201170/add-song`
  - `/se201170/update-song/:id` (Dynamic Segment)
- [x] **Trang [MusicManagement.jsx](file:///e:/SEMESTER%205/FER202/EXAMS/mock-tests/FER202_TRIAL_PE/fer/src/pages/MusicManagement.jsx)**:
  - Đã có nút *Add song* (`as={Link}`).
  - Bảng hiển thị danh sách bài hát, sort `id` giảm dần.
  - Chức năng Xóa `handleDelete` với `window.confirm`, `axios.delete` và cập nhật state bằng `.filter()`.
  - Nút *Edit* (`as={Link}`) trỏ đúng `/se201170/update-song/${item.id}`.
- [x] **Task 3.2: Hoàn thiện Formik & Yup cho [AddSong.jsx](file:///e:/SEMESTER%205/FER202/EXAMS/mock-tests/FER202_TRIAL_PE/fer/src/pages/AddSong.jsx)** ✅ Hoàn thành xuất sắc (Tự code 100%)
- [x] **Task 3.3: Hoàn thiện Formik & Yup cho [UpdateSong.jsx](file:///e:/SEMESTER%205/FER202/EXAMS/mock-tests/FER202_TRIAL_PE/fer/src/pages/UpdateSong.jsx)** ✅ Hoàn thành xuất sắc (Tự code 100%)

---

## 🧠 PHẦN 2: TƯ DUY & BẢN CHẤT CỐT LÕI (CHEATSHEET ÔN TẬP)

### A. Bản chất của `useEffect` & Dependency Array
* **`useEffect` sinh ra để làm gì?** Để xử lý các tác vụ bên ngoài React (Side Effects): gọi API, đổi title trang, hẹn giờ.
* **Bảng so sánh 3 dạng Dependency Array (Cực hay hỏi vấn đáp/trắc nghiệm):**

| Cú pháp | Thời điểm kích hoạt | Ứng dụng thực tế |
| :--- | :--- | :--- |
| `useEffect(() => { ... })` *(Không có mảng)* | Chạy sau **mỗi lần** render | Hầu như không dùng, rất dễ gây treo trình duyệt |
| `useEffect(() => { ... }, [])` *(Mảng rỗng `[]`)* | Chạy đúng **1 lần duy nhất** khi component vừa mount | **Gọi API lấy danh sách bài hát ban đầu** |
| `useEffect(() => { ... }, [id])` | Chạy lần đầu + chạy lại mỗi khi `id` đổi giá trị | **Gọi API lấy bài hát theo ID khi URL thay đổi** |

* **Code gọi API chuẩn với Axios + `async/await`:**
```javascript
useEffect(() => {
  const fetchSongs = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL);
      // Sắp xếp A-Z: localeCompare | Sắp xếp ID giảm dần: b.id - a.id
      setSongs(response.data.sort((a, b) => Number(b.id) - Number(a.id)));
    } catch (error) {
      console.log(error);
    }
  };
  fetchSongs();
}, []);
```

---

### B. Bản chất của `React Router`
1. **`<BrowserRouter>`**: "Bộ não" quản lý lịch sử trình duyệt, bắt buộc bọc quanh `<App />` trong `main.jsx`.
2. **`<Routes>` & `<Route>`**: Bản đồ phân luồng đường dẫn (URL $\to$ Component tương ứng).
3. **Thẻ `<Link to="...">` / `as={Link}`**: Chuyển trang mà **không bị reload lại trang** (giữ nguyên trải nghiệm Single Page App).
4. **Dynamic Segment (`/:id`)**: Giúp 1 component (như `UpdateSong`) dùng chung được cho mọi ID bài hát.
5. **`useParams()`**: Chiếc thìa lấy tham số `:id` từ URL xuống component:
   ```javascript
   import { useParams } from 'react-router';
   const { id } = useParams(); // 'id' phải trùng tên với ':id' trong Route
   ```
6. **`useNavigate()`**: Chuyển trang bằng code sau khi thực hiện xong hành động (Submit xong, Xóa xong):
   ```javascript
   import { useNavigate } from 'react-router';
   const navigate = useNavigate();
   navigate('/se201170/music-management'); // Chuyển về trang bảng
   navigate(-1); // Quay lại trang trước
   ```

---

### C. Bản chất của `Formik` & `Yup` (Xử lý Form chuyên nghiệp)

#### ❌ Vì sao không dùng `useState` thông thường?
Nếu dùng `useState`, với 6 ô nhập liệu ta cần tạo 6 `useState` lưu giá trị + 6 `useState` lưu lỗi + hàng chục dòng `if-else` kiểm tra regex $\to$ code rối, dễ nhầm khi thi.

#### ✅ Giải pháp với `useFormik`:
* `initialValues`: Nơi khởi tạo dữ liệu ban đầu cho các ô input.
* `validationSchema`: Gắn luật kiểm tra của `Yup`.
* `onSubmit`: Tự động kích hoạt khi form ĐÃ HỢP LỆ và người dùng bấm nút Submit.

```javascript
const formik = useFormik({
  // ⚠️ LUÔN ĐỂ CHUỖI RỖNG "", KHÔNG ĐỂ KHOẢNG TRẮNG " "
  initialValues: {
    title: "",
    artist: "",
    coverImg: "",
    durationSec: "",
    genre: "",
    isTrending: false,
  },
  validationSchema: validationSchema,
  onSubmit: async (values) => {
    try {
      await axios.post(import.meta.env.VITE_API_URL, values);
      alert("Added successfully!");
      navigate('/se201170/music-management');
    } catch (error) {
      console.log(error);
    }
  }
});
```

#### 🔗 Cách kết nối Formik với giao diện React-Bootstrap:
1. **Thẻ `<Form>` gốc:** Gắn `onSubmit={formik.handleSubmit}`
2. **Ô nhập chữ / số thông thường:** Dùng `{...formik.getFieldProps("tên_trường")}`
3. **Ô Dropdown Select:** Dùng `{...formik.getFieldProps("genre")}`
4. **Nút gạt Switch (`isTrending`):**
   > [!IMPORTANT]
   > Với thẻ Switch/Checkbox trong React-Bootstrap, **không dùng `getFieldProps`** vì nó thiếu prop `checked`. Hãy viết rõ:
   ```jsx
   <Form.Check 
     type="switch" 
     id="isTrending"
     name="isTrending"
     label="Is Trending?" 
     checked={formik.values.isTrending} 
     onChange={formik.handleChange} 
   />
   ```
5. **Hiển thị thông báo lỗi màu đỏ:**
   ```jsx
   {formik.touched.title && formik.errors.title && (
     <Form.Text className="text-danger">{formik.errors.title}</Form.Text>
   )}
   ```

---

### D. Bộ quy tắc kiểm tra `Yup` theo đúng đề thi PE Trial

```javascript
import * as Yup from 'yup';

const validationSchema = Yup.object({
  // Bắt buộc, tối thiểu 2 ký tự
  title: Yup.string()
    .trim()
    .min(2, "Title must have at least 2 characters")
    .required("Title is required"),

  // Bắt buộc, phải nhiều hơn 1 từ (chứa ít nhất 1 khoảng cách giữa các từ)
  artist: Yup.string()
    .trim()
    .test("multi-word", "Artist must contain more than 1 word", (value) => {
      return value ? value.trim().split(/\s+/).length > 1 : false;
    })
    .required("Artist is required"),

  // Bắt buộc, URL hợp lệ
  coverImg: Yup.string()
    .url("Cover Image must be a valid URL")
    .required("Cover image is required"),

  // Bắt buộc, số dương tối đa 3 chữ số (1 - 999)
  durationSec: Yup.number()
    .typeError("Duration must be a number")
    .positive("Duration must be positive")
    .max(999, "Duration must have maximum of 3 digits")
    .required("Duration is required"),

  // Bắt buộc phải chọn (không được để rỗng)
  genre: Yup.string()
    .required("Please select a genre"),
});
```

---

### E. Kỹ thuật Đổ Dữ Liệu Cũ vào Form Sửa ([UpdateSong.jsx](file:///e:/SEMESTER%205/FER202/EXAMS/mock-tests/FER202_TRIAL_PE/fer/src/pages/UpdateSong.jsx))

```javascript
const { id } = useParams();

useEffect(() => {
  const fetchSong = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
      // ⚠️ PHẢI NẠP ĐỦ CẢ 6 TRƯỜNG để khi PUT không bị mất ảnh, thể loại cũ
      formik.setValues({
        title: response.data.title || "",
        artist: response.data.artist || "",
        coverImg: response.data.coverImg || "",
        durationSec: response.data.durationSec || "",
        genre: response.data.genre || "",
        isTrending: Boolean(response.data.isTrending),
      });
    } catch (error) {
      console.log(error);
    }
  };
  fetchSong();
}, [id]);
```
Và trong `onSubmit` của trang Sửa:
```javascript
await axios.put(`${import.meta.env.VITE_API_URL}/${id}`, values);
alert("Updated successfully!");
navigate('/se201170/music-management');
```

---

## 🎯 PHẦN 3: CHECKLIST TỰ CODE TỪNG BƯỚC (STEP-BY-STEP CHALLENGE)

Hãy tích dấu `[x]` vào từng mục sau khi bạn tự tay code xong mà không cần nhìn tài liệu:

### 📍 Giai đoạn 1: Master MockAPI & `.env`
- [x] Tạo resource trên MockAPI với tên là MSSV (`SE201170`).
- [x] Tạo file `.env` chứa `VITE_API_URL=https://...` (nhớ restart dev server sau khi tạo `.env`).
- [x] Nạp dữ liệu ban đầu từ `music_library.json`.

### 📍 Giai đoạn 2: Master Trang Music Library (Card View)
- [x] Dùng `useEffect` với `[]` để fetch dữ liệu lúc vừa vào trang.
- [x] Sắp xếp danh sách A-Z theo title: `.sort((a, b) => a.title.localeCompare(b.title))`.
- [x] Format giây sang phút:giây: `Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0')`.
- [x] Render Grid Card React-Bootstrap có ảnh, badge Trending.

### 📍 Giai đoạn 3: Master Trang Music Management (Table & Delete)
- [x] Dựng bảng `<Table striped bordered hover>` có các cột theo yêu cầu.
- [x] Sắp xếp theo ID giảm dần: `.sort((a, b) => Number(b.id) - Number(a.id))`.
- [x] Thêm thumbnail 60x60px: `<img src={item.coverImg} width={60} height={60} style={{ objectFit: 'cover' }} />`.
- [x] Nút Add Song trên đầu bảng trỏ tới `/se201170/add-song`.
- [x] Viết hàm xóa `handleDelete`:
  - Có `window.confirm`.
  - Gọi `await axios.delete(URL + '/' + id)`.
  - Cập nhật state `setSongs(songs.filter(s => s.id !== id))` và `alert("Deleted successfully!")`.
- [x] Nút Edit dẫn sang `/se201170/update-song/${item.id}`.

### 📍 Giai đoạn 4: Master Trang Add Song (Formik + Yup) ✅ HOÀN THÀNH
- [x] Khai báo `validationSchema` với Yup đầy đủ 5 trường bắt buộc.
- [x] Dùng `useFormik` với `initialValues` chuỗi rỗng `""`.
- [x] Dựng form Bootstrap đầy đủ: `title`, `artist`, `coverImg`, `durationSec`, `genre` (select 5 options: Pop, Rock, Jazz, Instrumental, Acoustic), `isTrending` (switch có `checked`).
- [x] Bắt lỗi hiển thị chữ đỏ `formik.touched... && formik.errors...`.
- [x] Bấm submit: gọi `axios.post`, alert thành công, `navigate('/se201170/music-management')`.

### 📍 Giai đoạn 5: Master Trang Update Song (Dynamic Route + PUT) ✅ HOÀN THÀNH
- [x] Lấy `id` bằng `const { id } = useParams()`.
- [x] Dùng `useEffect` gọi `axios.get(URL + '/' + id)` và `formik.setValues(...)` nạp đủ 6 trường.
- [x] Dùng lại form giao diện và `validationSchema` của AddSong.
- [x] Bấm submit: gọi `axios.put(URL + '/' + id, values)`, alert thành công, `navigate('/se201170/music-management')`.

### 📍 Giai đoạn 6: Kiểm tra trước khi nộp bài ✅ HOÀN THÀNH
- [x] Mở trình duyệt click test từ đầu đến cuối luồng (Thêm $\to$ Sửa $\to$ Xóa $\to$ Chuyển trang).
- [x] Mở terminal chạy `npm run build` để chắc chắn không có lỗi biên dịch (Đã build thành công trong 836ms).

---

## ⚠️ PHẦN 4: 7 LỖI TỐI KỴ CẦN TRÁNH (DỄ BỊ 0 ĐIỂM HOẶC TRỪ ĐIỂM NẶNG)

1. ❌ **Hardcode URL API trực tiếp trong code:**
   * *Hậu quả:* Thầy cô chấm bài sẽ **cho 0 điểm ngay lập tức** theo quy chế PE. Luôn dùng `import.meta.env.VITE_API_URL`.
2. ❌ **Đặt sai định dạng URL theo MSSV:**
   * *Hậu quả:* Mất điểm Routing. Mọi link đều phải có tiền tố `/se201170/...`.
3. ❌ **Gắn sự kiện `onClick={handleDelete(item.id)}` thay vì `onClick={() => handleDelete(item.id)}`:**
   * *Hậu quả:* Hàm tự kích hoạt ngay khi vừa mở trang $\to$ popup xác nhận hiện liên tục $\to$ vô tình xóa sạch dữ liệu trên MockAPI!
4. ❌ **Quên mảng `[]` trong `useEffect`:**
   * *Hậu quả:* Gây re-render vô tận $\to$ làm treo trình duyệt hoặc bị MockAPI chặn vì spam request.
5. ❌ **Dùng thẻ `<a href="...">` thay vì `<Link to="...">`:**
   * *Hậu quả:* Trang bị tải lại từ đầu (reload), mất hết trạng thái SPA.
6. ❌ **Để giá trị ban đầu trong `initialValues` là khoảng trắng `" "`:**
   * *Hậu quả:* Khi người dùng gõ vào ô nhập sẽ bị thừa 1 dấu cách ở đầu, validation có thể bị tính sai hoặc không trim được.
7. ❌ **Nạp thiếu trường khi `setValues` ở trang Sửa (UpdateSong):**
   * *Hậu quả:* Khi bấm nút Update, những trường bị quên sẽ gửi dữ liệu rỗng lên MockAPI và làm mất sạch thông tin ảnh, thể loại cũ.
