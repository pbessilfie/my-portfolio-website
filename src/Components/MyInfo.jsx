import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaMobileAltSolid } from "react-icons/lia";
import { LuCalendarDays } from "react-icons/lu";
import { MdLocationOn, MdOutlineFileDownload } from "react-icons/md";

const MyInfo = () => {
  return (
    <div className="relative border bg-primaryColor rounded-xl min-w-96 flex flex-col items-center gap-8  px-10 py-12">
      <div className=" w-44 h-44 rounded-xl group overflow-hidden  -mt-36">
        <img
          src="/src/assets/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg"
          className=" w-full h-full group-hover:scale-110 transition-all duration-500 ease-in-out "
        />
      </div>
      {/* my details */}
      <div className="flex flex-col gap-4">
        <h1 className=" font-semibold text-textColor text-lg">
          Essifie Prince Bondzie
        </h1>
        <h3 className=" bg-secondaryColor font-normal text-sm text-center py-2 rounded-md">
          Frontend Developer
        </h3>
        <div className="flex gap-3 justify-center">
          <div className="bg-secondaryColor p-2 text-[#206CEA] text-xl rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-400 ease-in-out">
            <FaFacebookF />
          </div>
          <div className="bg-secondaryColor p-2 text-black text-xl rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-400 ease-in-out">
            <FaXTwitter />
          </div>
          <div className="bg-secondaryColor p-2 text-[#845050] text-xl rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-400 ease-in-out">
            <FaInstagram />
          </div>
          <div className="bg-secondaryColor p-2 text-[#2D4275] text-xl rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-400 ease-in-out">
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className=" bg-secondaryColor p-5 rounded-lg flex flex-col gap-5 min-w-full">
        <div className="flex gap-2 border-b-2 border-b-[#EBEDED] pb-3">
          <div className=" bg-primaryColor rounded-md p-3 text-2xl text-[#845050] font-bold">
            <LiaMobileAltSolid />
          </div>
          <div>
            <span className=" font-thin text-sm ">Phone</span>
            <h3 className=" text-textColor  text-lg font-normal">
              +233 24 123 4567
            </h3>
          </div>
        </div>
        <div className="flex gap-2 border-b-2 border-b-[#EBEDED] pb-3">
          <div className=" bg-primaryColor rounded-md p-3 text-2xl text-[#89B4B6] font-bold">
            <HiOutlineMailOpen />
          </div>
          <div>
            <span className=" font-thin text-sm ">Email</span>
            <h3 className=" text-textColor  text-lg font-normal">
              pbessilfie001@gmail.com
            </h3>
          </div>
        </div>
        <div className="flex gap-2 border-b-2 border-b-[#EBEDED] pb-3">
          <div className=" bg-primaryColor rounded-md p-3 text-2xl text-red-500 font-bold">
            <MdLocationOn />
          </div>
          <div>
            <span className=" font-thin text-sm ">Location</span>
            <h3 className=" text-textColor  text-lg font-normal">
              Kwabenya Ghana
            </h3>
          </div>
        </div>
        <div className="flex gap-2 border-b-2 border-b-[#EBEDED] pb-3">
          <div className=" bg-primaryColor rounded-md p-3 text-2xl text-[#AD90D7] font-bold">
            <LuCalendarDays />
          </div>
          <div>
            <span className=" font-thin text-sm ">Birthday</span>
            <h3 className=" text-textColor  text-lg font-normal">
              January 23, 2003
            </h3>
          </div>
        </div>
      </div>

      <button className=" bg-[#1B74E4] flex items-center gap-3 text-primaryColor rounded-md px-5 py-2 text-lg">
        <MdOutlineFileDownload />
        <span>Download CV</span>
      </button>
    </div>
  );
};

export default MyInfo;
