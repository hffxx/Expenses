import React from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AddExpenseModal from "../AddExpenseModal";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <AddExpenseModal />
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className="link">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
