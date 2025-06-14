import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    email: "",
    role: "user",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8989/api/user/register", formData);
      setMessage(response.data.message);
      navigate("/login");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed. Try again.");
    }
  };

  // Styles
  const styles = {
    body: {
      margin: "0",
      padding: "20px",
      backgroundColor: "#f4f4f4",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "5px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#28a745",
      color: "#fff",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    },
    message: {
      color: "#d9534f",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>Profile</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            value={formData.userName}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="text"
            name="role"
            placeholder="Role (e.g., Student, Teacher)"
            value={formData.role}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Update Profile</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

export default Profile;