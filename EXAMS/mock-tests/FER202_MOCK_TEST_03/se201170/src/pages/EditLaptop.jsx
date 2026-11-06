import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router';
import * as Yup from 'yup'

const validationSchema = Yup.object({
  laptopName: Yup.string()
      .trim()
      .min(3, "Laptop name must have at least 2 characters")
      .required("Laptop name is required"),
  
    brand: Yup.string()
      .trim()
      .test("at-least-2-words", "Brand name must consist of at least 2 words", (value) => {
        return value ? value.trim().split(/\s+/).length >= 2 : false;
      })
      .required("Brand name is required"),
  
    imageUrl: Yup.string()
      .url("Sneaker Image must be a valid URL")
      .required("Sneaker image is required"),
  
   priceUSD: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive integer")
    .integer("Price must be an integer")
    .min(100).max(5000)
    .required("Price is required"),
  
    category: Yup.string()
      .required("Please select a genre"),
      
    isBestSeller: Yup.boolean(),

});

function EditLaptop() {
    const { id } = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            laptopName: "",
            brand: "",
            imageUrl: "",
            priceUSD: "",
            isBestSeller: false,
            category: ""
        },
        validationSchema: validationSchema,

        onSubmit: async (values) => {
            try{
                await axios.put(`${import.meta.env.VITE_API_URL}/${id}`, values)
            
                navigate('/se201170/laptop-management')
                alert("Updated laptop successfully!");
            }
            catch(error){
                console.log(error)
            }       
        }
   
    })

    useEffect(() => {
    const fetchLaptop = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + '/' + id);
      formik.setValues({
        laptopName: response.data.laptopName,
        brand: response.data.brand,
        imageUrl: response.data.imageUrl,
        priceUSD: response.data.priceUSD,
        isBestSeller: response.data.isBestSeller,
        category: response.data.category,
      });
    } catch (error) {
      console.log(error);
    }
  };
  fetchLaptop();
}, [id]);
  return (
    <Container>
<Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="laptopName">
        <Form.Label>Name: </Form.Label>
        <Form.Control {...formik.getFieldProps("laptopName")} />
        {formik.touched.laptopName && (
           <Form.Text className="text-danger">{formik.errors.laptopName}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="brand">
        <Form.Label>Brand: </Form.Label>
        <Form.Control {...formik.getFieldProps("brand")} />
        {formik.touched.brand && (
           <Form.Text className="text-danger">{formik.errors.brand}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="imageUrl">
        <Form.Label>Cover Image URL</Form.Label>
        <Form.Control {...formik.getFieldProps("imageUrl")} />
        {formik.touched.imageUrl && (
           <Form.Text className="text-danger">{formik.errors.imageUrl}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="priceUSD">
        <Form.Label>Price </Form.Label>
        <Form.Control type = "number" {...formik.getFieldProps("priceUSD")} />
        {formik.touched.priceUSD && (
           <Form.Text className="text-danger">{formik.errors.priceUSD}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="isBestSeller">
        <Form.Check type="switch" label ="is Best Seller?" {...formik.getFieldProps("isBestSeller")}
        checked = {formik.values.isBestSeller}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
       <Form.Select {...formik.getFieldProps("category")}>
          <option value="">Select a Category</option>
          <option value="Gaming">Gaming</option>
          <option value="Office">Office</option>
          <option value="Ultrabook">Ultrabook</option>
          <option value="Graphic">Graphic</option>
          <option value="Student">Student</option>
    </Form.Select>
        {formik.touched.category && (
           <Form.Text className="text-danger">{formik.errors.category}</Form.Text>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </Container>
  );
}

export default EditLaptop;
//value la de cho Yup biet va de gui len mockAPI
//getfieldprops 
