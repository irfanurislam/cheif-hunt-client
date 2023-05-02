import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { chef_name, id, years_of_experience, likes, picture_url, num_recipes } =
    chef;





  return (
    <div className="">
      <div className="card w-72 bg-base-100 shadow-xl border border-yellow-400">
        <figure>
          <img
            src="https://i.ibb.co/cbQqNxY/OIP.jpg"
            alt="chef"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <p> Expreince{years_of_experience}</p>
          <p>Receipe Total{num_recipes}</p>
          <p>Likes {likes}</p>
          <div className="card-actions justify-end">
          <Link to={`chefs/${id}`}><button className="btn btn-warning">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
