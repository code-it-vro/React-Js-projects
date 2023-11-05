import React from "react";
import { FiPaperclip } from "react-icons/fi";
import { FaImage } from "react-icons/fa";

const Input = () => {
  return (
    <>
      <div>
        <div className="h-14 bg-blue-100 flex items-center justify-between">
          <input
            type="text"
            placeholder="Your message .. "
            className="w-full mx-2 bg-transparent border-none outline-none"
          />
          <div className="flex items-center justify-center gap-3 pr-3 cursor-pointer text-gray-600">
            <FiPaperclip />
            <input type="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <FaImage />
            </label>
            <button className="bg-blue-300 rounded-2xl px-2 font-medium">Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
