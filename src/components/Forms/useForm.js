import { useState, useEffect } from "react";
const useForm = (callback, validate) => {
  const [isOnline, setIsOnline] = useState(0);

  const [values, setValues] = useState({
    username: "",
    email: "",
    lastname: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    console.log({ isSubmitting });
    alert("succes");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      //  callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
