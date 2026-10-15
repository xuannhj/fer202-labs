# 📖 Chuyên Đề: `React Router` Toàn Tập (Từ Cơ Bản Đến PE)

> **Môn học:** FER202 - Front-End Web Development with React  
> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Tài liệu tham khảo chính thức:** [reactrouter.com](https://reactrouter.com/start/modes#declarative)

---

## 🎯 1. VÌ SAO PHẢI DÙNG REACT ROUTER?

* **Single Page Application (SPA):** Website chỉ có 1 file HTML duy nhất (`index.html`). Khi người dùng bấm sang trang khác, trình duyệt **không tải lại toàn bộ trang web** mà chỉ tráo đổi component tương ứng.
* Thư viện `react-router` quản lý URL và quyết định component nào sẽ được vẽ ra màn hình.

---

## 🛠️ 2. CÁC THÀNH PHẦN CỐT LÕI

### 1. `<BrowserRouter>`
Bao bọc toàn bộ ứng dụng để theo dõi lịch sử duyệt web:
```jsx
// main.jsx
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 2. `<Routes>` & `<Route>`
Bản đồ định tuyến:
```jsx
// App.jsx
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import MusicLibrary from './pages/MusicLibrary';
import MusicManagement from './pages/MusicManagement';
import SongDetail from './pages/SongDetail';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music-library" element={<MusicLibrary />} />
      <Route path="/music-management" element={<MusicManagement />} />
      {/* Dynamic Route */}
      <Route path="/song-detail/:id" element={<SongDetail />} />
      {/* Bắt tất cả các link lạ (404 Not Found) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

### 3. Thẻ `<Link>` & React Bootstrap `<Nav.Link as={Link}>`
Tránh tuyệt đối dùng thẻ `<a href="...">` vì sẽ gây reload lại trang:
```jsx
import { Link } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavBar() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand as={Link} to="/">SE201170</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/music-library">Music Library</Nav.Link>
          <Nav.Link as={Link} to="/music-management">Music Management</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
```

---

## 🔑 3. HAI HOOK QUAN TRỌNG NHẤT: `useParams` & `useNavigate`

### A. `useParams()` — Lấy ID động từ URL
Khi người dùng bấm vào đường dẫn: `/song-detail/5`
```jsx
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SongDetail() {
  // Lấy giá trị '5' từ URL ':id'
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    // Gọi API lấy đúng chi tiết bài hát có ID này
    const fetchDetail = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
      setSong(res.data);
    };
    fetchDetail();
  }, [id]); // Khi id đổi thì fetch lại bài hát mới

  if (!song) return <p>Đang tải chi tiết...</p>;

  return (
    <div>
      <h2>{song.title}</h2>
      <p>Nghệ sĩ: {song.artist}</p>
    </div>
  );
}
```

### B. `useNavigate()` — Chuyển trang bằng Code
Dùng khi xử lý sau một sự kiện (sau khi bấm nút Xóa, bấm nút Lưu Form):
```jsx
import { useNavigate } from 'react-router';

export default function MyComponent() {
  const navigate = useNavigate();

  const handleFinish = () => {
    alert("Thao tác thành công!");
    // Chuyển người dùng về trang Quản lý
    navigate('/music-management');
    
    // Hoặc quay lại trang trước đó:
    // navigate(-1);
  };

  return <button onClick={handleFinish}>Hoàn thành</button>;
}
```

---

## 🌟 4. LAYOUT ROUTE & `<Outlet>` (Nâng Cao)
Nếu muốn thanh `Navbar` và `Footer` xuất hiện ở mọi trang mà không cần import lặp lại ở từng trang:

```jsx
// Layout.jsx
import { Outlet } from 'react-router';
import MyNavBar from './components/MyNavBar';

export default function Layout() {
  return (
    <>
      <MyNavBar />
      <main className="container my-4">
        {/* Nơi nội dung của các trang con sẽ hiển thị */}
        <Outlet />
      </main>
      <footer>© 2026 - SE201170</footer>
    </>
  );
}
```

Và khai báo lồng nhau (Nested Routes) trong `App.jsx`:
```jsx
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/music-library" element={<MusicLibrary />} />
    <Route path="/music-management" element={<MusicManagement />} />
  </Route>
</Routes>
```
