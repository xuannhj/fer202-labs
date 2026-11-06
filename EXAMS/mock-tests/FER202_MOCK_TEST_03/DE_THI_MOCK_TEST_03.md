# 📝 ĐỀ THI THỰC HÀNH FER202 — MOCK TEST 03
## MÔN HỌC: FRONT-END WEB DEVELOPMENT WITH REACT (FER202)
> **Mã đề:** `FER202_PE_FA26_LAPTOP`  
> **Chủ đề:** Laptop Collection & Laptop Management  
> **Thời gian làm bài:** 85 phút  
> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  

---

### ⚠️ QUY ĐỊNH PHÒNG THI (INSTRUCTIONS)
1. Sử dụng **Visual Studio Code** để lập trình.
2. **ĐIỂM LIỆT (0 ĐIỂM):**
   - Ứng dụng phải lưu đường dẫn API Endpoint trong file **`.env`** (Ví dụ: `VITE_API_URL=...`). Không lưu trong `.env` mà hardcode trong code sẽ bị **0 điểm**.
   - Bắt buộc phải sử dụng **Bootstrap** hoặc **React-Bootstrap** để dàn trang và styling. Sử dụng các thư viện UI khác sẽ bị **0 điểm**.
3. Cấu trúc dữ liệu Laptop (`laptops.json`):
   - `id`: String / Object ID
   - `laptopName`: String
   - `brand`: String
   - `category`: String (`Gaming`, `Office`, `Ultrabook`, `Graphic`, `Student`)
   - `imageUrl`: String
   - `priceUSD`: Number
   - `isBestSeller`: Boolean

---

## 🎯 TASK 1: CREATE DATA RESOURCE (0.5 ĐIỂM)
1. Tạo một Resource trên [mockapi.io](https://mockapi.io/) với tên là mã số sinh viên của bạn (ví dụ: `se201170` hoặc `laptops`).
2. Nạp toàn bộ 10 bản ghi từ file `laptops.json` vào Resource vừa tạo.
3. Cấu hình biến môi trường `VITE_API_URL` trong file `.env` trỏ tới Endpoint của Resource này.

---

## 🎯 TASK 2: LAPTOP COLLECTION PAGE (4.0 ĐIỂM)
1. Xây dựng thanh **Navbar** cố định đầu trang chứa 2 liên kết điều hướng:
   - `Laptop Collection` $\to$ `/{rollnumber}/laptop-collection`
   - `Laptop Management` $\to$ `/{rollnumber}/laptop-management`
2. Xây dựng trang **Laptop Collection** tại đường dẫn `/{rollnumber}/laptop-collection` (ví dụ: `/se201170/laptop-collection`):
   - Gọi API GET lấy danh sách laptop và hiển thị ra giao diện.
   - **SẮP XẾP (SORT):** Sắp xếp danh sách laptop theo **thứ tự bảng chữ cái TĂNG DẦN (A $\to$ Z)** theo thuộc tính `laptopName` (`a.laptopName.localeCompare(b.laptopName)`).
   - **CARD GRID:** Hiển thị danh sách laptop dạng lưới thẻ Card Bootstrap (Container, Row, Col, Card). Mỗi Card hiển thị: `imageUrl`, `laptopName`, `brand`, `category`, `priceUSD`, `isBestSeller`.
   - **FORMAT GIÁ TIỀN:** `priceUSD` hiển thị theo định dạng tiền tệ USD (Ví dụ: 1299 $\to$ `$ 1,299` hoặc `$ 1,299.00`).
   - **BADGE:** Khi `isBestSeller === true`, hiển thị một Badge nổi bật với nội dung `"Best Seller"`.

⭐ **TÍNH NĂNG NÂNG CAO (ĐIỂM 10 / BÀI TẬP RÈN PHẢN XẠ):**
- Thêm một ô **Search Input** (`<Form.Control>`) ở đầu trang: Khi người dùng gõ từ khóa, danh sách chỉ hiển thị các laptop có tên chứa từ khóa.
- Thêm một dropdown **Filter Category** (`<Form.Select>`): Chọn thể loại nào thì chỉ hiện laptop thuộc thể loại đó (`All`, `Gaming`, `Office`, `Ultrabook`, `Graphic`, `Student`).

---

## 🎯 TASK 3: LAPTOP MANAGEMENT (5.5 ĐIỂM)
1. Xây dựng trang **Laptop Management** tại đường dẫn `/{rollnumber}/laptop-management` (ví dụ: `/se201170/laptop-management`):
   - Hiển thị danh sách laptop trong một bảng dữ liệu (`Table` của React-Bootstrap).
   - **SẮP XẾP (SORT):** Sắp xếp danh sách theo **ID GIẢM DẦN (Descending)** (`Number(b.id) - Number(a.id)`).
   - Mỗi dòng hiển thị: `id`, `laptopName`, `brand`, `category`, `imageUrl` (kích thước ảnh thumbnail chuẩn **70 x 70 px**).
   - Mỗi dòng có nút/link **Edit** và nút/link **Delete**.

2. **CHỨC NĂNG XÓA (DELETE):**
   - Khi nhấn nút Delete, hiển thị hộp thoại xác nhận (`window.confirm` hoặc `<Modal>` React-Bootstrap).
   - Khi xác nhận xóa: gọi API `axios.delete(...)`, sau khi xóa thành công thì thông báo cho người dùng và cập nhật lại danh sách trên bảng mà không cần tải lại trang.

3. **CHỨC NĂNG THÊM MỚI (ADD LAPTOP):**
   - Trên trang Management, cung cấp một nút bấm **"Add Laptop"** dẫn tới `/{rollnumber}/add-laptop` (ví dụ: `/se201170/add-laptop`).
   - Xây dựng form thêm mới sử dụng **Formik** và **Yup** thỏa mãn các luật validation sau:
     - Tất cả các trường đều là bắt buộc (mandatory).
     - `laptopName`: Phải có ít nhất **3 ký tự** (`min(3)`).
     - `brand`: Phải gồm **ít nhất 2 từ** (at least 2 words - dùng custom `.test()`).
     - `imageUrl`: Phải là một đường dẫn URL hợp lệ (`url()`).
     - `priceUSD`: Phải là số nguyên dương trong khoảng từ **100 đến 5000** (`positive().integer().min(100).max(5000)`).
     - `category`: Sử dụng dropdown select có 5 lựa chọn (`Gaming`, `Office`, `Ultrabook`, `Graphic`, `Student`). Giá trị mặc định là rỗng `""` để buộc người dùng phải chọn.
     - `isBestSeller`: Được hiển thị dưới dạng **Switch control** (`type="switch"`), giá trị mặc định là `false`.
   - Khi submit form hợp lệ: Gọi API `axios.post(...)` gửi dữ liệu lên MockAPI, hiển thị thông báo thành công và chuyển hướng về trang `/{rollnumber}/laptop-management`.

4. **CHỨC NĂNG CHỈNH SỬA (EDIT LAPTOP):**
   - Khi nhấn nút Edit ở mỗi dòng trên bảng, chuyển hướng tới `/{rollnumber}/edit-laptop/:id`.
   - Sử dụng `useParams()` lấy `id`, gọi API lấy dữ liệu hiện tại của laptop đó và đổ sẵn vào form (Pre-fill / `formik.setValues`).
   - Áp dụng bộ luật validation tương tự form Add.
   - Khi submit form hợp lệ: Gọi API `axios.put(...)` cập nhật lên MockAPI, hiển thị thông báo thành công và chuyển hướng về trang `/{rollnumber}/laptop-management`.

---

## ⏱️ CHECKLIST THỰC CHIẾN 85 PHÚT
- [ ] **0 - 5 phút:** Tạo project Vite `se201170`, cài đặt dependencies, setup MockAPI & file `.env`.
- [ ] **5 - 15 phút:** Dọn CSS mặc định, bọc `<BrowserRouter>` trong `main.jsx`, dựng `MyNavBar` và cấu hình các `Route` trong `App.jsx`.
- [ ] **15 - 35 phút:** Hoàn thiện `LaptopCollection.jsx` + `MyCard.jsx` (Sort A-Z, format USD `$`, Badge Best Seller).
- [ ] **35 - 55 phút:** Hoàn thiện bảng `LaptopManagement.jsx` (Sort ID giảm dần, ảnh 70x70, chức năng Xóa confirm).
- [ ] **55 - 75 phút:** Hoàn thiện Form `AddLaptop.jsx` và `EditLaptop.jsx` (Formik + Yup 2 từ, khoảng 100-5000, switch).
- [ ] **75 - 85 phút:** Kiểm tra F12 console không còn lỗi đỏ, chạy `npm run build` test build thành công.

