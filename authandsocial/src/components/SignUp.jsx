import React, { useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        console.log(userCredentials);
      }
    );
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-300">
      <form
        onSubmit={createAccount}
        className="flex flex-col items-center justify-center bg-blue-400 rounded-xl p-5 mx-3 w-full sm:w-2/3 lg:w-1/3 h-2/3 shadow-xl"
      >
        <h1
          className="text-4xl sm:text-3xl lg:text-5xl text-white font-bold mb-6 sm:mb-4 lg:mb-14"
          style={{ textShadow: " 4px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Please Sign Up
        </h1>
        <label
          htmlFor="email"
          className="text-2xl font-semibold sm:text-lg lg:text-2xl mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          className="w-full p-2 mb-4 rounded-lg outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          htmlFor="password"
          className="text-2xl sm:text-lg font-semibold lg:text-2xl mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your Password"
          className="w-full p-2 mb-8 rounded-lg outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-110 shadow-2xl text-white font-bold py-2 px-5 rounded-lg mr-8"
          >
            Sign Up
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-110 shadow-2xl text-white font-bold py-2 px-5 rounded-lg ml-8"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
