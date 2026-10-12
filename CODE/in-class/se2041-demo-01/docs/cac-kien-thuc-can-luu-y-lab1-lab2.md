# 🎓 CÁC KIẾN THỨC CẦN LƯU Ý (LAB 1 & LAB 2)

> **Môn học:** FER202 - Front-End Web Development with React  
> **Dự án thực hành:** `se2041-demo-01` (Orchid Store)  
> **Sinh viên:** Nguyễn Phạm Xuân Nhi — **MSSV:** SE201170  

---

## 🗺️ TIẾN ĐỘ HỌC TẬP REACT.DEV CHO LAB 1 & LAB 2

* 🏆 **ĐÃ HOÀN THÀNH 100% TOÀN BỘ KIẾN THỨC CỐT LÕI CHO CẢ LAB 1 VÀ LAB 2 (10/10 BÀI TRỌNG TÂM):**  
  1. `Your First Component` ✅  
  2. `Importing and Exporting Components` ✅  
  3. `Writing Markup with JSX` ✅  
  4. `JavaScript in JSX with Curly Braces` ✅  
  5. `Passing Props to a Component` ✅  
  6. `Conditional Rendering` ✅  
  7. `Rendering Lists` ✅  
  8. `Responding to Events` ✅  
  9. `State: A Component's Memory` ✅  
  10. `State as a Snapshot` ✅  

* 💡 **Bài nâng cao / Lý thuyết vấn đáp (Đã tích hợp sẵn):**  
  * `Queueing a Series of State Updates`: Cả 2 bài Lab không cần dùng đến, nhưng đã được tổng hợp lý thuyết trọn vẹn tại **Câu 15 (Phân biệt `setCount(count + 1)` vs `setCount(prev => prev + 1)`)** để bạn tự tin trả lời nếu thầy cô hỏi mở rộng!  
  * ✅ **Đã giải mã xong lỗi vòng lặp vô tận (Infinite loop `Too many re-renders`)** tại **Câu 13 mục 3**!  


* 📖 **Các bài đọc lướt / để dành Lab sau:**  
  * `Keeping Components Pure`, `Your UI as a Tree` *(Đọc hiểu triết lý)*  
  * `Render and Commit` *(Đã tóm tắt trọn vẹn ở Câu 1)*  
  * `Updating Objects / Arrays in State` *(Dành cho thêm/xóa/sửa hoa ở Lab 3/4 & thi PE)*  

---

## 📌 PHẦN 1: CÁC KIẾN THỨC CẦN LƯU Ý LAB 1 (RENDER HTML, JSX, COMPONENTS & PROPS)


### ❓ Câu 1: "Render HTML" là gì? Khác biệt giữa Render truyền thống và Render trong React (SPA)?
* **Khái niệm cốt lõi:**  
  **Render HTML** là quá trình chuyển đổi **mã nguồn** (thẻ HTML, dữ liệu, hoặc code JSX/JS) thành **giao diện trực quan thực tế (cây DOM & điểm ảnh - pixel)** hiển thị trên màn hình trình duyệt để người dùng nhìn thấy và tương tác được.
* **Ẩn dụ dễ nhớ:**  
  * **Code JSX / Dữ liệu:** Là bản vẽ thiết kế trên giấy.  
  * **Quá trình Render:** Là đội thợ xây dựng bắt đầu thi công theo bản vẽ.  
  * **Giao diện trên màn hình:** Là ngôi nhà thật hoàn thiện.
* **So sánh Web truyền thống vs React (SPA):**
  * **Web truyền thống (HTML thuần):** Server gửi về file `.html` hoàn chỉnh với hàng nghìn dòng. Trình duyệt parse từ trên xuống. Mỗi lần đổi dữ liệu hay đổi trang đều phải tải lại (Reload) toàn bộ trang $\rightarrow$ màn hình bị chớp trắng.
  * **React (Single Page Application):** File `index.html` chỉ có duy nhất một thẻ rỗng: `<div id="root"></div>`. React dùng JavaScript để "bơm" (inject) giao diện vào thẻ này. Khi dữ liệu đổi, chỉ cập nhật đúng phần tử thay đổi mà không reload trang.
* **Quy trình 3 bước Render trong React:**
  1. **Trigger:** Kích hoạt khi ứng dụng mở lần đầu (*Initial Render*) hoặc khi State đổi (`setCount`, `setSelectedOrchid`).
  2. **Render:** React gọi hàm Component, tính toán và tạo cây **Virtual DOM** trong RAM để so sánh (diffing) với bản cũ.
  3. **Commit & Paint:** Thư viện `react-dom` áp dụng thay đổi vào cây DOM thật và trình duyệt vẽ các pixel lên màn hình.
* **Khái niệm Re-render:** Là khi component **đã xuất hiện trên màn hình rồi**, nhưng một **State** hoặc **Props** bị thay đổi, React sẽ tự động gọi lại hàm component đó để vẽ lại giao diện mới với dữ liệu cập nhật.

---

### ❓ Câu 2: JSX là gì? Tại sao lại gọi là JavaScript XML (XML) mà không phải JavaScript HTML (JSH)?
* **Khái niệm:**  
  **JSX (JavaScript XML)** là phần mở rộng cú pháp (Syntax Extension) của JavaScript, cho phép viết các thẻ mô tả giao diện giống hệt HTML lồng ngay bên trong code JavaScript.  
  *Bản chất:* Trình duyệt không hiểu JSX. Trình biên dịch (Vite / Babel / SWC) sẽ dịch JSX sang các hàm JavaScript thuần: `React.createElement(...)`.
* **Tại sao lại gọi là XML mà không gọi là HTML? (3 lý do cốt lõi):**
  1. **Tính mở rộng (Extensible - Chữ 'X' trong XML):**
     * Trong chuẩn HTML, bạn chỉ được dùng các thẻ cố định do W3C quy định sẵn (`<div>`, `<p>`, `<img>`...). Bạn không thể tự tiện chế ra thẻ mới.
     * Trong chuẩn XML, người dùng được **toàn quyền tự định nghĩa thẻ riêng**. JSX thừa hưởng tính chất này: bạn tự tạo các thẻ Component riêng như `<OrchidCard />`, `<MyNavBar />` và nhúng vào sử dụng.
  2. **Tuân thủ quy tắc cú pháp cực kỳ nghiêm ngặt của XML (Strict Rules):**
     * **HTML rất dễ dãi:** Quên đóng thẻ `<img>`, `<input>`, `<br>` thì HTML vẫn chạy; viết chữ hoa chữ thường lẫn lộn (`<DIV>`, `<div>`) trình duyệt vẫn tha thứ.
     * **XML (và JSX) cực kỳ nghiêm ngặt:**
       * *Bắt buộc phải đóng mọi thẻ:* Các thẻ đơn bắt buộc phải có dấu tự đóng (`<img />`, `<input />`, `<br />`). Quên là báo lỗi ngay!
       * *Bắt buộc có duy nhất 1 thẻ cha bao bọc (Single Root Element):* Tài liệu XML chỉ có 1 thẻ root duy nhất. Do đó, hàm Component chỉ được return về đúng 1 thẻ ngoài cùng (hoặc thẻ ảo React Fragment `<>...</>`).
       * *Phân biệt hoa - thường (Case-sensitive):* XML phân biệt rõ chữ hoa và thường để tách bạch thẻ HTML chuẩn (`<button>`) và React Component (`<Button>`).
  3. **Độ an toàn (Type Safety & Tree Structure):**
     Cú pháp dạng cây phân cấp chặt chẽ của XML giúp công cụ biên dịch dễ dàng phân tích cú pháp (parse), phát hiện lỗi sai cú pháp ngay lúc viết code và phòng chống lỗi bảo mật XSS (Cross-Site Scripting).

* 💡 **Hỏi đáp thực tế: Khi chỉ có 1 thẻ duy nhất (ví dụ mỗi thẻ `<img />`), có bắt buộc dùng Fragment `<>...</>` không?**
  * **Câu trả lời: HOÀN TOÀN KHÔNG BẮT BUỘC (DƯ THỪA)!**
    * Khi component chỉ trả về đúng 1 thẻ duy nhất, bạn chỉ cần viết thẳng:
      ```jsx
      return <img src="https://react.dev/.../photo.jpg" alt="Scientist" />;
      ```
    * Viết thêm `<> <img /> </>` vẫn chạy bình thường vì Fragment là thẻ ảo (vô hại, không sinh ra thẻ thật ngoài HTML), nhưng công cụ kiểm tra code (ESLint) sẽ nhắc nhở là dư thừa (*useless fragment*).
  * **Vậy tại sao trong tài liệu mẫu người ta lại viết `<> <img /> </>`?**
    1. **Dọn đường sẵn (Future-proofing):** Người viết chuẩn bị thêm các thẻ khác bên dưới (như `<h1>`, `<ul>`) mà không sợ bị báo lỗi.
    2. **Thói quen dùng phím tắt (Snippet):** Khi gõ tắt tạo component (`rfc`), mẫu tự sinh ra sẵn `<>...</>` và lập trình viên chỉ việc paste thẻ `<img>` vào giữa mà lười xóa.
  * **KHI NÀO MỚI BẮT BUỘC DÙNG FRAGMENT?**
    * Chỉ bắt buộc khi có **từ 2 thẻ đồng cấp trở lên** (ví dụ: 1 ảnh `<img>` + 1 đoạn văn `<p>`). Bọc bằng `<>...</>` giúp thỏa mãn luật "1 thẻ cha duy nhất" mà **không làm phát sinh thẻ `<div>` rác**, tránh làm hỏng hệ thống layout CSS Flexbox hoặc Bootstrap Grid.
  * **TẠI SAO GỌI LÀ "THẺ ẢO" VÀ CÓ MẤY CÁCH VIẾT?**
    * **Bản chất "thẻ ảo":** Khác với thẻ `<div>` (trình duyệt sẽ tạo ra 1 nút HTML thật trên cây DOM), thẻ Fragment chỉ đóng vai trò như một "chiếc túi tàng hình" để gom các thẻ con lúc viết code JSX. Khi React render ra HTML trên trình duyệt, chiếc túi này **tự động biến mất không dấu vết**, các thẻ con được gắn thẳng vào phần tử cha.
    * **2 cách viết Fragment:**
      1. *Cách viết tắt (Short Syntax):* `<> ... </>` (tiện lợi, phổ biến nhất).
      2. *Cách viết đầy đủ:* `<React.Fragment> ... </React.Fragment>`.
    * **⭐ Câu hỏi vấn đáp tủ của thầy: Khi nào BẮT BUỘC phải viết đầy đủ `<React.Fragment>` mà KHÔNG ĐƯỢC dùng viết tắt `<>`?**
      👉 **Trả lời:** Khi duyệt mảng bằng `.map()` mà cần truyền thuộc tính **`key`**! Cú pháp viết tắt `< key={item.id} >` là cú pháp không hợp lệ (báo lỗi ngay). Chỉ có cú pháp đầy đủ mới nhận được thuộc tính:
      ```jsx
      {items.map(item => (
        <React.Fragment key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </React.Fragment>
      ))}
      ```


* 💡 **Bẫy cú pháp kinh điển: Vì sao 'return' có 1 dòng thì phải viết ngang hàng, nếu xuống dòng thì BẮT BUỘC phải bọc trong ngoặc tròn `( )`?**
  * **Thủ phạm: Cơ chế ASI (Automatic Semicolon Insertion) của JavaScript:**
    * JavaScript có một tính năng tự động: Khi phát hiện từ khóa `return` đứng một mình ở cuối dòng rồi ngắt dòng, JavaScript sẽ **tự động chèn thêm dấu chấm phẩy `;` ngay sau chữ `return`**.
    * Nếu bạn viết thế này:
      ```jsx
      // ❌ LỖI TRẮNG MÀN HÌNH:
      return 
        <img src="..." />
      
      // 👉 JavaScript sẽ tự động dịch ngầm thành:
      return; // <-- Trả về undefined ngay tại đây!
      <img src="..." /> // <-- Dòng này bị coi là rác (unreachable code), không bao giờ chạy tới!
      ```
  * **2 cách khắc phục chuẩn:**
    * **Cách 1 (Viết ngang hàng):** `return <img src="..." />;` (chỉ phù hợp khi code ngắn 1 dòng).
    * **Cách 2 (Bọc trong ngoặc tròn `( )`):**
      ```jsx
      // ✅ Chuẩn nhất khi xuống dòng:
      return (
        <img src="..." />
      );
      ```
      *Vì dấu mở ngoặc `(` nằm cùng hàng với `return`, JavaScript hiểu rằng câu lệnh chưa kết thúc và sẽ KHÔNG tự chèn dấu `;`, cho phép bạn thoải mái xuống dòng và thụt lề sạch đẹp.*

---

### ❓ Câu 3: Vì sao React gom chung Giao diện (HTML) và Logic (JS) vào một nơi? Ba quy tắc "bất di bất dịch" khi chuyển từ HTML sang JSX?
* **1. Triết lý vì sao React gom Markup và Logic vào Component:**
  * **Ngày xưa:** HTML (nội dung), CSS (thiết kế), JS (logic) tách riêng ở 3 file độc lập.
  * **Thực tế ngày nay:** Web hiện đại mang tính tương tác rất cao, chính JavaScript quyết định nội dung nào được hiển thị. Khi gom Logic và Giao diện vào cùng một Component (ví dụ `OrchidCard.jsx`), mỗi lần sửa đổi ta đảm bảo code luôn **đồng bộ (in sync)** và cô lập lỗi, sửa phần này không sợ làm hỏng phần khác.
  * *Lưu ý:* **JSX và React là hai thực thể độc lập.** JSX là phần mở rộng cú pháp, còn React là thư viện JavaScript.
* **2. Ba quy tắc sống còn khi chuyển từ HTML sang JSX:**
  1. **Bắt buộc chỉ trả về DUY NHẤT 1 thẻ cha (Return a single root element):**
     * Muốn return nhiều thẻ, bắt buộc phải bọc chúng trong một thẻ cha (như `<div>...</div>` hoặc thẻ ảo Fragment `<>...</>`).
     * *Tại sao?* Vì JSX dưới hậu trường được dịch thành hàm JS thuần: `React.createElement(...)`. Trong JavaScript, một lệnh `return` **không thể trả về cùng lúc 2 giá trị độc lập** nếu không gom vào một đối tượng bọc ngoài.
  2. **Bắt buộc phải đóng tất cả các thẻ (Close all the tags):**
     * HTML cho phép quên đóng thẻ, nhưng JSX thì không.
     * Thẻ đơn bắt buộc phải tự đóng: `<img>` $\rightarrow$ `<img />`, `<input>` $\rightarrow$ `<input />`, `<br>` $\rightarrow$ `<br />`.
     * Thẻ cặp bắt buộc phải đóng đủ: `<li>cam` $\rightarrow$ `<li>cam</li>`.
  3. **Đặt tên thuộc tính theo chuẩn camelCase (camelCase most of the things):**
     * Trong JSX, các thuộc tính sẽ trở thành **keys của Object JavaScript**. Do JS không cho phép tên biến chứa dấu gạch ngang hoặc trùng từ khóa bảo lưu (reserved words), nên:
       * `class` trong HTML $\rightarrow$ đổi thành **`className`** (vì `class` là từ khóa khai báo Class của JS).
       * `for` trong HTML (như `<label for="...">`) $\rightarrow$ đổi thành **`htmlFor`** (vì `for` là vòng lặp của JS).
       * `stroke-width` $\rightarrow$ **`strokeWidth`**, `tabindex` $\rightarrow$ **`tabIndex`**.
     * ⚠️ **Ngoại lệ (Pitfall):** Các thuộc tính bắt đầu bằng `data-*` (như `data-bs-theme="dark"` trong bài Lab 2) và `aria-*` vẫn giữ nguyên dấu gạch ngang vì lý do tương thích lịch sử.
       * 💡 **Giải nghĩa từ khóa `data-bs-theme` viết tắt của gì?**
         * **`data-`**: Tiền tố quy chuẩn của HTML5 cho phép lập trình viên định nghĩa thuộc tính dữ liệu tùy biến (*Custom Data Attribute*).
         * **`bs`**: Viết tắt của **Bootstrap** (thư viện giao diện CSS phổ biến).
         * **`theme`**: Chủ đề màu sắc hiển thị (nhận 2 giá trị `'light'` hoặc `'dark'`).
         * 👉 **Cơ chế thần thánh trong Lab 2:** Từ phiên bản Bootstrap 5.3 trở lên, chỉ cần gán `data-bs-theme="dark"` lên thẻ `<body>` (thực hiện qua hook `useTheme.js`: `document.body.setAttribute('data-bs-theme', theme)`), toàn bộ các component Bootstrap (`Navbar`, `Card`, `Modal`) sẽ **tự động chuyển sang chế độ nền tối chữ sáng** mà không cần phải viết CSS thủ công.

---

### ❓ Câu 4: Cặp ngoặc nhọn `{ }` trong JSX có vai trò gì? Bản chất của cú pháp "ngoặc đôi" `{{ }}` và lỗi kinh điển "Objects are not valid as a React child"?
* **1. Cặp ngoặc nhọn `{ }` là gì?**
  * Trong JSX, cặp ngoặc nhọn `{ }` đóng vai trò là một **"chiếc cửa sổ mở vào thế giới JavaScript" (A window into JavaScript)**.
  * Khi gặp `{ }`, React sẽ tạm dừng đọc JSX và chuyển sang tính toán biểu thức JavaScript nằm bên trong.
  * **2 vị trí DUY NHẤT được phép dùng `{ }` trong JSX:**
    1. *Nội dung văn bản bên trong thẻ:* `<h1>{orchid.name}</h1>`, `{orchid.rating} ⭐`.
    2. *Giá trị thuộc tính sau dấu bằng `=`:* `<img src={orchid.image} alt={orchid.name} />`.
    * ⚠️ **Bẫy thường gặp:** Không bọc ngoặc nhọn vào tên thẻ: `<{tag}>` ❌; và không bọc dấu nháy kép ngoài ngoặc: `src="{orchid.image}"` ❌ (lúc này biến bị biến thành chuỗi text thuần túy!).
* **2. Bí mật của cú pháp "ngoặc đôi" `{{ }}`:**
  * Nhiều người lầm tưởng `{{ }}` là một cú pháp đặc biệt của React, nhưng **thực tế KHÔNG PHẢI**!
  * Nó chỉ đơn giản là: **Cặp ngoặc nhọn ngoài cùng `{ }` của JSX** bao bọc lấy một **JavaScript Object `{ ... }` bên trong**!
    ```jsx
    // Ngoặc ngoài cùng: Cửa sổ JSX
    // Ngoặc bên trong: Đối tượng JavaScript Object
    <div style={{ backgroundColor: 'black', color: 'pink' }} />
    ```
  * Thuộc tính CSS trong `style` bắt buộc phải viết dưới dạng **camelCase** (`backgroundColor`, `borderRadius`).
* **3. Lỗi kinh điển: "Objects are not valid as a React child":**
  * **Nguyên nhân:** Khi bạn cố tình nhét nguyên cả một Object vào giữa 2 thẻ JSX:
    ```jsx
    const person = { name: 'Xuân Nhi', age: 20 };
    return <h1>{person}</h1>; // 💥 CRASH NGAY LẬP TỨC!
    ```
  * **Giải thích:** React không biết bạn muốn hiển thị đối tượng này thành hình hài gì. React chỉ cho phép render trực tiếp: chuỗi (string), số (number), mảng JSX, hoặc boolean/null/undefined (không hiển thị gì).
  * **Cách sửa:** Luôn trỏ vào thuộc tính cụ thể: `<h1>{person.name}</h1>`.

---

### ❓ Câu 5: Conditional Rendering (Render có điều kiện) là gì? 4 cách viết trong React và bẫy "vô tình in số 0" với toán tử `&&`?
* **1. Khái niệm cốt lõi:**  
  Trong React, **Conditional Rendering** là kỹ thuật hiển thị giao diện JSX khác nhau dựa trên các điều kiện logic (biến boolean, dữ liệu có hay không).
* **2. Bốn cách viết phổ biến trong React:**
  1. **Câu lệnh `if / else` và `return` sớm:**
     * Trả về giao diện khác nhau hoặc `return null;` nếu muốn **ẩn hoàn toàn component** (không hiển thị gì ra màn hình).
  2. **Toán tử 3 ngôi (Ternary Operator) `condition ? <A /> : <B />`:**
     * Dùng khi có 2 trạng thái đối lập (Đúng thì vẽ A, Sai thì vẽ B).
     * *Ví dụ trong bài Lab Hoa Lan:*  
       `{orchid.isNatural ? "Hoa Tự Nhiên" : "Hoa Lai Tạo"}`
  3. **Toán tử logic AND `condition && <A />`:**
     * Dùng khi chỉ muốn hiển thị A nếu ĐÚNG, còn SAI thì **không vẽ gì cả**.
     * *Ví dụ trong bài Lab Hoa Lan:*  
       * `{orchid.isSpecial && <Badge bg="danger">Special ⭐</Badge>}` *(chỉ hiện huy hiệu khi là hoa đặc biệt)*.
       * `{selectedOrchid && <OrchidDetailModal show={true} ... />}` *(chỉ bật Modal khi có hoa được chọn)*.
  4. **Gán JSX vào một biến (`let itemContent`):**
     * Dùng khi điều kiện quá phức tạp, nhiều nhánh logic. Tính toán biến xong nhét `{itemContent}` vào JSX.
* **3. ⚠️ Bẫy kinh điển: Không đặt số ở vế trái của toán tử `&&`:**
  * **Đoạn code sai lầm:**
    ```jsx
    const messageCount = 0;
    return <div>{messageCount && <p>Bạn có tin nhắn mới</p>}</div>;
    ```
  * **Hậu quả:** Trên màn hình sẽ **vô tình in ra đúng số `0`** thay vì ẩn đi!  
  * **Lý do:** Trong JavaScript, biểu thức `0 && ...` sẽ trả về ngay giá trị falsy của nó là con số `0`. Và React thì render số `0` như một nội dung bình thường!
  * **Cách sửa chuẩn:** Luôn ép vế trái về kiểu boolean:
    * `messageCount > 0 && <p>Bạn có tin nhắn mới</p>`
    * Hoặc: `Boolean(messageCount) && <p>Bạn có tin nhắn mới</p>`
    * Hoặc dùng toán tử 3 ngôi: `messageCount ? <p>Bạn có tin nhắn mới</p> : null`

---

### ❓ Câu 6: Vì sao lại cần có Component? Bản chất là gì và tại sao tên Component bắt buộc phải viết hoa (PascalCase)?
* **Vì sao cần Component? (Giải quyết 3 nỗi đau của HTML truyền thống):**
  1. **Tái sử dụng (Reusability):** Viết mẫu thẻ Card (`OrchidCard.jsx`) đúng 1 lần duy nhất, tái sử dụng cho 16 bông hoa hay hàng nghìn sản phẩm bằng `.map()`.
  2. **Dễ bảo trì & Sửa lỗi (Maintainability):** Code được chia thành từng khối Lego độc lập. Sửa Navbar thì mở `MyNavBar.jsx`, sửa Card thì mở `OrchidCard.jsx`, tuyệt đối không làm ảnh hưởng hay gãy layout của các phần khác.
  3. **Quản lý trạng thái độc lập (Isolation):** Bấm thích hay chọn xem chi tiết ở Card này thì chỉ Card này phản hồi, không gây xung đột tới Card khác.
* **Bản chất kỹ thuật:** Component trong React thực chất chỉ là một **hàm JavaScript (Function)** nhận vào tham số (Props) và trả về giao diện viết bằng cú pháp **JSX**.
* **Lý do bắt buộc viết hoa chữ cái đầu (PascalCase):**
  * React dựa vào quy ước đặt tên để phân biệt:
    * **Thẻ HTML có sẵn** quy ước viết **chữ thường** (`<div>`, `<h1>`, `<p>`, `<span>`).
    * **Component do lập trình viên tự tạo** bắt buộc viết **chữ in hoa** (`<OrchidCard />`, `<MyNavBar />`).
  * Nếu viết chữ thường (ví dụ: `<orchidCard />`), React sẽ tưởng đây là thẻ HTML lạ chưa được hỗ trợ và bỏ qua hoặc báo lỗi biên dịch.

---

### ❓ Câu 7: Vì sao KHÔNG ĐƯỢC khai báo Component lồng bên trong một Component khác (Nested Component Definition)?
* **Đoạn code sai lầm (Anti-pattern):**
  ```jsx
  // ❌ SAI LẦM NGUY HIỂM: Khai báo hàm con bên trong hàm cha
  function App() {
    const [count, setCount] = useState(0);

    // Định nghĩa component con ngay trong App:
    function ChildInput() {
      return <input placeholder="Nhập tên hoa..." />;
    }

    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Bấm: {count}</button>
        <ChildInput />
      </div>
    );
  }
  ```
* **Cơ chế gây lỗi nghiêm trọng (3 thảm họa):**
  1. **Tham chiếu hàm mới trong RAM:** Mỗi khi `App` đổi state (`count` tăng) $\rightarrow$ `App` re-render $\rightarrow$ hàm `ChildInput` bị **khởi tạo lại hoàn toàn ở một địa chỉ ô nhớ mới trong RAM**.
  2. **React Unmount và Mount lại từ đầu:** Vì địa chỉ hàm thay đổi, React tưởng `ChildInput` là một component hoàn toàn mới vừa được thay thế vào. React sẽ **xóa sổ component con cũ (Unmount) và dựng lại component mới (Mount)**.
  3. **Hậu quả thực tế:**
     * **Mất sạch State nội tại:** Toàn bộ dữ liệu `useState` bên trong component con bị reset về giá trị ban đầu.
     * **Văng con trỏ chuột (Mất Focus):** Nếu bên trong con có ô `<input>`, người dùng gõ được 1 ký tự là con trỏ chuột bị văng ra ngoài ngay lập tức.
     * **Giật lag giao diện:** Trình duyệt phải liên tục đập bỏ và tạo lại DOM thật.
* 👉 **Cách làm chuẩn:** Luôn khai báo Component con **ở ngoài phạm vi hàm cha (hoặc tách riêng ra file `.jsx` khác)**, sau đó truyền dữ liệu qua **Props**.

---

### ❓ Câu 8: Phân biệt Default Export và Named Export trong React? Khi nào Import có ngoặc nhọn `{ }` và khi nào không có?
* **Khái niệm & Bảng so sánh cốt lõi:**
  | Tiêu chí | Default Export (`export default`) | Named Export (`export`) |
  | :--- | :--- | :--- |
  | **Số lượng trong 1 file** | **Chỉ DUY NHẤT 1** `default export`. | **Có thể có VÔ SỐ** `named export`. |
  | **Cú pháp Export** | `export default function OrchidCard() {}` | `export function Profile() {}`<br>`export const ListOfOrchids = [...]` |
  | **Cú pháp Import** | `import OrchidCard from './OrchidCard'`<br>👉 **KHÔNG CÓ** ngoặc nhọn `{ }`. | `import { Profile } from './Profile'`<br>👉 **BẮT BUỘC CÓ** ngoặc nhọn `{ }`. |
  | **Quy tắc đặt tên khi Import** | **Được phép đổi tên tùy ý** khi import.<br>*(Ví dụ: `import HoaLan from './OrchidCard'` vẫn chạy chuẩn).* | **Tên import bắt buộc phải trùng khớp 100%** với tên lúc export.<br>*(Hoặc phải dùng từ khóa `as`: `import { Profile as UserProfile }`)*. |
  | **Khi nào nên dùng?** | Khi file đó chỉ chứa **1 Component chính** (chuẩn mực cho các file component: `App.jsx`, `OrchidCard.jsx`). | Khi file chia sẻ **nhiều hàm, biến hoặc tiện ích** (ví dụ: mảng dữ liệu `ListOfOrchids.js`, các helper function). |
* **Ví dụ thực tế trong dự án Hoa Lan (`se2041-demo-01`):**
  * `export default Orchid;` $\rightarrow$ Import: `import Orchid from './components/Orchid';`
  * `export const ListOfOrchids = [...]` $\rightarrow$ Import: `import { ListOfOrchids } from '../ListOfOrchids';`
  * **Cú pháp Import kết hợp cả hai:**
    * `import React, { useState, useEffect } from 'react';` *(React là default import, useState & useEffect là named import)*.
    * `import { Container, Row, Col, Card, Modal } from 'react-bootstrap';` *(Tất cả đều là named import)*.

---

### ❓ Câu 9: Toàn bộ kiến thức cốt lõi về Props: Bản chất, Destructuring, Giá trị mặc định, Prop `children` và JSX Spread?
* **1. Bản chất của Props:**
  * Props (viết tắt của *Properties*) là phương thức truyền dữ liệu **một chiều từ Cha xuống Con** và là **tham số duy nhất (single argument)** của hàm Component dưới dạng một Object.
  * **Tính chất bất di bất dịch (Immutable):** Props là **Read-Only**. Component con tuyệt đối không được gán đè (`props.orchid = ...`). Nếu muốn thay đổi dữ liệu theo tương tác người dùng, bắt buộc phải dùng **State (`useState`)**.
* **2. Kỹ thuật Destructuring & Bẫy kinh điển:**
  * Thay vì nhận cả cục `function OrchidCard(props) { const orchid = props.orchid; }`, ta bóc tách trực tiếp:
    ```jsx
    // ✅ ĐÚNG: Có ngoặc nhọn { }
    function OrchidCard({ orchid, onSelect }) { ... }
    
    // ❌ BẪY TAI HẠI: Quên ngoặc nhọn { }
    function OrchidCard(orchid, onSelect) { ... }
    // -> Lúc này biến orchid hứng trọn cả cái túi to { orchid, onSelect }, còn onSelect bị undefined!
    ```
* **3. Thiết lập giá trị mặc định (Default Props):**
  * Cú pháp: `function Avatar({ size = 100, isSpecial = false })`.
  * **Cơ chế kích hoạt:** Giá trị mặc định **chỉ được dùng khi prop bị bỏ trống (missing) hoặc truyền vào `undefined`**.
  * ⚠️ *Lưu ý:* Nếu truyền vào `size={null}` hoặc `size={0}`, giá trị mặc định sẽ **KHÔNG** kích hoạt.
* **4. Prop đặc biệt siêu sao: `children` prop (Kỹ thuật Slot / Wrapper):**
  * Khi bạn viết cặp thẻ mở và đóng bọc lấy một nội dung JSX khác:
    ```jsx
    <Container>
      <OrchidCard orchid={item} />
    </Container>
    ```
  * Component cha (`Container`) sẽ tự động nhận được toàn bộ phần tử nằm bên trong thông qua prop mang tên **`children`**:
    ```jsx
    function Container({ children }) {
      return <div className="container-box">{children}</div>;
    }
    ```
  * *Ứng dụng thực tế:* Đây là mô hình "chiếc hộp rỗng" cực kỳ phổ biến trong `React-Bootstrap` (`Container`, `Row`, `Col`, `Modal.Body`).
* **5. Chuyển tiếp Props bằng JSX Spread (`{...props}`):**
  * Khi muốn chuyển tiếp toàn bộ thuộc tính từ cha xuống con mà không muốn gõ lại từng tên prop: `<Avatar {...props} />`. (Chỉ dùng khi cần bọc wrapper, không nên lạm dụng khắp nơi).

---

### ❓ Câu 10: Toàn bộ về Rendering Lists: Duyệt mảng `.map()`, lọc `.filter()`, vai trò sống còn của `key` và 4 bẫy vấn đáp kinh điển?
* **1. Cơ chế biến đổi dữ liệu thành giao diện trong React (Data $\rightarrow$ JSX):**
  * React không phát minh cú pháp vòng lặp riêng (như `v-for` trong Vue hay `*ngFor` trong Angular). React tận dụng trực tiếp phương thức mảng **`.map()` của JavaScript** để biến đổi từng phần tử dữ liệu thô thành một phần tử giao diện JSX.
  * **Kỹ thuật kết hợp `.filter()` và `.map()`:** Dùng `.filter()` để sàng lọc dữ liệu thỏa mãn điều kiện trước, sau đó nối tiếp `.map()` để vẽ giao diện:
    ```jsx
    // Ví dụ: Chỉ hiển thị các bông hoa tự nhiên
    ListOfOrchids
      .filter(orchid => orchid.isNatural)
      .map(orchid => <Col key={orchid.id}><OrchidCard orchid={orchid} /></Col>)
    ```
* **2. Bẫy Arrow Function trong `.map()` (Cực kỳ dễ mất điểm khi gõ code):**
  * **Viết rút gọn (Implicit Return):** Không dùng ngoặc nhọn `{ }` $\rightarrow$ biểu thức tự động được `return`:
    ```jsx
    people.map(person => <li>{person.name}</li>) // ✅ Tự động return
    ```
  * **Viết khối lệnh (Block Body):** Nếu mở ngoặc nhọn `{ }` $\rightarrow$ **BẮT BUỘC PHẢI CÓ TỪ KHÓA `return`**:
    ```jsx
    // ❌ BẪY TAI HẠI: Có ngoặc nhọn { } nhưng quên viết return -> Danh sách trắng xóa!
    people.map(person => {
      <li>{person.name}</li>
    })

    // ✅ SỬA ĐÚNG:
    people.map(person => {
      return <li>{person.name}</li>;
    })
    ```
* **3. Bản chất của `key` và Ẩn dụ "Căn cước công dân (ID)" vs "Số thứ tự xếp hàng (Index)":**
  * Thuộc tính `key` là một chuỗi ký tự hoặc con số định danh duy nhất của mỗi item, phục vụ cho thuật toán đối soát **Virtual DOM (Reconciliation Algorithm)** của React.
  * **Ẩn dụ dễ hiểu:**
    * **Số thứ tự (Index):** Khi xếp hàng mua trà sữa, nếu không hỏi tên mà chỉ gọi "Người số 1, người số 2, người số 3". Khi người số 2 bỏ về, người số 3 nhảy lên thành người số 2. Nhân viên pha chế sẽ đưa ly nước của người số 2 cũ cho người số 3 $\rightarrow$ **Giao diện nhận nhầm State của nhau!**
    * **Căn cước công dân (Key):** Mỗi người có một mã số ID cố định (`orchid.id`). Dù danh sách bị sắp xếp lại (sort), xóa bớt hay chèn thêm vào giữa, React luôn nhận diện chính xác từng phần tử theo ID để tái sử dụng đúng DOM và giữ đúng State.
* **4. Bốn bẫy thi vấn đáp kinh điển về `key`:**
  * **⚠️ Bẫy 1: "Thầy lấy `index` của mảng làm `key` được không em?"**
    * *Trả lời:* **Chỉ tạm chấp nhận được** khi danh sách là **tĩnh 100%** (chỉ đọc, không thêm, không xóa, không sắp xếp hay lọc).
    * *Tại sao thực tế cấm dùng?* Khi danh sách đảo thứ tự hoặc xóa phần tử, chỉ số index sẽ bị trượt và gán cho phần tử khác, khiến React tái sử dụng nhầm DOM và State cũ (gây lỗi input text bị nhảy, checkbox tích nhầm item khác).
  * **⚠️ Bẫy 2: "Em tạo `key={Math.random()}` để đảm bảo không bao giờ trùng được không?"**
    * *Trả lời:* **Tuyệt đối KHÔNG!** `Math.random()` sẽ sinh ra giá trị mới ở **MỖI LẦN COMPONENT RE-RENDER**. React sẽ tưởng rằng toàn bộ danh sách cũ đã bị xóa sổ và thay bằng các phần tử hoàn toàn mới $\rightarrow$ React phá hủy và tạo lại toàn bộ DOM từ đầu $\rightarrow$ ứng dụng giật lag nghiêm trọng và làm mất sạch dữ liệu người dùng đang nhập dở trong form!
  * **⚠️ Bẫy 3: "Đặt `key` ở đâu khi bóc tách Component con?"**
    * *Quy tắc vàng:* Thuộc tính `key` **bắt buộc phải nằm ở thẻ ngoài cùng nhất xuất hiện trực tiếp bên trong lời gọi hàm `.map()`**:
      ```jsx
      // ✅ ĐÚNG: key nằm ở thẻ ngoài cùng trực tiếp trong map (thẻ Col hoặc OrchidCard)
      {ListOfOrchids.map((orchid) => (
        <Col key={orchid.id}>
          <OrchidCard orchid={orchid} />
        </Col>
      ))}
      ```
      *Sai lầm phổ biến là đặt `key` bên trong thẻ `<div>` ruột của file `OrchidCard.jsx`!*
  * **⚠️ Bẫy 4: "Component con có lấy được `props.key` để dùng không?"**
    * *Trả lời:* **KHÔNG!** Thuộc tính `key` là thuộc tính nội bộ của React (tương tự như `ref`). React tự "nuốt" prop này để đối soát DOM. Trong Component con, `props.key` luôn là `undefined`. Nếu component con cần dùng ID, cha phải truyền thêm một prop riêng: `<OrchidCard key={orchid.id} id={orchid.id} />`.
* **5. Cú pháp `<Fragment key={...}>` tường minh khi render nhiều thẻ ngang hàng:**
  * Thẻ ảo viết tắt `<>...</>` **không cho phép truyền thuộc tính `key`**.
  * Khi mỗi item cần render nhiều thẻ anh em ngang hàng (ví dụ: `<dt>` và `<dd>`, hoặc `<p>` và `<hr />`) mà không muốn bọc thêm thẻ `<div>` thừa làm hỏng layout CSS, bạn bắt buộc phải import và dùng cú pháp tường minh:
    ```jsx
    import { Fragment } from 'react';
    // ...
    {items.map(item => (
      <Fragment key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </Fragment>
    ))}
    ```

---

## 📌 PHẦN 2: CÁC KIẾN THỨC CẦN LƯU Ý LAB 2 (EVENT HANDLING, STATE, REACT HOOKS, MODAL & THEME)

### ❓ Câu 11: Toàn bộ về Xử lý sự kiện (Responding to Events): Truyền hàm vs Gọi hàm, bẫy sập web vô tận `onClick={() => ...}` và cơ chế `e.stopPropagation()` vs `e.preventDefault()`?
* **1. Quy tắc đặt tên chuẩn (Naming Conventions):**
  * **Props truyền từ cha xuống con:** Bắt đầu bằng tiền tố `on...` theo chuẩn camelCase (`onClick`, `onSelect`, `onChangeColor`).
  * **Hàm xử lý sự kiện bên trong component:** Bắt đầu bằng tiền tố `handle...` (`handleClick`, `handleSelectOrchid`).
* **2. ⚠️ BẪY TỬ THẦN KINH ĐIỂN: Truyền hàm (Passing) vs Gọi hàm (Calling):**
  * **Quy tắc sống còn:** Ta phải **truyền tham chiếu của hàm (pass a function)**, tuyệt đối **không được tự ý gọi hàm (call a function)** trong JSX!
  * **Bảng so sánh:**
    | Cách viết | Bản chất | Hậu quả |
    | :--- | :--- | :--- |
    | `onClick={handleClick}` ✅ | **Truyền tham chiếu:** Đưa tên hàm cho React giữ, chỉ kích hoạt khi người dùng CLICK. | Chạy đúng chuẩn. |
    | `onClick={handleClick()}` ❌ | **Gọi hàm ngay lập tức:** Có cặp ngoặc `()`, hàm bị thực thi NGAY KHI RENDER (trước cả khi người dùng chạm chuột vào)! | Chạy sai thời điểm. |
  * **Tại sao trong `OrchidCard.jsx` bắt buộc phải viết `onClick={() => onSelect(orchid)}`?**
    * Khi cần truyền tham số (`orchid`), nếu viết: `onClick={onSelect(orchid)}` ❌:
      1. Ngay khi thẻ Card được render, JavaScript gặp dấu ngoặc `()` sẽ gọi ngay lập tức hàm `onSelect(orchid)`.
      2. Hàm này gọi `setSelectedOrchid(orchid)` ở component cha `Orchid.jsx`.
      3. State thay đổi $\rightarrow$ component cha re-render $\rightarrow$ thẻ Card re-render $\rightarrow$ lại gặp dấu `()` gọi tiếp `onSelect(orchid)`!
      4. **Hậu quả:** Ứng dụng rơi vào vòng lặp re-render vô tận và sập web ngay lập tức với lỗi:  
         💥 `Error: Too many re-renders. React limits the number of renders to prevent an infinite loop`.
    * 👉 **Giải pháp chuẩn:** Bọc trong một **Arrow Function ẩn danh** `onClick={() => onSelect(orchid)}` ✅ để biến nó thành một hàm chờ, chỉ khi người dùng bấm chuột thì hàm mới được thực thi!
    * 📌 *[Note hôm sau học kỹ]: Đây là câu hỏi kinh điển! Buổi sau khi học bài "State as a Snapshot" và "Render Cycle", ta sẽ vẽ chi tiết từng bước luồng chạy của vòng lặp này.*
* **3. Sự kiện nổi bọt (Event Propagation / Bubbling) và `e.stopPropagation()`:**
  * **Cơ chế:** Trong cây DOM, khi bạn click vào một nút con, sự kiện click sẽ **"nổi bọt" (bubble)** ngược lên tất cả các thẻ cha bọc ngoài nó (`<button>` $\rightarrow$ `<div className="card">` $\rightarrow$ `<div className="col">`).
  * **Hậu quả nếu không chặn:** Bấm vào nút "Explore more" có thể vô tình kích hoạt luôn sự kiện click của thẻ Card cha bọc ngoài.
  * **Cách xử lý:** Nhận đối tượng sự kiện `e` và gọi **`e.stopPropagation()`**:
    ```jsx
    <Button onClick={(e) => {
      e.stopPropagation(); // 🛑 Dừng nổi bọt, không kích hoạt sự kiện của thẻ cha!
      onSelect(orchid);
    }}>
      Explore more
    </Button>
    ```
  * *(Lưu ý: Mọi sự kiện trong React đều nổi bọt ngoại trừ `onScroll`).*
* **4. Chặn hành vi mặc định của trình duyệt (`e.preventDefault()`):**
  * **Cơ chế:** Một số thẻ HTML có hành vi tự động của trình duyệt (ví dụ: bấm `<button>` trong `<form>` sẽ tự động reload lại toàn bộ trang web; bấm thẻ `<a>` sẽ chuyển trang).
  * Trong ứng dụng React SPA, ta không muốn website bị reload $\rightarrow$ gọi **`e.preventDefault()`** trong hàm `handleSubmit`.
* **5. 🎯 Phân biệt rạch ròi giữa `e.stopPropagation()` và `e.preventDefault()`:**
  * **`e.stopPropagation()`:** Ngăn chặn sự kiện **lan truyền lên các thẻ cha** bên trên cây DOM.
  * **`e.preventDefault()`:** Ngăn chặn **hành vi mặc định sẵn có của trình duyệt** (như tự reload trang khi submit form).
* **6. ⚖️ So sánh chi tiết: Truyền tên hàm trực tiếp (`onClick={handleClick}`) vs Bọc Arrow Function (`onClick={() => ...}`):**
  * **Ẩn dụ trực quan:**
    * **Truyền tên hàm trực tiếp (`onClick={handleClick}`):** Bạn đưa **danh thiếp/số điện thoại của bác thợ** cho React. React cầm lấy danh thiếp, khi nào người dùng bấm click thì React tự động bấm số gọi bác thợ đến làm việc.
    * **Bọc Arrow Function (`onClick={() => handleClick(orchid)}`):** Bạn thuê một **người đưa thư trung gian**. Bạn dặn: *"Khi nào chuông reo (người dùng click), anh hãy gọi bác thợ và chuyển gói hàng mang tên `orchid` này cho bác nhé!"*.
  * **Bảng so sánh 4 điểm khác biệt cốt lõi:**
    | Tiêu chí | Truyền tên hàm trực tiếp (`onClick={handleClick}`) | Bọc trong Arrow Function (`onClick={() => ...}`) |
    | :--- | :--- | :--- |
    | **Cú pháp** | `onClick={handleClick}` | `onClick={() => handleClick(orchid)}` |
    | **Truyền tham số tùy biến** | ❌ **Không thể truyền tham số.**<br>*(Vì nếu viết `handleClick(id)` có dấu ngoặc `()`, hàm sẽ bị thực thi ngay khi render).* | ✅ **Dễ dàng truyền mọi tham số** vào hàm mục tiêu (ví dụ: object `orchid`, biến `id`, index). |
    | **Nhận Event Object `e`** | React **tự động bơm `e` vào làm đối số đầu tiên**:<br>`function handleClick(e) { ... }` | Phải khai báo `e` ở arrow function nếu muốn dùng:<br>`onClick={(e) => handleClick(e, orchid)}` |
    | **Bộ nhớ & Hiệu năng** | Tái sử dụng cùng một tham chiếu hàm đã khai báo từ trước. | Một hàm ẩn danh mới được sinh ra trong bộ nhớ ở mỗi lần render. *(Chi phí rất nhỏ, chỉ cần tối ưu khi render hàng vạn item)*. |
  * **💡 Quy tắc vàng - Khi nào nên dùng cái nào?**
    * **Dùng truyền trực tiếp (`onClick={handleClick}`):** Khi hàm xử lý sự kiện **KHÔNG CẦN tham số nào cả** (hoặc chỉ cần mỗi đối tượng sự kiện `e`). Code sẽ ngắn gọn, sạch đẹp nhất.
    * **Dùng Arrow Function (`onClick={() => handleClick(orchid)}`):** Khi hàm **BẮT BUỘC CẦN THAM SỐ** (như truyền hoa được chọn `onSelect(orchid)` trong `OrchidCard.jsx`).

---

### ❓ Câu 12: Hook trong React là gì? Toàn bộ về `useState` (Bộ nhớ của Component): Tại sao biến thường thất bại, tính độc lập của State và quy tắc sống còn "Rules of Hooks"?
* **0. Bản chất "Hook" là gì? Tại sao lại gọi là Hook và nó đặc biệt ở điểm nào?**
  * **Nghĩa gốc của từ "Hook":** Trong tiếng Anh, *Hook* có nghĩa là **"cái móc"**.
  * **Định nghĩa chuẩn:** Hook là **các hàm JavaScript đặc biệt** do React cung cấp (hoặc do bạn tự viết), cho phép Function Component **"móc nối" vào các tính năng nội bộ của React** (như bộ nhớ State, vòng đời Lifecycle, Context).
    * *(Ngày xưa, Function Component chỉ là hàm tĩnh vẽ HTML, không có trí nhớ. Từ khi React 16.8 ra mắt Hooks, chỉ cần "móc" `useState` vào là component có ngay trí nhớ).*
  * **3 điểm ĐẶC BIỆT khiến Hook khác biệt hoàn toàn với hàm JS thông thường:**
    1. **Quy ước tên gọi:** Bắt buộc phải bắt đầu bằng từ khóa **`use...`** (`useState`, `useEffect`, `useTheme`).
    2. **Môi trường hoạt động:** Chỉ có hiệu lực và **chỉ được gọi khi React đang render một Function Component** (hoặc bên trong một Custom Hook khác). Bạn không thể gọi Hook trong một hàm JavaScript thông thường ở bên ngoài!
    3. **Tuân thủ quy tắc nghiêm ngặt (Rules of Hooks):** Phải gọi ở Top-level, không được gọi trong `if`, `for`, hay hàm lồng nhau.
* **1. Tại sao biến thông thường (`let index = 0; index++`) thất bại hoàn toàn? (2 lý do cốt tử):**
  * **Lý do 1 - Biến cục bộ không thể tồn tại qua các lần render (Do not persist between renders):** Mỗi khi React vẽ lại component, hàm component được thực thi lại từ đầu $\rightarrow$ biến `let index = 0` bị khởi tạo lại về con số 0 ban đầu, mất sạch dữ liệu trước đó!
  * **Lý do 2 - Thay đổi biến thường KHÔNG kích hoạt render (Won't trigger re-render):** Khi bạn thay đổi `index = index + 1`, giá trị trong RAM có đổi nhưng React hoàn toàn không hay biết $\rightarrow$ React không vẽ lại giao diện $\rightarrow$ màn hình đứng yên.
* **2. Hai nhiệm vụ sống còn mà Hook `useState` mang lại:**
  1. **Lưu giữ dữ liệu (Retain):** Giữ lại giá trị biến giữa các lần render khác nhau (như một ngăn tủ ký ức của Component).
  2. **Kích hoạt vẽ lại (Trigger Re-render):** Hàm setter (`setIndex`) báo hiệu cho React biết dữ liệu đã thay đổi, yêu cầu React gọi lại component để vẽ lại giao diện mới lên màn hình.
* **3. Giải phẫu cú pháp `useState` (Array Destructuring):**
  * `const [selectedOrchid, setSelectedOrchid] = useState(null);`
  * Nhận vào: Giá trị khởi tạo (`initialState`, ví dụ: `null`, `0`, `false`, `""`).
  * Trả về: Một mảng chứa chính xác **2 phần tử**:
    1. `selectedOrchid`: Biến state lưu giá trị hiện tại.
    2. `setSelectedOrchid`: Hàm cập nhật state (setter function).
  * Quy ước đặt tên: `const [something, setSomething] = useState(...)`.
* **4. Tính chất "Độc lập và Riêng tư" của State (Isolated & Private):**
  * **Độc lập (Isolated):** Nếu bạn render 16 thẻ `<OrchidCard />` hoặc 2 component `<Gallery />`, mỗi bản sao trên màn hình sở hữu một **vùng nhớ State hoàn toàn độc lập**. Bấm nút ở thẻ hoa thứ nhất KHÔNG BAO GIỜ làm ảnh hưởng hay nhảy dữ liệu ở thẻ hoa thứ hai!
  * **Riêng tư (Private):** State thuộc quyền sở hữu riêng của component khai báo nó. Component cha không thể tự ý đọc hay sửa state của con (trừ khi con chủ động truyền lên qua Callback Props).
* **5. ⚠️ BẪY THI VẤN ĐÁP KINH ĐIỂN: Quy tắc của Hooks (Rules of Hooks) & Cơ chế Mảng ngầm của React:**
  * **Câu hỏi của Thầy/Cô:** *"Tại sao Hook (`useState`, `useEffect`) BẮT BUỘC phải đặt ở Top-level của Component? Khai báo `useState` bên trong câu lệnh `if` hay vòng lặp `for` được không?"*
  * **Trả lời:** **TUYỆT ĐỐI KHÔNG!** Nếu đặt trong `if` hay vòng lặp, ứng dụng sẽ bị crash ngay lập tức với lỗi:  
    💥 `Error: Rendered fewer hooks than expected`.
  * **Cơ chế hậu trường sâu xa (Under the hood):**
    * Khi gọi `useState()`, React **KHÔNG hề nhận được tên biến** (React không biết biến tên là `index` hay `selectedOrchid`).
    * React quản lý Hooks bằng một **mảng nội bộ (`componentHooks[]`)** và một **con trỏ chỉ số thứ tự (`currentHookIndex`)** bắt đầu từ `0`.
    * Ở mỗi lần render, React dựa vào **thứ tự gọi cố định và bất biến (stable call order)** của các Hook để móc đúng giá trị state tương ứng ra.
    * 👉 *Nếu bạn nhét Hook vào trong lệnh `if`:* Khi điều kiện `if` đúng, Hook được gọi; khi sai, Hook bị bỏ qua $\rightarrow$ chỉ số index bị lệch $\rightarrow$ React lấy nhầm dữ liệu của Hook này gán cho Hook khác $\rightarrow$ sập ứng dụng!
* **6. Khi nào KHÔNG NÊN dùng State?**
  * Nếu một giá trị chỉ cần tính toán tạm thời bên trong 1 hàm xử lý sự kiện (ví dụ: `const name = prompt(...)`), không cần hiển thị lên JSX và không cần giữ lại qua các lần re-render $\rightarrow$ dùng biến cục bộ bình thường (`const/let`), không tạo thêm `useState` gây lãng phí bộ nhớ và re-render thừa thãi.

---

### ❓ Câu 13: Bản chất "State as a Snapshot" (Bức ảnh chụp theo thời gian): Tại sao gọi setState 3 lần vẫn chỉ tăng 1, và giải mã triệt để lỗi sập web vòng lặp vô tận?
* **1. Khái niệm cốt lõi: State là một "Bức ảnh chụp" (Snapshot):**
  * Trong React, mỗi lần Component render, React gọi hàm Component và chụp lại một **"bức ảnh" giao diện tại thời điểm đó**.
  * Trong bức ảnh đó, **tất cả giá trị của Props, State, biến và các hàm xử lý sự kiện đều bị ĐÓNG BĂNG (cố định)** theo thời gian của lần render đó.
  * **Hàm `setState(...)` không hề thay đổi biến State hiện tại!** Nó chỉ đóng vai trò là một **phiếu yêu cầu gửi lên React**: *"Ở bức ảnh tiếp theo (next render), hãy đưa cho tôi giá trị mới này nhé!"*.
* **2. Thí nghiệm kinh điển: Tại sao gọi `setNumber(number + 1)` 3 lần liên tiếp thì State vẫn chỉ tăng 1?**
  ```jsx
  const [number, setNumber] = useState(0);

  <button onClick={() => {
    setNumber(number + 1); // Lần 1
    setNumber(number + 1); // Lần 2
    setNumber(number + 1); // Lần 3
  }}>+3</button>
  ```
  * **Giải thích bằng phương pháp thay thế (Substitution method):**
    * Tại lần render hiện tại, giá trị trong bức ảnh là `number = 0`.
    * Cả 3 dòng lệnh thực chất đều nhìn thấy `number` là `0`:
      * Dòng 1: `setNumber(0 + 1)` $\rightarrow$ yêu cầu lần render tới đưa số `1`.
      * Dòng 2: `setNumber(0 + 1)` $\rightarrow$ lại yêu cầu lần render tới đưa số `1`.
      * Dòng 3: `setNumber(0 + 1)` $\rightarrow$ tiếp tục yêu cầu lần render tới đưa số `1`.
    * Kết quả: Sau khi hàm sự kiện chạy xong, React re-render và trả về `number = 1`, **chứ không phải 3**!
  * *(Thậm chí dù có đặt trong `setTimeout(() => alert(number), 3000)` thì 3 giây sau alert vẫn in ra số `0` vì nó đã bị đóng băng trong snapshot cũ).*
* **3. 💥 GIẢI MÃ TRIỆT ĐỂ: Tại sao viết `onClick={onSelect(orchid)}` lại gây ra VÒNG LẶP VÔ TẬN (Infinite Loop: Too many re-renders)?**
  * **Bản chất của quá trình Render:** Render là quá trình React đang tính toán bức ảnh Snapshot cho giao diện.
  * Khi bạn viết: `<Button onClick={onSelect(orchid)}>`:
    1. **Bước 1 (Đang chụp ảnh):** Trình duyệt render `OrchidCard.jsx`. Gặp dấu ngoặc tròn `()`, JavaScript thực thi ngay lập tức hàm `onSelect(orchid)`.
    2. **Bước 2 (Gửi yêu cầu chụp ảnh mới):** Hàm `onSelect` gọi `setSelectedOrchid(orchid)` ở component cha `Orchid.jsx`. Gọi hàm set state đồng nghĩa với việc: **Yêu cầu React hủy bức ảnh hiện tại và chụp ngay một bức ảnh mới (Trigger Re-render)!**
    3. **Bước 3 (Lại chụp ảnh mới):** React gọi lại `Orchid.jsx` để chụp ảnh mới $\rightarrow$ `Orchid.jsx` lại render lại `OrchidCard.jsx`.
    4. **Bước 4 (Lại gặp dấu ngoặc):** Trình duyệt lại gặp `<Button onClick={onSelect(orchid)}>` $\rightarrow$ lại gọi hàm setter $\rightarrow$ lại yêu cầu chụp ảnh mới!
    5. **Kết quả:** Bước 1 $\rightarrow$ Bước 2 $\rightarrow$ Bước 3 $\rightarrow$ Bước 4 lặp lại liên tục hàng triệu lần trong 1 giây mà không bao giờ kịp kết thúc quá trình render. React phát hiện máy bay sắp rơi nên tự ngắt khẩn cấp và báo lỗi:  
       💥 `Error: Too many re-renders. React limits the number of renders to prevent an infinite loop`.
  * 👉 **Tại sao bọc trong Arrow Function `onClick={() => onSelect(orchid)}` lại không bị?**
    * Vì lúc này, lời gọi hàm setter nằm **bên trong hành vi click chuột trong tương lai** của bức ảnh. Khi chụp ảnh, hàm setter **KHÔNG CHẠY**. Chỉ khi nào người dùng lấy ngón tay bấm click thật sự, hàm setter mới được gửi đi đúng lúc!

---

### ❓ Câu 14: Tại sao State `selectedOrchid` bắt buộc đặt ở `Orchid.jsx` mà không đặt ở `OrchidCard.jsx` hay `App.jsx`? Nguyên lý "Cha chung gần nhất" (Closest Common Parent) và kỹ thuật Lifting State Up?
* **1. Kỹ thuật Lifting State Up (Nâng State lên Cha) kết hợp Callback Props:**
  * Component Cha (`Orchid.jsx`) nắm giữ State lưu hoa được chọn:
    ```jsx
    const [selectedOrchid, setSelectedOrchid] = useState(null);
    ```
  * Cha truyền hàm đổi state xuống cho Con qua Props:
    ```jsx
    <OrchidCard orchid={item} onSelect={setSelectedOrchid} />
    ```
  * Ở Con (`OrchidCard.jsx`), khi người dùng bấm nút, Con gọi hàm callback của Cha và truyền object hoa vào:
    ```jsx
    <Button onClick={() => onSelect(orchid)}>Explore more</Button>
    ```
  * State ở Cha cập nhật $\rightarrow$ Cha re-render và hiển thị `<OrchidDetailModal show={true} orchid={selectedOrchid} />`.
* **2. 🏆 Hai lý do kiến trúc cốt tử: "Tại sao State đặt ở `Orchid.jsx` mà không phải chỗ khác?":**
  * **❌ Lý do 1 - Tại sao KHÔNG đặt ở từng Con (`OrchidCard.jsx`)?**
    * *Tránh lãng phí tài nguyên:* Nếu mỗi thẻ card tự quản lý Modal của riêng mình, trong cây DOM sẽ **âm thầm sinh ra 16 cái Popup Modal chực chờ** trong bộ nhớ.
    * Trong thực tế, tại 1 thời điểm người dùng **chỉ xem DUY NHẤT 1 bông hoa**!
    * Đặt ở Cha `Orchid.jsx` giúp cả ứng dụng **chỉ dùng chung 1 Modal duy nhất** (tương tự như cả lớp 16 học sinh chỉ dùng chung 1 máy chiếu đặt giữa phòng, ai thuyết trình thì cắm dây máy chiếu cho bạn đó $\rightarrow$ cực kỳ nhẹ RAM và sạch cây DOM).
  * **❌ Lý do 2 - Tại sao KHÔNG CẦN đưa lên tận `App.jsx`? (Nguyên lý "Cha chung gần nhất" - Closest Common Parent):**
    * Quy tắc vàng của React: **"State chỉ nên đặt ở Cha chung gần nhất của các component cần dùng nó"**.
    * Bông hoa được chọn chỉ liên quan trực tiếp đến 2 thứ: (1) Lưới 16 thẻ hoa và (2) Cái Modal hiển thị chi tiết. Cả 2 đều nằm gọn trong `Orchid.jsx`.
    * Thanh Menu `MyNavBar.jsx` hoàn toàn không quan tâm hoa nào đang chọn. Nếu đưa state lên `App.jsx`, mỗi lần chọn hoa thì cả `App` và `MyNavBar` sẽ bị bắt **re-render lại một cách vô ích**, làm phình to code của `App.jsx`.
* **3. 💡 Giải nghĩa 3 thuật ngữ cốt lõi: Callback Function, Controlled Component và ý nghĩa `show={true}`:**
  * **Callback Function (Hàm phản hồi / gọi lại) là gì?**
    * *Định nghĩa:* Là một hàm được truyền từ component Cha xuống component Con dưới dạng một Prop (`onSelect`, `onHide`), với mục đích là để Con **gọi ngược lại (call back)** khi có một sự kiện xảy ra (như người dùng click chuột).
    * *Ẩn dụ:* Cha để lại số điện thoại cho Con. Khi có việc (khách bấm nút xem hoặc đóng), Con bấm số gọi lại cho Cha để báo tin!
  * **Controlled Component (Component bị kiểm soát) là gì?**
    * *Định nghĩa:* Là một component mà toàn bộ trạng thái hiển thị (mở/đóng) và dữ liệu của nó **bị điều khiển 100% bởi Props do Cha truyền xuống**, bản thân nó không tự lưu State đóng/mở riêng.
    * *Ví dụ trong bài:* `OrchidDetailModal` là Controlled Component vì nó không tự quyết định lúc nào mở lúc nào đóng, mà hoàn toàn do State `selectedOrchid` ở Cha giật dây điều khiển.
  * **Ý nghĩa của `show={true}` trong bài:**
    * Thuộc tính `show` của component `<Modal>` (React-Bootstrap) nhận giá trị boolean: `true` là hiện popup ra giữa màn hình, `false` là ẩn đi.
    * Ta truyền thẳng `show={true}` vì ở bên ngoài ta đã có điều kiện bọc: `{selectedOrchid && <OrchidDetailModal ... />}`. Một khi `selectedOrchid` có dữ liệu (khác `null`) thì component mới được render, và lúc này chắc chắn người dùng đang muốn xem hoa nên ta gán thẳng `show={true}` để Modal bung ra ngay lập tức!

---

### ❓ Câu 15: Phân biệt `setCount(count + 1)` và `setCount(prev => prev + 1)`?
* **`setCount(count + 1)`:** Lấy giá trị của `count` tại thời điểm hàm hiện tại được gọi (snapshot). Nếu gọi liên tiếp 3 lần trong cùng 1 hàm xử lý sự kiện, `count` vẫn chỉ tăng lên 1 đơn vị vì cả 3 lần đều dùng chung giá trị snapshot cũ.
* **`setCount(prev => prev + 1)` (Updater Function):** Nhận vào giá trị mới nhất trong hàng đợi (queue) cập nhật state của React. Đảm bảo tính toán chính xác khi state phụ thuộc trực tiếp vào state trước đó hoặc khi cập nhật dồn dập.

---

### ❓ Câu 16: `useEffect` dùng để làm gì? Kể 3 trường hợp truyền Dependency Array?
* **Mục đích:** Dùng để xử lý các **Side Effects** (tác vụ phụ bên ngoài luồng render giao diện) như: gọi API, thao tác trực tiếp với DOM (`document.title`), lưu dữ liệu vào `localStorage`, lắng nghe sự kiện hoặc thiết lập timer (`setInterval`).
* **3 trường hợp của Dependency Array:**
  1. **Không truyền mảng dependencies (`useEffect(fn)`):** Chạy lần đầu sau khi mount và **chạy lại sau MỖI LẦN component re-render**.
  2. **Truyền mảng rỗng `[]` (`useEffect(fn, [])`):** Chỉ chạy đúng **1 lần duy nhất** ngay sau khi component mount lên màn hình (thường dùng để fetch dữ liệu khởi tạo).
  3. **Truyền mảng có chứa biến `[theme]` (`useEffect(fn, [theme])`):** Chạy lần đầu và chạy lại **mỗi khi bất kỳ biến nào trong mảng bị thay đổi giá trị**.

---

### ❓ Câu 17: Custom Hook là gì? Có quy tắc bắt buộc nào khi tạo Custom Hook không?
* **Khái niệm:** Custom Hook là một hàm JavaScript thông thường do lập trình viên tự định nghĩa, bên trong có sử dụng các Hook sẵn có của React (như `useState`, `useEffect`) nhằm mục đích **đóng gói và tái sử dụng logic** giữa các component khác nhau.
  * *Ví dụ trong bài:* Hook `useTheme()` gom toàn bộ logic kiểm tra `localStorage`, cập nhật state theme và gán thuộc tính `data-bs-theme` cho body.
* **Quy tắc bắt buộc:**
  * Tên hàm **bắt buộc phải bắt đầu bằng từ khóa `use` viết thường** theo chuẩn CamelCase (ví dụ: `useTheme`, `useLocalStorage`, `useFetch`).
  * *Lý do:* Quy ước này giúp công cụ linter của React nhận biết đây là Hook để kiểm tra và thực thi các quy tắc nghiêm ngặt của React Hook (Rules of Hooks: không gọi hook trong câu lệnh điều kiện `if`, vòng lặp `for` hay hàm lồng nhau).




