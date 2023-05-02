import React from "react";

const Reviewer = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      image: "https://i.ibb.co/Lkg8WQv/qvrwpt1511181864.jpg",
      rating: 4,
      comment: "Delicious and easy to make!",
      topCommenter: "John",
    },
    {
      id: 2,
      title: "Beef Tacos",
      image: "https://i.ibb.co/Lkg8WQv/qvrwpt1511181864.jpg",
      rating: 5,
      comment: "Amazing recipe, highly recommend!",
      topCommenter: "Sarah",
    },
    {
      id: 3,
      title: "Chicken Alfredo",
      image: "https://i.ibb.co/Lkg8WQv/qvrwpt1511181864.jpg",
      rating: 3,
      comment: "Decent recipe, but a bit too heavy for my taste.",
      topCommenter: "Mike",
    },
    {
      id: 4,
      title: "Salmon Teriyaki",
      image: "https://i.ibb.co/Lkg8WQv/qvrwpt1511181864.jpg",
      rating: 4.5,
      comment: "Absolutely delicious, will definitely make again!",
      topCommenter: "Linda",
    },
    {
      id: 5,
      title: "Mushroom Risotto",
      image: "https://i.ibb.co/Lkg8WQv/qvrwpt1511181864.jpg",
      rating: 4,
      comment: "Great vegetarian option, easy to follow recipe.",
      topCommenter: "David",
    },
    {
      id: 6,
      title: "Sushi Rolls",
      image: "https://i.ibb.co/Lkg8WQv/qvrwpt1511181864.jpg",
      rating: 5,
      comment: "The best sushi rolls I have ever tasted, hands down!",
      topCommenter: "Emily",
    },
  ];
  return (
    <div className="my-28">
      <h2 className="text-xl text-center mb-20">Review Items Here </h2>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recipe Image
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recipe Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Comment
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Top Commenter
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recipes.map((recipe) => (
                  <tr key={recipe.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img className="h-10 w-10 rounded-full" src={recipe.image} alt={recipe.title} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{recipe.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-yellow-500">
                          {recipe.rating}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="" />
                            </svg>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{recipe.comment}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{recipe.topCommenter}</div>
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
