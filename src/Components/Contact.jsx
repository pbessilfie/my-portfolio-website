import { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";

const Contact = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);
  return (
    <div className="w-[700px]">
      <div className=" bg-primaryColor rounded-t-xl p-8 ">
        <div className="flex items-center gap-4 mb-7">
          <h1 className=" text-textColor text-2xl font-bold">Contact</h1>
          <hr className=" border-[#1B74E4]  border-2 w-32 rounded-full" />
        </div>

        {/* contact form */}
        <div className=" bg-secondaryColor rounded-2xl p-10">
          <h4 className=" text-base text-gray-600 mb-10">
            I’m Always Open To Discussing Product <br />
            <span className=" font-semibold text-textColor ">
              design word of partnerships.
            </span>
          </h4>
          <form>
            <div className="relative w-full h-5 mb-10 ">
              <label
                className={`absolute  text-sm font-normal transition-all duration-500 ease-in-out ${
                  isNameFocused ? "-top-4 left-1 scale-75 text-[#1B74E4]" : "top-0 left-3 text-[#303132]"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                className=" w-full h-full border-b border-b-[#484A4B] focus:border-b-[#1B74E4] outline-none bg-transparent p-3 text-[#303132] text-sm"
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
              />
            </div>
            <div className="relative w-full  h-5 mb-10 ">
              <label
                className={`absolute  text-sm font-normal transition-all duration-500 ease-in-out ${
                  isEmailFocused ? "-top-4 left-1 scale-75 text-[#1B74E4]" : "top-0 left-3 text-[#303132]"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                className=" w-full h-full border-b border-b-[#484A4B] focus:border-b-[#1B74E4] outline-none bg-transparent p-3 text-[#303132] text-sm"
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
              />
            </div>
            <div className="relative w-full  h-5 mb-10 ">
              <label
                className={`absolute  text-sm font-normal transition-all duration-500 ease-in-out ${
                  isMessageFocused
                    ? "-top-4 left-1 scale-75 text-[#1B74E4]"
                    : "top-0 left-3 text-[#303132]"
                }`}
              >
                Message
              </label>
              <textarea
                type="text"
                className=" w-full h-full border-b border-b-[#484A4B] focus:border-b-[#1B74E4] outline-none bg-transparent p-3 text-[#303132] text-sm"
                onFocus={() => setIsMessageFocused(true)}
                onBlur={() => setIsMessageFocused(false)}
              />
            </div>
            <button className=" border border-textColor rounded-xl text-sm px-8 py-2 hover:bg-[#1B74E4] hover:text-secondaryColor transition-all duration-500 ease-in-out">
              Submit
            </button>
          </form>
        </div>
      </div>

      <footer className=" bg-secondaryColor p-8 rounded-b-xl">
        <div className="flex justify-center text-[9px] font-thin text-gray-600 text-center ">
          <span className="flex items-center gap-1">
            <FaRegCopyright className="" /> 2024 All Rights Reserved by
            evolution architects
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
