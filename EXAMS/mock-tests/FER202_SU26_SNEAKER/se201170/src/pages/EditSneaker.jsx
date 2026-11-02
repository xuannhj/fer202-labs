import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router';
import * as Yup from 'yup'

const validationSchema = Yup.object({
  sneakerName: Yup.string()
    .trim()
    .min(2, "Sneaker name must have at least 2 characters")
    .required("Sneaker name is required"),

  brandName: Yup.string()
    .trim()
    .test("at-least-2-words", "Brand name must consist of at least 2 words", (value) => {
      return value ? value.trim().split(/\s+/).length >= 2 : false;
    })
    .required("Brand name is required"),

  sneakerImageUrl: Yup.string()
    .url("Sneaker Image must be a valid URL")
    .required("Sneaker image is required"),

 retailPriceK: Yup.number()
  .typeError("Price must be a number")
  .positive("Price must be a positive integer")
  .integer("Price must be an integer")
  .max(999, "Price must be at most 3 digits")
  .required("Price is required"),

  sneakerCategory: Yup.string()
    .required("Please select a genre"),
    
  isLimitedEdition: Yup.boolean(),
});

function EditSneaker() {
    const { id } = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            sneakerName: "",
            brandName: "",
            sneakerImageUrl: "",
            retailPriceK: "",
            isLimitedEdition: false,
            sneakerCategory: ""
        },
        validationSchema: validationSchema,

        onSubmit: async (values) => {
            try{
                await axios.put(`${import.meta.env.VITE_API_URL}/${id}`, values)
            
                navigate('/se201170/sneaker-management')
            }
            catch(error){
                console.log(error)
            }       
        }
   
    })

    useEffect(() => {
    const fetchSneaker = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + '/' + id);
      formik.setValues({
        sneakerName: response.data.sneakerName,
        brandName: response.data.brandName,
        sneakerImageUrl: response.data.sneakerImageUrl,
        retailPriceK: response.data.retailPriceK,
        isLimitedEdition: response.data.isLimitedEdition,
        sneakerCategory: response.data.sneakerCategory,
      });
    } catch (error) {
      console.log(error);
    }
  };
  fetchSneaker();
}, [id]);
  return (
    <Container>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="sneakerName">
        <Form.Label>Name: </Form.Label>
        <Form.Control {...formik.getFieldProps("sneakerName")} />
        {formik.touched.sneakerName && (
           <Form.Text className="text-danger">{formik.errors.sneakerName}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="brandName">
        <Form.Label>Brand: </Form.Label>
        <Form.Control {...formik.getFieldProps("brandName")} />
        {formik.touched.brandName && (
           <Form.Text className="text-danger">{formik.errors.brandName}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="sneakerImageUrl">
        <Form.Label>Cover Image URL</Form.Label>
        <Form.Control {...formik.getFieldProps("sneakerImageUrl")} />
        {formik.touched.sneakerImageUrl && (
           <Form.Text className="text-danger">{formik.errors.sneakerImageUrl}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="retailPriceK">
        <Form.Label>retailPriceK: </Form.Label>
        <Form.Control type = "number" {...formik.getFieldProps("retailPriceK")} />
        {formik.touched.retailPriceK && (
           <Form.Text className="text-danger">{formik.errors.retailPriceK}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="isLimitedEdition">
        <Form.Check type="switch" label ="is Limited?" {...formik.getFieldProps("isLimitedEdition")}
        checked = {formik.values.isLimitedEdition}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="sneakerCategory">
       <Form.Select {...formik.getFieldProps("sneakerCategory")}>
          <option value="">Select a Category</option>
          <option value="Running">Running</option>
          <option value="Basketball">Basketball</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Skateboarding">Skateboarding</option>
          <option value="Training">Training</option>
    </Form.Select>
        {formik.touched.sneakerCategory && (
           <Form.Text className="text-danger">{formik.errors.sneakerCategory}</Form.Text>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </Container>
  );
}

export default EditSneaker;
//value la de cho Yup biet va de gui len mockAPI
//getfieldprops 
