import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const OneBeer = () => {
  const [beer, setBeer] = useState({});
  const [fetching, setFetching] = useState(true);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/" + params.id)
        .then(({ data }) => {
          console.log(data);
          setBeer(data);
          setFetching(false);
        })
        .catch((e) => console.log(e));
    } else {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(({ data }) => {
          console.log(data);
          setBeer(data);
          setFetching(false);
        })
        .catch((e) => console.log(e));
    }
  }, [params]);

  return (
    <div>
      <Navbar />
      {fetching && <p>Wait till we get you beer</p>}
      <div className="one-beer">
        <img src={beer.image_url} alt={beer.name}></img>
        <div className="one-beer-top-text">
          <div className="first-line">
            <h2>{beer.name}</h2>
            <h2 className="attenuation-level">{beer.attenuation_level}</h2>
          </div>
          <div className="second-line">
            <h3 className="tagline">{beer.tagline}</h3>
            <h4>{beer.first_brewed}</h4>
          </div>
        </div>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
};

export default OneBeer;
