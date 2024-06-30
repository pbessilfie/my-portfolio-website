import { FaRegCopyright } from "react-icons/fa";
import "../App.css";
import { projects } from "../constants";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
const Works = () => {
  // const navigate = useNavigate();
  const [sltdProjLk, setSltdProjLk] = useState("All");

  // const projectNavigation = (title) => {
  //   switch (title) {
  //     case "CineSpectre movie web app":
  //       navigate(
  //         "https://github.com/pbessilfie/CineSpectra-Movie-Website-.git"
  //       );
  //       break;

  //     case "Bitblog hub - A blog website":
  //       navigate(
  //         "https://github.com/pbessilfie/CineSpectra-Movie-Website-.git"
  //       );
  //       break;
  //     case "Nike Landing page clone":
  //       navigate(
  //         "https://github.com/pbessilfie/CineSpectra-Movie-Website-.git"
  //       );
  //       break;
  //     case "Restaurant website":
  //       navigate(
  //         "https://github.com/pbessilfie/CineSpectra-Movie-Website-.git"
  //       );
  //       break;
  //     case "FrazAi - Generative AI web app":
  //       navigate(
  //         "https://github.com/pbessilfie/CineSpectra-Movie-Website-.git"
  //       );
  //       break;
  //     case "Porfolio website":
  //       navigate(
  //         "https://github.com/pbessilfie/CineSpectra-Movie-Website-.git"
  //       );
  //       break;
  //   }
  // };

  const getIndex = (arr) => {
    const indexArr = [];
    let current = 0;
    for (let i = current; current < arr.length; i++) {
      indexArr.push(current);
      if (i % 2 == 0) {
        current += 3;
      } else {
        current += 1;
      }
      // return current;
    }
    return indexArr;
  };
  const indeces = getIndex(projects);

  const sltdProjDetails = () => {
    if (sltdProjLk) {
      switch (sltdProjLk) {
        case "Web Apps":
          return projects
            .filter((project) => project.category === "Web App")
            .map((project, index) => (
              <div
                key={index}
                className={` p-3 rounded-[24px] hover:shadow-xl transition-all ease-in-out duration-500  flex flex-col items-center gap-3 cursor-pointer group ${
                  indeces.includes(index)
                    ? "bg-secondaryColor2"
                    : "bg-secondaryColor4"
                }`}
                // onClick={() => projectNavigation(project.projectTitle)}
              >
                <div className=" rounded-xl w-full h-44 overflow-hidden group-hover:-mt-5 group-hover:mb-5 transition-all ease-in-out duration-500">
                  <img
                    src={project.thumbnail}
                    alt={project.projectTitle}
                    className=" h-full w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-500"
                  />
                </div>
                <span className=" text-[10px] font-extralight text-gray-500 self-start">
                  {project.category}
                </span>
                <p className=" text-sm font-semibold self-start">
                  {project.projectTitle}
                </p>
              </div>
            ));
        case "Web Designs":
          return projects
            .filter((project) => project.category === "Web Design")
            .map((project, index) => (
              <div
                key={index}
                className={` p-3 rounded-[24px] hover:shadow-xl transition-all ease-in-out duration-500  flex flex-col items-center gap-3 cursor-pointer group ${
                  indeces.includes(index)
                    ? "bg-secondaryColor2"
                    : "bg-secondaryColor4"
                }`}
                // onClick={() => projectNavigation(project.projectTitle)}
              >
                <div className=" rounded-xl w-full h-44 overflow-hidden group-hover:-mt-5 group-hover:mb-5 transition-all ease-in-out duration-500">
                  <img
                    src={project.thumbnail}
                    alt={project.projectTitle}
                    className=" h-full w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-500"
                  />
                </div>
                <span className=" text-[10px] font-extralight text-gray-500 self-start">
                  {project.category}
                </span>
                <p className=" text-sm font-semibold self-start">
                  {project.projectTitle}
                </p>
              </div>
            ));
        default:
          return projects.map((project, index) => (
            <div
              key={index}
              className={` p-3 rounded-[24px] hover:shadow-xl transition-all ease-in-out duration-500  flex flex-col items-center gap-3 cursor-pointer group ${
                indeces.includes(index)
                  ? "bg-secondaryColor2"
                  : "bg-secondaryColor4"
              }`}
              // onClick={() => projectNavigation(project.projectTitle)}
            >
              <div className=" rounded-xl w-full h-44 overflow-hidden group-hover:-mt-5 group-hover:mb-5 transition-all ease-in-out duration-500">
                <img
                  src={project.thumbnail}
                  alt={project.projectTitle}
                  className=" h-full w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-500"
                />
              </div>
              <span className=" text-[10px] font-extralight text-gray-500 self-start">
                {project.category}
              </span>
              <p className=" text-sm font-semibold self-start">
                {project.projectTitle}
              </p>
            </div>
          ));
      }
    }
  };

  return (
    <div className="w-[700px]">
      <div className=" bg-primaryColor rounded-t-xl p-8 ">
        <div className="flex items-center gap-4 mb-7">
          <h1 className=" text-textColor text-2xl font-bold">Resume</h1>
          <hr className=" border-[#1B74E4]  border-2 w-32 rounded-full" />
        </div>

        <div className=" my-6">
          <ul className="flex items-center gap-3 justify-end ">
            <li
              className="relative work-nav-links text-sm text-[#A6A6A6] font-bold hover:text-textColor hover:-translate-y-1  cursor-pointer transition-all duration-500 ease-in-out"
              onClick={() => setSltdProjLk("All")}
            >
              All
            </li>
            <li
              className="relative work-nav-links text-sm text-[#A6A6A6] font-bold hover:text-textColor hover:-translate-y-1  cursor-pointer transition-all duration-500 ease-in-out"
              onClick={() => setSltdProjLk("Web Apps")}
            >
              Web Apps
            </li>
            <li
              className="relative work-nav-links text-sm text-[#A6A6A6] font-bold hover:text-textColor hover:-translate-y-1  cursor-pointer transition-all duration-500 ease-in-out"
              onClick={() => setSltdProjLk("Web Designs")}
            >
              Web Designs
            </li>
          </ul>
        </div>

        {/* works section */}
        <div className="grid grid-cols-2 gap-10">{sltdProjDetails()}</div>

        {/* <div></div> */}
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
