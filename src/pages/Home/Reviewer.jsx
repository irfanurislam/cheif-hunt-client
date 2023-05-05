import React from "react";

import { FaRegStar, FaRegStarHalf, FaStar, FaStarHalfAlt } from "react-icons/fa";
const Reviewer = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      image: "https://i.ibb.co/Lkg8WQv/qvrwpt1511181864.jpg",
      rating: 4.5,
      comment: "Delicious and easy to make!",
      topCommenter: "John",
    },
    {
      id: 2,
      title: "Beef Tacos",
      image: "https://i.ibb.co/dtwZ55L/xxrxux1503070723.jpg",
      rating: 5,
      comment: "Amazing recipe, highly recommend!",
      topCommenter: "Sarah",
    },
    {
      id: 3,
      title: "Chicken Alfredo",
      image: "https://i.ibb.co/cbQqNxY/OIP.jpg",
      rating: 3.5,
      comment: "Decent recipe, but a bit too heavy for my taste.",
      topCommenter: "Mike",
    },
    {
      id: 4,
      title: "Squash linguine",
      image: "https://i.ibb.co/94pV4pS/0jv5gx1661040802.jpg",
      rating: 4.5,
      comment: "Absolutely delicious, will definitely make again!",
      topCommenter: "Linda",
    },
    {
      id: 5,
      title: "Spaghetti alla Carbonara",
      image: "https://i.ibb.co/Lkg8WQv/qvrwpt1511181864.jpg",
      rating: 4.5,
      comment: "Great vegetarian option, easy to follow recipe.",
      topCommenter: "David",
    },
    {
      id: 6,
      title: "Spinach & Ricotta",
      image: "https://i.ibb.co/cv7G4fc/uquqtu1511178042.jpg",
      rating: 5,
      comment: "The best sushi rolls I have ever tasted, hands down!",
      topCommenter: "Emily",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= Math.floor(rating); i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (rating % 1 !== 0) {
      stars.push(
        <FaStarHalfAlt key={Math.ceil(rating)} className="text-yellow-400" />
      );
    }
    for (let i = Math.ceil(rating) + 1; i <= 5; i++) {
      stars.push(<FaStar key={i} className="text-gray-300" />);
    }
    return stars;
  };
  const topReviewer = recipes.reduce((acc, recipe) =>
  recipe.comment.length > acc.comment.length ? recipe : acc
);





  return (
    <div className="mt-28 px-8">
       <div className="text-center">
       <h2 className="text-2xl font-bold mb-8">
        {recipes.length} Items | Top Reviewer: {topReviewer.topCommenter}
      </h2>
       </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Recipe Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Recipe Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Comment
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Top Commenter
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recipes.map((recipe) => (
                    <tr key={recipe.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={recipe.image}
                          alt={recipe.title}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {recipe.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                      {renderStars(recipe.rating)}
                      {recipe.rating}
                      </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {recipe.comment}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {recipe.topCommenter}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewer;
