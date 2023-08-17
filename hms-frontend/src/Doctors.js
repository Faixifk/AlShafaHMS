import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateDoctor from './CreateDoctor';
import EditDoctor from './EditDoctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorToEdit, setDoctorToEdit] = useState(null);
  const apiUrl = 'http://127.0.0.1:8000/api/doctors/';

  const fetchDoctors = () => {
    axios.get(apiUrl)
      .then(response => setDoctors(response.data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const deleteDoctor = (id) => {
    axios.delete(`${apiUrl}${id}/`)
      .then(() => fetchDoctors())
      .catch(error => console.error(error));
  };

  const editDoctor = (doctor) => {
    setDoctorToEdit(doctor);
  };

  return (
    <div>
      <h1>Doctors</h1>
      <CreateDoctor refreshDoctors={fetchDoctors} />
      {doctorToEdit && <EditDoctor doctorToEdit={doctorToEdit} refreshDoctors={fetchDoctors} />}
      <ul>
        {doctors.map((doc) => (
          <li key={doc.id}>
            {doc.name} - {doc.specialty} - {doc.phone_number}
            <button onClick={() => editDoctor(doc)}>Edit</button>
            <button onClick={() => deleteDoctor(doc.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;
