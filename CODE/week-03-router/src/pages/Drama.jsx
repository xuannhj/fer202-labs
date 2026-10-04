import React from 'react'
import { useParams } from 'react-router'
import { data } from '../../data';

export default function Drama() {
    //de lay thong tin tu id tu route da dc dinh nghia
    //su dung hook useParam()
    // su dung destructuring 

    const {id} = useParams()
    console.log(id);
    //trang hien thi drama theo id
    //tim drama co id bang id cua useparam() lay dc -> lay thong tin tu ben kia truyen sang
    const drama = data.find(x => x.id === id);
    console.log(drama)
    return (
    <>
    <h2>{drama.name}</h2>
    <h2>{drama.drama}</h2>
    </>

    //lab 1, 2, 3
    //luu y khi lam lab 2: khi bấm vào hình, thì mở modal
    //lab 3: khi bấm vào tên hoa, thì mở trang details
    // tuần sau sẽ thầy nói bài ktra - deadline tuần 5 
  )
}
