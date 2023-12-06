import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseconfig";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);

  return (
    <>
      <div className="bg-blue-200 flex h-5/6 flex-col overflow-y-scroll scrollbar-thin  ">
        {messages.map((m) => (
          <Message message={m} key={m.id} />
        ))}
        {/* <Message isOwner={true} /> */}
        {/* page will break if you are not able to implement isOwner function somehow */}
        {/* page will break if you are not able to implement isOwner function somehow */}
        {/* page will break if you are not able to implement isOwner function somehow */}
      </div>
    </>
  );
};

export default Messages;
