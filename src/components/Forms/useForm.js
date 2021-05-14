import { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
   
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    lastname: ''
    
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
     setErrors(validate(values));
    setIsSubmitting(true);
    console.log({isSubmitting});
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
      
            alert("Thank you");
         

      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
