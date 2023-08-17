import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreatePrescription() {
  const [doctors, setDoctors] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [totalAmount, setTotalAmount] = useState('');  // Add a state variable for totalAmount

  // Fetch doctors on component mount
  useEffect(() => {
    axios.get('http://localhost:8000/api/doctors/')
      .then(response => setDoctors(response.data))
      .catch(error => console.error(error));
  }, []);

  const handlePhoneChange = event => setPhoneNumber(event.target.value);

  const handleDoctorChange = event => setSelectedDoctor(event.target.value);

  const handleTotalAmountChange = event => setTotalAmount(event.target.value);  // Add a change handler for totalAmount

  const handleSubmit = event => {
    event.preventDefault();

    // Check if a patient with the given phone number exists
    axios.get(`http://localhost:8000/api/patients/phone/${phoneNumber}/`)
      .then(response => {
        // If the patient exists, proceed to create the prescription
        axios.post('http://localhost:8000/api/prescriptions/', {
          doctor: selectedDoctor,
          patient: response.data.id,
          total_amount: totalAmount,  // Add totalAmount to the POST request data
          date_time: new Date().toISOString(),  // Add the current date and time in ISO 8601 format
        })
        .then(response => console.log(response))
        .catch(error => console.error(error));
      })
      .catch(error => {
        // If the patient does not exist, prompt to create a new patient
        if (error.response.status === 404) {
          window.alert('Patient does not exist. Please create a new patient first.');
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <select name="doctor" value={selectedDoctor} onChange={handleDoctorChange} required>
        <option value="">--Please choose a doctor--</option>
        {doctors.map(doctor => (
          <option value={doctor.id} key={doctor.id}>{doctor.name}</option>
        ))}
      </select>
      <input type="tel" name="phone_number" value={phoneNumber} onChange={handlePhoneChange} placeholder="Patient phone number" required />
      <input type="number" name="total_amount" value={totalAmount} onChange={handleTotalAmountChange} placeholder="Total amount" required />  {/* Add an input field for totalAmount */}
      <button type="submit">Create Prescription</button>
    </form>
  );
}

export default CreatePrescription;
