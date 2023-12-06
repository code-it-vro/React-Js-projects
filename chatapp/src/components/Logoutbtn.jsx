import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebaseconfig";

const Logoutbtn = () => {
  return (
    <button
      className="bg-slate-200 rounded-3xl text-black text-xs px-2 font-semibold"
      onClick={() => signOut(auth)}
    >
      Logout
    </button>
  );
};

export default Logoutbtn;
