import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <>
      <div className="bg-blue-200 flex h-5/6 flex-col overflow-y-scroll scrollbar-thin ">
        <Message isOwner={true} />
        <Message isOwner={true} />
        <Message isOwner={true} />
        <Message isOwner={true} />
        <Message isOwner={true} />
        <Message isOwner={true} />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        
      </div>
    </>
  );
};

export default Messages;
