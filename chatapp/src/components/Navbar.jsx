import React, { useContext } from "react";
import Logoutbtn from "./Logoutbtn";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="flex items-center h-14 bg-slate-600 text-white p-2 justify-between rounded-ss-xl">
        <span className="font-bold text-xl">ChatVista</span>

        <div className="flex gap-3">
          <img
            src={currentUser.photoURL}
            alt={currentUser.displayName}
            className="h-6 w-8 bg-cover rounded-full hidden md:inline-block"
          />
          <span className="hidden md:inline-block">
            {currentUser.displayName}
          </span>
          <div className="hidden md:flex md:items-center md:justify-center">
            <Logoutbtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
