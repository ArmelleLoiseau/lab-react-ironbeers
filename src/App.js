import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import List from "./Pages/List";
import OneBeer from "./Pages/OneBeer";
import NewBeer from "./Pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<List />} />
        <Route path="/beers/:id" element={<OneBeer />} />
        <Route path="/beers/random-beer" element={<OneBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
