import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userName, setUserName] = useState("Name");
  const [userPhoto, setUserPhoto] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedUserDetail = localStorage.getItem("user_detail");
    try {
      const userDetails = JSON.parse(storedUserDetail);
      if (userDetails && userDetails.length > 0) {
        const { first_name, last_name, photo } = userDetails[0].user;
        setUserName(`${first_name} ${last_name}`);
        setUserPhoto(`http://localhost:8000${photo}`);
      }
    } catch (error) {
      console.error("Error parsing user_detail from localStorage:", error);
    }
  }, []);
  const handleProfileClick = () => {
    navigate('/user-profile'); // Adjust the route path as needed
  };

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app-header">
      <div className="app-header-left">
        <span className="app-icon"></span>
        <p className="app-name">CampusHirease</p>
      </div>
      <div className="app-header-right">
        <button
          className="mode-switch"
          title="Switch Theme"
          onClick={toggleTheme}
        >
          <svg
            className="moon"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <defs></defs>
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
          </svg>
        </button>
        <a href="#">
        <button className="profile-btn" onClick={handleProfileClick}>
          <img
            src={
              userPhoto ||
              "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
            }
            alt="Profile"
          />
          <span>{userName}</span>
        </button>
        </a>
      </div>
    </div>
  );
}

export default DashboardHeader;
