import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./../components/Search";

const List = () => {
  const [beers, setBeers] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [searchedBeer, setSearchedBeer] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(({ data }) => {
        console.log(data);
        setBeers(data);
        setFetching(false);
      })
      .catch((e) => console.log(e));
  }, []);

  let searchResults = null;
  if (searchedBeer !== "") {
    searchResults = beers.filter((beer) => {
      return beer.name.toLowerCase().includes(searchedBeer.toLowerCase());
    });
  } else {
    searchResults = beers;
  }

  return (
    <div>
      <Navbar />
      {fetching && <p>Wait till we get your beers !</p>}
      {!fetching && (
        <div className="beers-list">
          <Search
            searchedBeer={searchedBeer}
            setSearchedBeer={setSearchedBeer}
          />
          {searchResults.map((beer) => {
            return (
              <div key={beer._id} className="beer-card">
                <Link to={`/beers/${beer._id}`}>
                  <div className="beer-card-inside">
                    <img src={beer.image_url} alt={beer.name} />
                    <div className="beer-card-text">
                      <h3>{beer.name}</h3>
                      <h4>{beer.tagline}</h4>
                      <p>Created by: {beer.name}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default List;
