import React from "react";
import { RiCloseLine, RiStarLine } from "react-icons/ri";

function Modal({ openModal, setOpenModal, movie }) {

  return (
    <>
      {openModal && (
        <div className="modal__wrap">
          <div>
            <button
              className="modal__close"
              onClick={() => setOpenModal(false)}
            >
              <RiCloseLine />
            </button>

            <div
              className="detail"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <div className="left">
                <img
                  className="detail__image"
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
              </div>

              <div className="right">
                <h2 className="detail__title">{movie.title}</h2>
                <p className="detail__original">
                  Original title: <small>{movie.original_title}</small>
                </p>
                <div className="detail__rating"><RiStarLine /> {movie.vote_average} / 10</div>
                <p className="detail__plot"> {movie.overview}</p>
                <p>Release date: {movie.release_date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
