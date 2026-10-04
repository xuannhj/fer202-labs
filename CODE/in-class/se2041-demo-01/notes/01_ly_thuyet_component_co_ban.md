# BÀI GIẢNG 01: COMPONENT LÀ GÌ & CẤU TRÚC COMPONENT TRONG REACT

> **Môn học**: FER202 - Front-End Web Development with React  
> **Chủ đề**: Nền tảng React - Component & JSX  
> **Mục tiêu**: Hiểu rõ bản chất Component, quy tắc tạo và cách sử dụng trong dự án.

---

## 1. KHÁI NIỆM: COMPONENT LÀ GÌ? (TƯ DUY KHỐI LEGO 🧱)

Trong lập trình web truyền thống (HTML thuần):
- Bạn thường viết toàn bộ giao diện trong một file `index.html` dài hàng nghìn dòng.
- Khi cần sửa một thanh menu hay một nút bấm, bạn phải cuộn tìm rất vất vả và dễ làm hỏng các phần khác.

**Trong React, mọi giao diện đều được chia thành các mảnh nhỏ độc lập gọi là COMPONENT:**
- Thanh menu ở trên cùng ➔ một Component (`Navbar`).
- Ô sản phẩm / Thẻ ca sĩ ➔ một Component (`ProductCard`).
- Chân trang web ➔ một Component (`Footer`).
- Toàn bộ trang web chỉ là **sự lắp ghép của nhiều Component lại với nhau giống như các khối gạch Lego**.

```
                   [ App (Trang chính) ]
                             │
       ┌─────────────────────┼─────────────────────┐
       ▼                     ▼                     ▼
  [ MyNavBar ]         [ MainContent ]          [ Footer ]
                             │
                    ┌────────┴────────┐
                    ▼                 ▼
             [ ProductCard ]   [ ProductCard ]  <-- Tái sử dụng cùng 1 khối
```

---

## 2. BẢN CHẤT KỸ THUẬT: TRONG CODE, COMPONENT LÀ GÌ?

> 📌 **Định nghĩa cốt lõi:**  
> **Một Component trong React thực chất chỉ là một HÀM (function) JavaScript thông thường, nhưng có khả năng trả về (return) giao diện (viết bằng mã JSX).**

So sánh giữa hàm JS thông thường và React Component:
```javascript
// Hàm JavaScript thông thường (trả về giá trị số, chuỗi,...)
function tinhTong(a, b) {
  return a + b;
}

// React Functional Component (trả về giao diện JSX)
function XinChao() {
  return <h1>Xin chào, tôi là một Component!</h1>;
}
```

---

## 3. BA LÝ DO TẠI SAO PHẢI DÙNG COMPONENT?

1. **Tái sử dụng (Reusability)**:
   - Bạn chỉ cần code mẫu ô sản phẩm `ProductCard` đúng 1 lần.
   - Khi có 1.000 sản phẩm, chỉ việc gọi lại thẻ `<ProductCard />` 1.000 lần với dữ liệu khác nhau, không cần copy-paste HTML.
2. **Dễ bảo trì & Sửa lỗi (Maintainability)**:
   - Nếu nút "Mua hàng" bị sai màu, bạn chỉ mở file `ProductCard.jsx` để sửa, tuyệt đối không làm ảnh hưởng đến `Navbar` hay `Footer`.
3. **Quản lý trạng thái độc lập (Isolation)**:
   - Mỗi component tự quản lý trạng thái của riêng mình (Card A bấm Like thì chỉ Card A đổi màu, không ảnh hưởng Card B).

---

## 4. BA QUY TẮC "BẤT DI BẤT DỊCH" KHI TẠO COMPONENT

### Quy tắc 1: Tên Component BẮT BUỘC phải viết hoa chữ cái đầu (PascalCase)
* **Viết đúng**: `MyComponent`, `ProductCard`, `UserProfile`
* **Viết sai**: `myComponent`, `card` ❌
* *Lý do*: React phân biệt thẻ HTML có sẵn (`<div>`, `<h1>`, `<p>`) bằng chữ thường, và Component do lập trình viên tự tạo bằng chữ **In Hoa**.

### Quy tắc 2: Chỉ được return MỘT thẻ cha bao bọc ngoài cùng (Single Root Element)
* **Sai (Báo lỗi biên dịch)**:
  ```jsx
  return (
    <h1>Tiêu đề</h1>
    <p>Nội dung</p> // ❌ Lỗi: Có 2 thẻ đồng cấp ở ngoài cùng
  );
  ```
* **Đúng**: Dùng thẻ bọc `<div>` hoặc thẻ ảo Fragment `<> ... </>`:
  ```jsx
  return (
    <>
      <h1>Tiêu đề</h1>
      <p>Nội dung</p>
    </>
  );
  ```

### Quy tắc 3: Cú pháp gọi Component để sử dụng
* Gọi theo dạng tự đóng: `<MyComponent />`
* Gọi theo dạng cặp thẻ mở/đóng: `<MyComponent></MyComponent>`

---

## 5. CẤU TRÚC 4 PHẦN CHUẨN CỦA MỘT FILE COMPONENT

Một file component chuẩn (ví dụ: `src/components/MyComponent.jsx`):

```jsx
// ========================================================
// PHẦN 1: IMPORT THƯ VIỆN & CÔNG CỤ CẦN DÙNG
// ========================================================
import React from 'react';
// import { Button } from 'react-bootstrap'; // (Nếu cần dùng thư viện ngoài)

// ========================================================
// PHẦN 2: KHAI BÁO HÀM COMPONENT (Tên hàm viết hoa chữ đầu)
// ========================================================
export default function MyComponent() {
  
  // (Khu vực viết logic JavaScript: biến, hàm xử lý, state...)
  const name = "Sinh viên FER202";
  const greeting = "Chúc bạn học tốt React!";

  // ======================================================
  // PHẦN 3: RETURN GIAO DIỆN (JSX)
  // ======================================================
  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Xin chào, {name}!</h2>
      <p>{greeting}</p>
    </div>
  );
}

// ========================================================
// PHẦN 4: EXPORT COMPONENT RA NGOÀI ĐỂ NƠI KHÁC DÙNG
// ========================================================
// (Đã viết kèm ở dòng 9: `export default function MyComponent`)
```

---

## 6. QUY TRÌNH KẾT NỐI VÀO TRANG CHÍNH (APP.JSX)

Component tự đứng một mình sẽ chưa hiển thị ra trình duyệt. Cần đưa nó vào component cha (`App.jsx`):

```jsx
// Trong file App.jsx:

// Bước 1: Import component con vào
import MyComponent from './components/MyComponent';

export default function App() {
  return (
    <div>
      <h1>Dự án React đầu tiên</h1>

      {/* Bước 2: Gọi component con ra sử dụng */}
      <MyComponent />
      <MyComponent /> {/* Có thể gọi nhiều lần để tái sử dụng */}
    </div>
  );
}
```

---

## 7. BÀI TẬP THỰC HÀNH CỦNG CỐ

**Đề bài**:
1. Tạo file `src/components/Profile.jsx`.
2. Tạo component `Profile` hiển thị:
   - Họ và tên của bạn.
   - Mã số sinh viên & Lớp (SE2041).
   - Mục tiêu điểm số môn FER202.
3. Import và gọi component `<Profile />` vào trong file `src/App.jsx`.
