import React from 'react';

const Blog = () => {

   //question parts
    return (
        <div>
           <div className="px-8">
      <div className="mt-5 card border-none w-50 bg-base-100">
        <div className="card-body text-lg text-[#111111]">
         <div className="text-[#111111] my-5">
            <h2 className="text-2xl font-bold">1: The differences between uncontrolled and controlled components</h2>
            <p className="text-lg mt-8">Ans:
            Unlike the uncontrolled component, the input form element in the controlled component is handled by the component rather than the DOM.
            also Uncontrolled Component Maintains its internal state.   controlled components Does not maintain its internal state.
            
                    
                    </p>
         </div>
         <div className="text-[#111111] my-5">
            <h2 className="text-2xl font-bold">2:How to validate React props using PropTypes?</h2>
            <p className="text-lg mt-8"> Ans: </p>
         </div>
         <div className="text-[#111111] my-5">
            <h2 className="text-2xl font-bold">3: The difference between nodejs and express js.?</h2>
            <p className="text-lg mt-8">Ans: Node.js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications  and 
            Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
            "</p>
         </div>
         <div className="text-[#111111] my-5">
            <h2 className="text-2xl font-bold">4: What is a custom hook, and why will you create a custom hook?</h2>
            <p className="text-lg mt-8"> Ans: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.  when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code</p>
         </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Blog;