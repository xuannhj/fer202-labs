// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useState } from 'react';
// /*- lafm sao tao endpoint khi ma ko co backend?
// 1. JSON - SERVER: 
// - cai npm install json-server
// - tạo dữ liệu giả (mockdata) bằng file json
// 2. using webs support mockAPI : https://mockapi.io/ [trang dung de di thi]

// sau khi da co backend roi thi minh goi API: tức là truy cập vào endpoint của backend để lấy dữ liệu về 

// demo: truy cập vào http://localhost:3000/drama để lấy dữ liệu
// 1. khai báo 1 cái biến để lưu dữ liệu được gọi về
// vì dữ liệu có thể thay đổi nên mình sử dụng 1 cái state 
// 2. truy cập vào endpoint bằng hàm fetch
// */
// export default function App() {
//   const [data, setData] = useState([])
//   //day la 1 cai ham nhan ve cgi do va tra ve cgi do
  
//   useEffect(() => {  
//     // const fetchData = () => {
//   //   //access to endpoint
//   //   fetch("http://localhost:3000/drama")
//   //   //sau khi fetch thi no se tra ve 1 cai thong tin gi do, sau do minh se can chuyen du lieu lay duoc ve dang json (convert ve dang chuan cua json)
//   //   .then(response => response.json())
//   //   //dung ham setData de dua data cho bien data
//   //   .then(data => setData(data))
//   // }
//   /*3. gọi hàm
//   CÁCH 1: DÙNG FECTH()
//   - fetchData() : vấn đề hàm này sẽ bị gọi liên tục
//   => react hỗ trợ 1 cái hook useEffect() [han che goi lien tuc] (hook là hàm có sẵn phục vụ cho 1 việc j đó)
//   -> useEffect hỗ trợ gọi api khi cần
//   - cú pháp: useEffect(() => {}, []) - tham số đầu tiên là 1 cái hàm () => {}, tham số thứ 2 là 1 cái mảng []
//   - []: mảng phụ thuộc 
//   - () => {thường sẽ thực thi trong đây}
//   -> hàm sẽ được gọi khi các phần tử trong mảng phụ thuộc bị thay đổi,  nếu như trong mảng có 1 biến giá trị bị thay đổi thì hàm đó mới được gọi. Nếu ko thì hàm sẽ chỉ gọi 1 lần 


//   CÁCH 2 DÙNG axios
//   1. cài đặt npm install axios
//   2. caanf ap dung co che bat dong bo async await
//   */
//   const fetchData = async() => {
//     //get/post/put/patch/delete
//     //get: lấy dữ liệu về - vd: lấy list ngựa đua, post: thêm dữ liệu - vd: đki 1 tài khoản mới, đưa email, id, password cho backend để thêm dữ liệu vào database
//     //put/patch dùng cho việc cập nhật dữ liệu - put đưa toàn bộ dữ liệu, patch đưa 1 phần dữ liệu 
//     //delete: xóa dữ liệu 
//     //dufng bien response de dung du lieu tra ve
//     //đợi hàm get trả kết quả về rồi mới làm tiếp 
//     const response = await axios.get("http://localhost:3000/drama")
//     //sau khi da co dc du lieu tra ve roi -> thi axios tu chuyen dong ve json 
//     //dung setdata de dua thong tin cho bien data
//     setData(response.data)
//   }
//    fetchData();
//  }, [])

//   return (
//     <div>{data.map(item => <h2 key={item.id}>{item.name}</h2>)}</div>
//   )
// }


/* Khai bao nhung component nao co quyen truy cap vao context
tuc la ai la nguoi cua mon phai  */
// import React from 'react'
// import { HangDongProvider } from './contexts/HangDongContext'
// import DeTu from './components/DeTu'

// export default function App() {
//   return (
//     <HangDongProvider>
//       <DeTu>
//       </DeTu>
//     </HangDongProvider>
//   )
// }

// import React from 'react'
// import Home from '../pages/Home'
// import Fav from '../pages/Fav'
// import { Routes } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import { FavProvider } from './contexts/FavContext'

// export default function App() {
//   return (
//     <FavProvider>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/fav' element={<Fav/>}/>
//     </Routes>
//      </FavProvider>
//   )
// }

/* 05-10-2026
1. Tạo counter.jsx
2. Tao Button.jsx
?lam sao de bam button ma counter thay doi -> dung context/ truyen props
-> hnay hoc REDUX
*/

//https://redux.js.org/ -> 

import React from 'react'
import Counter from './components/Counter'
import Button from './components/Button'
import { Provider } from 'react-redux'
import store from './store/store'

//mình đang viết dưới dạng functional component

export default function App() {
  //REDUX: (cài npm install @reduxjs/toolkit react-redux)
  //ý nghĩa: lưu thông tin state trong 1 cái store duy nhất,
  //store: là nơi lưu trữ thông tin state của ứng dụng (GLOBAL) tất cả các component đều có thể truy cập vào store để lấy thông tin state về
  //reducer: là 1 cái hàm nhận vào state hiện tại và action, trả về state mới
  //Slice: là 1 cái file chứa reducer, action, state ban đầu
  //(1. tạo CounterSlice.jsx trong folder src/slices)
  //(2. tạo store.jsx trong folder src/store)
  //(3. để sử dụng store thì bọc App bằng Provider)
  //để provider biết store nào thì mình sẽ định nghĩa bằng thuộc tính store
  //(4. để sử dụng state trong store thì dùng useSelector, để sử dụng action trong store thì dùng useDispatch[Counter.jsx, Button.jsx])

  return (
    <>
    <Provider store ={store}>
    <Counter/>
    <Button/>
    </Provider>
    </>
  )
}

