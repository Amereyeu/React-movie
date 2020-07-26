import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="navigation">
        <div className="navigation__brand">
          <Link to="/">My movie list</Link>
        </div>

        <ul className="navigation__links">
          <li>
            <Link to="/watchlist">Watch List</Link>
          </li>

          <li>
            <Link to="/search" className="btn">
              Search movies
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
