# Lab 1 - React Components (Orchids Catalog) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây dựng ứng dụng danh mục hoa lan hiển thị 16 loài hoa lan theo mô hình Container & Presentation Component, sử dụng React 19, React-Bootstrap và Vite.

**Architecture:** 
- Phân tách kiến trúc làm 3 tầng độc lập:
  1. **Data Layer (`src/ListOfOrchids.js`):** Chứa mảng dữ liệu 16 đối tượng hoa lan với cấu trúc chuẩn (`id`, `name`, `rating`, `isSpecial`, `isNatural`, `image`, `color`, `numberOfLike`, `origin`, `category`).
  2. **Presentation Layer (`src/components/OrchidCard.jsx`):** Component hiển thị (Dumb/UI Component) chỉ nhận prop `orchid` và vẽ giao diện Bootstrap Card gồm hình ảnh, badge `Special`, thông tin phân loại, đánh giá sao, lượt like và nút chi tiết.
  3. **Container Layer (`src/components/Orchids.jsx`):** Component điều phối (Smart/Logic Component) nạp dữ liệu từ file, sử dụng vòng lặp `map()` và quản lý bố cục lưới Responsive Grid (`Container`, `Row`, `Col`).
  4. **Application Root (`src/App.jsx`):** Tích hợp thanh điều hướng Navigation Bar và hiển thị danh mục hoa lan hoàn chỉnh.

**Tech Stack:** React 19, Vite 8, React-Bootstrap 2.10, Bootstrap 5.3, JavaScript ES6+.

**Spec:** [Lab 1 - React Components (1).md](file:///e:/SEMESTER%205/FER202/CODE/se2041-demo-01/labs/Lab%201%20-%20React%20Components%20%281%29.md)

---

## BẢN LÝ THUYẾT NỀN TẢNG (THEORETICAL FOUNDATIONS)

Trước khi thực hiện từng task, lập trình viên cần hiểu rõ 5 khối kiến thức lý thuyết sau:

### 1. Kiến trúc Container & Presentation Component Pattern
* **Vấn đề đặt ra:** Nếu viết toàn bộ việc nạp dữ liệu, sắp xếp layout, và trang trí từng thẻ Card trong cùng một file, component sẽ rất dài, khó đọc và không thể tái sử dụng.
* **Giải pháp:** Tách biệt thành hai loại component:
  * **Presentation Component (Dumb / Stateless Component):**
    * Nhiệm vụ duy nhất: Lo việc hiển thị giao diện.
    * Nhận dữ liệu thông qua `props` từ cha truyền xuống.
    * Không trực tiếp import dữ liệu gốc, không phụ thuộc vào nguồn cấp dữ liệu.
    * Rất dễ tái sử dụng ở bất kỳ đâu (ví dụ: dùng ở trang chủ, trang tìm kiếm, hoặc trang giỏ hàng).
  * **Container Component (Smart / Stateful Component):**
    * Nhiệm vụ duy nhất: Quản lý logic & dữ liệu.
    * Import dữ liệu mảng, xử lý lọc/sắp xếp (nếu có).
    * Lặp qua mảng bằng `.map()` và gọi Presentation Component để vẽ từng item.
    * Quản lý layout khung bao bọc (Container, Row, Col).

### 2. Kỹ thuật Render danh sách với `.map()` và thuộc tính `key`
* Trong JSX, ta không dùng vòng lặp `for` truyền thống bên trong lệnh `return` mà sử dụng biểu thức JavaScript `{array.map(item => <Component key={item.id} ... />)}`.
* **Thuộc tính `key`:** 
  * Bắt buộc phải có ở thẻ ngoài cùng của mỗi phần tử được sinh ra trong `map()`.
  * `key` phải là giá trị duy nhất (như `id`).
  * Giúp thuật toán React Diffing nhận biết chính xác phần tử nào bị thêm, sửa hoặc xóa khi DOM cập nhật.

### 3. Props và Destructuring Props trong React
* **Props (Properties):** Là cơ chế truyền dữ liệu 1 chiều (One-way Data Binding) từ Component Cha xuống Component Con.
* Thay vì viết `props.orchid.name`, ta sử dụng **Destructuring** ngay ở tham số hàm:
  ```jsx
  export default function OrchidCard({ orchid }) {
    const { name, image, rating, isSpecial, isNatural, color, numberOfLike, origin, category } = orchid;
    // ...
  }
  ```

### 4. Render có điều kiện (Conditional Rendering)
* **Toán tử 3 ngôi (`condition ? valTrue : valFalse`):** Thích hợp khi muốn hiển thị 1 trong 2 trạng thái. Ví dụ:
  `{isNatural ? 'Tự nhiên' : 'Lai tạo'}`
* **Toán tử `&&` (Short-circuit):** Thích hợp khi chỉ hiển thị nếu điều kiện đúng, sai thì ẩn đi. Ví dụ:
  `{isSpecial && <Badge bg="danger">Special</Badge>}`

### 5. Hệ thống lưới Responsive Grid của React-Bootstrap
* Phối hợp `Container` > `Row` > `Col`.
* Chia 12 cột linh hoạt theo các breakpoint:
  * `xs={12}`: Trên điện thoại (màn hình nhỏ) chiếm 12/12 cột (1 card/hàng).
  * `sm={6}`: Trên tablet nhỏ chiếm 6/12 cột (2 card/hàng).
  * `md={4}`: Trên tablet lớn chiếm 4/12 cột (3 card/hàng).
  * `lg={3}`: Trên màn hình máy tính chiếm 3/12 cột (4 card/hàng).

---

## Global Constraints

- Mọi ảnh phải sử dụng URL hợp lệ có thể tải được hoặc placeholder chuẩn chất lượng cao.
- Dữ liệu phải được lưu chính xác trong file `src/ListOfOrchids.js` với tên biến export là `ListOfOrchids`.
- Đúng chuẩn 16 phần tử, mỗi phần tử có đủ 10 trường: `id`, `name`, `rating`, `isSpecial`, `isNatural`, `image`, `color`, `numberOfLike`, `origin`, `category`.
- Sử dụng đúng mô hình Container (`Orchids.jsx`) và Presentation (`OrchidCard.jsx`).
- Mã nguồn phải build thành công với lệnh `npm run build` không phát sinh lỗi lint hay compile.

## Review Focus

1. **Thiếu trường dữ liệu:** Mỗi item trong 16 item phải có đầy đủ kiểu dữ liệu: `rating` và `numberOfLike` là number, `isSpecial` và `isNatural` là boolean.
2. **Missing `key` prop:** Vòng lặp `.map()` trong `Orchids.jsx` phải truyền `key={orchid.id}` vào thẻ ngoài cùng của vòng lặp (`Col`).
3. **Ảnh không đều kích thước (Card Image Overflow):** Thẻ `Card.Img` phải có CSS `objectFit: 'cover'` và chiều cao cố định để 16 Card thẳng hàng đều tăm tắp.
4. **Card bằng chiều cao nhau:** Thẻ `Card` phải có class `h-100` để các card trong cùng 1 hàng có chiều cao đồng đều dù tên hoa dài ngắn khác nhau.
5. **Responsive Grid:** Bố cục phải responsive từ 1 cột (mobile) đến 4 cột (desktop).

---

## File Structure Plan

```
src/
├── ListOfOrchids.js            <-- [Create] Task 1: Danh sách 16 hoa lan đầy đủ
├── components/
│   ├── OrchidCard.jsx          <-- [Create] Task 2: Presentation Component hiển thị Card
│   ├── Orchids.jsx             <-- [Create] Task 3: Container Component nạp data & chia Grid
│   └── MyNavBar.jsx            <-- [Existing] Được tái sử dụng cho thanh điều hướng
├── App.jsx                     <-- [Modify] Task 4: Root component kết nối giao diện
└── App.css                     <-- [Modify] Task 4: CSS tinh chỉnh bóng đổ và hiệu ứng hover
```

---

## Implementation Tasks

### Task 1: Xây dựng Data Layer (`src/ListOfOrchids.js`)

**Files:**
- Create: `src/ListOfOrchids.js`

**Interfaces:**
- Consumes: Không có (dữ liệu nguồn độc lập).
- Produces: `export const ListOfOrchids = [...]` gồm đúng 16 đối tượng hoa lan.

- [ ] **Step 1: Tạo file `src/ListOfOrchids.js` với 16 hoa lan đầy đủ thông tin chuẩn**

Tạo file `src/ListOfOrchids.js`:
```javascript
// src/ListOfOrchids.js
export const ListOfOrchids = [
  {
    id: '1',
    name: 'Moth Orchid (Phalaenopsis)',
    rating: 5,
    isSpecial: true,
    isNatural: true,
    image: '/image/1-moth-orchid.png',
    color: 'Pink & White',
    numberOfLike: 230,
    origin: 'Southeast Asia',
    category: 'Phalaenopsis'
  },
  {
    id: '2',
    name: 'Boat Orchid (Cymbidium)',
    rating: 4,
    isSpecial: false,
    isNatural: true,
    image: '/image/2-boat-orchids.png',
    color: 'Golden Yellow',
    numberOfLike: 185,
    origin: 'Vietnam',
    category: 'Cymbidium'
  },
  {
    id: '3',
    name: 'Maxillaria Orchid',
    rating: 4,
    isSpecial: false,
    isNatural: true,
    image: '/image/3-maxillaria-orchid.png',
    color: 'Deep Crimson Red',
    numberOfLike: 140,
    origin: 'Central America',
    category: 'Maxillaria'
  },
  {
    id: '4',
    name: "Lady's Slipper Orchid",
    rating: 5,
    isSpecial: true,
    isNatural: true,
    image: '/image/4-lady-slippe-orchid.png',
    color: 'Yellow & Spotted Brown',
    numberOfLike: 310,
    origin: 'Southeast Asia',
    category: 'Paphiopedilum'
  },
  {
    id: '5',
    name: 'Butterfly Orchid (Psychopsis)',
    rating: 5,
    isSpecial: true,
    isNatural: false,
    image: '/image/5-psychopsis-orchid.png',
    color: 'Bright Yellow & Chestnut',
    numberOfLike: 275,
    origin: 'South America',
    category: 'Psychopsis'
  },
  {
    id: '6',
    name: 'Dendrobium Orchid',
    rating: 4,
    isSpecial: false,
    isNatural: true,
    image: '/image/6-dendrobium-orchid.png',
    color: 'Purple & White',
    numberOfLike: 195,
    origin: 'Himalayas',
    category: 'Dendrobium'
  },
  {
    id: '7',
    name: 'Cattleya Queen Orchid',
    rating: 5,
    isSpecial: true,
    isNatural: false,
    image: '/image/7-cattleya-orchid.png',
    color: 'Magenta & Lavender',
    numberOfLike: 420,
    origin: 'Brazil',
    category: 'Cattleya'
  },
  {
    id: '8',
    name: 'Ghost Orchid (Dendrophylax)',
    rating: 5,
    isSpecial: true,
    isNatural: true,
    image: '/image/8-ghost-orchid.png',
    color: 'Translucent White',
    numberOfLike: 580,
    origin: 'Florida & Cuba',
    category: 'Dendrophylax'
  },
  {
    id: '9',
    name: 'Blue Vanda Orchid',
    rating: 5,
    isSpecial: true,
    isNatural: true,
    image: '/image/9-vanda-orchid.png',
    color: 'Royal Blue Violet',
    numberOfLike: 360,
    origin: 'Thailand',
    category: 'Vanda'
  },
  {
    id: '10',
    name: 'Zygopetalum Orchid',
    rating: 4,
    isSpecial: false,
    isNatural: true,
    image: '/image/10-zygopetalum-orchid.png',
    color: 'Spotted Purple & Green',
    numberOfLike: 160,
    origin: 'Peru',
    category: 'Zygopetalum'
  },
  {
    id: '11',
    name: 'Lady of the Night (Brassavola)',
    rating: 4,
    isSpecial: false,
    isNatural: true,
    image: '/image/11-brassavola-orchid.png',
    color: 'Greenish White',
    numberOfLike: 210,
    origin: 'Mexico',
    category: 'Brassavola'
  },
  {
    id: '12',
    name: 'Dancing Lady Orchid (Oncidium)',
    rating: 4,
    isSpecial: false,
    isNatural: false,
    image: '/image/12-oncidium-orchid.png',
    color: 'Canary Yellow',
    numberOfLike: 245,
    origin: 'Central America',
    category: 'Oncidium'
  },
  {
    id: '13',
    name: 'Crucifix Orchid (Epidendrum)',
    rating: 3,
    isSpecial: false,
    isNatural: true,
    image: '/image/13-epidendrum-orchid.png',
    color: 'Vibrant Orange-Red',
    numberOfLike: 135,
    origin: 'Colombia',
    category: 'Epidendrum'
  },
  {
    id: '14',
    name: 'Odontoglossum Orchid',
    rating: 4,
    isSpecial: false,
    isNatural: true,
    image: '/image/14-odontoglossum-orchid.png',
    color: 'Tiger Striped Bronze',
    numberOfLike: 170,
    origin: 'Andes Mountains',
    category: 'Odontoglossum'
  },
  {
    id: '15',
    name: "Nun's Orchid (Phaius)",
    rating: 4,
    isSpecial: false,
    isNatural: true,
    image: '/image/15-phaius-orchid.png',
    color: 'Copper Brown & Violet',
    numberOfLike: 155,
    origin: 'Madagascar',
    category: 'Phaius'
  },
  {
    id: '16',
    name: 'Jewel Orchid (Ludisia Discolor)',
    rating: 5,
    isSpecial: true,
    isNatural: true,
    image: '/image/16-ludisia-orchid.png',
    color: 'Velvet Black & Pinstripe Red',
    numberOfLike: 490,
    origin: 'Southeast Asia',
    category: 'Ludisia'
  }
];

export default ListOfOrchids;
```

---

### Task 2: Xây dựng Presentation Component (`src/components/OrchidCard.jsx`)

**Files:**
- Create: `src/components/OrchidCard.jsx`
- Reference: `src/components/MyCards.jsx`

**Interfaces:**
- Consumes: `orchid` object thông qua `props` (`{ orchid }`).
- Produces: Thẻ React-Bootstrap Card đẹp mắt với đầy đủ badges, sao đánh giá và thông tin.

- [ ] **Step 1: Viết mã nguồn Component `OrchidCard.jsx`**

Tạo file `src/components/OrchidCard.jsx`:
```jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export default function OrchidCard({ orchid }) {
  const {
    name,
    image,
    rating,
    isSpecial,
    isNatural,
    color,
    numberOfLike,
    origin,
    category
  } = orchid;

  // Tạo chuỗi sao vàng dựa trên rating
  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <Card className="h-100 orchid-card shadow-sm border-0 position-relative overflow-hidden">
      {/* Huy hiệu Special góc trên bên phải */}
      {isSpecial && (
        <Badge
          bg="danger"
          className="position-absolute top-0 end-0 m-2 px-2 py-1 shadow"
          style={{ zIndex: 2, fontSize: '0.75rem', letterSpacing: '0.5px' }}
        >
          SPECIAL ★
        </Badge>
      )}

      {/* Huy hiệu Nguồn gốc (Tự nhiên / Lai tạo) góc trên bên trái */}
      <Badge
        bg={isNatural ? 'success' : 'secondary'}
        className="position-absolute top-0 start-0 m-2 px-2 py-1 shadow"
        style={{ zIndex: 2, fontSize: '0.75rem' }}
      >
        {isNatural ? 'Tự nhiên' : 'Lai tạo'}
      </Badge>

      {/* Ảnh hoa lan với hiệu ứng zoom nhẹ khi hover */}
      <div className="orchid-img-wrapper" style={{ height: '220px', overflow: 'hidden' }}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          className="orchid-img w-100 h-100"
          style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
          loading="lazy"
        />
      </div>

      <Card.Body className="d-flex flex-column p-3">
        <div className="d-flex justify-content-between align-items-start mb-1">
          <Badge bg="light" text="dark" className="border text-uppercase" style={{ fontSize: '0.7rem' }}>
            {category}
          </Badge>
          <span className="text-warning fw-bold fs-6" title={`${rating}/5 sao`}>
            {renderStars(rating)}
          </span>
        </div>

        <Card.Title className="fw-bold fs-5 mb-1 text-truncate" title={name}>
          {name}
        </Card.Title>

        <Card.Subtitle className="mb-3 text-muted small">
          <i className="bi bi-geo-alt"></i> Xuất xứ: {origin}
        </Card.Subtitle>

        <Card.Text className="flex-grow-1 small text-secondary mb-3">
          <div className="d-flex justify-content-between py-1 border-bottom">
            <span>Màu sắc:</span>
            <span className="fw-semibold text-dark">{color}</span>
          </div>
          <div className="d-flex justify-content-between py-1 border-bottom">
            <span>Lượt thích:</span>
            <span className="fw-semibold text-danger">❤️ {numberOfLike.toLocaleString()}</span>
          </div>
        </Card.Text>

        <Button variant="outline-success" className="w-100 fw-semibold mt-auto shadow-sm">
          Xem Chi Tiết
        </Button>
      </Card.Body>
    </Card>
  );
}
```

- [ ] **Step 2: Thêm style CSS hover cho thẻ `orchid-card` trong `src/App.css`**

Chỉnh sửa hoặc bổ sung vào `src/App.css`:
```css
/* Hiệu ứng thẻ hoa lan */
.orchid-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border-radius: 12px;
}

.orchid-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12) !important;
}

.orchid-card:hover .orchid-img {
  transform: scale(1.08);
}
```

- [ ] **Step 3: Chạy build kiểm tra cú pháp**

Run command:
```powershell
npm run build
```
Expected output: Build thành công không có lỗi JSX/syntax.

---

### Task 3: Xây dựng Container Component (`src/components/Orchids.jsx`)

**Files:**
- Create: `src/components/Orchids.jsx`

**Interfaces:**
- Consumes: Mảng `ListOfOrchids` từ `../ListOfOrchids.js` và component `OrchidCard` từ `./OrchidCard.jsx`.
- Produces: Export default `Orchids` component bọc trong Bootstrap `Container`, render 16 thẻ theo Grid responsive (`Row`, `Col`).

- [ ] **Step 1: Viết mã nguồn Component `Orchids.jsx`**

Tạo file `src/components/Orchids.jsx`:
```jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListOfOrchids } from '../ListOfOrchids';
import OrchidCard from './OrchidCard';

export default function Orchids() {
  return (
    <section className="py-5 bg-light min-vh-100">
      <Container>
        {/* Tiêu đề & Giới thiệu danh mục */}
        <div className="text-center mb-5">
          <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-semibold mb-2">
            FER202 - Lab 1: React Components
          </span>
          <h1 className="fw-bold text-dark display-6 mt-2">
            Bộ Sưu Tập Hoa Lan Quý Hiếm
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '650px' }}>
            Khám phá 16 loài hoa lan đặc sắc trên thế giới được xây dựng theo mô hình 
            <strong> Container & Presentation Components</strong>.
          </p>
        </div>

        {/* Lưới Grid 16 loài hoa lan */}
        <Row className="g-4">
          {ListOfOrchids.map((orchid) => (
            <Col key={orchid.id} xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <OrchidCard orchid={orchid} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Chạy build kiểm tra tích hợp giữa Orchids và OrchidCard**

Run command:
```powershell
npm run build
```
Expected output: Build hoàn thành không phát sinh lỗi.

---

### Task 4: Tích hợp vào Ứng dụng chính (`src/App.jsx`) và Hoàn thiện Giao diện

**Files:**
- Modify: `src/App.jsx`
- Reference: `src/components/MyNavBar.jsx`

**Interfaces:**
- Consumes: `Orchids` từ `./components/Orchids` và `MyNavBar` từ `./components/MyNavBar`.
- Produces: Ứng dụng hoàn chỉnh sẵn sàng cho việc chấm điểm Lab 1.

- [ ] **Step 1: Cập nhật `src/App.jsx` để hiển thị trang Lab 1 chuẩn**

Cập nhật nội dung `src/App.jsx`:
```jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Orchids from './components/Orchids';

export default function App() {
  return (
    <div className="app-wrapper d-flex flex-column min-vh-100">
      {/* Header Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-success d-flex align-items-center gap-2">
            <span>🌸</span>
            <span>Orchid Paradise</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" active>Trang Chủ</Nav.Link>
              <Nav.Link href="#catalog">Bộ Sưu Tập (16)</Nav.Link>
              <Nav.Link href="#about">Về Chúng Tôi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content: Orchids Container Component */}
      <main className="flex-grow-1" id="catalog">
        <Orchids />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-secondary py-4 text-center mt-auto border-top border-secondary">
        <Container>
          <p className="mb-1 text-light">FER202 - Lab 1: React Components Showcase</p>
          <small>© 2026 Orchid Paradise. All rights reserved.</small>
        </Container>
      </footer>
    </div>
  );
}
```

- [ ] **Step 2: Chạy lệnh build kiểm tra toàn bộ dự án**

Run command:
```powershell
npm run build
```
Expected output:
```
vite v8.x.x building for production...
✓ built in xxx ms
```

- [ ] **Step 3: Chạy dev server và kiểm tra giao diện trên trình duyệt**

Run command:
```powershell
npm run dev
```
Xác nhận:
1. Giao diện hiển thị đúng 16 thẻ hoa lan theo dạng lưới 4 cột trên desktop.
2. Mỗi thẻ có ảnh, huy hiệu `Special` / `Tự nhiên` / `Lai tạo`, số sao vàng, lượt thích và tên hoa.
3. Không có lỗi `missing key` hoặc cảnh báo trong DevTools Console.
