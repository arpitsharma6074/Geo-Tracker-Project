import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from './ExpanseImage.jpeg';

const AdminRegistrationPage = () => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    email: "",
    role:"",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      userName: formData.userName,
      phone: formData.phone,
      email: formData.email,
      role:formData.role,
      password: formData.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8989/api/admin/register", // Backend endpoint
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage(response.data); // Display success message from backend
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  // Styles from the reference page
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
      backgroundColor:"pink",
      margin: "0 auto",
      border: "1px solid #ccc",
     
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    message: {
      marginTop: "10px",
      color: "red",
    },
    linkButton: {
      backgroundColor: "#008CBA",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.body}>
    <div style={styles.container}>
      <h2>Register</h2>
      {message && <p style={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Name:</label>
          <input
            style={styles.input}
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            style={styles.input}
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
            <input
              style={styles.input}
              type="text"
              value="admin"
              readOnly // Makes the input field uneditable
            />
          </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            style={styles.input}
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Enter your password"
          />
        </div>
        <button style={styles.button} type="submit">
          Register
        </button>
      </form>
      <button
        style={{ ...styles.button, ...styles.linkButton }}
        onClick={() => navigate("/user/login")}
      >
        Already have an user account? Login
      </button>
      <button
        style={{ ...styles.button, ...styles.linkButton }}
        onClick={() => navigate("/admin/login")}
      >
        Already have an admin account? Login
      </button>
    </div>
    </div>
  );
};

export default AdminRegistrationPage;
