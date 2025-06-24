// src/pages/MyEvents.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";

const MyEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedEvents = events.filter((_, i) => i !== indexToDelete);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Your Registered Events</h2>
      {events.length === 0 ? (
        <p>No events registered yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
              style={{
                background: "#f5f5f5",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                position: "relative",
              }}
            >
              <h3>{event.eventName}</h3>
              <p><strong>Name:</strong> {event.attendeeName}</p>
              <p><strong>Email:</strong> {event.email}</p>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDelete(index)}
                style={{
                  marginTop: "15px",
                  background: "#ff5252",
                  border: "none",
                  padding: "10px 12px",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <FaTrash /> Delete
              </motion.button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEvents;
