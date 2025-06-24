import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const events = [
  { id: 1, title: "Intro to React", category: "Software Dev", image: "1.png" },
  { id: 2, title: "ML for Beginners", category: "Machine Learning", image: "2.png" },
  { id: 3, title: "Mechatronics Bootcamp", category: "Mechatronics", image: "3.png" },
  { id: 4, title: "ROS Navigation", category: "Robotics", image: "4.png" },
  { id: 5, title: "Arduino Basics", category: "Electronics", image: "5.png" },
  { id: 6, title: "DevOps Crash Course", category: "Software Dev", image: "6.png" },
  { id: 7, title: "ML with Python", category: "Machine Learning", image: "7.png" },
  { id: 8, title: "Embedded Systems", category: "Mechatronics", image: "8.png" },
  { id: 9, title: "ROS + Gazebo Sim", category: "Robotics", image: "9.png" },
  { id: 10, title: "Arduino IoT", category: "Electronics", image: "10.png" },
  { id: 11, title: "Quantum Computing Bootcamp", category: "Advanced Tech", image: "11.png" },
  { id: 12, title: "AI in Healthcare", category: "AI/ML", image: "12.png" },
];

function Home() {
  const navigate = useNavigate();
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("events")) || [];
    setRegisteredEvents(saved);
  }, []);

  const handleCardRegister = (eventName) => {
    localStorage.setItem("selectedEvent", eventName);
    navigate("/register");
  };

  return (
    <div>
      {/* Hero Section with Image */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "space-between",
          gap: "40px",
          flexWrap: "wrap",
          padding: "60px 20px",
          background: "#f0f8ff",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: isMobile ? "2rem" : "2.8rem", marginBottom: "20px" }}>
            Welcome to Tech Fest 2025 🚀
          </h1>
          <p style={{ fontSize: isMobile ? "1.1rem" : "1.3rem", color: "#555" }}>
            Explore and register for cutting-edge events in software, ML, robotics, and more!
          </p>
        </div>

        {!isMobile && (
          <img
            src={`${process.env.PUBLIC_URL}/images/robot.png`}
            alt="Hero Art"
            style={{
              position: "absolute",
              right: "30px",
              maxWidth: "220px",
              width: "100%",
              height: "auto",
            }}
          />
        )}
      </div>

      {/* Event Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          padding: "40px",
          backgroundColor: "#fafafa",
        }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{event.title}</h3>
            <p style={{ color: "#888", marginBottom: "20px" }}>{event.category}</p>
            <button
              onClick={() => handleCardRegister(event.title)}
              style={{
                backgroundColor: "#6200ea",
                color: "#fff",
                padding: "10px 16px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4b00b2")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#6200ea")}
            >
              Register
            </button>
            {event.image && (
              <img
                src={`${process.env.PUBLIC_URL}/images/${event.image}`}
                alt={event.title}
                style={{
                  position: "absolute",
                  bottom: "0px",
                  right: "0px",
                  width: "120px",
                  objectFit: "contain",
                  opacity: 1,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Registered Events Section */}
      <div style={{ padding: "40px", backgroundColor: "#eef2f3" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "1.8rem" }}>🎉 Your Registered Events</h2>

        {registeredEvents.length === 0 ? (
          <p style={{ fontSize: "1.1rem" }}>You have not registered for any events yet.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {registeredEvents.map((event, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  padding: "15px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  fontSize: "1rem",
                  textAlign: "left",
                }}
              >
                <strong>{event.eventName}</strong>
                <p style={{ margin: "6px 0" }}>{event.attendeeName}</p>
                <p style={{ color: "#555" }}>{event.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
