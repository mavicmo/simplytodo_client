import React from "react";

const HomePage = () => {
  return (
    /* Global Container */
    <div className="w-full h-screen bg-teal-50">
      <div className="flex flex-col space-y-0 bg-white shadow-2xl rounded-2xl  md:flex-row md:space-y-0 md:m-0 md:justify-between md:items-center">
        <div className="md:block m-auto p-5 font-bold text-6xl text-teal-700 ">
          SimplyToDo.
        </div>
        <div className=" m-auto p-5 font-bold text-xl text-teal-700 ">
          Account
        </div>
      </div>
    </div>
  );

  //   <div className="flex items-center justify-center min-h-screen bg-teal-50">
  //         {/* Card Container */}
  //         <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
  //           {/* left side */}
  //           <div className="md:block m-auto p-12 justify-center font-bold text-6xl text-teal-700 ">
  //             SimplyToDo.
  //           </div>
};

export default HomePage;
