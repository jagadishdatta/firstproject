import React, { useState } from 'react';
import { Formik, FormikConsumer, prepareDataForValidation, useFormik } from 'formik';
                const validate = values => {
                const errors = {};
                if (!values.firstName) {
                    errors.firstName = 'Required';
                } else if (values.firstName.length > 15) {
                    errors.firstName = 'Must be 15 characters or less';
                }
                
                if (!values.lastName) {
                    errors.lastName = 'Required';
                } else if (values.lastName.length > 20) {
                    errors.lastName = 'Must be 20 characters or less';
                }
                
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                
                return errors;
                };
                const SignupForm = () => {
                    const [submited,setIsSubmitted]=useState(false);
                    const formik = useFormik({
                    initialValues: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    },
                    validate,
                    onSubmit: values => {
                    setIsSubmitted(true);
                    fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'POST',
                    body: JSON.stringify({
                        name:formik.values.firstName,
                        username: formik.values.lastName,
                        email: formik.values.email,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    })
                    .then((response) => response.json())
                    .then((json) => console.log(json));

                        },
                    });
                return (

                    <form onSubmit={formik.handleSubmit}>
                    {submited ? <div>Thank you  </div> : null}
                     <label htmlFor="firstName">First Name  </label>
                    <input id="firstName"name="firstName" type="text"onChange={formik.handleChange}  value={formik.values.firstName} />
                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text"onChange={formik.handleChange} value={formik.values.lastName} />
                    {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                 <button type="submit">Submit</button>
                    </form>
                      );
                };
                export default SignupForm;