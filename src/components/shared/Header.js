import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div bg="light" expand="lg">
      <ul class="topnav">
        <li>
          <Link class="active" to="/">
            API Renderer
          </Link>
        </li>
        <li>
          <Link class="active" to="/counter">
            Counter
          </Link>
        </li>
        <li>
          <Link class="active" to="/imageslider">
            Image Slider
          </Link>
        </li>
        <li class="right">
          <Link class="active" to="/validationform">
            Form Validation
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
