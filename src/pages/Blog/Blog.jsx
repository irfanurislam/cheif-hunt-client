import React from "react";
import Pdf from "react-to-pdf";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { useState } from "react";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";


const ref = React.createRef();
const Blog = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);






  //question parts
  return (
    <div className="mb-20">
    {loading ? 
    <div className="text-center">
    <ClipLoader  color={"#cf1515"} loading={loading} size={50} /></div>
    :<>
    <div ref={ref} className="px-8">
        <div className="mt-5 card border-none w-50 bg-base-100">
          <div className="card-body text-lg text-[#111111]">
            <div className="text-[#111111] my-5">
              <h2 className="text-2xl font-bold">
                1: The differences between uncontrolled and controlled
                components
              </h2>
              <p className="text-lg mt-8">
                Ans: Unlike the uncontrolled component, the input form element
                in the controlled component is handled by the component rather
                than the DOM. also Uncontrolled Component Maintains its internal
                state. controlled components Does not maintain its internal
                state.
              </p>
            </div>
            <div className="text-[#111111] my-5">
              <h2 className="text-2xl font-bold">
                2:How to validate React props using PropTypes?
              </h2>
              <p className="text-lg mt-8">
                {" "}
                Ans: PropTypes is a type checking library that allows you to
                specify the type and shape of the props that are passed into a
                React component.
              </p>
            </div>
            <div className="text-[#111111] my-5">
              <h2 className="text-2xl font-bold">
                3: The difference between nodejs and express js.?
              </h2>
              <p className="text-lg mt-8">
                Ans: Node.js is detailed as "A platform built on Chrome's
                JavaScript runtime for easily building fast, scalable network
                applications and Express.js is a framework based on Node.js
                which is used for building web-application using approaches and
                principles of Node.js event-driven architecture. "
              </p>
            </div>
            <div className="text-[#111111] my-5">
              <h2 className="text-2xl font-bold">
                4: What is a custom hook, and why will you create a custom hook?
              </h2>
              <p className="text-lg mt-8">
                {" "}
                Ans: A custom Hook is a JavaScript function whose name starts
                with ”use” and that may call other Hooks. when a custom hook is
                created, it can be reused easily, which makes the code cleaner
                and reduces the time to write the code
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="btn btn-outline btn-secondary">
              <span className="flex items-center gap-2 text-black"><HiOutlineFolderDownload className="text-xl" />  Pdf Converter</span>
            </button>
          )}
        </Pdf>
      </div>
      </>
    
    }

      
    </div>
  );
};

export default Blog;
