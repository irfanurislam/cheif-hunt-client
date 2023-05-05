import React from "react";

const BookTable = () => {

  return (
    <div className="bg-[#111d22] min-h-screen py-16 mt-3">
      <div className="flex justify-center items-center px-4 md:px-0 h-screen">
        <div className="flex flex-col items-center p-8 rounded shadow-lg w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-lg font-semibold text-[#c9ab81] mb-4">
            Reservation
          </h1>
          <h2 className="text-4xl text-center font-medium text-[#c9ab81] mb-14">
            BOOK A TABLE
          </h2>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Person number"
              className="input w-full max-w-sm mb-4 md:mr-4 md:mb-0"
            />

            <input
              type="text"
              placeholder="Date"
              className="input w-full max-w-sm"
             
            />
          </div>
          <div className="flex flex-col md:flex-row mt-4">
            <input
              type="text"
              placeholder="Time"
              className="input w-full max-w-sm mb-4 md:mr-4 md:mb-0"
            />
            <input
              type="text"
              placeholder="Recipe name"
              className="input w-full max-w-sm"
            />
          </div>
          <button className="btn btn-warning mt-8">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
