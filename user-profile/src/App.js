import "./App.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => console.log("Error while fetching data", error));
  }, []);

  if (!user) return <p className="loading-user">Loading User...</p>;

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <div className="card">

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <img src={user.picture.large} alt="profile" className="profile-img" />

        <h2>
          {user.name.first} {user.name.last}
        </h2>

        <p className="email">{user.email}</p>
        <p className="location">
          {user.location.city}, {user.location.country}
        </p>

        <button
          className={isFollowing ? "following-btn" : "follow-btn"}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          {isFollowing ? "Following ✓" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default App;