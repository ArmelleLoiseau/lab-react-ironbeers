import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-main-container">
      <Link to="/beers">
        <div className="home-container">
          <img src="/beers.png" alt="beers" />
          <h2>All beers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            perferendis sequi illo possimus, doloribus corrupti ea dolore enim
            asperiores accusamus.
          </p>
        </div>
      </Link>
      <Link to="/beers/random-beer">
        <div className="home-container">
          <img src="/random-beer.png" alt="beer" />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            molestiae nostrum delectus ullam officiis rerum quo et, quis ipsa
            debitis.
          </p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div className="home-container">
          <img src="/new-beer.png" alt="beer" />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae cum
            dolores incidunt veritatis officiis atque velit tempora unde,
            repellendus numquam.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
