import backgroundImage from "./ExpanseImage.jpeg";
const Footer=()=>{
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
    return (
    <footer style={styles.footer}>
            &copy; {new Date().getFullYear()} GeoTracker. All rights
            reserved.
        </footer>
);

}
export default Footer;