# 💡 Sổ Tay Giải Đáp Thắc Mắc & Hỏi Đáp Thực Chiến (React / JS / TS)

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Chủ đề:** Những câu hỏi thực chiến thường gặp khi làm React, đi thi PE và làm đồ án.

---

## 📌 Danh Mục Câu Hỏi
1. [Học Functional Component hay Class Component?](#1-học-functional-component-hay-class-component)
2. [`React.FC<>` là gì? Tại sao phải khai báo Interface kiểm tra Props?](#2-reactfc-là-gì-tại-sao-phải-khai-báo-interface-kiểm-tra-props)
3. [`onClick={() => ...}` khác gì với `onClick={...}`? Cạm bẫy kinh điển](#3-onclick---khác-gì-với-onclick-cạm-bẫy-kinh-điển)
4. [Dấu Backtick (\` \`) để làm gì khi gắn với ID?](#4-dấu-backtick---để-làm-gì-khi-gắn-với-id)

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

## 💬 Tóm Tắt Nhanh Để "Trả Lời Thầy":
1. **Functional vs Class Component:** FER202 và React hiện đại dùng 100% Functional Component với Hooks (`useState`, `useEffect`) vì code gọn, không bị rối bởi `this`. Class component chỉ xem để hiểu Lifecycle làm trắc nghiệm.
2. **`React.FC` & `Interface`:** Là của TypeScript. Dùng `interface` để định nghĩa trước kiểu của Props nhằm ngăn chặn truyền sai prop hoặc thiếu prop ngay từ lúc gõ code.
3. **`onClick={() => ...}`:** Nếu hàm không có tham số thì truyền trực tiếp `onClick={fn}`. Nếu cần truyền tham số (như `id`) thì phải bọc arrow function `onClick={() => fn(id)}` để tránh hàm bị tự động chạy lúc vừa render.
4. **Backtick (\` \`):** Là cú pháp Template Literal của ES6, dùng `${id}` để chèn biến linh hoạt vào URL chuyển trang (`/facility/${id}`) hoặc tạo dynamic id/class cho phần tử.
