import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";
import "./NavLinks.css";

const NavLinks = (props) => {
  const { isLoggedIn } = useSelector((state) => state);
  const { userId } = useSelector((state) => state);
  const dispatch = useDispatch();
  const Logout = logout(dispatch);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to={`/${userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <button onClick={Logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
