import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, Button, RadioGroup, FormControlLabel, Radio, FormGroup, TextField, FormLabel } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from './types';
import { useFormStore } from './FormStore';
import './test.css';

const Form: React.FC = () => {
  const { register, handleSubmit, formState} = useForm<FormData>(); 
  const { errors } = formState;
  const setFormData = useFormStore((state) => state.setFormData);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    setFormData(data);
    sessionStorage.setItem('formData', JSON.stringify(data));
    navigate('/details');
  };
  
  return (
    <div className='form'>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormControl>
          <FormGroup>
          <TextField
            type='text'
            id='outlined-basic'
            label={errors.name?.message || 'Name'}
            {...register('name', { required:{
              value: true,
              message: "Name is required" }})}
            error={!!errors.name}
          />
          <TextField
            type='email'
            id='outlined-basic'
            label={errors.email?.message || 'Email'}
            {...register('email', { required:
              "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email} 
          />
          <TextField
            type='tel'
            id='outlined-basic'
            label={errors.phone?.message || 'Mobile Number'}
            {...register('phone', { required:
              "Mobile Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid Mobile Number",
              },
            })} 
            error={!!errors.phone}
          />
          <TextField
            type='number'
            id='outlined-basic'
            label='Age'
            {...register('age')}
          />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            {...register('gender')} 
          >
            <FormControlLabel value="false" control={<Radio />} label="Female" />
            <FormControlLabel value="true" control={<Radio />} label="Male" />
          </RadioGroup>
          <Button type="submit" variant="contained" color="primary"> 
            Submit
          </Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
};

export default Form;
