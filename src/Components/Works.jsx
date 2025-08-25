import { FaRegCopyright } from "react-icons/fa";
import "../App.css";
import { projects } from "../constants";
import { useState } from "react";
import { getIndex } from "../utils/getIndex";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, scaleIn } from "../constants/variants";
const Works = () => {
  const [works, setWorks] = useState(projects);
  const [activeLink, setActiveLink] = useState("All");

  const workNav = ["All", "Web Development", "UI/UX Designs"];

  const indeces = getIndex(projects);

  const filteredWorks = (category) => {
    const newWorks = projects.filter(
      (project) => project.category === category
    );
    setWorks(newWorks);
  };

  return (
    <div className="w-full ">
      <div className=" bg-primaryColor dark:bg-black dark:text-white lg:rounded-t-xl p-5 md:p-8 ">
        <motion.div
          variants={fadeIn("left", 0.25)}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4 mb-7"
        >
          <h1 className=" text-textColor dark:text-white text-2xl font-bold">
            Works
          </h1>
          <hr className=" border-[#1B74E4]  border-2 w-32 rounded-full" />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          animate="show"
          className=" my-6"
        >
          <ul className="flex items-center gap-3 justify-end ">
            {workNav.map((link, index) => (
              <li
                key={index}
                target="_blank"
                className={`relative work-nav-links text-sm text-[#A6A6A6] font-semibold hover:text-textColor dark:hover:text-gray-400 hover:-translate-y-1  cursor-pointer transition-all duration-300 ease-in-out dark:text-white ${
                  activeLink === link
                    ? "-translate-y-1 text-textColor"
                    : " translate-y-0"
                }`}
                onClick={() => {
                  setActiveLink(link);
                  if (link === "Web Development") {
                    filteredWorks("Web App");
                  } else if (link === "UI/UX Designs") {
                    filteredWorks("Web Design");
                  } else {
                    setWorks(projects);
                  }
                }}
              >
                {link}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* works section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5 xl:gap-10">
          <AnimatePresence>
            {works.map((project, index) => (
              <motion.div
                variants={scaleIn(0.25, index)}
                initial="hidden"
                animate={"show"}
                viewport={{ once: true, amount: 0.25 }}
                exit={"hidden"}
                key={index}
              >
                <Link
                  to={project.link}
                  className={` p-3 rounded-[24px] hover:shadow-xl transition-all ease-in-out duration-500  flex flex-col items-center gap-3 cursor-pointer group dark:bg-darkBg ${
                    indeces.includes(index)
                      ? "bg-secondaryColor2"
                      : "bg-secondaryColor4"
                  }`}
                >
                  <div className=" rounded-xl w-full h-44 overflow-hidden group-hover:-mt-5 group-hover:mb-5 transition-all ease-in-out duration-500">
                    <img
                      src={project.thumbnail}
                      alt={project.projectTitle}
                      className=" h-full w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-500"
                    />
                  </div>
                  <span className=" text-[10px] font-extralight text-gray-500 dark:text-gray-400 self-start">
                    {project.category}
                  </span>
                  <p className=" text-sm font-semibold self-start">
                    {project.projectTitle}
                  </p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* <div></div> */}
      </div>
      <footer className=" bg-secondaryColor  dark:bg-black dark:text-white dark:border-t dark:border-slate-600 p-4 lg:rounded-b-xl">
        <div className="flex justify-center text-[9px] font-thin dark:text-white text-gray-600 text-center ">
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
