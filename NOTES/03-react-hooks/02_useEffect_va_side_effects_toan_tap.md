# 📖 Chuyên Đề: `useEffect` & Side Effects Trong React (Toàn Tập)

> **Môn học:** FER202 - Front-End Web Development with React  
> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  
> **Tài liệu tham khảo chính thức:** [react.dev/learn/synchronizing-with-effects](https://react.dev/learn/synchronizing-with-effects)

---

## 🎯 1. BẢN CHẤT CỦA `useEffect` LÀ GÌ?

Trong React, một component phải là một **hàm thuần khiết (Pure Function)**: chỉ nhận `props`, tính toán và trả về mã JSX giao diện.

Tuy nhiên, trong thực tế ta luôn cần:
* Gọi API lấy danh sách bài hát/sản phẩm từ server.
* Thiết lập bộ đếm thời gian (`setInterval`, `setTimeout`).
* Lắng nghe sự kiện bàn phím/chuột (`window.addEventListener`).
* Đổi tiêu đề tab trình duyệt (`document.title = "Trang chủ"`).

👉 Tất cả những việc trên được gọi là **Side Effects** (Tác vụ phụ ngoài luồng render giao diện).  
👉 **`useEffect` sinh ra để cho phép chúng ta thực thi các Side Effects đúng thời điểm mà không làm gián đoạn hay treo việc render giao diện.**

---

## ⚙️ 2. CƠ CHẾ HOẠT ĐỘNG CỦA DEPENDENCY ARRAY `[]`

Cú pháp:
```javascript
useEffect(() => {
  // Thực thi tác vụ Side Effect ở đây
}, [dependencies]);
```

### 3 Trường Hợp Cần Nhớ Như In:

```text
1. Không có mảng dependencies:
   useEffect(() => { ... })
   👉 Chạy sau MỌI LẦN component render (Rất nguy hiểm, dễ gây lặp vô tận).

2. Mảng rỗng []:
   useEffect(() => { ... }, [])
   👉 Chạy ĐÚNG 1 LẦN DUY NHẤT sau khi component hiển thị lần đầu lên màn hình (Mounting).
   👉 Đây là trường hợp 99% dùng khi đi thi PE (để fetch danh sách từ MockAPI).

3. Mảng có chứa biến [prop, state]:
   useEffect(() => { ... }, [songId])
   👉 Chạy lần đầu, và TỰ ĐỘNG CHẠY LẠI mỗi khi giá trị `songId` thay đổi.
   👉 Dùng cho trang Xem chi tiết (Detail) hoặc Tìm kiếm (Search).
```

---

## 💻 3. MẪU CODE CHUẨN KHI GỌI API VỚI AXIOS

> [!IMPORTANT]
> **Không thể đặt từ khóa `async` trực tiếp lên hàm của `useEffect`!**  
> ❌ Sai: `useEffect(async () => { ... }, [])`  
> ✅ Đúng: Viết một hàm `async` bên trong rồi gọi nó ngay sau đó!

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MusicList() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Khai báo hàm async bên trong Effect
    const fetchMusic = async () => {
      try {
        setLoading(true);
        // Đọc URL từ file .env (chuẩn quy định thi PE)
        const response = await axios.get(import.meta.env.VITE_API_URL);

        // 2. Sắp xếp dữ liệu (Ví dụ: sắp xếp tên bài hát A-Z)
        const sortedData = [...response.data].sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        // 3. Đưa dữ liệu vào State
        setSongs(sortedData);
      } catch (err) {
        console.error('Lỗi API:', err);
        setError('Không thể tải danh sách bài hát!');
      } finally {
        setLoading(false);
      }
    };

    // 4. Kích hoạt hàm
    fetchMusic();
  }, []); // [] đảm bảo chỉ gọi API 1 lần

  if (loading) return <p className="text-center mt-4">Đang tải dữ liệu...</p>;
  if (error) return <p className="text-danger text-center mt-4">{error}</p>;

  return (
    <div>
      {songs.map(song => (
        <div key={song.id}>{song.title}</div>
      ))}
    </div>
  );
}
```

---

## 🧹 4. HÀM DỌN DẸP (CLEANUP FUNCTION) - KHI NÀO CẦN?

Nếu Effect của bạn có tạo ra bộ đếm hoặc lắng nghe sự kiện, khi component bị biến mất (Unmount), bạn phải **dọn dẹp** để tránh rò rỉ bộ nhớ (Memory Leak):

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tích tắc...');
  }, 1000);

  // Return một hàm dọn dẹp:
  return () => {
    clearInterval(timer); // Xóa bộ đếm khi rời trang
  };
}, []);
```

---

## 🔗 5. BÀI ĐỌC NÂNG CAO TRÊN REACT.DEV
* 📘 [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects) - Khái niệm cơ bản & minh họa trực quan.
* 📘 [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) - Hướng dẫn cách tránh dùng Effect thừa.
* 📘 [Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects) - Tìm hiểu sâu về Reactive Values.
