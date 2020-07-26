import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};

export const AppContext = createContext(initialState);

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  const addMovie = (movie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

  const removeMovie = (id) => {
    dispatch({ type: "REMOVE_MOVIE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        watchlist: state.watchlist,
        addMovie,
        removeMovie,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
