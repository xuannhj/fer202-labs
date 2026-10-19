import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router';
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
              coverImg: response.data.coverImg,
              durationSec: response.data.durationSec,
              genre: response.data.genre,
              isTrending: response.data.isTrending,
            })
        } catch (error){
            console.log(error)
        }
    }
    fetchSong()
}, [id])


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
        Update
      </Button>
    </Form>
    </Container>
  );
}

export default UpdateSong;