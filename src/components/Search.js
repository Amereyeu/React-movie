import React, { useState } from "react";
import ModalItem from "./ModalItem";

function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <>
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={onChange}
        />
      </div>

      {results.length > 0 && (
        <ul className="results">
          {results.map((movie) => (
            <li key={movie.id}>
              <ModalItem movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Add;
