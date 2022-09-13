// rafce
import React from "react";
import { Link } from "react-router-dom";

const MenubarUser = () => {
  return (
    <nav>
      <ul className="nav flex-column">
        <li className="nav-item mt-1">
          <Link to="/user/history">
            {" "}
            <button className="btn btn-outline-primary">History</button>
          </Link>
        </li>

        <li className="nav-item mt-2">
          <Link to="/user/wishlist">
            <button className="btn btn-outline-primary">Wishlist</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenubarUser;
