import React from "react";

const Home = () => {
  return (
    <>
      <div className="ml-3 mr-3 mt-3">
        <nav className="w-full h-16 bg-slate-300 flex items-center justify-center ">
          <div className="w-1/6 h-16 flex items-center justify-center bg-slate-400 p-2 rounded-xl" style={{}} >
            Logo
          </div>
          <div className="w-2/3 h-16 flex items-center justify-center bg-slate-100 rounded-xl">
            <input type="text" />
            <button>filter</button>
          </div>
          <div className="w-1/6 h-16 flex items-center justify-center bg-slate-500 p-2 rounded-xl">
            <button className="bg-slate-500">Become a seller</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Home;
