import React, {useState, useEffect}from 'react'
import { FormData } from './types'
import { useFormStore } from './FormStore'
import './details.css'

const Details = () => {
  const formData = useFormStore((state) => state.formData);
  // const [displayData, setdisplayData] = useState<FormData | null>(null);
  // useEffect(() => {
  //   const formData = sessionStorage.getItem('formData');
  //   if (formData) {
  //     setdisplayData(JSON.parse(formData));
  //   }
  // }, []);
  // console.log(displayData);
  return (
    <div className='container'>
      <h1>Your Details</h1>
      <p>Name: {formData?.name}</p>
      <p>Email: {formData?.email}</p>
      <p>Phone: {formData?.phone}</p>
      <p>Age: {formData?.age}</p>
      <p>Gender: {formData?.gender ? 'Female' : 'Male'}</p>
    </div>
  )
}

export default Details
