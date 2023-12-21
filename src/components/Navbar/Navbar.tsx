import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <Link to={"/"}>
          <button className="button-54">Home</button>
        </Link>
        <Link to={"/rated"}>
          <button className="button-54">Rated</button>
        </Link>
      </div>
      <div className="right-nav">
        <Link to={"/auth"}>
          <button className="button-54">Auth</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
