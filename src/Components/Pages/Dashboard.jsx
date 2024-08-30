import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Hindalco Dashboard, mainpage
      <Link to="/login">
        <button
          className="border border-black "
          onClick={() => localStorage.clear()}
        >
          logout
        </button>
      </Link>
    </div>
  );
}

export default Dashboard
