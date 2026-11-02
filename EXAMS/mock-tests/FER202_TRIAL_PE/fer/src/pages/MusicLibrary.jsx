import axios from 'axios';
import React, {useEffect, useState } from 'react'
import MyCard from '../components/MyCard';
import Container from 'react-bootstrap/esm/Container';
import {Row} from 'react-bootstrap';

export default function MusicLibrary() {
    //task 2.2
    //lay du lieu tu mock api 
    //caanf co 1 bien de luu thong tin lai
    //khai bao state cho danh sach bai hat 
    const [songs, setSongs] = useState([]);
     //goi api 2. useeffect
     useEffect(() => {
        const fetchSongs = async () => {
            try {
               const response = await axios.get(import.meta.env.VITE_API_URL)
               //> hardcode api endpoint => 0d

               // ================= CÁC CÁCH SẮP XẾP (SORT) TRONG BÀI THI PE =================
               // Mẹo nhớ nhanh:
               // - Tăng dần (Ascending / A -> Z / Nhỏ -> Lớn / Cũ -> Mới): a đứng trước b (a - b)
               // - Giảm dần (Descending / Z -> A / Lớn -> Nhỏ / Mới -> Cũ): b đứng trước a (b - a)

               // 1. SẮP XẾP THEO SỐ (id, durationSec, price, rating, views,...):
               // - Giảm dần (Lớn -> Nhỏ):
               // setSongs(response.data.sort((a, b) => b.id - a.id))
               // setSongs(response.data.sort((a, b) => b.durationSec - a.durationSec))
               // - Tăng dần (Nhỏ -> Lớn):
               // setSongs(response.data.sort((a, b) => a.durationSec - b.durationSec))

               // 2. SẮP XẾP THEO CHUỖI / TÊN (title, name, artist,...): dùng .localeCompare()
               // - Tăng dần (A -> Z):
               setSongs(response.data.sort((a, b) => a.title.localeCompare(b.title)))
               // - Giảm dần (Z -> A):
               // setSongs(response.data.sort((a, b) => b.title.localeCompare(a.title)))

               // 3. SẮP XẾP THEO NGÀY THÁNG (releaseDate, createdAt, date,...): bọc vào new Date()
               // - Mới nhất lên đầu (Giảm dần - Descending):
               // setSongs(response.data.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)))
               // - Cũ nhất lên đầu (Tăng dần - Ascending):
               // setSongs(response.data.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)))

               // 4. SẮP XẾP THEO BOOLEAN (isTrending, isFavorite,...):
               // - Ưu tiên true lên đầu, false xuống dưới:
               // setSongs(response.data.sort((a, b) => Number(b.isTrending) - Number(a.isTrending)))

               // 5. SẮP XẾP KẾT HỢP 2 TIÊU CHÍ (VD: Sort theo duration giảm dần, nếu bằng nhau thì sort theo title A-Z):
               // setSongs(response.data.sort((a, b) => (b.durationSec - a.durationSec) || a.title.localeCompare(b.title)))

               //response la object- trong object co data nen phai response.data
            } catch (error) {
                console.log(error)
            }
        }
        fetchSongs()

     }, [])

  return (
    <>
    <Container>
        <Row>
    {songs.map((song) => <MyCard song ={song} key={song.id}/>)}
    </Row>
     </Container>
    </>
  )
}
