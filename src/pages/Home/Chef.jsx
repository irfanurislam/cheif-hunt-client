import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
const Chef = ({ chef }) => {
  const { chef_name, id, years_of_experience, likes, picture_url, num_recipes } =
    chef;





  return (
    <div className="">
      <div className="card min-h-full bg-base-100 shadow-xl border border-yellow-400">
        <figure className="">
          <LazyLoad>
          <img
          className="lg:h-[20rem] md:h-[18rem] object-cover lg:w-[32rem] md:w-[32rem]"
            src={picture_url}
            alt="chef"
          /></LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {chef_name}</h2>
          <p> Expreince : {years_of_experience} year</p>
          <p>Receipe :{num_recipes} dishes</p>
          <p>Likes:  {likes} </p>
          <div className="card-actions justify-start md:justify-end">
          <Link to={`chefs/${id}`}><button className="btn btn-warning">View Recipes</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
