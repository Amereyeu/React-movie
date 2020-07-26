import React, { useState, useContext } from "react";
import Modal from "./Modal";
import defaultImage from "../tmdb.jpg";
import { RiHeartAddLine, RiDeleteBin2Line } from "react-icons/ri";
import { AppContext } from "../context/AppContext";

function ModalItem({ movie }) {
  const { addMovie, removeMovie, watchlist } = useContext(
    AppContext
  );

  const [openModal, setOpenModal] = useState(false);

  let storedMovie = watchlist.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : false;

  return (
    <>
      <div className="results__item">
        <h2
          className="results__item__title"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          {movie.title}
        </h2>
        <img
          className="results__item__image"
          src={
            movie.poster_path != null
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : defaultImage
          }
          alt={`${movie.title} Poster`}
        />

        <div className="results__item__button">
          <button
            className="results__item__button__add"
            disabled={watchlistDisabled}
            onClick={() => addMovie(movie)}
          >
            <RiHeartAddLine />
          </button>

          <button
            className="results__item__button__remove"
            onClick={() => removeMovie(movie.id)}
          >
            <RiDeleteBin2Line />
          </button>
        </div>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} movie={movie} />
    </>
  );
}

export default ModalItem;
