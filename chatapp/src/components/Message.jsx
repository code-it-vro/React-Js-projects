import React from "react";

const Message = ({ isOwner }) => {
  return (
    <div className={`flex gap-5 mt-2 ${isOwner ? "flex-row-reverse" : ""}`}>
      <div className="flex flex-col text-gray-800 font-medium mb-3 mr-2 ">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://images.pexels.com/photos/16304368/pexels-photo-16304368/free-photo-of-nike-off-white-jordan-1-university-blue.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="ashu"
        />
        <span>Ashu </span>
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
          hello
        </p>
        <img
          className="object-cover"
          src="https://images.pexels.com/photos/16304368/pexels-photo-16304368/free-photo-of-nike-off-white-jordan-1-university-blue.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="ashu"
        />
      </div>
    </div>
  );
};

export default Message;
