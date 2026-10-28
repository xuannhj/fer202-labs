# 🏠 Self-Study & Practice (Code Tự Học Ở Nhà)

> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Nguyên tắc:** Toàn bộ code tự học, tự luyện, giải bài tập chuyên sâu và làm theo checklist ở nhà được lưu trữ trong thư mục này.

---

## 🎯 1. Tài Liệu & Lộ Trình Tự Luyện

* 📋 **Checklist tự code `useEffect` & `React Router`:** [NOTES/00_checklist_tu_code_router_va_useeffect.md](../../NOTES/00_checklist_tu_code_router_va_useeffect.md).
* 🟣 **Giáo trình tự học Redux Toolkit từ gốc:** [NOTES/07-context-redux/02_redux_toolkit_hoc_tu_dau.md](../../NOTES/07-context-redux/02_redux_toolkit_hoc_tu_dau.md).

---

## 📁 2. Danh Sách Dự Án Tự Học

| Dự án | Chủ đề thực hành | Mô tả kỹ thuật | Trạng thái |
| :--- | :--- | :--- | :-: |
| [`redux-intro/`](./redux-intro) | **Redux Toolkit Từ Đầu** | `configureStore`, `createSlice`, `<Provider>`, `useSelector`, `useDispatch`, Immer & `createAsyncThunk` | 🔄 Đang học (Xong Vòng 1 Counter Slice) |

---

## 🚀 3. Hướng Dẫn Tạo Dự Án Mới Trong `self-study/`

Khi muốn tạo 1 project mới để tự luyện, mở terminal tại thư mục này và chạy lệnh:

```bash
npm create vite@latest ten-du-an -- --template react
cd ten-du-an
npm install
npm install bootstrap react-bootstrap react-router axios formik yup
npm run dev
```
