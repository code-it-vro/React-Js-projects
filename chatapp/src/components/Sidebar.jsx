import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Chats from "../components/Chats";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/3 bg-slate-600  overflow-hidden ">
        <Navbar />
        <Search />
        <Chats />
      </div>
    </>
  );
};

export default Sidebar;
