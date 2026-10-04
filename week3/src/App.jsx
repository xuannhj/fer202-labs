import { Route } from 'react-router'
import { Routes } from 'react-router'
import Home from './pages/Home'
import Products from './pages/Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar'
import NotFound from './pages/NotFound'

//de chuyen trang trong react => cai thu vien react-router
//ai goi y cai: npm install-router-dom (dom là phiên bản v6 trở về trước), còn v7, v8 trở đi thì chỉ còn => npm install react-router

// có 3 cách sử dụng: 
//1. Framework - tuân theo cấu trúc mà react-router đề ra - thông thường sẽ là quản lý theo thư mục (NextJS)
//2. Data - - viết theo 1 mảng object
//3. Declare - mình xài cách này - viết theo kiểu khai báo component
//-----
//1. vào file main.jsx, sẽ bao cái component App bằng component BrowserRouter - đây là component do thằng react router quy định cho mình (chu y nho import browser router)
//2. định nghĩa các Route (tuyến đường) - tức là chỉ rõ cách vào Pages
//=> bao toàn bộ các route trong component <Routes></Routes>
//Component <Route></Route>
//cu phap: su dung 2 thuoc tinh
//-path: duong dan toi page
//-element: component cua page do
//vd: 
//SPLAT ROUTE: path daaus *

//layout route: 
//-admin layout => tap trung vao crud, sidebar,..
//-customer layout => tap trung vao ui ux
//=> mot route dac biet chi co element ma ko co path
//noi dung cua no se ap dung cho toan bo route ben trong
//=> de hien thi dc noi dung cac route ben trong
//thi layout route ben trong phai them 1 component <Outlet></Outlet>
//bt: tao ra mot adminlayout, ben trong co trang managementproduct.jsx
//nested route: route lồng vô một route khác
//vd: muốn vào /home => /customer/home
//muon vao /manage-products => admin/manage-products
//=> tao 1 route bao ben ngoai
//=> nested route se la route ko co element chi co path
//vd: path='/customer' => phai vao route /customer thi moi duoc vao tiep /home
//LUU Y: luc nay cac route ben trong KHONG dc viet dau / - tức là /home => home

//lab 03: 
// export default function App() {
//   return (
//     <>
//     <Routes>
//       <Route path ='/customer'/>
//       <Route element ={<MyNavBar/>}>
//       <Route path='home' element={<Home />}/>
//       <Route path='products' element ={<Products/>}/>
//       <Route path='*' element ={<NotFound/>} ></Route>
//       </Route>
      
//     </Routes>
//      </>
//   )
// }



//DYNAMIC SEGMENT: nếu muốn xem vào chi tiết cái drama có id là 1 thì 1 page hiển thị 
// thay vì 1 page 1 drama thì vậy -> vì nội dung các page là tương tự nhau nên có thể dùng chung 1 page và sử dụng id để phân biệt các page với nhau
//sử dụng dynamic segment
//b1. khai abso route như bình thường 
//b2. segment bang cavch them /:id
//tuc la chuyen thanh /:id -> drama -> drama/:id
//dấu : thể hiện sự ko bắt buộc -> vô như này /drama hay /drama/1 đều dc
//b3: thêm thẻ link để chuyển trang 
import React from 'react'
import Drama from './pages/Drama';

export default function App() {
  return (
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/drama/:id' element={<Drama/>}/>
    </Routes>
  )
}

//thong thuong home thi ko can / -> de dinh nghia trang chu mac dinh       <Route path='/' element ={<Home/>}/>


