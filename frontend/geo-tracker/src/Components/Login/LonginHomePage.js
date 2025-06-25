import React from "react";
import { useNavigate } from "react-router-dom";
// import backgroundImage from "./ExpanseImage.jpeg";
import backgroundImage from "../ExpanseImage.jpeg"; // Adjust the path as necessary

const LonginHomePage = () => {
  const navigate = useNavigate();

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
      fontFamily: "'Poppins', sans-serif",
      color: "#fff",
      overflowX: "hidden",
    },
    section: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    homeSection: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: "fixed",
      position: "relative",
    },
    aboutSection: {
      background: "linear-gradient(45deg, #6a11cb, #2575fc)",
      borderRadius: "15px", // Adds rounded corners
      opacity: 0.9, // Adds transparency
      padding: "20px", // Optional: Adds padding for better layout
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Adds a subtle shadow for depth
    },
    
    featuresSection: {
      background: "linear-gradient(45deg, #6a11cb, #2575fc)",
      borderRadius: "15px", // Adds rounded corners
      opacity: 0.9, // Adds transparency
      padding: "20px", // Optional: Adds padding for better layout
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
    },
    overlay: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      background: "rgba(0, 0, 0, 0.6)",
      zIndex: "-1",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "2px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      maxWidth: "800px",
      textAlign: "center",
      margin: "20px auto",
      background: "linear-gradient(45deg, #6a11cb, #2575fc)",
      borderRadius: "15px", // Adds rounded corners
      opacity: 0.9, // Adds transparency
      padding: "20px", // Optional: Adds padding for better layout
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
    },
    buttonContainer: {
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "30px",
    },
    button: {
      padding: "15px 30px",
      fontSize: "1.2rem",
      fontFamily: "'Poppins', sans-serif",
      borderRadius: "40px",
      cursor: "pointer",
      textDecoration: "none",
      color: "#fff",
      background: "linear-gradient(45deg, #6a11cb, #2575fc)",
      border: "none",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      transition: "all 0.4s ease",
      marginBottom: "20px",
    },
    buttonHover: {
      transform: "scale(1.1)",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
      background: "linear-gradient(45deg, #2575fc, #6a11cb)",
    },
    adminButtonHover: {
      transform: "scale(1.1)",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
      background: "linear-gradient(45deg, #FF8008, #FFC837)",
    },
    footer: {
      background: "#333",
      color: "#fff",
      textAlign: "center",
      padding: "20px",
      fontSize: "0.9rem",
    },
  };

  const resetButtonStyle = (e, isAdmin) => {
    Object.assign(e.target.style, styles.button, {
      background: isAdmin
        ? "linear-gradient(45deg, #6a11cb, #2575fc)" // Reset to original admin button style
        : styles.button.background,
        transform: "scale(1)", // Reset scale
    });
  };

  return (
<div style={styles.body}> 
    <div style={styles.container}>
      {/* Home Section */}
      <div style={{ ...styles.section, ...styles.homeSection }}>
        <div style={styles.overlay}></div>
        <h1 style={{ ...styles.heading, ...styles.buttonContainer, color: "red",backgroundColor:"white" }}>
          GeoTracker 
        </h1>
        <p style={{ ...styles.description, color: "black",backgroundColor:"white",fontFamily:"Calibri" }}>
       This GeoTracker application is used for Both User and Admin. You can Login based on your role.
        </p>
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => navigate("/user/login")}
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) => resetButtonStyle(e, false)}
          >
            Login as User
          </button>
          <button
            style={styles.button}
            onClick={() => navigate("/admin/login")}
            onMouseOver={(e) =>
              Object.assign(e.target.style, styles.adminButtonHover)
            }
            onMouseOut={(e) => resetButtonStyle(e, true)}
          >
            Login as Admin
          </button>
          
        </div>
      </div>

      {/* About Section */}
      <div style={{ ...styles.section, ...styles.aboutSection, backgroundColor:"yellow" }}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.description}>
          Need to update.
        </p>
      </div>

      {/* Features Section */}
      <div style={{ ...styles.section, ...styles.featuresSection }}>
        <h1 style={styles.heading}>Features</h1>
        <p style={styles.description}>
          dekhte hai.
        </p>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} GeoTracker. All rights
        reserved.
      </footer>
    </div>
    </div>
  );
};

export default LonginHomePage;