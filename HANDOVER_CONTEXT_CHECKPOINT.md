# 📌 HANDOVER CONTEXT CHECKPOINT — FER202

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Môn học:** FER202 - Front-End Web Development with React (Semester 5)  
> **Repository:** [https://github.com/xuannhj/fer202-labs.git](https://github.com/xuannhj/fer202-labs.git)  
> **Sổ tay Notion:** [nhom nhom - FER202 & JS Notebook](https://app.notion.com/p/nhom-nhom-3db95ae094f9807994f1fa500fdff6d1)  
> **Thời điểm cập nhật:** 2026-10-20  
> **Trạng thái Git:** Branch `main` sạch sẽ 100%, đã push đồng bộ lên GitHub (Commit `fd3b006`).

---

## ⚠️ HƯỚNG DẪN QUAN TRỌNG DÀNH CHO CÁC AGENT / TRỢ LÝ TIẾP THEO

> [!IMPORTANT]
> **PHƯƠNG PHÁP HƯỚNG DẪN BẮT BUỘC CHO NHI:**
> 1. **TUYỆT ĐỐI KHÔNG TỰ ĐỘNG CODE HỘ NHI:** Nhi đang ôn thi PE và tự học, mục tiêu cao nhất là để Nhi tự tay gõ code vào VS Code ("Em thi chứ anh có thi đâu!"). Nếu AI code hộ hết thì Nhi sẽ không nhớ cú pháp khi vào phòng thi.
> 2. **CHIẾN THUẬT "ANH RA CHIÊU – NHI MÚA PHÍM":**
>    - Chia nhỏ nhiệm vụ thành từng bước rất ngắn (micro-steps).
>    - Đưa ra mẫu code gợi ý hoặc hướng dẫn Nhi vị trí cần sửa.
>    - Để Nhi tự gõ, tự bấm `Ctrl + S`, sau đó AI mới kiểm tra file và review.
> 3. **LUÔN GIẢI THÍCH "TẠI SAO" (BẢN CHẤT VẤN ĐỀ):**
>    - Mỗi khi yêu cầu Nhi viết dòng code nào, phải giải thích rõ tại sao phải làm vậy, nếu không làm thì bị lỗi gì, thầy cô chấm PE sẽ bắt lỗi ra sao.
> 4. **GHI CHÉP THẮC MẮC VÀO SỔ TAY:**
>    - Bất cứ câu hỏi nào Nhi thắc mắc trong buổi học, hãy cập nhật thành mục Q&A chi tiết trong file [`NOTES/00_faq_giai_dap_thac_mac_react_js_ts.md`](./NOTES/00_faq_giai_dap_thac_mac_react_js_ts.md).

---

## 🗺️ TỔNG QUAN TIẾN ĐỘ & TRẠNG THÁI HIỆN TẠI

### 1. Đề thi thử PE: FER202 Trial PE (`EXAMS/mock-tests/FER202_TRIAL_PE`) — ✅ HOÀN THÀNH 100% (10/10)
Nhi đã tự tay hoàn thiện toàn bộ luồng chức năng của bài thi PE chuẩn:
* **MockAPI & `.env`:** Đã nạp 10 bài hát mẫu từ `music_library.json`, endpoint dùng `import.meta.env.VITE_API_URL` (không hardcode).
* **Music Library (`/se201170/music-library`):** Hiển thị Grid Card React-Bootstrap, sắp xếp A-Z theo title bằng `.localeCompare()`, format `durationSec` sang `mm:ss`, hiển thị badge `Trending`.
* **Music Management (`/se201170/music-management`):** Bảng quản lý hiển thị ảnh thumbnail, sắp xếp ID giảm dần, chức năng xóa có popup xác nhận (`window.confirm`) và cập nhật state tức thì bằng `.filter()`.
* **Add Song (`/se201170/add-song`):** Formik + Yup schema đầy đủ 5 luật (title $\ge$ 2 ký tự, artist > 1 từ, coverImg URL, durationSec số dương $\le$ 3 chữ số, genre select). Có `touched` hiển thị chữ đỏ báo lỗi, switch `isTrending` đồng bộ `checked`.
* **Update Song (`/se201170/update-song/:id`):** `useParams()` lấy ID, `useEffect([id])` nạp đầy đủ 100% cả 6 trường dữ liệu cũ vào form để khi PUT không làm mất dữ liệu cũ.
* **Build Verification:** Đã chạy `npm run build` thành công trong **836ms**, 0 lỗi cú pháp hay linting.

### 2. Lab 3: React Router trong `se2041-demo-01` — ✅ HOÀN THÀNH 100% (10/10)
Đã tích hợp hoàn chỉnh React Router vào ứng dụng hoa lan (kế thừa Lab 1 & 2):
* **Library & Setup:** Cài đặt `react-router` (v8.5.0), bọc `<BrowserRouter>` ở `main.jsx`.
* **Layout Route (`MainLayout.jsx`):** Sử dụng `<Outlet />` để giữ `MyNavBar` và Theme Sáng/Tối cố định, không reload trang.
* **Pages (`src/pages/`):**
  * `Home.jsx`: Grid 16 hoa lan + Modal Quick View (Lab 2).
  * `Detail.jsx`: Dynamic routing `/detail/:id` sử dụng `useParams()`, hàm `.find()` và `useNavigate(-1)`.
  * `Contact.jsx`: Form liên hệ + Thông tin vườn hoa Orchid Garden bằng React-Bootstrap.
  * `NotFound.jsx`: Splat route `*` bắt 404 cho đường dẫn không hợp lệ.
* **Navigation:** `MyNavBar.jsx` dùng `<NavLink to="/" end>` và `<NavLink to="/contact">`, `OrchidCard.jsx` dùng `<Button as={Link} to={`/detail/${orchid.id}`}>`.
* **Build Verification:** `npm run build` thành công trong **405ms** (và 7.00s lần 2), 0 lỗi cú pháp.

### 3. Lab 4: Formik & Yup Validation trong `se2041-demo-01` — ✅ HOÀN THÀNH 100% (10/10)
Đã hoàn thành toàn bộ yêu cầu của Lab 4:
* **Library & Setup:** Cài đặt `formik` (^2.4.9) và `yup` (^1.7.1).
* **Contact Form (`src/pages/Contact.jsx`):**
  * Khởi tạo `useFormik` với đủ 6 trường dữ liệu: `name`, `email`, `phone`, `program`, `message`, `agree`.
  * Cấu hình `validationSchema` với `Yup.object`: bắt buộc nhập (`required`), giới hạn ký tự (`min`), định dạng email (`email`), kiểm tra số nguyên (`integer`, `typeError`), chọn dropdown (`min(1)`), xác nhận switch (`oneOf([true])`).
  * Áp dụng cú pháp Pro `{...formik.getFieldProps()}` và `checked={formik.values.agree}` cho Switch.
  * Hiển thị thông báo lỗi chữ đỏ qua `formik.touched.xxx && formik.errors.xxx`.
  * Kích hoạt `alert(JSON.stringify(values, null, 2))` khi form submit hợp lệ.
* **Build Verification:** Đã chạy `npm run build` thành công trong **1.08s**, 0 lỗi cú pháp hay linting.

### 4. Lab 5: Fetch API, MockAPI & Full-Stack CRUD trong `se2041-demo-01` — ✅ HOÀN THÀNH 100% (10/10)
Đã hoàn thành toàn bộ 4 thao tác CRUD chuẩn RESTful API:
* **MockAPI & .env:** Cấu hình `VITE_API_URL` nạp đủ 16 hoa lan mẫu từ `orchids.json`.
* **GET API (Trang chủ & Chi tiết):**
  * `src/pages/Home.jsx`: `useState([])` + `useEffect` gọi `axios.get` load danh sách hoa động.
  * `src/pages/Detail.jsx`: `useParams()` bóc tách `id`, `axios.get(VITE_API_URL + '/' + id)`, có màn hình `loading` chống chớp giật lỗi đỏ (Flash of False Error).
* **DELETE API (Bảng Quản Lý):**
  * `src/pages/OrchidsManagement.jsx`: Table React-Bootstrap có ảnh thumbnail, ID, tên hoa, xuất xứ, rating, nút Sửa/Xóa.
  * Hàm `handleDelete`: Hộp thoại xác nhận `window.confirm()`, gọi `axios.delete`, cập nhật state tức thì bằng `.filter()`.
* **POST & PUT API (Thêm mới & Cập nhật):**
  * `src/pages/AddOrchid.jsx`: Formik + Yup bắt lỗi, 2 switch `isSpecial` & `isNatural` đồng bộ `checked`, gửi `axios.post` tạo hoa mới và `navigate('/management')`.
  * `src/pages/UpdateOrchid.jsx`: `useParams()` lấy `id`, `useEffect([id])` nạp đầy đủ 100% dữ liệu cũ qua `formik.setValues()`, gửi `axios.put(URL + '/' + id, values)` để ghi đè dữ liệu.
* **Build Verification:** Đã chạy `npm run build` thành công trong **469ms**, 0 lỗi cú pháp hay linting.

### 5. Các tài liệu ghi chú cốt lõi đã tạo:
* [`NOTES/00_faq_giai_dap_thac_mac_react_js_ts.md`](./NOTES/00_faq_giai_dap_thac_mac_react_js_ts.md): Đã bổ sung đầy đủ từ Câu 19 đến Câu 25 (bao gồm cơ chế JWT Header/Payload/Signature, Google Client ID, Authorized Origins, Truthy/Falsy null vs {}, PUT param id+values...).
* [`LAB/README.md`](./LAB/README.md): Danh mục chỉ dẫn các bài Lab chính thức (Lab 1 đến Lab 5 hoàn thành 10/10).

---

## 🎯 CÁC HƯỚNG ĐI TIẾP THEO (NEXT STEPS)

### 🔴 PRIORITY 0 (Mới, 2026-10-27): Tự học Redux Toolkit trong `CODE/self-study/redux-intro/`
> **⚠️ HƯỚNG DẪN BẮT BUỘC CHO BƯỞI TỐI NAY (ghi theo yêu cầu Nhi 2026-10-27):** Con bé **mới học xong "sương sương" vòng 1 Redux** (Counter slice cơ bản). **Tối nay DẠY THẲM, KHÔNG ÔN LẠI BÀI HÔM TRƯỚC THẦY GIẢNG TRÊN LỚP** — phải mở rộng ra kiến thức THỰC SỰ MỚI:
> 1. **Kiểm tra nó thiệt kỹ** 2 chỗ vừa sai trong trắc nghiệm: (a) lẫn lộn `useDispatch` vs `reducer` (ai "đưa phiếu" vs ai "làm hàng"); (b) `useSelector` THỪA trách nhiệm "dispatch" (nó chỉ đọc+bám, không viết).
> 2. **Nói lại `useSelector` (đọc+bám) & `useDispatch` (viết)** + **Immer (draft proxy, vì sao được viết `state.count += 1`)** — chi tiết đã ghi ở FAQ **Câu 27, 28**.
> 3. Rồi mở rộng: **slice thứ 2 (nhiều slice trong 1 store)** → **`createAsyncThunk` gọi MockAPI hoa lan cũ (endpoint SE201170)** → **Redux DevTools** → so sánh Context vs Redux qua bài tập.

**Trạng thái đã học (để tránh dạy lại từ đầu):**
* ✅ Project Vite `redux-intro` + install `@reduxjs/toolkit` (2.13.0) + `react-redux` (9.3.0)
* ✅ Hiểu vòng 1: Store / Slice / Action+Reducer(payload) / Provider / useSelector / useDispatch
* ✅ ĐÃ GÕ XONG cả 4 file: `slices/CounterSlice.jsx` + `store/store.js` + `main.jsx`(Provider) + `components/Counter.jsx` (3 nút +1/-1/+5)
* ✅ Trắc nghiệm 8 câu: đúng **6/8** (sai câu 1 & 5) → đã chữa, cần kiểm tra kỹ lại
* ✅ File kiến thức tổng hợp: [`NOTES/07-context-redux/02_redux_toolkit_hoc_tu_dau.md`](./NOTES/07-context-redux/02_redux_toolkit_hoc_tu_dau.md)
* ⏳ Chưa làm: slice thứ 2, `createAsyncThunk`, DevTools, chạy `npm run dev` kiểm tra build thật

> **⚠️ Lưu ý hạ tầng máy Nhi:** `.npmrc` user có `allow-scripts=@anthropic-ai/claude-code` → `npm create vite` (chọn "install and start now") sẽ lỗi `EALLOWSCRIPTS`. Cách tránh: chạy `npm create vite` rồi **tự chạy `npm install` riêng** (đã dùng cách này cho redux-intro).

1. **Lab 6 — Google Login (Tạm dừng chờ Nhi hỏi thầy trên lớp):**
   * Đã cài đặt xong `@react-oauth/google` và `jwt-decode`, build kiểm tra 0 lỗi.
   * Nhi đã hiểu trọn vẹn bản chất JWT và Google Client ID.
   * Đợi Nhi lấy Google Client ID / hướng dẫn cụ thể từ thầy để tiếp tục ráp vào `main.jsx` và `MyNavBar.jsx`.
2. **Lựa chọn thay thế hiện tại:**
   * Nghỉ ngơi giữ sức khỏe, hoặc
   * Luyện giải các đề thi thực tế các kỳ trước trong thư mục [`EXAMS/past-exams/`](./EXAMS/past-exams/) để tăng phản xạ phòng thi PE!


---

## 🛠️ THÔNG TIN KỸ THUẬT NHANH (QUICK REFERENCE)

* **Thư mục dự án PE Trial:** `e:\SEMESTER 5\FER202\EXAMS\mock-tests\FER202_TRIAL_PE\fer`
* **Lệnh chạy dev server:**
  ```bash
  cd "e:\SEMESTER 5\FER202\EXAMS\mock-tests\FER202_TRIAL_PE\fer"
  npm run dev
  ```
* **Lệnh kiểm tra build:**
  ```bash
  npm run build
  ```
* **Endpoint MockAPI:**
  `https://6ad040de03feaa52b21f292c.mockapi.io/api/v1/SE201170`
