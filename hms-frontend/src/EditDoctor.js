import React, { useState } from 'react';
import axios from 'axios';

const EditDoctor = ({ doctorToEdit, refreshDoctors }) => {
  const [doctor, setDoctor] = useState(doctorToEdit);
  const apiUrl = `http://127.0.0.1:8000/api/doctors/${doctor.id}/`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const updateDoctor = () => {
    axios.put(apiUrl, doctor)
      .then(() => refreshDoctors())
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Edit Doctor</h2>
      <input type="text" name="name" value={doctor.name} onChange={handleChange} />
      <input type="text" name="specialty" value={doctor.specialty} onChange={handleChange} />
      <input type="text" name="phone_number" value={doctor.phone_number} onChange={handleChange} />
      <button onClick={updateDoctor}>Update Doctor</button>
    </div>
  );
};

export default EditDoctor;
