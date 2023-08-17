import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/patients/')
      .then(response => setPatients(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Patients</h1>
      {patients.map(patient => (
        <div key={patient.phone_number} className="card">
          <h2>{patient.name}</h2>
          <p>Phone Number: {patient.phone_number}</p>
          <p>Address: {patient.address}</p>
          <p>Age: {patient.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Patients;
