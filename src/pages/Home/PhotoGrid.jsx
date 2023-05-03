import React, { lazy, Suspense } from "react";

const Photo = lazy(() =>
  import("./path/to/Photo").then((module) => ({
    default: (props) => <img alt={props.name} {...props} />,
  }))
);

function PhotoGrid() {
  const photos = [
    {
      id: 1,
      name: "Photo 1",
      url: "https://i.ibb.co/ysyZHKL/wxswxy1511452625.jpg",
      chef: "Chef A",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Photo 2",
      url: "https://i.ibb.co/ysyZHKL/wxswxy1511452625.jpg",
      chef: "Chef B",
      rating: 3.8,
    },
    {
      id: 3,
      name: "Photo 3",
      url: "https://i.ibb.co/ysyZHKL/wxswxy1511452625.jpg",
      chef: "Chef C",
      rating: 4.1,
    },
    {
      id: 4,
      name: "Photo 4",
      url: "https://i.ibb.co/ysyZHKL/wxswxy1511452625.jpg",
      chef: "Chef D",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Photo 5",
      url: "https://i.ibb.co/ysyZHKL/wxswxy1511452625.jpg",
      chef: "Chef E",
      rating: 3.7,
    },
    {
      id: 6,
      name: "Photo 6",
      url: "https://i.ibb.co/ysyZHKL/wxswxy1511452625.jpg",
      chef: "Chef F",
      rating: 4.3,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <Suspense fallback={<div>Loading...</div>} key={photo.id}>
          <Photo
            src={photo.src}
            name={photo.name}
            chef={photo.chef}
            rating={photo.rating}
          />
        </Suspense>
      ))}
    </div>
  );
}


export default PhotoGrid;