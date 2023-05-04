import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaRegHeart, FaStar, FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
  const { id } = useParams();
  const info = useLoaderData();
  // const chefinfo = useLoaderData();
  // const [info, setInfo] = useState(chefinfo);
  console.log(info);
  console.log(id)

  const {recipes, chef_name,description, years_of_experience, likes, picture_url, num_recipes } =
    info;

  return (
    <div className="px-8 lg:px-8">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <LazyLoad>
          <img
            src={picture_url}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          </LazyLoad>
          <div className="lg:ml-8">
            <h1 className="text-5xl font-bold">{chef_name}</h1>
            <p className="py-6">
             {description}
            </p>
            <p className="my-4">Number of receips: {num_recipes} items</p>
            <p className="flex items-center"> Likes: {likes}  </p>
            <p className="my-4"> Exprience: {years_of_experience} year</p>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>


<div className="mb-20 mt-10">
<div className="table-responsive">
<table className="w-full">
  <thead className="bg-primary text-white">
    <tr>
      <th className="px-2 lg:px-4 py-2">Recipe Name</th>
      <th className="px-2 lg:px-4 py-2">Ingredients</th>
      <th className="px-2 lg:px-4 py-2">Cooking Method</th>
      <th className="px-2 lg:px-4 py-2">Rating</th>
      <th className="px-2 lg:px-4 py-2">Action</th>
    </tr>
  </thead>
  <tbody>
    {recipes.map((recipe,index) => (
      <tr key={index}>
       <td className="border px-2 lg:px-4 py-2">
            <div className=" md:flex items-center w-full">
             
              <img src={recipe.photo} alt={recipe.recipe_name} className="w-12 h-16 rounded-md mr-4" />
              
              <span>{recipe.recipe_name}</span>
            </div>
          </td>
        <td className="border px-2 lg:px-4 py-2 font-normal">{recipe.ingredients.join(", ")}</td>
        <td className="whitespace-pre-wrap border px-2 lg:px-4 py-2 font-normal ">{recipe.cooking_method}</td>
        <td className="border px-2 lg:px-4 py-2 font-normal"><FaStar className="text-warning"></FaStar> {recipe.rating}</td>
        <td className="border px-2 lg:px-4 py-2">
          <button onClick={() => {
                toast("Favourite Items ❤️");
                event.target.disabled = true;
              }} className="btn btn-warning">Favourite </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>

</div>





    </div>
  );
};

export default ChefDetails;

