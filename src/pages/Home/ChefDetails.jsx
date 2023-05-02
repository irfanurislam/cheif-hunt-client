import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
  const { id } = useParams();

  const chefinfo = useLoaderData();
  const [info, setInfo] = useState(chefinfo);
  console.log(info);

  const {recipes, chef_name,description, years_of_experience, likes, picture_url, num_recipes } =
    info;

  return (
    <div className="px-8">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={picture_url}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{chef_name}</h1>
            <p className="py-6">
             {description}
            </p>
            <p className="my-4">Number of receips: {num_recipes} items</p>
            <p> Like: {likes}</p>
            <p className="my-4"> Exprience: {years_of_experience} year</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>


<div className="mb-20 mt-10">
<div className="table-responsive">
<table className="w-full">
  <thead className="bg-primary text-white">
    <tr>
      <th className="px-4 py-2">Recipe Name</th>
      <th className="px-4 py-2">Ingredients</th>
      <th className="px-4 py-2">Cooking Method</th>
      <th className="px-4 py-2">Rating</th>
      <th className="px-4 py-2">Action</th>
    </tr>
  </thead>
  <tbody>
    {recipes.map((recipe) => (
      <tr key={recipe.id}>
        <td className="border px-4 py-2 text-lg font-medium">{recipe.recipe_name}</td>
        <td className="border px-4 py-2 font-normal">{recipe.ingredients.join(", ")}</td>
        <td className="whitespace-pre-wrap border px-4 py-2 font-normal ">{recipe.cooking_method}</td>
        <td className="border px-4 py-2 font-normal">{recipe.rating}</td>
        <td className="border px-4 py-2">
          <button onClick={() => alert("This is my favorite!")} className="btn btn-warning">Favourite</button>
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

// https://i.ibb.co/ysyZHKL/wxswxy1511452625.jpg
//https://i.ibb.co/b58C66j/ustsqw1468250014.jpg