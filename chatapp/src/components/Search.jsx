import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  getDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebaseconfig";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {}
    setUser(null);
    setUsername("");
  };

  return (
    <>
      <div>
        <div>
          <input
            className="border-none outline-none bg-transparent py-2 pl-3 text-white font-medium md:text-lg text-sm"
            type="text"
            placeholder="Search for User"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>
        {err && <span>User Not Found</span>}
        {user && (
          <div
            className="bg-slate-600 hover:bg-slate-700 text-white flex items-center gap-3 pl-1 py-1 cursor-pointer"
            onClick={handleSelect}
          >
            <img
              className=" w-9 h-8 md:w-14 md:h-14  object-cover rounded-full"
              src={user.photoURL}
              alt=""
            />
            <span className="md:text-lg text-sm font-medium">
              {user.displayName}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
