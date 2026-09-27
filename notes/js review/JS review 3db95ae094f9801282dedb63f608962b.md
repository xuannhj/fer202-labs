# JS review

Môn học: FER202 (https://app.notion.com/p/FER202-fabefee53da14556a303630c35ebe5fd?pvs=21)
Ngày học: September 10, 2026
Note: về tổ chức lại 
Phân loại: Lý thuyết

```jsx
// // // 1 COMPONENT TRONG REACT
// // // CẤU TRÚC 4 PHẦN
// // // 1. IMPORT THƯ VIỆN

// // import React from "react";

// // //2. KHAI BÁO HÀM COMPONENT
// // // thực chất chỉ là 1 hàm trong JavaScript nhưng có thể trả về HTML để hiển thị giao diện
// // //=> có xuất hiện code js và code html trong cùng 1 file
// // // => đuôi file sẽ là JSX (JavaScript XML)

// // function App(){
// //   //3. TRẢ VỀ GIAO DIỆN HTML BẰNG LỆNH return(
// //   return (
// //     <h3>
// //       Hello
// //     </h3>
// //   )
// // }

// // //4. EXPORT COMPONENT RA NGOÀI ĐỂ SỬ DỤNG
// // export default App;

// //rfc: snippet tao component
// //FUNCTIONAL COMPONENT

// // import React from 'react'

// // export default function App() {
// //   return (
// //     <div>App</div>
// //   )
// // }

// //CLASS COMPONENT
// //rcc: snippet tao class component
// //trong class component có thêm 1 số tính năng nâng cao hơn so với functional component 
// //viet theo kieu nay phuc tap, ko xai dung nhieu, chi dung khi can su dung cac tinh nang nang cao cua class component
// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>App</div>
// //     )
// //   }
// // }

// import React from 'react'
// //1 component trong react gom 4 phan, import, khai bao component, tra ve giao dien html, export component ra ngoai
// export default function App() {
//   //truoc return la code
//   //ECMASCRIPT 6 (ES6)
//   // mot chuan de viet code JS
//   //- khai bao bien
//   //let, const, var
//   //let: chi hoat dong trong block scope (trogn khoi lenh)
//   //var: hoat dong trong function scope (trong toan bo ham)

//   //stict mode nen kq ra 2 lan 

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

//   const arrString = ["a", "c", "b", "d"];
//   //sap xep tang dan, tang dan theo bang chu cai
//   const arrStringSort = arrString.sort((a, b) => a.localeCompare(b));
//   console.log(arrStringSort);

//   //sap xep giam dan 
//   const arrStringSortDesc = arrString.sort((a, b) => b.localeCompare(a));
//   console.log(arrStringSortDesc);

  
//   return (
//     //trong return la giao dien
//     <div>App</div>
//   )
// }

```