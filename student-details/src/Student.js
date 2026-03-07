import React from "react";

const Student = ({ name, department, stream, email, city }) => {
    return (
        <div>
            <h1>Department: {department}</h1>
            <h2>Stream: {stream}</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>City: {city}</p>
        </div>
    );
};

export default Student;
