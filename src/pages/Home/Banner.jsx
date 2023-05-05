import React from "react";
import LazyLoad from "react-lazy-load";

const Banner = () => {
  return (
    <div className="my-10 px-6 md:px-8">
      <LazyLoad>
      <div
        className="hero h-[36rem]"
        style={{
           backgroundImage: `url("https://i.ibb.co/890tNZq/lily-banse-YHSwy6uqvk-unsplash.jpg")`,
            
        }}
      >
        <div className="hero-overlay bg-opacity-70 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">The Best Dishes</h1>
            <p className="mb-5">
              We Have Proper Passion for the Cookies. Love  is the secret ingradient thats makes  all our meals Test better and Magical 
            </p>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
      </LazyLoad>

    </div>
    // https://i.ibb.co/cbQqNxY/OIP.jpg
  );
};

export default Banner;
