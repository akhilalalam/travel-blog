import React from "react";

const Home = () => {
  return (
    <section className="banner">
    <div>
      <div className="bg-dark text-white text-center p-5">
        <h1 className="display-4 fw-bold">Welcome to TravelBlog</h1>
        <p className="lead">Explore the world through our stories and guides.</p>
      </div>

      <div className="container py-5">
        <h2 className="text-center mb-4">Why Read Our Blog?</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h4>Real Experiences</h4>
            <p>Travel guides written by real travelers for real people.</p>
          </div>
          <div className="col-md-4">
            <h4>Stunning Destinations</h4>
            <p>Explore destinations with visuals and hidden gems.</p>
          </div>
          <div className="col-md-4">
            <h4>Travel Tips</h4>
            <p>Save money, avoid mistakes, and travel smart with us!</p>
          </div>
        </div>
      </div>

    </div>
    </section>
  );
};

export default Home;