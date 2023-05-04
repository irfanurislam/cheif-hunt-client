import React from "react";

const Banner = () => {
  return (
    <div className="my-10">
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
    </div>
    // https://i.ibb.co/cbQqNxY/OIP.jpg
  );
};

export default Banner;
