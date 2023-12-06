import React, { useState } from "react";

import { auth, db, storage } from "../firebaseconfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { FaCamera } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-300">
      <div className=" flex flex-col items-center justify-center bg-blue-400 rounded-xl p-5 mx-3 w-full sm:w-2/3 lg:w-1/3 h-2/3 shadow-xl ">
        <span
          className="text-4xl sm:text-3xl lg:text-5xl  text-white font-bold pb-8 sm:mb-4 lg:mb-8"
          style={{ textShadow: " 4px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Signup
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="font-semibold text-xl w-full justify-between flex">
            <label>Name </label>
            <input
              required
              type="text"
              placeholder="display name"
              className=" border-none outline-none rounded-lg  "
            />
          </div>
          <div className="font-semibold text-xl w-full flex justify-between ">
            <label>email </label>
            <input
              required
              type="email"
              placeholder="email"
              className=" border-none outline-none rounded-lg  "
            />
          </div>
          <div className="font-semibold text-xl w-full flex justify-between ">
            <label>password </label> &nbsp;&nbsp;&nbsp;
            <input
              required
              type="password"
              placeholder="password"
              className=" border-none outline-none rounded-lg "
            />
          </div>
          <div className=" w-full flex justify-center items-center gap-4 text-xl pt-3 ">
            <input required type="file" id="file" className="hidden " />
            <FaCamera className="text-slate-200" />
            <label htmlFor="file" className="cursor-pointer">
              <span>Add an avatar</span>
            </label>
          </div>
          <button
            disabled={loading}
            className="bg-blue-600 p-2 rounded-3xl text-white"
            style={{ textShadow: " 4px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Sign up
          </button>
          {loading && "Uploading and compressing the image please wait..."}
          {/* {err && <span>Something went wrong</span>} */}
        </form>
        <div className="text-lg pt-3">
          You do have an account?{" "}
          <Link className="font-medium text-white" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
