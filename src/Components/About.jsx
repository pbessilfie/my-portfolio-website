import { CgIfDesign } from "react-icons/cg";
import { FaCode, FaRegCopyright } from "react-icons/fa";
import { MdOutlineDeveloperMode, MdOutlineWeb } from "react-icons/md";

const About = () => {
  return (
    <div className="w-[700px]">
      <div className=" bg-primaryColor rounded-t-xl p-10 ">
        <div className="flex items-center gap-4 mb-7">
          <h1 className=" text-textColor text-2xl font-bold">About</h1>
          <hr className=" border-[#1B74E4]  border-2 w-32 rounded-full" />
        </div>
        <div
          className="mb-5
      "
        >
          <p className=" text-sm font-normal mb-4">
            I’m Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.{" "}
          </p>
          <p className=" text-sm font-normal ">
            My aim is to bring across your message and identity in the most
            creative way. I created web design for many famous brand companies.
          </p>
        </div>

        <div className=" mb-2">
          <h2 className=" font-bold text-base mb-7">What I Do!</h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex gap-4 bg-secondaryColor2 p-6 rounded-lg ">
              <MdOutlineWeb className=" text-6xl text-[#BE77D8]" />
              <div>
                <h3 className=" font-semibold text-base mb-3">Web Design</h3>
                <p className=" text-sm font-light">
                  My aim is to bring across your message and identity in the
                  most creative way. I created web design for many famous brand
                  companies.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-secondaryColor p-6 rounded-lg">
              <MdOutlineDeveloperMode className=" text-6xl text-[#D89D26]" />
              <div>
                <h3 className=" font-semibold text-base mb-3">
                  Mobile App development
                </h3>
                <p className=" text-sm font-light">
                  My aim is to bring across your message and identity in the
                  most creative way. I created web design for many famous brand
                  companies.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-secondaryColor p-6 rounded-lg">
              <CgIfDesign className=" text-6xl text-[#EA6985]" />
              <div>
                <h3 className=" font-semibold text-base mb-3">UI/UX Design</h3>
                <p className=" text-sm font-light">
                  My aim is to bring across your message and identity in the
                  most creative way. I created web design for many famous brand
                  companies.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-secondaryColor2 p-6 rounded-lg">
              <FaCode className=" text-6xl text-[#BE77D8]" />
              <div>
                <h3 className=" font-semibold text-base mb-3">
                  Web development
                </h3>
                <p className=" text-sm font-light">
                  My aim is to bring across your message and identity in the
                  most creative way. I created web design for many famous brand
                  companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className=" bg-secondaryColor p-10 rounded-b-xl">
        <h3 className="font-bold text-lg text-center mb-5">Clients</h3>
        <div className="flex items-center justify-evenly mb-10">
          <img
            src="/src/assets/cinespectra-high-resolution-logo-transparent (2).png"
            className="w-10"
          />
          <img
            src="/src/assets//logo_5__1_-removebg-preview 1.png"
            className="w-10"
          />
          <img src="/src/assets/Logo 1.png" className="w-10" />
          <img
            src="/src/assets/xcuxion-logo-removebg-preview 1.png"
            className="w-10"
          />
        </div>

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

export default About;
