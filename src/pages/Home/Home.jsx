import React from "react";
import Banner from "./Banner";
import Chefs from "./Chefs";
import Items from "./Items";
import Reviewer from "./Reviewer";
import { useState } from "react";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import BookTable from "./BookTable";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="">
      {loading ? ( <div className="text-center">
        <ClipLoader  color={"#cf1515"} loading={loading} size={50} /></div>
      ) : (
        <>
          <Banner></Banner>
          <Chefs></Chefs>
          <Items></Items>
          <Reviewer></Reviewer>
          <BookTable></BookTable>
        </>
      )}
    </div>
  );
};

export default Home;
