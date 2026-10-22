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

### 3. Các tài liệu ghi chú cốt lõi đã tạo:
* [`NOTES/00_faq_giai_dap_thac_mac_react_js_ts.md`](./NOTES/00_faq_giai_dap_thac_mac_react_js_ts.md): Đã bổ sung Câu 12 (`<Outlet />` & Layout Route) và Câu 13 (`useParams()` & cạm bẫy).
* [`CODE/in-class/se2041-demo-01/docs/superpowers/plans/2026-10-22-lab3-react-router.md`](./CODE/in-class/se2041-demo-01/docs/superpowers/plans/2026-10-22-lab3-react-router.md): Checklist 11 bước chi tiết hoàn thành 100%.
* [`EXAMS/mock-tests/FER202_TRIAL_PE/KE_HOACH_LAM_BAI_PE.md`](./EXAMS/mock-tests/FER202_TRIAL_PE/KE_HOACH_LAM_BAI_PE.md): Kế hoạch và checklist chi tiết 6 giai đoạn làm bài PE.
* [`NOTES/00_checklist_tu_code_router_va_useeffect.md`](./NOTES/00_checklist_tu_code_router_va_useeffect.md): Checklist tự code Router và useEffect.

---

## 🎯 CÁC HƯỚNG ĐI TIẾP THEO (NEXT STEPS) KHI NHI MỞ PHIÊN MỚI

Khi Nhi vào phiên làm việc tiếp theo, trợ lý hãy chào Nhi và gợi ý 3 lựa chọn sau:

1. **Lựa chọn 1 — Ôn tập tuần 4 trên lớp (`CODE/in-class/week-04-context`):**
   * Học và thực hành Context API (`createContext`, `useContext`).
   * Tìm hiểu Redux Toolkit (`configureStore`, `createSlice`).
2. **Lựa chọn 2 — Thực chiến đề PE mới:**
   * Luyện giải các đề thi thực tế các kỳ trước trong thư mục [`EXAMS/past-exams/`](./EXAMS/past-exams/).
   * Bấm giờ làm bài 85 phút để tăng tốc độ gõ code và phản xạ.
3. **Lựa chọn 3 — Hoàn thiện các bài Lab chính thức:**
   * Rà soát đề bài trong thư mục [`LAB/`](./LAB/) (`Lab 1`, `Lab 2`, `Lab 3`).

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
