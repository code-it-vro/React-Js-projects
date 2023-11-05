import React from "react";

const Search = () => {
  return (
    <>
      <div>
        <div>
          <input
            className="border-none outline-none bg-transparent py-2 pl-3"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="bg-slate-600 hover:bg-slate-700 text-white flex items-center gap-3 pl-1 py-1">
          <img
            className=" w-10 h-10 md:w-14 md:h-14  object-cover rounded-full"
            src="https://images.pexels.com/photos/16304368/pexels-photo-16304368/free-photo-of-nike-off-white-jordan-1-university-blue.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="ashu"
          />
          <span className="text-lg font-medium">shukla</span>
        </div>
      </div>
    </>
  );
};

export default Search;
