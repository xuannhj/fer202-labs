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
               //setSongs(response.data.sort((a,b) => b.id - a.id))
               //if sort theo id thi dung  setSongs(response.data.sort((a,b) => b.id - a.id))
               //but if sort theo string thi dung 
               setSongs(response.data.sort((a,b) => a.title.localeCompare(b.title)))
               //LOCALEEEEEE 

               //but if sort theo ngay thi sao? 
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
