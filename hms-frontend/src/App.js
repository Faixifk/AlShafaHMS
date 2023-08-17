import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Doctors from './Doctors';
import CreateDoctor from './CreateDoctor';
import CreatePatient from './CreatePatient';
import Patients from './Patients';
import CreatePrescription from './CreatePrescription';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">View Doctors</Link>
            </li>
            <li>
              <Link to="/add-doctor">Add Doctor</Link>
            </li>
            <li>
              <Link to="/add-patient">Add Patient</Link>
            </li>
            <li>
              <Link to="/patients">View Patients</Link>
            </li>
            <li>
              <Link to="/prescriptions">Crete Prescription</Link>
            </li>

          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Doctors />} />
          <Route path="/add-doctor" element={<CreateDoctor />} />
          <Route path="/add-patient" element={<CreatePatient />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/prescriptions" element={<CreatePrescription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
