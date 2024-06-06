import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { useNavigate} from 'react-router-dom'
import { FormControl, Button, Input, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: number;
  age: number;
  gender: boolean;
}

const Form: React.FC = (props) => {
    const navigate = useNavigate();
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    phone: 0,
    age: 0,
    gender: false,
  });

//   const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      gender: e.target.value === 'male',
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    // setSubmittedData(data);
    // navigate('/home');
  };
  console.log(data);

  return (
    <div className='form'>
      <FormControl>
        <Input
          required
          type='text'
          id='name'
          name='name'
          placeholder='Name'
          value={data.name}
          onChange={handleChange}
        />
        <Input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          value={data.email}
          onChange={handleChange}
        />
        <Input
          type='tel'
          id='phone'
          name='phone'
          placeholder='Mobile Number'
          value={data.phone.toString()}
          onChange={handleChange}
        />
        <Input
          type='number'
          id='age'
          name='age'
          placeholder='Age'
          value={data.age.toString()}
          onChange={handleChange}
        />
        <label htmlFor='gender'>Gender:</label>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="gender"
          value={data.gender ? 'male' : 'female'}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
      
      {data && (
        <div className='submitted-data'>
          <h2>Submitted Data</h2>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Age: {data.age}</p>
          <p>Gender: {data.gender ? 'Male' : 'Female'}</p>
        </div>
      )}
    </div>
  );
};

export default Form;