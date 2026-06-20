import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="dashboard">
        <div className="card">Add Students</div>
        <div className="card">Mark Attendance</div>
        <div className="card">Reports</div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;