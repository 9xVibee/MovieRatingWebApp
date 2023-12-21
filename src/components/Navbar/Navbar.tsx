import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("guest_session_id") !== null;
  
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("guest_session_id");
    navigate("/auth");
  };

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
        {isLoggedIn ? (
          <button className="button-54" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to={"/auth"}>
            <button className="button-54">Auth</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
