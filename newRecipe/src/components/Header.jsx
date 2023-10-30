import React from 'react'

const Header = () => {
  return (
    <>
      <div className="bg-slate-300 inline-block m-6 pl-8 pr-10 pt-4 pb-4 rounded-r-full flex-col ">
        <h1 className="text-5xl md:text-6xl pb-4 font-extrabold tracking-wider">
          Culinary Creations
        </h1>
        <div className="text-2xl md:text-4xl md:ml-2 font-bold ">
          <p> Discover and Savor ,</p>
          <p> Culinary Wonders</p>
        </div>
      </div>
    </>
  );
}

export default Header
