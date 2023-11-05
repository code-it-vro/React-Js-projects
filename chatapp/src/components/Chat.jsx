import React from "react";
import { FaCamera, FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
import Logoutbtn from "./Logoutbtn";

const Chat = () => {
  return (
    <>
      <div className="w-2/3 bg-blue-300 relative ">
        <div className="flex justify-between items-center bg-slate-600 h-12 text-white pt-1 pl-3">
          <span>Ashu</span>
          <div className="flex gap-4 pr-3">
            <div className=" flex justify-between items-center md:hidden">
              <Logoutbtn />
            </div>
            <FaCamera />
            <FaSearch />
            <FiMenu />
          </div>
        </div>
        <Messages />
        <div className="absolute bottom-0 w-full">
          <Input />
        </div>
      </div>
    </>
  );
};

export default Chat;
