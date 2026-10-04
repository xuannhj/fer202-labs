# SỔ TAY ÔN TẬP: TỔNG KẾT LAB 1 (PROPS & BOOTSTRAP GRID) VÀ KẾ HOẠCH LAB 2

> **Môn học**: FER202 - Front-End Web Development with React  
> **Ngày học**: 28/09/2026  
> **Chủ đề**: Component, Props, Render List bằng `.map()` và Lưới Bootstrap Grid  

---

## 1. TỔNG KẾT KIẾN THỨC CỐT LÕI ĐÃ LÀM CHỦ HÔM NAY

### A. Component (Khối Lego)
* **Bản chất**: Component thực chất là một **hàm JavaScript** trả về giao diện JSX.
* **Quy tắc**: Tên Component bắt buộc phải viết hoa chữ cái đầu (PascalCase) ví dụ: `Orchid`, `OrchidCard`, `MyNavBar`.
* **Cấu trúc chia lớp chuẩn**:
  * **Container Component (`Orchid.jsx`)**: Chứa logic dữ liệu, mảng hoa lan và lưới Grid.
  * **Presentation Component (`OrchidCard.jsx`)**: Chỉ nhận dữ liệu từ Props và vẽ giao diện thẻ Card.

### B. Props (Thuộc tính truyền dữ liệu)
* **Ẩn dụ**: Component là **khung thẻ sinh viên rỗng**, còn Props là **thông tin in lên thẻ** (tên, lớp, ảnh).
* **Bản chất**: Props là tham số truyền vào hàm Component dưới dạng một Object.
* **Cú pháp Destructuring (bắt buộc phải có ngoặc nhọn `{ }`)**:
  ```jsx
  // ✅ ĐÚNG: Mở túi props lấy đúng biến orchid
  export default function OrchidCard({ orchid }) { ... }

  // ❌ SAI: Biến orchid sẽ bị nhận cả cái túi lớn props -> gây lỗi undefined
  export default function OrchidCard(orchid) { ... }
  ```
* **Đặc tính sống còn**: Props truyền một chiều từ Cha ➔ Con và là **Read-Only (bất biến, không được gán lại)**.

### C. Vòng lặp Render List bằng `.map()`
* Biến trong `map((orchid) => ...)` là **tên do bạn tự đặt tùy ý** (đặt là `item`, `orchid`, hay `hoa` đều được).
* Bắt buộc phải có thuộc tính **`key={orchid.id}`** ở thẻ ngoài cùng của vòng lặp để React tối ưu hiệu năng.

### D. Bootstrap Grid & Tiện ích CSS
* Hệ thống **12 cột**: `<Row xs={1} md={3} className="g-4">` (máy tính 3 cột vì $12 \div 3 = 4$, điện thoại 1 cột).
* **`className="h-100"`**: Viết tắt của `height: 100%`, giúp các Card trong cùng 1 hàng có chiều cao bằng chằn chặn nhau, không bị nhấp nhô.
* **`variant="top"`**: Đặt ảnh nằm gọn gàng ở đầu thẻ Card của Bootstrap.

---

## 2. TIẾN ĐỘ BÀI LAB 1 HIỆN TẠI

* ✅ Đã có `src/ListOfOrchids.js` với đầy đủ 16 bông hoa.
* ✅ Đã có 16 ảnh trong `public/image/`.
* ✅ `src/components/Orchid.jsx` chia lưới Grid và lặp `.map()` cực kỳ chuẩn.
* ✅ `src/components/OrchidCard.jsx` đã nhận prop `{ orchid }` và render thẻ Card.
* ✅ Lệnh `npm run build` đã kiểm tra thành công với 0 lỗi!

---

## 3. CHECKLIST VIỆC CẦN LÀM TIẾP THEO (CHO NGÀY MAI)

### Bước 1: Hoàn thiện 10/10 điểm cho bài Lab 1
1. **Trong `src/components/OrchidCard.jsx`**:
   Bổ sung các trường thông tin theo đúng barem chấm của thầy:
   * Thêm xuất xứ (`orchid.origin`), màu sắc (`orchid.color`), loài (`orchid.category`).
   * Thêm đánh giá: `⭐ {orchid.rating} / 5`.
   * Thêm huy hiệu Special: `{orchid.isSpecial && <Badge bg="danger">Special ⭐</Badge>}`.
2. **Trong `src/App.jsx`**:
   * Thêm `<MyNavBar />` lên trên cùng.
   * Bọc `<Orchid />` vào bên trong `<Container>` để tạo lề 2 bên đẹp mắt.

### Bước 2: Bắt đầu bài Lab 2 (React Hooks - `useState`)
1. **Làm tính năng Modal xem chi tiết**:
   * Bấm nút "Explore more" của bông hoa nào thì bật cửa sổ Modal hiển thị chi tiết bông hoa đó.
2. **Làm tính năng đổi màu Sáng / Tối (Dark / Light Mode)**:
   * Bấm nút toggle trên Navbar để chuyển toàn bộ giao diện sang màu tối hoặc màu sáng.
