import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Form,Button,Container,Row,Col} from 'react-bootstrap';
const Feedbackformik = () => {
   const [status,setStatus]=useState(false);
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     validationSchema: Yup.object({
       firstName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
       lastName: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
     }),
     onSubmit: values => {
       setStatus(true);
       formik.resetForm()
       setTimeout(() => {
         setStatus(false)
         }, 3000);
       
     },
   });
   return (
    <form onSubmit={formik.handleSubmit}>
        {status && <h1>Thank you</h1> }
        <div class="form-group">
          <Form.Label>First Name</Form.Label>
          <input
            className="form-control"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
       </div>
       <div className="form-group">
          <Form.Label>Last Name</Form.Label>
          <input
            className="form-control"
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
       </div>
       <div className="form-group">
          <Form.Label>Email Address</Form.Label>  
          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

        </div>
        <div className="form-group">        
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
       </div>

    </form>   
   
   );
 };

export default Feedbackformik;