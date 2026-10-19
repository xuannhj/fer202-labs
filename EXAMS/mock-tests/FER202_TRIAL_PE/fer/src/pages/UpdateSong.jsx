import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router';

function UpdateSong() {
//1. copy toan bo code ben addsong qua updatesong
//2. thay viec goi api tu post sang put
//3. them id khi cho api endpoint  
//4. de lay dc id thi => useParam => hoook giup cho lay id tren thanh URL

//5. lay thong tin cu bang cach goi api 

    const { id } = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            //cac state de luu tru 
            title: " ",
            artist: " ",
            coverImg: " ",
            durationSec: " ",
            isTrending: false
        },
        onSubmit: async (values) => {
            //alert(JSON.stringify(values))
            //them moi bang cach goi axios.post va dua kem du lieu dua trong bien value
            try{
                await axios.put(import.meta.env.VITE_API_URL +'/' + id, values)
                //sau khi them moi thi chuyen trang ve music management
                //=> su dung navigate cua react router
                navigate('/se201170/music-management')
            }
            catch(error){
                console.log(error)
            }
        }
    })

    useEffect(() => {
    const fetchSong = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + '/' + id)
            //gan du lieu tra ve vao formik (intialvalue)
            formik.setValues({
                title: response.data.title,
                artist: response.data.artist,
                isTrending: response.data.isTrending
            })
        } catch (error){
            console.log(error)
        }
    }
    fetchSong()
}, [])


  return (
    <Container>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control {...formik.getFieldProps("title")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Artist</Form.Label>
        <Form.Control {...formik.getFieldProps("artist")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="switch" label ="is Trending?" {...formik.getFieldProps("isTrending")}/>
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default UpdateSong;