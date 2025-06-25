import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import backgroundImage from "./ExpanseImage.jpeg";

const UserAttendance = () => {
  const { userId } = useParams(); // Extract userId (studentId) from URL
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch attendance status on component mount
    const fetchAttendanceStatus = async () => {
      try {
        const response = await axios.get("http://localhost:8989/api/attendance/status", {
          params: { studentId: userId }, // Pass studentId as request parameter
        });
        setAttendanceStatus(response.data); // Assuming API returns AttendanceStatusDto
      } catch (err) {
        setError(
          err.response?.data?.message || "Failed to fetch attendance status. Try again."
        );
      }
    };

    fetchAttendanceStatus();
  }, [userId]); // Dependency ensures re-fetch when userId changes
  

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>Attendance Summary</h1>
        {error ? (
          <p style={styles.error}>{error}</p>
        ) : attendanceStatus ? (
          <div style={styles.details}>
            <p>
              <strong>Total Lectures:</strong> {attendanceStatus.totalLecture}
            </p>
            <p>
              <strong>Absent Count:</strong> {attendanceStatus.absentCount}
            </p>
            <p>
              <strong>Attendance Percenatge:</strong> {
              ((attendanceStatus.totalLecture-attendanceStatus.absentCount)/attendanceStatus.totalLecture) *100 +" %"}
            </p>
          </div>
        ) : (
          <p>Loading attendance data...</p> // Fallback for when attendanceStatus is still null
        )}
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
    maxWidth: "80%",
    margin: "50px auto",
    backgroundColor: "pink",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  details: {
    marginTop: "20px",
    fontSize: "18px",
  },
  error: {
    color: "red",
    marginTop: "10px",
    fontSize: "18px",
  },
};

export default UserAttendance;
