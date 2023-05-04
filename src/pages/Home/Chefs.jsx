import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "./Chef";
import { useState } from "react";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Chefs = () => {
   const chefs = useLoaderData()

  console.log(chefs)

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="my-28 ">
      {loading ? (
        <div className="text-center">
            <ClipLoader color={"#cf1515"} loading={loading} size={50} />
        </div>
      ) : (
        <>
          <div className="text-center mt-28 mb-14">
            <h2 className="text-2xl font-bold mb-4">Our chefs</h2>
            <p className="text-xl">
              Food is not just fuel, it's information. It talks to your DNA and
              tells it what to do.{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chefs.map((chef) => (
              <Chef key={chef.id} chef={chef}></Chef>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Chefs;
