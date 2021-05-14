import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
const Fromsignup = (submitForm) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
      );
    return (
        <div>
             <h2>Forms </h2>
             <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>lastname</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your username'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
       
       
        <button className='form-input-btn' type='submit'>
        Submit 
        </button>
       
      </form>
    </div>
        </div>
      
    );
};

export default Fromsignup;