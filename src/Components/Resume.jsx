import { FaRegCopyright } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { workingSkills } from "../constants/workingSkills";
import { Knowledge } from "../constants/knowledge";
import { educationData } from "../constants/educationData";

const Resume = () => {

  return (
    <div className="w-[700px]">
      <div className=" bg-primaryColor rounded-t-xl p-8 ">
        <div className="flex items-center gap-4 mb-7">
          <h1 className=" text-textColor text-2xl font-bold">Resume</h1>
          <hr className=" border-[#1B74E4]  border-2 w-32 rounded-full" />
        </div>

        <div>
          <div className=" grid grid-cols-2 mb-6">
            <div className="flex items-center gap-3">
              <FaGraduationCap className="text-2xl text-[#EA6985]" />
              <h3 className="font-base text-textColor font-bold">Education</h3>
            </div>
            <div className="flex items-center gap-3">
              <IoBagHandleOutline className="text-2xl text-[#EA6985]" />
              <h3 className="font-base text-textColor font-bold">Experience</h3>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {educationData.map((education, index) => (
              <div
                key={index}
                className={`text-sm flex flex-col gap-2 p-4  rounded-xl ${
                  index % 2 === 0 ? "bg-secondaryColor2" : "bg-secondaryColor4"
                }`}
              >
                <span className=" text-gray-700">{education.year}</span>
                <p className=" text-textColor">
                  <span className=" font-bold">{education.certificate} -</span>{" "}
                  {education.institution}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <footer className=" bg-secondaryColor p-8 rounded-b-xl">
        <div className="flex gap-3 mb-5">
          <div className=" w-1/2">
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
          <div className=" w-1/2">
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
