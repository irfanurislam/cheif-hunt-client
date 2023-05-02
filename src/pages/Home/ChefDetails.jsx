import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
  const { id } = useParams();

  const chefinfo = useLoaderData();
  const [info, setInfo] = useState(chefinfo);
  console.log(info);

  const { chef_name, years_of_experience, likes, picture_url, num_recipes } =
    info;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/94pV4pS/0jv5gx1661040802.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{chef_name}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
