import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-dark mt-auto py-3">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <Link to="/contactus" className="btn btn-warning btn-lg">
          Contact Us
        </Link>
      </div>
      <div className="container">
        <span className="text-muted">
          An Amazing <span className="text-white">Online T-shirts </span>{" "}
          Website
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
