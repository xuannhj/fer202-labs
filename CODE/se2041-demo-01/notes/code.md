// 1 COMPONENT TRONG REACT
// CẤU TRÚC 4 PHẦN
// 1. IMPORT THƯ VIỆN

// import React from "react";

//2. KHAI BÁO HÀM COMPONENT
// thực chất chỉ là 1 hàm trong JavaScript nhưng có thể trả về HTML để hiển thị giao diện
//=> có xuất hiện code js và code html trong cùng 1 file
// => đuôi file sẽ là JSX (JavaScript XML)

// function App(){
//   //3. TRẢ VỀ GIAO DIỆN HTML BẰNG LỆNH return(
//   return (
//     <h3>
//       Hello
//     </h3>
//   )
// }

//4. EXPORT COMPONENT RA NGOÀI ĐỂ SỬ DỤNG
// export default App;

//rfc: snippet tao component
//FUNCTIONAL COMPONENT

// import React from 'react'

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

//CLASS COMPONENT
//rcc: snippet tao class component
//trong class component có thêm 1 số tính năng nâng cao hơn so với functional component 
//viet theo kieu nay phuc tap, ko xai dung nhieu, chi dung khi can su dung cac tinh nang nang cao cua class component
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// import React from 'react'
//1 component trong react gom 4 phan, import, khai bao component, tra ve giao dien html, export component ra ngoai
// export default function App() {
//truoc return la code
//ECMASCRIPT 6 (ES6)
// mot chuan de viet code JS
//- khai bao bien
//let, const, var
//let: chi hoat dong trong block scope (trogn khoi lenh)
//var: hoat dong trong function scope (trong toan bo ham)

//stict mode nen kq ra 2 lan 

//   function doSomething(){
//     console.log("Hello");
//   }
//   doSomething();

//   //ARROW FUCTION 
//   const doSomething2 = () => {
//     console.log("Hello")
//   }

//   //Ham tinh tong 2 so
//   // function sum(a, b){
//   //   return a + b;
//   // }

//   const sum = (a, b) => a + b;
//   const square = x => x * x;
//   console.log("Tong cua 2 va 3 la: " + sum(2, 3));
//   console.log("Binh phuong cua 5 la: " + square(5));

//   //template string/template literal
// // - cho phep viet code JS trong chuoi: ${}
//   const name = "Nguyen Van A";
//   const address = "Ha Noi";
//   console.log(`Ten cua toi la: ${name}, dia chi cua toi la: ${address}`);
// //conditional redering (toan tu 3 ngoi)
//   const a = 5;
//   console.log(a > 0 ? "Duong" : "Am");
// // khai bao mang/object
//   const arr = [1, 2, 3, 4, 5];
//   const obj = {
//     "key" : "value",
//     "name" : "Nguyen Van A",
//     "age" : 20
//   }
//   console.log(obj.name);

//   //destructuring
//   //const myName = obj.name;
//   //const myAddress = obj.address;

//   const {name: myName, age: myAge} = obj;
//   console.log(myName, myAge);


//   const [arr1, arr2] = arr;
//   console.log(arr1, arr2);



//   //SPREAD OPERATOR: ...
//   // copy mang, object
//   const arr3 = arr;
//   arr3.push(6);
//   //neu gan truc tiep thi 2 bien
//   //arr va arr3 se cung tham chieu den 1 mang
//   //=> arr3 thay doi thi arr cung se thay doi
//   //=>nen luc nay moi can copy mang

//   const arr4 = [...arr];
//   arr4.push(7);

//   console.log(arr);
//   console.log(arr4);

//   for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//   }
//   // trong js dung Map
//   //cung la duyet qua mang nhung voi moi phan tu cua mang thi se tra ve 1 gia tri moi nao do
//   //- map: se tao ra 1 mang moi 

//   const arrDouble = arr.map((item) => item * 2)
//   //Duyet qua tung phan tu cua mang arr
//   // va luu thanh bien dai dien item
//   //tra ve gia tri moi la item * 2
//   console.log(arrDouble) 


//   // filter
//   const arrEven = arr.filter((item) => item % 2 === 0)
//   // === so sanh ve ca gia tri + kieu du lieu
//   console.log(arrEven);

//   //sort 
//   const arrSort = arr.sort((a, b) => b - a);
//   console.log(arrSort);
//   //danh cho mang so
//   //sap xep giam dan: b - a
//   //sap xep tang dan: a - b

//   //-danh cho mang chuoi

// //   const arrString = ["a", "c", "b", "d"];
// //   //sap xep tang dan, tang dan theo bang chu cai
// //   const arrStringSort = arrString.sort((a, b) => a.localeCompare(b));
// //   console.log(arrStringSort);

// //   //sap xep giam dan 
// //   const arrStringSortDesc = arrString.sort((a, b) => b.localeCompare(a));
// //   console.log(arrStringSortDesc);


// //   return (
// //     //trong return la giao dien
// //     <div>App</div>
// //   )
// // }


// import React from 'react'
// import MyComponent from './components/MyComponent'
// import Component2 from './components/Component2'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import MyNavBar from './components/MyNavBar';
// import MyCards from './components/MyCards';

// const data = [
//   {
//     "id": "1",
//     "name":"J97",
//     "image" :"https://image.lag.vn/upload/news/26/08/14/1786088177117-ry1q2ig0-c58a8ff1-5591-4a9f-87df-619677e0e1ad_VJIW.png"
//   },

//   {"id": "2",
//     "name": "Son Tung MTP",
//     "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCyMRCngVHLGNuOiA9WtZ-l2bkrZfhvpKGQZkJ5vwUQ&s=10"
//   },

// ]
// //de viet duoc code JavaScript ben trong the return thi phai de trong dau {}



// //muon xai component thi 
// //B1: import component do vao file can su dung
// //B2: Goi component
// //C1: the tu dong dong
// //<MyComponent/>


// //C2: the mo va the dong
// //<MyComponent>
// // </MyComponent>
// export default function App() {
// //Luu y: trong 1 component chi co the tra ve 1 the duy nhat
// // nhung van co nhu cau co nhieu the => su dung fragment
// //fragment: la mot the ko co ten <></> 

// //BT: tìm và sử dụng component navbar trong react-boostrap
//   return (
//     <>
//       <MyNavBar/>
//       <Container>
//         <Row>
//       {data.map(item => 
//       <>
//         {/* <h3> {item.id} - {item.name}</h3>
//         <img src = {item.image} width={200}/> */}
//         <><MyCards info={item}/>
//         </>
//       </>
//       )}  
//       </Row>
//       </Container>
//     </>
//     //co nhu cau day thong tin trong item qua MyCard => property: thuoc tinh, viet tat la props
//     //day la thuoc tinh cua component => props se truyen thong tin qua cho component

//     //sap xep cac component  thanh dang grid
//     //container + row + col 

//   )
// }





// //TUAN 2 - SLOT 2
// import { Button } from 'react-bootstrap'
// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


// export default function App() {
//   //lab 2: giao dien sang toi
//   //2 trang thai: sáng, tối
//   //=> khi có sự thay đổi trạng thái
//   //=> sử dụng hook useState
//   //bg, data-bs-theme có sự thay đổi trạng thái từ dark => light
//   const [theme, setTheme] = useState('dark');
//   const handleTheme = () => {
//     //conditional rendering
//     setTheme(theme === "light"? "dark" : "light");
//   }
//   return (
//     <div><>
//       <Navbar bg={theme} data-bs-theme={theme}>
//         <Container>
//           <Navbar.Text onClick={() => handleTheme()}>

//             {theme === "light" ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-rain-fill" viewBox="0 0 16 16">
//   <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973"/>
// </svg> : }
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
//   <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
// </svg>
//           </Navbar.Text>

//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//     </></div>
//   )
// }


// //is not defined ~ chua import
// //nho phai import css cua react boostrap
// //luon nho phai cai thu vien npm install react-bootstrap bootstrap
// // ⇒ HOOK: Các hàm để xử lý một vấn đề gì đó

// // Để cho REACT biết khi nào cần Render

// // Khi có một biến thay đổi giá trị ⇒ useState()

// // ⇒ Cách sử dụng

// // - Cách khai báo
// // [bien luu thong tin, ham thay doi gtri cua bien]= useState([gtri khoi tao])
// //const [x, setX] = useState(z);
// // export default function App() {
// //   //var count = 25;
// //   const [count, setCount] = useState(25);
// //   return (
// //     <>
// //     <h3>Count: {count}</h3>

// //     <Button variant='primary' 
// //     onClick = {
// //       () => {
// //       //count += 1; KO DÙNG DC
// //       setCount(count => count + 1);
// //       console.log(count);
// //       }
// //     } > + </Button>

// //     <Button variant='danger' 
// //     onClick = {
// //     () => {
// //       setCount (count - 1);
// //       console.log(count);
// //       }
// //     }
// //     > - </Button>

// //      </>
// //   )
// // }
// 

//modal - porthub
// import React from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';


// export default function App() {
//   //Trang thai cua Modal: true, false
//   const [show, setShow] = useState(false);
//   const handleShow = () => {
//     //neu show dang la false se goi setshow -> true de chuyen thanh true VA NGUOC LAI
//     show === false ? setShow(true) : setShow(false)
//   }
//   return (
//     <> 
//     <Button onClick ={() => handleShow()}>Show</Button>
//     <><Modal show={show} onHide={() => handleShow()}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => handleShow()}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={() => handleShow()}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       </></>
//   )
// }
