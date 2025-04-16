import { FaRegCopyright } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { workingSkills } from "../constants/workingSkills";
import { Knowledge } from "../constants/knowledge";
import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";

const Resume = () => {
  const [activeLink, setactiveLink] = useState("Education");
  const resumeNavItems = [
    {
      name: "Education",
      icon: (
        <FaGraduationCap
          className="text-2xl text-[#EA6985]"
          style={{
            filter:
              activeLink === "Education"
                ? "brightness(100%)"
                : "brightness(170%)",
          }}
        />
      ),
    },
    {
      name: "Experience",
      icon: (
        <IoBagHandleOutline
          className="text-2xl text-[#EA6985]"
          style={{
            filter:
              activeLink === "Experience"
                ? "brightness(100%)"
                : "brightness(170%)",
          }}
        />
      ),
    },
  ];

  return (
    <div className="w-full flex-1 flex flex-col">
      <div className=" bg-primaryColor lg:rounded-t-xl p-5 md:p-8 flex-1">
        <div className="flex items-center gap-4 mb-7">
          <h1 className=" text-textColor text-2xl font-bold">Resume</h1>
          <hr className=" border-[#1B74E4]  border-2 w-32 rounded-full" />
        </div>

        <div>
          <div className=" grid grid-cols-2 mb-6">
            {resumeNavItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-all"
                onClick={() => setactiveLink(item.name)}
              >
                {item.icon}{" "}
                <h3
                  className={`font-base ${
                    activeLink === item.name
                      ? "text-textColor"
                      : "text-[#A6A6A6]"
                  } font-bold`}
                >
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
          {activeLink === "Education" ? <Education /> : <Experience />}{" "}
        </div>
      </div>

      <footer className=" bg-secondaryColor p-8 lg:rounded-b-xl">
        <div className="flex flex-col md:flex-row gap-3 mb-5">
          <div className=" w-full md:w-1/2">
            <h2 className=" text-base font-bold text-textColor mb-3 ">
              Working Skills
            </h2>

            <ul className=" flex flex-col gap-4">
              {workingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="text-[12px] font-normal flex items-center justify-between">
                    <label className=" ">{skill.skill}</label>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-[#E6E6E6] relative mt-2">
                    <div
                      style={{
                        width: `${skill.percentage}%`,
                        background: skill.color,
                      }}
                      className="absolute top-0 left-0 h-full bg-[#C77778] rounded-full z-10"
                    ></div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className=" text-base font-bold text-textColor mb-3 ">
              Knowledge
            </h2>
            <ul className="flex flex-wrap gap-3">
              {Knowledge.map((item, index) => (
                <li
                  key={index}
                  className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]"
                >
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
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

export default Resume;
