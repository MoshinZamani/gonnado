import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Home: React.FC = () => {
  return (
    <div className="home_main">
      <Link className="team" to="/team">
        Team
      </Link>

      <Link className="personal" to="/personal">
        Personal
      </Link>
    </div>
  );
};

export default Home;
