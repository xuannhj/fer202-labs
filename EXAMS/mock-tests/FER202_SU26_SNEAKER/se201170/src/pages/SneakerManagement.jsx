import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router';
//1. copy code table ben react bootstrap
//2. viet code goi api
export default function SneakerManagement() {
   const [sneakers, setSneakers] = useState([]);
     useEffect(() => {
        const fetchSneakers = async () => {
            try {
               const response = await axios.get(import.meta.env.VITE_API_URL)
               setSneakers(response.data.sort((a,b) => Number(a.id) - Number(b.id)))
            } catch (error) {
                console.log(error)
            }
        }
        fetchSneakers()
     }, [])
     //ham xu ly xoa

     const handleDelete = async (id) =>
     {
      //goi api de nho mock api xoa giup 
      //delete HTTPS://XXX/SE123456/id? => id = 1 => xoa phan tu co id = 1
      //luu y phai noi chuoi 

      //1.hoi trc khi xoa
      if (window.confirm("Are you sure you want to delete?")){
        try {
            await axios.delete(import.meta.env.VITE_API_URL + '/' + id)
          //su dung template string
          //await axios.delte(`${import.meta.env.VITE_API_URL}/${id}`)

          //tuy nhien thi sau khi xoa, phai tai lai danh sach bai hat
          //=> goi lai ham setsongs() voi du lieu moi tru di thang da xoa
          setSneakers(sneakers.filter(sneaker => sneaker.id !== id))
          //loc ra cac bai hat ma khac voi id duoc xoa
          //thong bao sau khi xoa
          alert("Deleted successfully!")
        }

          catch(error) {
            console.log(error)
          }
        }
      } 
      
  return (
    <Container>
      <Button as={Link} to='/se201170/add-sneaker'>Add a Sneaker</Button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sneakers.map((item) =>         
        <tr key = {item.id}>
          <td>{item.id}</td>
          <td>{item.sneakerName}</td>
          <td>{item.brandName}</td>
          <td>{item.sneakerCategory}</td>
          <td><img src ={item.sneakerImageUrl} height={70} width={70}/></td>
          <td>
            <Button as={Link} to ={'/se201170/edit-sneaker/'+ item.id}>
              Edit
            </Button>
            <Button onClick={() => handleDelete(item.id)} variant='danger'>
              Delete
            </Button>
          </td>
        </tr>
      )}

      </tbody>
    </Table>
    </Container>
  )
}
