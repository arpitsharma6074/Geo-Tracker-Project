import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "./ExpanseImage.jpeg";

const AdminUpdateCollege = () => {
  const [collegeData, setCollegeData] = useState({
    collegeId: "",
    name: "",
    address: "",
    latitude: "",
    longitude: "",
  });
  const [responseMessage, setResponseMessage] = useState(""); // For backend response
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollegeData({ ...collegeData, [name]: value });
  };

  const handleSubmit = async () => {
    setError("");
    setResponseMessage("");

    // Validate inputs
    if (!collegeData.collegeId || !collegeData.name || !collegeData.address || !collegeData.latitude || !collegeData.longitude) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8989/api/college", collegeData, {
        headers: { "Content-Type": "application/json" },
      });
      setResponseMessage(response.data); // Set backend response
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update college details. Try again.");
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>Admin Panel - Update College</h1>
        <div style={styles.formGroup}>
          <label>College ID:</label>
          <input
            type="text"
            name="collegeId"
            value={collegeData.collegeId}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={collegeData.name}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={collegeData.address}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Latitude:</label>
          <input
            type="text"
            name="latitude"
            value={collegeData.latitude}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Longitude:</label>
          <input
            type="text"
            name="longitude"
            value={collegeData.longitude}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <button style={styles.button} onClick={handleSubmit}>
          Update College Details
        </button>
        <div style={styles.responseContainer}>
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
    margin: "0",
    padding: "0",
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflow: "hidden",
  },
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "100px auto",
    backgroundColor: "pink",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
  responseContainer: {
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

export default AdminUpdateCollege;
