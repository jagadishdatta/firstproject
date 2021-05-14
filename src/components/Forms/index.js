import React, { useState } from 'react';
import Formsignup from './Formsignup'; 
import FormSuccess from './FormSuccess';

 
const Newform = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    function submitForm() {
      setIsSubmitted(true);
    }

    return (
        <div>
           {!isSubmitted ? (
        <Formsignup submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
 </div>
    );
};

export default Newform;