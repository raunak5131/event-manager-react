import React, { useState } from "react";
import Button from "../components/Button"; // ✅ Add this line

function Register() {
  const [eventName, setEventName] = useState("");
  const [attendeeName, setAttendeeName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eventName || !attendeeName || !email) {
      setMessage("Please fill out all fields.");
      return;
    }

    const newEvent = { eventName, attendeeName, email };
    const events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(newEvent);
    localStorage.setItem("events", JSON.stringify(events));

    setMessage("✅ Registration successful!");
    setEventName("");
    setAttendeeName("");
    setEmail("");
  };

  return (
    <div className="register-form">
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Event Name:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <label>Your Name:</label>
        <input
          type="text"
          value={attendeeName}
          onChange={(e) => setAttendeeName(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* ✅ Use Button component instead of plain HTML button */}
        <Button label="Register" onClick={handleSubmit} />
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;
