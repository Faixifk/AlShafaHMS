import React, { useState } from 'react';
import axios from 'axios';

const CreateDoctor = ({ refreshDoctors }) => {
  const [doctor, setDoctor] = useState({ name: '', specialty: '', phone_number: '' });
  const apiUrl = 'http://127.0.0.1:8000/api/doctors/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const createDoctor = () => {
    axios.post(apiUrl, doctor)
      .then(() => refreshDoctors())
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Create Doctor</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="specialty" placeholder="Specialty" onChange={handleChange} />
      <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange} />
      <button onClick={createDoctor}>Add Doctor</button>
    </div>
  );
};

export default CreateDoctor;
