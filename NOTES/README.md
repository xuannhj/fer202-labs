# 📝 Ghi Chú Lý Thuyết & Bí Kíp Ôn Thi FER202

Tổng hợp kiến thức cốt lõi, cú pháp quan trọng và các lỗi kinh điển cần tránh trong React.

---

## ⚡ Tóm tắt kiến thức trọng tâm

### 1. Component & Props
- **Component**: Luôn viết hoa chữ cái đầu (ví dụ: unction OrchidCard() {}).
- **Props**: Dữ liệu truyền một chiều từ cha xuống con (read-only, không được gán đè trực tiếp props.title = ...).
- **Destructuring**: unction OrchidCard({ orchid, onSelect }) giúp code ngắn gọn và dễ đọc hơn.

### 2. State & Hooks cơ bản
- **useState**: Quản lý trạng thái nội tại của component.
  `jsx
  const [count, setCount] = useState(0);
  // Khi cập nhật state phụ thuộc vào state cũ:
  setCount(prev => prev + 1);
  `
- **useEffect**: Xử lý Side Effects (Gọi API, Timer, Event Listener).
  `jsx
  useEffect(() => {
    // Chạy 1 lần duy nhất sau khi component mount
    fetchData();
  }, []); // <-- Dependencies array rỗng
  `

### 3. React Router (eact-router-dom)
- <BrowserRouter>: Bọc toàn bộ ứng dụng ở main.jsx hoặc App.jsx.
- <Routes> & <Route path='/' element={<Home />} />.
- useNavigate(): Điều hướng trang bằng code (ví dụ sau khi submit form).
- useParams(): Lấy id từ URL (ví dụ /detail/:id).

### 4. Xử lý Mảng & Form trong React
- Render danh sách: Luôn cung cấp key duy nhất ở thẻ ngoài cùng bên trong .map().
  `jsx
  {items.map(item => (
    <Col key={item.id} sm={12} md={6} lg={4}>
      <CardItem data={item} />
    </Col>
  ))}
  `
- Controlled Component (Form input):
  `jsx
  <input value={keyword} onChange={e => setKeyword(e.target.value)} />
  `

---

## ⚠️ Top 5 Lỗi Thường Gặp Cần Tránh
1. **Quên key khi dùng .map()**: Dẫn đến lỗi warning console và sai sót khi cập nhật danh sách.
2. **Infinite Loop trong useEffect**: Cập nhật state bên trong useEffect mà dependency array lại chứa chính state đó.
3. **Gọi Hooks sai quy tắc**: Gọi useState/useEffect bên trong vòng lặp or, câu lệnh if hoặc sau lệnh eturn.
4. **Mutate State trực tiếp**: Gán trực tiếp list.push(newItem) thay vì setList([...list, newItem]).
5. **Quên import CSS của Bootstrap**: Quên import 'bootstrap/dist/css/bootstrap.min.css'; ở main.jsx hoặc App.jsx.
