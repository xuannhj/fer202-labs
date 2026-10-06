# Lab 2 - React Hooks (Orchid Detail Modal, Dark Mode & Custom Hook) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mở rộng ứng dụng danh mục hoa lan từ Lab 1 để tích hợp tính năng xem chi tiết hoa lan dạng Modal Popup, chuyển đổi chế độ giao diện Sáng / Tối (Dark/Light Theme) và xây dựng Custom Hook tái sử dụng logic trong React.

**Architecture:** 
- **Custom Hook Layer (`src/hooks/useTheme.js`):** Quản lý trạng thái giao diện Dark/Light mode, tự động đồng bộ thuộc tính `data-bs-theme` của Bootstrap và lưu vào `localStorage`.
- **Navigation & Control Layer (`src/components/MyNavBar.jsx`):** Bổ sung nút chuyển đổi Theme Switcher (Mặt trời ☀️ / Mặt trăng 🌙) điều khiển trạng thái Theme của toàn bộ ứng dụng.
- **Detail Presentation Layer (`src/components/OrchidDetailModal.jsx`):** Xây dựng component Popup Modal bằng React-Bootstrap hiển thị hình ảnh lớn, thông tin xuất xứ, phân loại, đánh giá sao, lượt thích và mô tả chi tiết hoa lan.
- **State Coordination Layer (`src/components/Orchid.jsx` & `src/components/OrchidCard.jsx`):** Quản lý `selectedOrchid` bằng `useState`, truyền callback `onSelectOrchid` xuống từng card để kích hoạt Modal khi bấm "Explore more".
- **Application Root (`src/App.jsx`):** Kết nối Custom Hook `useTheme`, áp dụng theme cho toàn bộ layout ứng dụng.

**Tech Stack:** React 19, React-Bootstrap 2.10, Bootstrap 5.3 (hỗ trợ Dark Mode chuẩn `data-bs-theme`), JavaScript ES6+, Vite.

**Spec:** `labs/Lab 2 - React Hook.md`

## Global Constraints

- Không sửa đổi cấu trúc dữ liệu mảng gốc trong `src/ListOfOrchids.js`.
- Bắt buộc phải có ít nhất 1 **Custom Hook** (tên bắt đầu bằng `use...`).
- Sử dụng đầy đủ các React Hooks cơ bản (`useState`, `useEffect`) để xử lý tương tác UI.
- Giao diện Dark/Light mode phải áp dụng mượt mà lên toàn bộ Navbar, Card, Modal và Background trang web.

## Review Focus

1. **Modal không crash khi `selectedOrchid` là `null`:** Kiểm tra điều kiện render an toàn (`orchid ? orchid.name : ''`) trước khi hiển thị dữ liệu trong Modal.
2. **Nút Explore more không xung đột sự kiện:** Callback `onClick` kích hoạt đúng object bông hoa được bấm.
3. **Đóng Modal sạch sẽ:** Bấm nút Close hoặc bấm ra ngoài Backdrop (`onHide`) đều reset `selectedOrchid` về `null`.
4. **Theme được duy trì sau khi tải lại trang (Persistence):** Kiểm tra `localStorage` lưu trữ đúng trạng thái theme (`'light'` hoặc `'dark'`).
5. **Giao diện Modal trên màn hình điện thoại:** Responsive vừa vặn khung hình không bị tràn viền.

---

### Task 1: Xây dựng Custom Hook `useTheme` quản lý Dark / Light Mode

**Files:**
- Create: `src/hooks/useTheme.js`
- Test: Kiểm tra trong trình duyệt giá trị `data-bs-theme` trên thẻ `<html>` hoặc root element.

**Interfaces:**
- Produces: `useTheme()` trả về `{ theme, toggleTheme, isDark }`
  - `theme`: Chuỗi `'light'` hoặc `'dark'`
  - `toggleTheme`: Hàm đảo ngược trạng thái theme
  - `isDark`: Boolean (`true` nếu đang ở Dark mode)

- [ ] **Step 1: Tạo thư mục `src/hooks` và file `src/hooks/useTheme.js`**

```javascript
import { useState, useEffect } from 'react';

export function useTheme() {
  // Lấy theme đã lưu trong localStorage hoặc mặc định là 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('orchid_theme') || 'light';
  });

  // Tự động gán thuộc tính data-bs-theme lên body và lưu vào localStorage
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('orchid_theme', theme);
  }, [theme]);

  // Hàm chuyển đổi giữa Sáng và Tối
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
}

export default useTheme;
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/useTheme.js
git commit -m "feat(lab2): add custom hook useTheme for dark/light mode"
```

---

### Task 2: Tích hợp Theme Switcher vào Navigation Bar

**Files:**
- Modify: `src/components/MyNavBar.jsx`

**Interfaces:**
- Consumes: `{ theme, toggleTheme, isDark }` từ `useTheme()` hoặc nhận qua Props từ `App.jsx`.

- [ ] **Step 1: Cập nhật `src/components/MyNavBar.jsx` với nút gạt Theme**

```jsx
import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';

function MyNavBar({ theme, toggleTheme, isDark }) {
  return (
    <Navbar 
      bg={isDark ? 'dark' : 'light'} 
      variant={isDark ? 'dark' : 'light'} 
      className="shadow-sm sticky-top mb-4"
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          🌸 Orchid Garden
        </Navbar.Brand>
        
        {/* Nút bật tắt Dark / Light Mode */}
        <Button 
          variant={isDark ? 'outline-light' : 'outline-dark'} 
          size="sm"
          onClick={toggleTheme}
          className="d-flex align-items-center gap-2 rounded-pill px-3 py-1"
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </Button>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/MyNavBar.jsx
git commit -m "feat(lab2): add theme toggle button to MyNavBar"
```

---

### Task 3: Xây dựng Component Modal chi tiết hoa lan (`OrchidDetailModal.jsx`)

**Files:**
- Create: `src/components/OrchidDetailModal.jsx`

**Interfaces:**
- Consumes:
  - `show`: Boolean (hiển thị hay ẩn modal)
  - `orchid`: Object bông hoa được chọn hoặc `null`
  - `onHide`: Hàm callback đóng modal

- [ ] **Step 1: Tạo component `src/components/OrchidDetailModal.jsx`**

```jsx
import React from 'react';
import { Modal, Button, Badge, Row, Col } from 'react-bootstrap';

function OrchidDetailModal({ show, orchid, onHide }) {
  if (!orchid) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold fs-4">
          {orchid.name}
          {orchid.isSpecial && (
            <Badge bg="warning" text="dark" className="ms-2 fs-6">
              Special ⭐
            </Badge>
          )}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="pt-2">
        <Row className="g-4 align-items-center">
          <Col md={6}>
            <img 
              src={orchid.image} 
              alt={orchid.name} 
              className="img-fluid rounded-3 shadow-sm w-100" 
              style={{ maxHeight: '350px', objectFit: 'cover' }}
            />
          </Col>

          <Col md={6}>
            <div className="mb-3">
              <h5 className="text-secondary mb-1">Thông tin chi tiết</h5>
              <p className="mb-1"><strong>Xuất xứ:</strong> {orchid.origin}</p>
              <p className="mb-1"><strong>Màu sắc:</strong> {orchid.color}</p>
              <p className="mb-1"><strong>Loài:</strong> {orchid.category}</p>
              <p className="mb-1">
                <strong>Phân loại:</strong>{' '}
                <Badge bg={orchid.isNatural ? 'success' : 'info'}>
                  {orchid.isNatural ? 'Tự nhiên (Natural)' : 'Lai tạo (Hybrid)'}
                </Badge>
              </p>
            </div>

            <div className="d-flex gap-3 mb-3 p-2 bg-body-tertiary rounded-3">
              <div>⭐ <strong>{orchid.rating} / 5</strong> Đánh giá</div>
              <div>❤️ <strong>{orchid.numberOfLike}</strong> Lượt yêu thích</div>
            </div>

            <p className="text-muted small">
              {orchid.description || `Loài hoa lan ${orchid.name} tuyệt đẹp đến từ ${orchid.origin}, mang sắc ${orchid.color.toLowerCase()} quyến rũ được nhiều người sưu tầm hoa ưa chuộng.`}
            </p>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className="border-0 pt-0">
        <Button variant="secondary" onClick={onHide} className="px-4">
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrchidDetailModal;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/OrchidDetailModal.jsx
git commit -m "feat(lab2): create OrchidDetailModal component for orchid details"
```

---

### Task 4: Kết nối `useState` chọn hoa lan giữa `Orchid.jsx`, `OrchidCard.jsx` và `OrchidDetailModal.jsx`

**Files:**
- Modify: `src/components/OrchidCard.jsx` (nhận `onSelect`)
- Modify: `src/components/Orchid.jsx` (khai báo `useState` và gọi `OrchidDetailModal`)

- [ ] **Step 1: Cập nhật `src/components/OrchidCard.jsx`**
  - Thêm prop `onSelect` vào component.
  - Gán sự kiện `onClick={() => onSelect(orchid)}` vào nút `Explore more`.

```jsx
// Cập nhật dòng khai báo:
function OrchidCard({ orchid, onSelect }) {
  // ...
  // Cập nhật nút Explore more:
  <Button 
    variant="success" 
    className="mt-auto w-100" 
    onClick={() => onSelect(orchid)}
  >
    Explore more
  </Button>
}
```

- [ ] **Step 2: Cập nhật `src/components/Orchid.jsx`**
  - Import `useState` từ React.
  - Import `OrchidDetailModal`.
  - Khai báo state: `const [selectedOrchid, setSelectedOrchid] = useState(null);`
  - Truyền `onSelect={setSelectedOrchid}` vào `<OrchidCard />`.
  - Đặt `<OrchidDetailModal show={!!selectedOrchid} orchid={selectedOrchid} onHide={() => setSelectedOrchid(null)} />` dưới cùng.

- [ ] **Step 3: Commit**

```bash
git add src/components/OrchidCard.jsx src/components/Orchid.jsx
git commit -m "feat(lab2): wire up useState for orchid modal preview"
```

---

### Task 5: Ráp Custom Hook `useTheme` vào `App.jsx` và Kiểm thử toàn diện

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Cập nhật `src/App.jsx`**

```jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Orchid from './components/Orchid';
import MyNavBar from './components/MyNavBar';
import useTheme from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className="min-vh-100 bg-body text-body">
      <MyNavBar theme={theme} toggleTheme={toggleTheme} isDark={isDark} />
      <Orchid />
    </div>
  );
}
```

- [ ] **Step 2: Kiểm thử toàn bộ ứng dụng trên trình duyệt**
  1. Click nút "Explore more" trên 3 bông hoa khác nhau $\rightarrow$ Modal mở lên với đúng ảnh và tên hoa đó.
  2. Bấm nút "Đóng" hoặc click ra ngoài Modal $\rightarrow$ Modal đóng lại mượt mà.
  3. Bấm nút "🌙 Dark Mode" trên thanh Navbar $\rightarrow$ Toàn bộ trang web (Navbar, Card, Modal, Background) chuyển sang giao diện nền tối.
  4. F5 tải lại trang $\rightarrow$ Trạng thái Dark mode vẫn được giữ nguyên nhờ `localStorage`.

- [ ] **Step 3: Commit hoàn thành Lab 2**

```bash
git add src/App.jsx
git commit -m "feat(lab2): complete Lab 2 with OrchidDetailModal, Dark Mode and useTheme hook"
```
