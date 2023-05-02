import React from "react";

const Items = () => {
  const photos = [
    {
      id: 1,
      rating: 4.2,
      name: "Venetian Duck Ragu",
      url: "https://i.ibb.co/ysyZHKL/wxswxy1511452625.jpg",
    },
    {
      id: 2,
      rating: 4.4,
      name: "egan Lasagna",
      url: "https://i.ibb.co/b58C66j/ustsqw1468250014.jpg",
    },
    {
      id: 3,
      rating: 4.5,
      name: "Squash linguine",
      url: "https://i.ibb.co/94pV4pS/0jv5gx1661040802.jpg",
    },
    {
      id: 4,
      rating: 4.4,
      name: "Spinach & Ricotta Cannelloni",
      url: "https://i.ibb.co/cbQqNxY/OIP.jpg",
    },
    {
      id: 5,
      rating: 4.5,
      name: "Spicy Arrabiata Penne",
      url: "https://i.ibb.co/94pV4pS/0jv5gx1661040802.jpg",
    },
    {
      id: 6,
      rating: 4.3,
      name: "Spaghetti alla Carbonara",
      url: "https://i.ibb.co/Lkg8WQv/qvrwpt1511181864.jpg",
    },
  ];

  return (
    <div className="my-28">
        <h2 className="text-xl my-20 text-center">Our Items Best DIshers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3   gap-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="relative group overflow-hidden rounded-lg shadow-md"
        >
          <img className="w-full" src={photo.url} alt={photo.name} />
          <div className="absolute flex items-center justify-center bottom-0 left-0 w-full h-full p-4 text-white text-center transition-all duration-300 bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-75 group-hover:opacity-100">
            <div>
            <p className="font-bold text-xl">{photo.name}</p>
            <br />
            <p className="font-bold text-lg">Rating {photo.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Items;
