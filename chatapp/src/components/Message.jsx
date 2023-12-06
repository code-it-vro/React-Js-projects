import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ isOwner, message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`flex gap-5 mt-2 ${
        message.senderId === currentUser.uid ? "flex-row-reverse" : ""
      }`}
      // for any chat messages displaying error go throught above styling
    >
      <div className="flex flex-col text-gray-800 font-medium mb-3 mr-2 ">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{`${
          message.senderId === currentUser.uid && currentUser.displayName
            ? currentUser.displayName
            : data.user.displayName
        }`}</span>
      </div>
      <div
        className={`flex flex-col gap-2 py-2 px-5 inlin-block  ${
          isOwner ? "messageContent" : ""
        }`}
      >
        <p
          className={`rounded-tl-lg px-2 max-w-max ${
            isOwner ? "rounded-tr-lg" : "rounded-tr-lg"
          } rounded-br-lg rounded-bl-lg ${
            isOwner ? "bg-blue-400 text-white" : "bg-white"
          }`}
        >
          {message.text}
        </p>
        {message.img && (
          <img src={message.img} alt="" className="object-cover" />
        )}
      </div>
    </div>
  );
};

export default Message;
