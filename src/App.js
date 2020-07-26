import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Add from "./components/Search";
import WatchList from "./components/WatchList";

import { AppProvider } from "./context/AppContext";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Add} />
            <Route path="/watchlist" component={WatchList} />
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
