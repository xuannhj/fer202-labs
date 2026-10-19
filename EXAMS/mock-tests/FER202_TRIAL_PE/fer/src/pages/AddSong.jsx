import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import * as Yup from 'yup'

const validationSchema = Yup.object({
  // 1. Title: Bắt buộc, tối thiểu 2 ký tự
  title: Yup.string()
    .trim()
    .min(2, "Title must have at least 2 characters")
    .required("Title is required"),

  // 2. Artist: Bắt buộc, phải nhiều hơn 1 từ
  artist: Yup.string()
    .trim()
    .test("multi-word", "Artist must contain more than 1 word", (value) => {
      return value ? value.trim().split(/\s+/).length > 1 : false;
    })
    .required("Artist is required"),

  // 3. Cover Image: Bắt buộc là URL
  coverImg: Yup.string()
    .url("Cover Image must be a valid URL")
    .required("Cover image is required"),

  // 4. Duration: Bắt buộc là số dương tối đa 3 chữ số (1 - 999)
  durationSec: Yup.number()
    .typeError("Duration must be a number")
    .positive("Duration must be positive")
    .max(999, "Duration must have maximum of 3 digits")
    .required("Duration is required"),

  // 5. Genre: Bắt buộc chọn
  genre: Yup.string()
    .required("Please select a genre"),
});


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
            title: "",
            artist: "",
            coverImg: "",
            durationSec: "",
            isTrending: false,
            genre: ""
        },
        validationSchema: validationSchema,

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
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control {...formik.getFieldProps("title")} />
        {formik.touched.title && (
           <Form.Text className="text-danger">{formik.errors.title}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="artist">
        <Form.Label>Artist</Form.Label>
        <Form.Control {...formik.getFieldProps("artist")} />
        {formik.touched.artist && (
           <Form.Text className="text-danger">{formik.errors.artist}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="coverImg">
        <Form.Label>Cover Image URL</Form.Label>
        <Form.Control {...formik.getFieldProps("coverImg")} />
        {formik.touched.coverImg && (
           <Form.Text className="text-danger">{formik.errors.coverImg}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="durationSec">
        <Form.Label>Duration in Seconds</Form.Label>
        <Form.Control type = "number" {...formik.getFieldProps("durationSec")} />
        {formik.touched.durationSec && (
           <Form.Text className="text-danger">{formik.errors.durationSec}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="isTrending">
        <Form.Check type="switch" label ="is Trending?" {...formik.getFieldProps("isTrending")}
        checked = {formik.values.isTrending}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="genre">
       <Form.Select {...formik.getFieldProps("genre")}>
          <option value="">Select a Genre</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Instrumental">Instrumental</option>
          <option value="Acoustic">Acoustic</option>
    </Form.Select>
        {formik.touched.genre && (
           <Form.Text className="text-danger">{formik.errors.genre}</Form.Text>
        )}
      </Form.Group>



      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default AddSong;
//value la de cho Yup biet va de gui len mockAPI
//getfieldprops 