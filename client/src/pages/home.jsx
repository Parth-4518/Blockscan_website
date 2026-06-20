import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>Welcome to My Project</h1>

        <Button
          text="Get Started"
          onClick={() => alert("Button Clicked!")}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;