import { FaRegCopyright } from "react-icons/fa";
import "../App.css";
import { projects } from "../constants";
const Works = () => {
  return (
    <div className="w-[700px]">
      <div className=" bg-primaryColor rounded-t-xl p-8 ">
        <div className="flex items-center gap-4 mb-7">
          <h1 className=" text-textColor text-2xl font-bold">Resume</h1>
          <hr className=" border-[#1B74E4]  border-2 w-32 rounded-full" />
        </div>

        <div className=" my-6">
          <ul className="flex items-center gap-3 justify-end ">
            <li className="relative work-nav-links text-sm text-[#A6A6A6] font-bold hover:text-textColor hover:-translate-y-1  cursor-pointer transition-all duration-500 ease-in-out">
              All
            </li>
            <li className="relative work-nav-links text-sm text-[#A6A6A6] font-bold hover:text-textColor hover:-translate-y-1  cursor-pointer transition-all duration-500 ease-in-out">
              Web Apps
            </li>
            <li className="relative work-nav-links text-sm text-[#A6A6A6] font-bold hover:text-textColor hover:-translate-y-1  cursor-pointer transition-all duration-500 ease-in-out">
              Web Designs
            </li>
          </ul>
        </div>

        {/* works section */}
        <div className="grid grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={` p-3 rounded-[24px]  flex flex-col items-center gap-3 ${
                index === 0 || index === 3 || index === 4 || index === 7
                  ? "bg-secondaryColor2"
                  : "bg-secondaryColor4"
              }`}
            >
              <div className=" rounded-xl w-full h-44 border">
                <img
                  src={project.thumbnail}
                  alt={project.projectTitle}
                  className=" h-full w-full object-cover"
                />
              </div>
              <span className=" text-[10px] font-extralight text-gray-500 self-start">
                {project.category}
              </span>
              <p className=" text-sm font-semibold self-start">
                {project.projectTitle}
              </p>
            </div>
          ))}
        </div>
        <div></div>
      </div>

      <footer className=" bg-secondaryColor p-4 rounded-b-xl">
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

export default Works;
