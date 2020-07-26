import React, { useContext } from "react";
import ModalItem from "./ModalItem";
import { AppContext } from "../context/AppContext";

function WatchList() {
  const { watchlist } = useContext(AppContext);

  return (
    <>
      <div className="watchlist">
        <h1 className="watchlist__title">My Watchlist</h1>

        <p className="watchlist__counter">
          <span> {watchlist.length}</span>
          <span> {watchlist.length === 1 ? "Movie" : "Movies"} </span>
        </p>
      </div>

      {watchlist.length > 0 ? (
        <ul className="results">
          {watchlist.map((movie) => (
            <li key={movie.id}>
              <ModalItem movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-results">
          <h2>There are no movies in your watch list.</h2>
        </div>
      )}
    </>
  );
}

export default WatchList;
