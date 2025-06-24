import React, { useState, useEffect } from "react";
import Button from "../components/Button"; // ✅ Add this line

// ✅ List of valid event names (from Home page)
const validEventNames = [
  "Intro to React", "ML for Beginners", "Mechatronics Bootcamp", "ROS Navigation",
  "Arduino Basics", "DevOps Crash Course", "ML with Python", "Embedded Systems",
  "ROS + Gazebo Sim", "Arduino IoT", "Quantum Computing Bootcamp", "AI in Healthcare"
];

function Register() {
  const [eventName, setEventName] = useState("");
  const [attendeeName, setAttendeeName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const selected = localStorage.getItem("selectedEvent");
    if (selected) {
      setEventName(selected);
      localStorage.removeItem("selectedEvent");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eventName || !attendeeName || !email) {
      setMessage("Please fill out all fields.");
      return;
    }

    // ✅ Check for valid event name
    if (!validEventNames.includes(eventName)) {
      setMessage("❌ Invalid event name. Please select from the suggestions.");
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
        {/* ✅ Added datalist for autocomplete */}
        <input
          type="text"
          list="event-options"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <datalist id="event-options">
          {validEventNames.map((name, idx) => (
            <option key={idx} value={name} />
          ))}
        </datalist>

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
