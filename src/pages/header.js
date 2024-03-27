import "../styles/common.css";
import brand_img from "../images/icons/pharmacy_logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="brand_logo">
          <div className="brand_img">
            <img src={brand_img} alt="pharmacy_logo" />
          </div>
          <h1>SiTbib</h1>
        </div>
        <nav className="links">
          <ul>
            <li>
              <Link to="/home">home</Link>
              {/* <a href="#home">home</a> */}
            </li>
            <li>
              <Link to="/about">about</Link>
              {/* <a href="#about">about</a> */}
            </li>
            <li>
              <Link to="/doctors">doctors</Link>
              {/* <a href="#doctors">Doctors</a> */}
            </li>
            <li>
              <Link to="/contact">contact</Link>
              {/* <a href="#contact">contact</a> */}
            </li>
          </ul>
        </nav>
        <div className="make_appointment">
          <Link to="/appointment">
            <button id="appointment_button" value="make_appointment">
              Make Appointment
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
