# 💡 Sổ Tay Giải Đáp Thắc Mắc & Hỏi Đáp Thực Chiến (React / JS / TS)

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Chủ đề:** Những câu hỏi thực chiến thường gặp khi làm React, đi thi PE và làm đồ án.

---

## 📌 Danh Mục Câu Hỏi
1. [Học Functional Component hay Class Component?](#1-học-functional-component-hay-class-component)
2. [`React.FC<>` là gì? Tại sao phải khai báo Interface kiểm tra Props?](#2-reactfc-là-gì-tại-sao-phải-khai-báo-interface-kiểm-tra-props)
3. [`onClick={() => ...}` khác gì với `onClick={...}`? Cạm bẫy kinh điển](#3-onclick---khác-gì-với-onclick-cạm-bẫy-kinh-điển)
4. [Dấu Backtick (\` \`) để làm gì khi gắn với ID?](#4-dấu-backtick---để-làm-gì-khi-gắn-với-id)
5. [Bản chất toàn tập của `useEffect` (Tại sao phải có, Dependency Array `[]` vs `[id]`, và vòng lặp vô tận?)](#5-bản-chất-toàn-tập-của-useeffect)
6. [Tại sao `initialValues` trong Formik phải là `""` mà TUYỆT ĐỐI không để khoảng trắng `" "`?](#6-tại-sao-initialvalues-phải-là--mà-không-để--)
7. [Tại sao Switch `isTrending` cần có `checked={formik.values.isTrending}`? Cạm bẫy trang Sửa](#7-tại-sao-switch-istrending-cần-có-checked)
8. [Cái option đầu tiên của Genre không ghi `value=""` có sao không? Và để `value="1" -> "5"` có sao không?](#8-option-genre-tại-sao-phải-có-value-và-không-để-số-1---5)
9. [`controlId` trong `Form.Group` có quan trọng không?](#9-controlid-trong-formgroup-có-quan-trọng-không)
10. [`formik.touched` là gì? Tại sao phải bọc `{formik.touched.xxx && <Form.Text ...>}`?](#10-formiktouched-là-gì-tại-sao-phải-bọc-chữ-đỏ-báo-lỗi)
11. [Tại sao trong `UpdateSong`, hàm `formik.setValues` PHẢI nạp đủ cả 6 trường?](#11-tại-sao-updatesong-phải-nạp-đủ-cả-6-trường-vào-setvalues)

---

## 1. Học Functional Component hay Class Component?

### 🎯 Câu trả lời ngắn:
**100% học và dùng Functional Component (kết hợp với Hooks)!**

### 🔍 Chi tiết:
* **Môn FER202 (Thi PE, Lab, Assignment):** Đề thi và bài thực hành hiện nay đều yêu cầu viết bằng **Functional Component** + React Hooks (`useState`, `useEffect`, `useContext`, `useNavigate`...).
* **Class Component để làm gì?**
  * Chỉ cần biết qua để hiểu khái niệm **Component Lifecycle** (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).
  * Phục vụ trả lời câu hỏi trắc nghiệm lý thuyết (FE) hoặc khi đi làm gặp dự án cũ (legacy code).

| Tiêu chí | Functional Component (Hiện đại) | Class Component (Cũ / Legacy) |
| :--- | :--- | :--- |
| **Cú pháp** | Hàm JavaScript (`function` hoặc `const App = () => {}`) | Lớp ES6 (`class App extends React.Component`) |
| **Quản lý State** | `useState(initialValue)` | `this.state = {...}` & `this.setState()` |
| **Vòng đời (Lifecycle)** | `useEffect(...)` | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` |
| **Từ khóa `this`** | Không cần dùng `this` (đỡ bị bug mất context) | Phải bind `this` hoặc cẩn thận với `this` |

> [!TIP]
> **Bảng quy đổi nhớ nhanh khi gặp trắc nghiệm:**
> - `componentDidMount()` $\Leftrightarrow$ `useEffect(() => {}, [])` (chạy 1 lần sau render)
> - `componentDidUpdate()` $\Leftrightarrow$ `useEffect(() => {}, [deps])` (chạy khi deps thay đổi)
> - `componentWillUnmount()` $\Leftrightarrow$ `useEffect(() => { return () => { /* cleanup */ } }, [])` (dọn dẹp trước khi unmount)

---

## 2. `React.FC<>` là gì? Tại sao phải khai báo Interface kiểm tra Props?

### 🎯 Bản chất:
* `React.FC<>` (viết tắt của `React.FunctionComponent<>`) thuộc về **TypeScript (`.tsx`)**, **không phải** JavaScript thuần (`.jsx`) của FER202.
* `interface` giống như một **"bản hợp đồng" (contract)** quy định trước: *Component này nhận vào những prop gì, và mỗi prop mang kiểu dữ liệu nào.*

### 🔍 Tại sao phải khai báo interface ở trên?
Nó kiểm tra cực kỳ chặt chẽ ở **2 nơi**:

```tsx
// 1. KHAI BÁO BẢN HỢP ĐỒNG (Interface)
interface FacilityCardProps {
  id: string | number;
  name: string;
  price: number;
  isAvailable?: boolean; // Dấu "?" = prop tùy chọn (optional)
}

// 2. ÁP DỤNG VÀO COMPONENT
const FacilityCard: React.FC<FacilityCardProps> = ({ id, name, price, isAvailable }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Giá: {price.toLocaleString()} VNĐ</p>
    </div>
  );
};

// ===============================================
// 3. KHI SỬ DỤNG Ở COMPONENT KHÁC (App.tsx):

// ❌ LỖI: Thiếu prop bắt buộc 'price' -> VS Code gạch đỏ ngay lập tức!
<FacilityCard id={1} name="Kho mini Q7" />

// ❌ LỖI: Sai kiểu dữ liệu (price truyền chuỗi thay vì số) -> Báo lỗi!
<FacilityCard id={1} name="Kho mini Q7" price="1 triệu" />

// ✅ ĐÚNG CHUẨN:
<FacilityCard id={1} name="Kho mini Q7" price={1000000} />
```

> [!NOTE]
> - Trong môn **FER202 (`.jsx`)**: Không có TypeScript nên bạn không cần viết `interface` hay `React.FC`.
> - Trong đồ án lớn (như **SWP**): Dùng TypeScript để bắt lỗi ngay lúc gõ code, tránh tình trạng chạy web lên mới bị lỗi trắng màn hình (`undefined`).

---

## 3. `onClick={() => ...}` khác gì với `onClick={...}`? Cạm bẫy kinh điển

Sự khác biệt nằm ở **truyền tham số** và **thời điểm hàm được gọi**.

### Trường hợp 1: Hàm KHÔNG có tham số $\rightarrow$ Dùng `onClick={handleClick}`
Chỉ truyền **tên hàm** (tham chiếu/reference), **không có dấu ngoặc tròn `()`**:
```jsx
const handleAlert = () => {
  alert("Xin chào!");
};

// ✅ ĐÚNG: Khi người dùng CLICK vào nút thì mới chạy hàm
<button onClick={handleAlert}>Bấm vào đây</button>
```

---

### Trường hợp 2: Hàm CÓ tham số (như `id`) $\rightarrow$ Bắt buộc dùng Arrow Function `onClick={() => handleDelete(id)}`
Arrow function `() => ...` đóng vai trò là một **chiếc hộp bọc lại**:
```jsx
const handleDelete = (id) => {
  console.log("Xóa item có id:", id);
};

// ✅ ĐÚNG: Khi CLICK, hàm ẩn danh mới kích hoạt handleDelete(item.id)
<button onClick={() => handleDelete(item.id)}>Xóa</button>
```

---

### ⚠️ Cạm bẫy kinh điển (Thầy cô rất hay hỏi / Thí sinh rất dễ dính bug):
```jsx
// ❌ SAI NGHIÊM TRỌNG:
<button onClick={handleDelete(item.id)}>Xóa</button>
```
* **Tại sao sai?** Vì có cặp dấu ngoặc tròn `()` ngay trong JSX, JavaScript sẽ **thực thi hàm `handleDelete(item.id)` NGAY LẬP TỨC khi component đang render**, trước cả khi người dùng kịp nhìn thấy nút bấm!
* **Hậu quả:** Dữ liệu vừa load lên đã bị xóa mất, hoặc nếu hàm có `setState` thì component sẽ bị re-render liên tục $\rightarrow$ **Crash web (Infinite Loop)!**

---

## 4. Dấu Backtick (\` \`) để làm gì khi gắn với ID?

### 🎯 Khái niệm:
Dấu backtick (\` \` - phím dưới nút `Esc`) trong JavaScript ES6 gọi là **Template Literal (Chuỗi mẫu)**.

### 🎯 Tác dụng chính:
Cho phép **nhúng trực tiếp biến (như `id`) hoặc biểu thức** vào bên trong chuỗi thông qua cú pháp `${tên_biến}`, thay vì phải cộng chuỗi bằng dấu `+`.

### 🔍 2 ứng dụng thực tế phổ biến nhất:

#### 1. Điều hướng chuyển trang theo ID (React Router `useNavigate`):
```tsx
const navigate = useNavigate();

// ❌ Cách cũ (dùng dấu nháy đơn + dấu cộng -> dễ sót dấu gạch chéo, khó đọc):
navigate('/facility/' + facility.id + '/detail');

// ✅ Cách dùng Backtick (chuẩn đẹp, trực quan):
navigate(`/facility/${facility.id}/detail`);
```

#### 2. Tạo thuộc tính động (Dynamic ID / Dynamic Class):
```tsx
// Gán ID riêng biệt cho từng button dựa vào facility.id
<button 
  id={`btn-view-${facility.id}`} 
  className={`btn ${facility.isAvailable ? 'btn-success' : 'btn-secondary'}`}
  onClick={() => navigate(`/facility/${facility.id}`)}
>
  Xem chi tiết #{facility.id}
</button>
```
* **Kết quả sinh ra mã HTML thực tế:**
  ```html
  <button id="btn-view-102" class="btn btn-success">
    Xem chi tiết #102
  </button>
  ```

---

## 5. Bản Chất Toàn Tập Của `useEffect`

### 🎯 Tại sao React phải sinh ra `useEffect`?
Một React Component có nhiệm vụ chính là **nhận Props/State và render ra giao diện (JSX)**. React yêu cầu việc render này phải là một hàm thuần khiết (Pure Function - không gây tác dụng phụ).
Nhưng trong thực tế, chúng ta cần làm rất nhiều việc tương tác với thế giới bên ngoài (gọi là **Side Effects**):
* Gọi API lấy dữ liệu từ server (MockAPI).
* Thay đổi `document.title` trên thanh tab trình duyệt.
* Hẹn giờ (`setTimeout`, `setInterval`).
* Lắng nghe sự kiện bàn phím/chuột.

`useEffect` sinh ra như một **"vùng an toàn"** dành riêng để thực thi các Side Effects đó sau khi React đã vẽ xong giao diện ra màn hình.

---

### ❌ Vì sao TUYỆT ĐỐI không gọi API trần trụi ngay trong Component?
```javascript
function MusicLibrary() {
  const [songs, setSongs] = useState([]);

  // ❌ CỰC KỲ NGUY HIỂM: Gọi API trực tiếp không bọc trong useEffect
  axios.get(URL).then(res => setSongs(res.data));

  return <div>...</div>;
}
```
**Hậu quả: Tạo ra VÒNG LẶP VÔ TẬN (Infinite Loop) làm sập trình duyệt!**
1. Component chạy lần đầu $\rightarrow$ Gọi `axios.get`.
2. API trả về $\rightarrow$ Gọi `setSongs(res.data)`.
3. Trong React, **cứ gọi setState là Component BỊ RENDER LẠI TỪ ĐẦU!**
4. Component render lại $\rightarrow$ Lại chạy vào dòng `axios.get` $\rightarrow$ Lại `setSongs` $\rightarrow$ Lại render...
5. Vòng lặp quay hàng nghìn lần mỗi giây cho đến khi trình duyệt bị đơ và MockAPI khóa tài khoản vì spam request!

---

### 🔍 3 Dạng của Dependency Array `[ ]` (Bảng Vàng Thi PE & Phỏng Vấn):

| Cú pháp | Thời điểm kích hoạt | Ứng dụng thực tế |
| :--- | :--- | :--- |
| `useEffect(() => { ... })`<br>*(Không có mảng `[]`)* | Chạy sau **mỗi lần** render | Hầu như không bao giờ dùng, rất dễ gây lag |
| `useEffect(() => { ... }, [])`<br>*(Mảng rỗng `[]`)* | Chạy đúng **1 lần duy nhất** khi component vừa xuất hiện (Mount) | **Gọi API lấy danh sách bài hát ban đầu** trong `MusicLibrary` và `MusicManagement` |
| `useEffect(() => { ... }, [id])`<br>*(Có biến bên trong)* | Chạy lần đầu + chạy lại **mỗi khi giá trị của `id` thay đổi** | **Gọi API lấy chi tiết bài hát theo ID** trong `UpdateSong` khi URL đổi |

---

### 💡 Tại sao trong `UpdateSong` nên để `[id]` thay vì `[]`?
* Nếu để `[]`: Component chỉ lấy bài hát 1 lần. Nếu người dùng chuyển từ sửa bài 1 sang bài 2 trên cùng 1 trang, React sẽ không chịu tải dữ liệu của bài 2.
* Để `[id]`: React tự động theo dõi biến `id`. Hễ người dùng click sửa bài khác $\rightarrow$ `id` đổi $\rightarrow$ `useEffect` lập tức gọi API tải dữ liệu bài mới đè lên form!
* Ngoài ra, để `[id]` giúp dẹp sạch cảnh báo vàng của ESLint: *"React Hook useEffect has a missing dependency: 'id'"*.

---

## 6. Tại Sao `initialValues` Phải Là `""` Mà Không Để `" "`?

### ❌ Sai lầm:
```javascript
initialValues: {
  title: " ",   // <-- Có 1 dấu cách ở giữa 2 ngoặc kép
  artist: " ",
}
```

### 🔍 3 Hậu quả nghiêm trọng khi đi thi:
1. **Lỗi giao diện (UX):** Khi người dùng click chuột vào ô input, con trỏ chuột không nằm ở đầu mà bị thụt lùi vào trong 1 khoảng trắng. Người dùng gõ "Hello" thì giá trị thực tế là `" Hello"`.
2. **"Tê liệt" Yup validation:** Yup kiểm tra rỗng bằng `.required()`. Khi người dùng xóa hết chữ, trong ô vẫn còn sót lại `" "`. Yup đếm thấy độ dài = 1 (vẫn có ký tự) nên nó tưởng người dùng đã nhập rồi $\rightarrow$ **Không thèm báo lỗi đỏ!**
3. **Dữ liệu database bị rác:** Gửi lên MockAPI sẽ dính dấu cách thừa, làm thuật toán sắp xếp A-Z (`localeCompare`) hoặc tìm kiếm sau này bị sai lệch.

👉 **Quy tắc vàng:** Trong Formik, ô chữ luôn khởi tạo là `""`. Checkbox/switch luôn khởi tạo là `false`.

---

## 7. Tại Sao Switch `isTrending` Cần Có `checked`?

Trong `AddSong` và `UpdateSong`:
```jsx
<Form.Check 
  type="switch" 
  label="is Trending?" 
  {...formik.getFieldProps("isTrending")}
  checked={formik.values.isTrending} 
/>
```

### 🔍 Bản chất:
* Các ô nhập chữ lấy dữ liệu qua thuộc tính `value` $\rightarrow$ `{...formik.getFieldProps("title")}` hoạt động hoàn hảo.
* Riêng thẻ Switch / Checkbox, trình duyệt hiển thị BẬT hay TẮT dựa vào thuộc tính **`checked={true/false}`**, chứ không quan tâm thuộc tính `value`!
* `getFieldProps` **không sinh ra `checked`**.
* **Cạm bẫy chết người ở trang `UpdateSong`:**
  * Bài hát số 2 trên MockAPI đang có `isTrending = true`.
  * Khi bấm Edit, API trả về `true` và nạp vào Formik.
  * Nếu thiếu `checked={formik.values.isTrending}`, cái công tắc trên màn hình **vẫn nằm im ở bên TẮT (OFF)**!
  * Người dùng không để ý bấm Update $\rightarrow$ Vô tình làm bài hát bị mất trạng thái Hot (`true` biến thành `false`)!
* Thêm `checked={formik.values.isTrending}` giúp **đồng bộ 2 chiều**: Dữ liệu từ API là `true` thì công tắc tự động gạt sang BẬT.

---

## 8. Option Genre: Tại Sao Phải Có `value=""` Và Không Để Số `1 -> 5`?

### 🔍 Câu hỏi 1: Option đầu tiên không để `value=""` có sao không?
```jsx
// ❌ SAI:
<option>Select a Genre</option>

// ✅ ĐÚNG:
<option value="">Select a Genre</option>
```
* Nếu không ghi `value=""`, trình duyệt sẽ lấy luôn chữ `"Select a Genre"` làm giá trị của option đó.
* Khi Yup kiểm tra `.required("Please select a genre")`, Yup thấy trong ô có chữ (không hề rỗng) nên **không báo lỗi**, và khi submit thì thể loại bài hát bị lưu thành `"Select a Genre"`!
* Bắt buộc phải có `value=""` để báo cho Yup biết: *"Hiện tại chưa chọn gì cả"*.

### 🔍 Câu hỏi 2: Để `value="1" -> "5"` có sao không?
* Trong database gốc và bảng `MusicManagement`, cột Genre hiển thị trực tiếp chữ: `<td>{item.genre}</td>`.
* Nếu để `value="1"`, thì khi thêm mới bài hát, trên bảng và trên card sẽ hiện: `Nova Lane - 1` thay vì `Nova Lane - Pop`.
* Thầy cô chấm bài PE nhìn vào thấy hiện số 1, 2 thay vì tên thể loại sẽ trừ điểm dữ liệu hiển thị.
* Do đó luôn để `value="Pop"`, `value="Rock"`, `value="Jazz"`, `value="Instrumental"`, `value="Acoustic"`.

---

## 9. `controlId` Trong `Form.Group` Có Quan Trọng Không?

```jsx
<Form.Group className="mb-3" controlId="title">
  <Form.Label>Title</Form.Label>
  <Form.Control {...formik.getFieldProps("title")} />
</Form.Group>
```

### 🔍 Bản chất:
* `controlId` tự động nối nhãn `<label>` với ô `<input>`. Khi người dùng click chuột vào chữ "Title", con trỏ chuột tự động nhảy vào ô nhập liệu bên dưới.
* **Cạm bẫy copy-paste:** Nếu copy từ tài liệu React-Bootstrap mà giữ nguyên `controlId="formBasicEmail"` cho tất cả các ô:
  * Khi người dùng click chuột vào chữ "Artist", con trỏ chuột lại **nhảy tọt lên ô Title** (vì bị trùng ID đầu tiên)!
* **Lời khuyên đi thi:**
  * Tốt nhất: Đổi `controlId` trùng tên trường (`controlId="title"`, `controlId="artist"`...).
  * Nếu cuống quá: **Xóa luôn thuộc tính `controlId` đi**, form vẫn submit và chạy bình thường 100%!

---

## 10. `formik.touched` Là Gì? Tại Sao Phải Bọc Chữ Đỏ Báo Lỗi?

```jsx
{formik.touched.title && (
  <Form.Text className="text-danger">{formik.errors.title}</Form.Text>
)}
```

### 🔍 Bản chất:
* `errors`: Là danh sách các lỗi hiện tại của form.
* `touched`: Đánh dấu xem **người dùng đã đụng vào ô này chưa** (click vào rồi rời chuột đi `onBlur`, hoặc đã bấm Submit).
* **Ví dụ phòng thi:**
  * Nếu không có `touched`: Vừa mở trang web lên chưa kịp gõ chữ nào, đập vào mắt người dùng là **5 dòng chữ đỏ rực cảnh báo lỗi**! Trải nghiệm người dùng rất ức chế.
  * Có `touched`: Chỉ khi nào người dùng đã chạm vào ô đó (hoặc bấm nút Submit) MÀ CÓ LỖI thì mới hiện chữ đỏ. Lúc mới vào trang thì form trắng sạch sẽ.

---

## 11. Tại Sao `UpdateSong` Phải Nạp Đủ Cả 6 Trường Vào `setValues`?

Trong `UpdateSong.jsx`:
```javascript
useEffect(() => {
  const fetchSong = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + '/' + id);
      formik.setValues({
        title: response.data.title,
        artist: response.data.artist,
        coverImg: response.data.coverImg,
        durationSec: response.data.durationSec,
        genre: response.data.genre,
        isTrending: response.data.isTrending,
      });
    } catch (error) {
      console.log(error);
    }
  };
  fetchSong();
}, [id]);
```

### 🔍 Bản chất:
* Phương thức HTTP `PUT` có nghĩa là: **Ghi đè toàn bộ đối tượng trên server bằng dữ liệu gửi lên**.
* Nếu Nhi chỉ nạp 3 trường (`title`, `artist`, `isTrending`) và bỏ quên 3 trường kia:
  * Khi người dùng bấm Update, Formik chỉ gửi 3 trường có dữ liệu, còn 3 trường kia là rỗng.
  * Kết quả trên MockAPI: Ảnh bìa, thời lượng và thể loại cũ của bài hát sẽ **bị xóa sạch vĩnh viễn**!
* Vì vậy trang Sửa luôn phải nạp **đầy đủ 100% các trường** từ API về.

---

## 💬 Tóm Tắt Nhanh 10 Bí Kíp Vào Phòng Thi PE:
1. **API URL:** Luôn dùng `import.meta.env.VITE_API_URL`, cấm tuyệt đối hardcode link trực tiếp.
2. **`useEffect`:** Luôn nhớ mảng `[]` khi lấy danh sách ban đầu để không bị lặp vô tận, và `[id]` khi lấy dữ liệu trang sửa.
3. **Link điều hướng:** Dùng `<Link to="...">` hoặc `as={Link}` của React-Bootstrap để không bị reload lại trang (SPA).
4. **Formik Initial Values:** Luôn là chuỗi rỗng `""`, không để `" "`.
5. **Yup Custom Rule:** Cần kiểm tra logic lạ (nhiều hơn 1 từ, không chứa ký tự đặc biệt...) thì dùng `.test()`.
6. **Switch / Checkbox:** Luôn có `checked={formik.values.xxx}` để đồng bộ trạng thái BẬT/TẮT.
7. **Select Dropdown:** Option đầu tiên phải có `value=""` để Yup bắt được lỗi chưa chọn.
8. **Hiển thị lỗi:** Luôn bọc `{formik.touched.fieldName && <Form.Text ...>}`.
9. **Xóa (Delete):** Luôn có `window.confirm`, gọi `axios.delete`, và lọc lại state bằng `songs.filter(s => s.id !== id)`.
10. **Sửa (Update):** Nạp đủ 100% các trường vào `formik.setValues` để không bị mất dữ liệu cũ khi PUT.

