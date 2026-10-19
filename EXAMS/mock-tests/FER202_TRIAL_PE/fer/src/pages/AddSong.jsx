import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

function AddSong() {
    //1. copy code forms tren react bootstrap
    //2. edit lai cac forms control cho dung cac thuoc tinh iu cau 
    //3. khai bao formik
    //4. noi formik voi form control = thuoc tinh getFieldProp
    //5. noi onsubmit cua Form voi formik -> handleSubmit 
    //6. goi api de them moi => axios.POST
    //7. su dung const navigate

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
                await axios.post(import.meta.env.VITE_API_URL, values)
                //sau khi them moi thi chuyen trang ve music management
                //=> su dung navigate cua react router
                navigate('/se201170/music-management')
            }
            catch(error){
                console.log(error)
            }
            
            
        }
    })
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

export default AddSong;