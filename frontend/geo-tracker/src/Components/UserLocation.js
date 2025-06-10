import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import backgroundImage from "./ExpanseImage.jpeg";

const UserLocation = () => {
  const { userId } = useParams(); // Extract userId from URL
  const navigate = useNavigate(); // For navigation
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState("");
  const [responseMessage, setResponseMessage] = useState(""); // For backend response

  const handleLocate = () => {
    setCoordinates(null);
    setError("");
    setResponseMessage("");

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude });

          // Create JSON object
          const attendanceData = {
            userId,
            latitude,
            longitude,
          };

          // Send data to backend
          try {
            const response = await axios.post(
              "http://localhost:8989/api/attendance",
              attendanceData,
              {
                headers: { "Content-Type": "application/json" },
              }
            );
            setResponseMessage(response.data); // Set backend response
          } catch (err) {
            setError(
              err.response?.data?.message || "Failed to mark attendance. Try again."
            );
          }
        },
        (error) => {
          // Handle geolocation errors
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("Permission denied. Please allow location access.");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("Location unavailable.");
              break;
            case error.TIMEOUT:
              setError("Request timed out. Try again.");
              break;
            default:
              setError("An unknown error occurred.");
          }
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  const navigateToDashboard = () => {
    navigate(`/user/${userId}/attendance`);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>Welcome!!</h1>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={handleLocate}>
            Mark My Attendance
          </button>
          <button style={styles.button} onClick={navigateToDashboard}>
            Go to Dashboard
          </button>
        </div>
        <div style={styles.coordinates}>
          {coordinates && (
            <div>
              <p>
                <strong>Latitude:</strong> {coordinates.latitude}
              </p>
              <p>
                <strong>Longitude:</strong> {coordinates.longitude}
              </p>
            </div>
          )}
          {responseMessage && <p style={styles.success}>{responseMessage}</p>}
          {error && <p style={styles.error}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  body: {
    margin: "0", // Removes default margin
    padding: "0", // Ensures no padding
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    backgroundImage: `url(${backgroundImage})`, // Applies the background image
    backgroundSize: "cover", // Ensures the image covers the entire area
    backgroundRepeat: "no-repeat", // Prevents image repetition
    backgroundPosition: "center", // Centers the image
    overflow: "hidden", // Prevents scrolling
  },
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "100px 0 0 425px",
    backgroundColor: "pink",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    flex: 1,
  },
  coordinates: {
    marginTop: "20px",
    fontSize: "18px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
};

export default UserLocation;
