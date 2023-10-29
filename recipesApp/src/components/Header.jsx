
import React from "react";

const Header = () => {
  return (
    <div>
      <header
        className="h-60 w-full bg-cover bg-center bg-no-repeat absolute rounded-3xl m-1"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4374580/pexels-photo-4374580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          filter: "grayscale(10%) blur(0.3px) brightness(0.8)",
        }}
      ></header>
      <text className="flex flex-col relative text-center top-8 font-extrabold text-white">
        <h1 className="pb-5 text-5xl sm:text-7xl" style={{ textShadow: "2px 2px 8px red" }}>
          Culinary Creations
        </h1>
        <p className="text-4xl " style={{ textShadow: "2px 2px 8px green" }}>
          Discover and Savor 
        </p>
        <p className="text-3xl " style={{ textShadow: "2px 2px 8px green" }}>
          Culinary Wonders
        </p>
      </text>
      
    </div>
  );
};

export default Header;
