import React, { useState } from 'react';
import Formsignup from './Formsignup'; 
import FormSuccess from './FormSuccess';


const Newform = () => {
  const [isSubmitted, setIsSubmitted] = useState(0);

  function submitForm() {
    setIsSubmitted(1);
  }
  return (
    <>
      <div className='form-container'>
      
            {!isSubmitted ? (
            <Formsignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
    </>
  );
};

export default Newform;

