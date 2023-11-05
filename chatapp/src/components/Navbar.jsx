import React from "react";
import Logoutbtn from "./Logoutbtn";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center h-14 bg-slate-600 text-white p-2 justify-between rounded-ss-xl">
        <span className="font-bold text-xl">ChatVista</span>

        <div className="flex gap-3">
          <img
            src="https://images.pexels.com/photos/16304368/pexels-photo-16304368/free-photo-of-nike-off-white-jordan-1-university-blue.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="ashu"
            className="h-6 w-8 bg-cover rounded-full hidden md:inline-block"
          />
          <span className="hidden md:inline-block">Ashu</span>
          <div className="hidden md:flex md:items-center md:justify-center">
          <Logoutbtn/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
