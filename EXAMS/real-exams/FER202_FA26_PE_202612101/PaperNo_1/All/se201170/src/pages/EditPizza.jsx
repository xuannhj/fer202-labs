import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router';
import * as Yup from 'yup'

const validationSchema = Yup.object({
  pizzaName: Yup.string()
      .trim()
      .min(2, "Pizza name must have at least 2 characters")
      .required("Pizza name is required"),
  
    imageUrl: Yup.string()
      .url("Pizza Image must be a valid URL")
      .required("Pizza image is required"),
  
   diameterCm: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive integer")
    .integer("Price must be an integer")
    .min(20).max(60)
    .required("Diameter is required"),
  
      promotionEndDate: Yup.date()
      .min(new Date('2026-11-01'), "Promotion end date must be after November 1, 2026")
      .max(new Date('2027-12-31'), "Promotion end date must be before December 31, 2027")
      .required("Promotion end date is required"),
  
      
    crustType: Yup.string()
      .oneOf(["Neapolitan", "Thin Crust", "Thick Crust", "Whole Wheat", "Stuffed Crust"], "Crust type must be Neapolitan, Thick Crust, Thick Crust, Whole Wheat, or Stuffed Crust")
      .required("Crust type is required"),
  
    isVegetarian: Yup.boolean(),

});

function EditPizza() {
    const { id } = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            pizzaName: "",
            imageUrl: "",
            diameterCm: "",
            promotionEndDate: "",
            isVegetarian: false,
            crustType: ""
        },
        validationSchema: validationSchema,

        onSubmit: async (values) => {
            try{
                await axios.put(`${import.meta.env.VITE_API_URL}/${id}`, values)
            
                navigate('/se201170/pizza-management')
                alert("Updated pizza successfully!");
            }
            catch(error){
                console.log(error)
            }       
        }
   
    })

    useEffect(() => {
    const fetchPizza = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + '/' + id);
      formik.setValues({
        pizzaName: response.data.pizzaName,
        crustType: response.data.crustType,
        imageUrl: response.data.imageUrl,
        diameterCm: response.data.diameterCm,
        promotionEndDate: response.data.promotionEndDate,
        isVegetarian: response.data.isVegetarian,
      });
    } catch (error) {
      console.log(error);
    }
  };
  fetchPizza();
}, [id]);
  return (
    <Container>
<Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="pizzaName">
        <Form.Label>Name: </Form.Label>
        <Form.Control {...formik.getFieldProps("pizzaName")} />
        {formik.touched.pizzaName && (
           <Form.Text className="text-danger">{formik.errors.pizzaName}</Form.Text>
        )}
      </Form.Group>


      <Form.Group className="mb-3" controlId="imageUrl">
        <Form.Label>Cover Image URL</Form.Label>
        <Form.Control {...formik.getFieldProps("imageUrl")} />
        {formik.touched.imageUrl && (
           <Form.Text className="text-danger">{formik.errors.imageUrl}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="diameterCm">
        <Form.Label>diameterCm </Form.Label>
        <Form.Control type = "number" {...formik.getFieldProps("diameterCm")} />
        {formik.touched.diameterCm && (
           <Form.Text className="text-danger">{formik.errors.diameterCm}</Form.Text>
        )}
      </Form.Group>


        <Form.Group className="mb-3" controlId="promotionEndDate">
        <Form.Label>Promotion End Date: </Form.Label>
        <Form.Control type="date" {...formik.getFieldProps("promotionEndDate")}  data-bs-toggle="datepicker"/>
        {formik.touched.promotionEndDate && (
           <Form.Text className="text-danger">{formik.errors.promotionEndDate}</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="isVegetarian">
        <Form.Check type="switch" label ="is Vegetarian?" {...formik.getFieldProps("isVegetarian")}
        checked = {formik.values.isVegetarian}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="crustType">
       <Form.Select {...formik.getFieldProps("crustType")}>
          <option value="">Select a Crust Type</option>
          <option value="Neapolitan">Neapolitan</option>
          <option value="Thin Crust">Thin Crust</option>
          <option value="Thick Crust">Thick Crust</option>
          <option value="Whole Wheat">Whole Wheat</option>
          <option value="Stuffed Crust">Stuffed Crust</option>
    </Form.Select>
        {formik.touched.crustType && (
           <Form.Text className="text-danger">{formik.errors.crustType}</Form.Text>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </Container>
  );
}

export default EditPizza;

