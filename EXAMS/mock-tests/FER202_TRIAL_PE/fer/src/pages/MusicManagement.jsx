import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router';
//1. copy code table ben react bootstrap
//2. viet code goi api
export default function MusicManagement() {
   const [songs, setSongs] = useState([]);
     useEffect(() => {
        const fetchSongs = async () => {
            try {
               const response = await axios.get(import.meta.env.VITE_API_URL)
               setSongs(response.data.sort((a,b) => b.id - a.id))
            } catch (error) {
                console.log(error)
            }
        }
        fetchSongs()
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
          setSongs(songs.filter(song => song.id !== id))
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
      <Button as={Link} to='/se201170/add-song'>Add song</Button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Cover Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((item) =>         
        <tr key = {item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.artist}</td>
          <td>{item.genre}</td>
          <td><img src ={item.coverImg} height={60} width={80}/></td>
          <td>
            <Button as={Link} to ={'/se201170/update-song/'+ item.id}>
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
