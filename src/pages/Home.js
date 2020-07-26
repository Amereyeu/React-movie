import React, { useState, useEffect } from "react";
import ModalItem from "../components/ModalItem";

function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/280/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        });
    };

    fetchData();
  }, []);

  return (
    <>
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

export default Home;
