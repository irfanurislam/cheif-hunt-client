import React from "react";

const Chef = ({ chef }) => {
  const { chef_name, id, years_of_experience, likes, picture_url, recipes } =
    chef;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl border border-yellow-400">
        <figure>
          <img
            src="https://i.ibb.co/cbQqNxY/OIP.jpg"
            alt="chef"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <p> Expreince{years_of_experience}</p>
          <p>Receipe Total{recipes.length}</p>
          <p>Likes {likes}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-warning">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
