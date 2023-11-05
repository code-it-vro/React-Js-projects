import React, { useState } from "react";
import { auth } from "../firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-300">
      <div className="flex flex-col items-center bg-blue-400  rounded-xl p-5 mx-3 w-full sm:w-2/3 lg:w-1/3 h-2/3 shadow-xl">
        <h1
          className="md:text-5xl text-3xl  text-white font-bold pb-12 pt-6 sm:mb-4 lg:mb-8"
          style={{ textShadow: " 4px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-8"
        >
          <input
            type="email"
            placeholder="email"
            required
            className=" border-none outline-none rounded-lg px-8 py-1 font-semibold text-xl w-full  "
          />
          <input
            type="password"
            placeholder="Password"
            required
            className=" border-none outline-none rounded-lg px-8 py-1 font-semibold text-xl w-full "
          />
          <button
            className=" font-semibold text-lg bg-blue-600 p-2 px-6 mt-2 rounded-3xl text-white hover:bg-blue-700 duration-300  hover:scale-110 "
            style={{ textShadow: " 4px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Login
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className="pt-5 text-lg ">
          You don't have an account?{" "}
          <Link className="font-medium text-white" to="/signup">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
