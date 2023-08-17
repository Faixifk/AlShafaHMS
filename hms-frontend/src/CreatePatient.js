import React, { useState } from 'react';
import axios from 'axios';

function CreatePatient() {
  const [patient, setPatient] = useState({
    name: '',
    phone_number: '',
    address: '',
    age: '',
  });

  const handleChange = (event) => {
    setPatient({...patient, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/patients/', patient)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={patient.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="phone_number" value={patient.phone_number} onChange={handleChange} placeholder="Phone number" required />
      <input type="text" name="address" value={patient.address} onChange={handleChange} placeholder="Address" required />
      <input type="number" name="age" value={patient.age} onChange={handleChange} placeholder="Age" required />
      <input type="text" name="gender" value={patient.gender} onChange={handleChange} placeholder="Gender" required />
      <button type="submit">Add Patient</button>
    </form>
  );
}

export default CreatePatient;
