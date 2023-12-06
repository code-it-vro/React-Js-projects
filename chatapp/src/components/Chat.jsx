import React, { useContext } from "react";
import { FaCamera, FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
import Logoutbtn from "./Logoutbtn";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <>
      <div className="w-2/3 bg-blue-300 relative  ">
        <div className="flex justify-between items-center bg-slate-600 h-12 text-white pt-1 md:pl-4 pl-2">
          <span className="font-bold text-xl">{data.user?.displayName}</span>
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
