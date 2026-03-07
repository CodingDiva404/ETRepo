import React, { useState } from "react";
import "./App.css";

function StudentInfo({ name, department, stream, email, city }) {
  return (
    <div className="student-container">
      <h1 className="title">{department}</h1>
      <h2 className="subtitle">{stream}</h2>

      <div className="student-detail">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>City:</strong> {city}</p>
      </div>
    </div>
  );
}

function App() {
  const [student, setStudent] = useState({
    name: "",
    department: "",
    stream: "",
    email: "",
    city: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app-container">
      <h1 className="form-title">Student Information Form</h1>

      <form className="student-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required />
        <input type="text" name="department" placeholder="Enter Department" onChange={handleChange} required />
        <input type="text" name="stream" placeholder="Enter Stream" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
        <input type="text" name="city" placeholder="Enter City" onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>

      {submitted && <StudentInfo {...student} />}
    </div>
  );
}

export default App;
