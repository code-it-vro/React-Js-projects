import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <>
      <div className="bg-blue-400 h-screen flex justify-center items-center shadow-2xl">
        <div className="border-1 border-slate-200 w-11/12 h-5/6  md:h-5/6 md:w-7/12 rounded-2xl flex overflow-hidden shadow-2xl">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Home;
