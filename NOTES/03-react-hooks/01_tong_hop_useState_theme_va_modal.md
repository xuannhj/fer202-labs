# 📖 Tổng Hợp Kiến Thức: React Hooks, Theme Sáng/Tối & Modal Popup (Lab 2)

> **Môn học:** FER202 - Front-End Web Development with React  
> **Chủ đề:** React Hooks (`useState`), Giao diện Sáng/Tối (Dark/Light Theme) & Modal Popup  
> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  

---

## 🎯 1. BẢN CHẤT CỦA `useState` (Linh Hồn Của React)

### ❓ Vì sao biến thông thường (`let`, `var`) không làm đổi giao diện?
```javascript
let count = 0;
count += 1; // Giá trị trong RAM có đổi, nhưng React KHÔNG BIẾT để vẽ lại (Re-render) giao diện!
```
👉 Muốn giao diện cập nhật realtime theo dữ liệu, **bắt buộc phải dùng `useState`**.

---

### 📝 Cú pháp chuẩn (Sử dụng Array Destructuring):
```javascript
const [count, setCount] = useState(0);
//        ▲       ▲                  ▲
//        │       │                  └── Giá trị khởi tạo ban đầu
//        │       └───────────────────── Hàm kích hoạt (chiếc điều khiển đổi giá trị)
//        └───────────────────────────── Biến lưu trữ giá trị hiện tại
```

* **Cơ chế:** Khi gọi `setCount(giá_trị_mới)`:
  1. React cập nhật lại giá trị biến `count`.
  2. React **tự động vẽ lại (Re-render)** component $\rightarrow$ Giao diện trên màn hình nhảy số mới ngay lập tức!

---

### 💡 Câu hỏi hay thi: Phân biệt `setCount(count + 1)` vs `setCount(prev => prev + 1)`
| Cách viết | Cơ chế hoạt động | Khi nào nên dùng |
| :--- | :--- | :--- |
| `setCount(count + 1)` | Lấy giá trị `count` tại thời điểm gọi. | Các thao tác gán đơn giản, rời rạc. |
| `setCount(prev => prev + 1)` *(Callback/Updater)* | Lấy **giá trị mới nhất trong hàng đợi** của React. | Khi xử lý state dồn dập, bấm nút liên tục để tránh mất nhịp dữ liệu. |

---

## 🌗 2. LÀM GIAO DIỆN SÁNG / TỐI (DARK / LIGHT THEME)

### 🧠 Tư duy State:
Trạng thái theme chỉ có 2 giá trị: `'light'` hoặc `'dark'`.

```jsx
import React, { useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

export default function App() {
  const [theme, setTheme] = useState('light');

  // Hàm đảo ngược trạng thái theme
  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Navbar bg={theme} data-bs-theme={theme} className="shadow-sm">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">🌸 Orchid Garden</Navbar.Brand>
        
        {/* Nút bấm đổi theme */}
        <Button 
          variant={theme === 'light' ? 'outline-dark' : 'outline-light'} 
          onClick={handleTheme}
          size="sm"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </Button>
      </Container>
    </Navbar>
  );
}
```

> 🌟 **Thuộc tính thần thánh của Bootstrap 5:**  
> `data-bs-theme="dark"` hoặc `data-bs-theme="light"` sẽ tự động đổi màu nền và màu chữ của toàn bộ component Bootstrap sang chuẩn Dark/Light Mode!

---

## 🪟 3. LÀM CỬA SỔ BẬT LÊN (MODAL POPUP)

### 🧱 Cấu trúc chuẩn 4 tầng của `<Modal>` trong React-Bootstrap:

```jsx
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function App() {
  // State quản lý Modal: false = đóng, true = mở
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* Nút bấm kích hoạt mở */}
      <Button variant="primary" onClick={handleOpen}>
        Xem chi tiết
      </Button>

      {/* Cửa sổ Popup Modal */}
      <Modal show={show} onHide={handleClose} centered>
        {/* Tầng 1: Tiêu đề + Nút X góc phải */}
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết hoa lan</Modal.Title>
        </Modal.Header>

        {/* Tầng 2: Thân Modal (chứa ảnh, thông tin) */}
        <Modal.Body>
          Thông tin chi tiết bông hoa hiển thị ở đây...
        </Modal.Body>

        {/* Tầng 3: Chân Modal (chứa nút đóng) */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

### 🔑 2 Thuộc tính quan trọng nhất của Modal:
1. **`show={show}`**: Quyết định Modal **hiện hay ẩn**.
2. **`onHide={handleClose}`**: Hàm tự động chạy khi người dùng **bấm nút [X] hoặc bấm ra vùng đen bên ngoài** để đóng popup.

---

## 🌸 4. ÁP DỤNG VÀO BÀI HOA LAN LAB 2 (Nâng cấp State)

Thay vì chỉ lưu `true/false`, trong bài danh sách 16 bông hoa ta lưu **nguyên vẹn Object bông hoa được chọn**:

```javascript
// Ban đầu chưa chọn bông nào -> null (Modal đóng)
const [selectedOrchid, setSelectedOrchid] = useState(null);
```

* **Khi bấm "Explore more" ở hoa Taiga:** Gọi `setSelectedOrchid(orchid)` $\rightarrow$ Modal mở và hiển thị thông tin hoa Taiga.
* **Khi bấm "Đóng":** Gọi `setSelectedOrchid(null)` $\rightarrow$ Modal đóng lại sạch sẽ!

---

## ⚠️ 3 LỖI KINH ĐIỂN CẦN TRÁNH TRONG BÀI THI:

1. **Lỗi `... is not defined`:**
   * 👉 Do **quên `import`** thư viện ở đầu file (ví dụ: dùng `<Modal>` mà quên `import { Modal } from 'react-bootstrap'`).
2. **Giao diện vỡ nát / không có style:**
   * 👉 Do **quên import file CSS Bootstrap** ở file `App.jsx`:
     ```javascript
     import 'bootstrap/dist/css/bootstrap.min.css';
     ```
3. **Lỗi chạy vô tận (Infinite Loop Crash):**
   * ❌ Sai: `onClick={handleShow()}` *(Có dấu ngoặc tròn làm hàm chạy ngay lúc render)*.
   * ✅ Đúng: `onClick={() => handleShow()}` hoặc `onClick={handleShow}`.
