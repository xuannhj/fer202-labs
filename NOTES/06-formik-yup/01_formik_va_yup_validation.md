# 📖 Tổng Hợp Kiến Thức: Xử Lý Form & Validation với Formik & Yup (Tuần 4)

> **Môn học:** FER202 - Front-End Web Development with React  
> **Chủ đề:** Quản lý Form (`Formik`), Xác thực dữ liệu (`Yup Schema Validation`) & Tích hợp `React-Bootstrap`  
> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  

---

## 🎯 1. VÌ SAO NÊN DÙNG FORMIK & YUP?

### ❌ Cách truyền thống (Chỉ dùng React `useState`):
Khi làm form đăng ký / đăng nhập với 5–10 ô input:
- Cần tạo 5–10 `useState` để lưu dữ liệu từng ô.
- Cần thêm 5–10 `useState` để lưu thông báo lỗi cho từng ô.
- Viết hàng loạt hàm kiểm tra thủ công (độ dài, regex email, khớp mật khẩu,...).
- Code bị phình to, lặp lại và cực kỳ khó bảo trì khi đi thi.

### ✅ Giải pháp: Formik + Yup
- **`Formik`:** Thư viện giúp quản lý toàn bộ state của Form, giá trị nhập (`values`), sự kiện thay đổi (`handleChange`), và sự kiện nộp (`handleSubmit`).
- **`Yup`:** Thư viện xây dựng **Validation Schema** (khung quy tắc kiểm tra tính hợp lệ của dữ liệu) nhanh gọn, trực quan và chuẩn xác.

> 💡 **Mở rộng:**
> - `Formik` + `Yup`: Chuẩn kiến thức FER202 / React căn bản.
> - `React Hook Form` + `Zod`: Bộ đôi thường dùng trong các dự án lớn (SWP / Production).

---

## 📦 2. CÀI ĐẶT THƯ VIỆN

```bash
npm install formik yup
```

---

## 🧱 3. CÁC BƯỚC TRIỂN KHAI CHUẨN TRONG REACT

### 🔹 Bước 1: Khai báo Hook `useFormik` và `Yup.object()`

```jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {
  const formik = useFormik({
    // 1. Khởi tạo giá trị ban đầu cho các trường trong form
    initialValues: {
      email: '',
      password: '',
      check: false,
    },

    // 2. Định nghĩa luật Validation bằng Yup Schema
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Bắt buộc phải nhập email!')
        .email('Email không đúng định dạng!'),
      password: Yup.string()
        .required('Bắt buộc phải nhập mật khẩu!')
        .min(6, 'Mật khẩu phải có tối thiểu 6 ký tự!'),
    }),

    // 3. Hàm xử lý khi bấm nút Submit (chỉ chạy khi dữ liệu hợp lệ)
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log('Dữ liệu form:', values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="p-4 border rounded shadow-sm">
      {/* Email Field */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Nhập email..."
          value={formik.values.email}
          onChange={formik.handleChange}
          isInvalid={Boolean(formik.errors.email)}
        />
        <Form.Text className="text-danger">
          {formik.errors.email}
        </Form.Text>
      </Form.Group>

      {/* Password Field */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Nhập mật khẩu..."
          value={formik.values.password}
          onChange={formik.handleChange}
          isInvalid={Boolean(formik.errors.password)}
        />
        <Form.Text className="text-danger">
          {formik.errors.password}
        </Form.Text>
      </Form.Group>

      {/* Checkbox Field */}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="check"
          label="Ghi nhớ đăng nhập"
          checked={formik.values.check}
          onChange={formik.handleChange}
        />
      </Form.Group>

      {/* Submit Button */}
      <Button variant="primary" type="submit">
        Đăng Nhập
      </Button>
    </Form>
  );
}
```

---

## 🔑 4. QUY TẮC "4 ĐIỂM CHẠM" ĐỂ LIÊN KẾT FORMIK VỚI INPUT

Để một ô `<Form.Control>` hoạt động trơn tru với Formik, bắt buộc phải có đủ 4 yếu tố:

| Yếu tố | Thuộc tính | Ý nghĩa |
| :--- | :--- | :--- |
| **1. Tên trường** | `name="email"` | **Phải trùng khớp 100%** với key đã khai báo trong `initialValues`. |
| **2. Giá trị** | `value={formik.values.email}` | Nhận dữ liệu hai chiều từ state của Formik. |
| **3. Lắng nghe gõ** | `onChange={formik.handleChange}` | Formik tự động bắt giá trị mới khi người dùng gõ phím. |
| **4. Bắt submit** | `onSubmit={formik.handleSubmit}` | Đặt ở thẻ `<Form>` gốc để Formik validate trước khi gọi `onSubmit`. |

---

## 🛡️ 5. BẢNG TỔNG HỢP CÁC PHƯƠNG THỨC YUP THƯỜNG GẶP TRONG ĐỀ THI

| Phương thức | Ý nghĩa | Ví dụ |
| :--- | :--- | :--- |
| `Yup.string()` | Kiểu chuỗi ký tự | `Yup.string()` |
| `Yup.number()` | Kiểu số | `Yup.number().typeError('Phải là số!')` |
| `Yup.boolean()` | Kiểu đúng/sai (checkbox) | `Yup.boolean()` |
| `.required('msg')` | Bắt buộc không được để trống | `.required('Vui lòng nhập họ tên')` |
| `.email('msg')` | Kiểm tra đúng định dạng email | `.email('Email không hợp lệ')` |
| `.min(n, 'msg')` | Độ dài tối thiểu hoặc giá trị nhỏ nhất | `.min(6, 'Tối thiểu 6 ký tự')` |
| `.max(n, 'msg')` | Độ dài tối đa hoặc giá trị lớn nhất | `.max(50, 'Tối đa 50 ký tự')` |
| `.oneOf([ref], 'msg')` | Dùng cho xác nhận mật khẩu (confirm password) | `Yup.string().oneOf([Yup.ref('password')], 'Mật khẩu không khớp')` |
| `.url('msg')` | Kiểm tra định dạng đường link web | `.url('Link ảnh không hợp lệ')` |

---

## ⚠️ TOP 4 LỖI KHI LÀM FORMIK & YUP CẦN TRÁNH TRONG BÀI THI

1. **Sai thuộc tính `name`:**
   - ❌ Khai báo `initialValues: { userEmail: '' }` nhưng input lại đặt `name="email"`.
   - 👉 Formik sẽ không bắt được dữ liệu và báo lỗi rỗng.
2. **Quên `onSubmit={formik.handleSubmit}` ở thẻ `<Form>`:**
   - Bấm nút submit nhưng không có gì xảy ra hoặc form bị reload trang mặc định của trình duyệt.
3. **Quên `type="submit"` ở `<Button>`:**
   - `<Button variant="primary">Submit</Button>` thiếu `type="submit"` sẽ không kích hoạt sự kiện submit.
4. **Hiển thị lỗi khi chưa tương tác (`touched`):**
   - Trong ứng dụng nâng cao, có thể dùng `{formik.touched.email && formik.errors.email}` để chỉ hiện lỗi khi người dùng đã click vào ô đó rồi rời đi (onBlur).
