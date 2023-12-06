import React, { useContext, useState } from "react";
import { FaImage } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebaseconfig";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Check if there is a message
    if (!text && !img) {
      return; // Don't send an empty message
    }

    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          // Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <>
      <div className="h-14 bg-blue-100 flex items-center justify-between">
        <input
          type="text"
          placeholder="Your message .. "
          className="w-full mx-2 bg-transparent border-none outline-none"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="flex items-center gap-3 pr-3 cursor-pointer text-gray-600">
          <label htmlFor="file" className="hidden md:inline-block">
            <FiPaperclip />
          </label>
          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <button
            className="bg-blue-300 rounded-2xl px-2 font-medium"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
