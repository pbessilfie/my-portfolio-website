import { FaRegCopyright } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";

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

          <div className="grid grid-cols-2 gap-4">
            <div className="text-sm flex flex-col gap-2 p-4 bg-secondaryColor2 rounded-xl">
              <span className=" text-gray-700">2021 - 2025</span>
              <p className=" text-textColor">
                <span className=" font-bold">
                  Bsc. Mathematical Science (Computer Science) -
                </span>{" "}
                University of Ghana, Legon
              </p>
            </div>
            <div className="text-sm flex flex-col gap-2 p-4 bg-secondaryColor4 rounded-xl">
              <span className=" text-gray-700">2017 - 2020</span>
              <p className=" text-textColor">
                <span className=" font-bold">WASSCE certificate -</span> Swedru
                School of Business, Ghana - Central Region (Agona Swedru)
              </p>
            </div>
            <div className="text-sm flex flex-col gap-2 p-4 bg-secondaryColor4 rounded-xl">
              <span className=" text-gray-700">2014 - 2017</span>
              <p className=" text-textColor">
                <span className=" font-bold">BECE Certificate -</span> Apam
                Methodist A,B & C, Ghana - Central Region (Apam)
              </p>
            </div>
            <div className="text-sm flex flex-col gap-2 p-4 bg-secondaryColor2 rounded-xl">
              <span className=" text-gray-700">2021 - 2025</span>
              <p className=" text-textColor">
                <span className=" font-bold">
                  Bsc. Mathematical Science (Computer Science) -
                </span>{" "}
                University of Ghana, Legon
              </p>
            </div>
            <div className="text-sm flex flex-col gap-2 p-4 bg-secondaryColor2 rounded-xl">
              <span className=" text-gray-700">2017 - 2020</span>
              <p className=" text-textColor">
                <span className=" font-bold">WASSCE certificate -</span> Swedru
                School of Business, Ghana - Central Region (Agona Swedru)
              </p>
            </div>
            <div className="text-sm flex flex-col gap-2 p-4 bg-secondaryColor4 rounded-xl">
              <span className=" text-gray-700">2014 - 2017</span>
              <p className=" text-textColor">
                <span className=" font-bold">BECE Certificate -</span> Apam
                Methodist A,B & C, Ghana - Central Region (Apam)
              </p>
            </div>
          
          </div>
        </div>
      </div>

      <footer className=" bg-secondaryColor p-8 rounded-b-xl">
        <div className="flex gap-3 mb-5">
          <div className=" w-1/2">
            <h2 className=" text-base font-bold text-textColor mb-3 ">
              Working Skills
            </h2>

            <div className=" flex flex-col gap-4">
              <div>
                <div className="text-[12px] font-normal flex items-center justify-between">
                  <label className=" ">Web Design</label>
                  <span>82%</span>
                </div>
                <div className="h-1 w-full rounded-full bg-[#E6E6E6] relative mt-2">
                  <div className="absolute top-0 left-0 h-full w-[82%] bg-[#C77778] rounded-full z-10"></div>
                </div>
              </div>
              <div>
                <div className="text-[12px] font-normal flex items-center justify-between">
                  <label className=" ">Mobile App Development</label>
                  <span>55%</span>
                </div>{" "}
                <div className="h-1 w-full rounded-full bg-[#E6E6E6] relative mt-2">
                  <div className="absolute top-0 left-0 h-full w-[55%] bg-[#9888B9] rounded-full z-10"></div>
                </div>
              </div>
              <div>
                <div className="text-[12px] font-normal flex items-center justify-between">
                  <label className=" ">Photoshop</label>
                  <span>%65</span>
                </div>{" "}
                <div className="h-1 w-full rounded-full bg-[#E6E6E6] relative mt-2">
                  <div className="absolute top-0 left-0 h-full w-[65%] bg-[#6487A8] rounded-full z-10"></div>
                </div>
              </div>
              <div>
                <div className="text-[12px] font-normal flex items-center justify-between">
                  <label className=" ">Microsoft Office Tools</label>
                  <span>72%</span>
                </div>
                <div className="h-1 w-full rounded-full bg-[#E6E6E6] relative mt-2">
                  <div className="absolute top-0 left-0 h-full w-[72%] bg-[#A878BD] rounded-full z-10"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-1/2">
            <h2 className=" text-base font-bold text-textColor mb-3 ">
              Knowledge
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]">
                UI/UX Design
              </span>
              <span className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]">
                HTML 5
              </span>
              <span className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]">
                CSS 3
              </span>
              <span className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]">
                JAVASCRIPT
              </span>
              <span className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]">
                REACT JS
              </span>
              <span className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]">
                TAILWIND CSS
              </span>
              <span className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]">
                NPM
              </span>
              <span className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]">
                FIREBASE
              </span>
              <span className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]">
                NODE JS
              </span>
              <span className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]">
                DATA STRUCTURES AND ALGORITHM
              </span>
              <span className=" bg-secondaryColor3 text-textColor p-2 rounded-lg text-[12px]">
                C++
              </span>
            </div>
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
