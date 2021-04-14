import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link me-5" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-5" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-5" to="/dashboard">
                  Doctor Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-5 text-white" to="/admin">
                  Admin
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-5 text-white" to="/blog">
                  Blogs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-5 text-white" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
