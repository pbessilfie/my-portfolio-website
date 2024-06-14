import { CiUser } from "react-icons/ci";
import { FaRegFileAlt, FaRegFileCode } from "react-icons/fa";
import { LiaBlogSolid } from "react-icons/lia";
import { LuContact } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className=" bg-primaryColor flex gap-4 flex-col p-5 rounded-xl ">
      <div className=" bg-[#1B74E4 bg-secondaryColor text-textColor rounded-lg p-2 text-base text-center hover:bg-[#1B74E4] hover:text-secondaryColor transition-all duration-400 ease-in-out cursor-pointer">
        <CiUser className="mx-auto mb-2 text-2xl" />
        <span>About</span>
      </div>
      <div className=" bg-[#1B74E4 bg-secondaryColor text-textColor rounded-lg p-2 text-base text-center hover:bg-[#1B74E4] hover:text-secondaryColor transition-all duration-400 ease-in-out cursor-pointer">
        <FaRegFileAlt className="mx-auto mb-2 text-2xl" />
        <span>Resume</span>
      </div>
      <div className=" bg-[#1B74E4 bg-secondaryColor text-textColor rounded-lg p-2 text-base text-center hover:bg-[#1B74E4] hover:text-secondaryColor transition-all duration-400 ease-in-out cursor-pointer">
        <FaRegFileCode className="mx-auto mb-2 text-2xl" />
        <span>Works</span>
      </div>
      <div className=" bg-[#1B74E4 bg-secondaryColor text-textColor rounded-lg p-2 text-base text-center hover:bg-[#1B74E4] hover:text-secondaryColor transition-all duration-400 ease-in-out cursor-pointer">
        <LiaBlogSolid className="mx-auto mb-2 text-2xl" />
        <span>Blogs</span>
      </div>
      <div className=" bg-[#1B74E4 bg-secondaryColor text-textColor rounded-lg p-2 text-base text-center hover:bg-[#1B74E4] hover:text-secondaryColor transition-all duration-400 ease-in-out cursor-pointer">
        <LuContact className="mx-auto mb-2 text-2xl" />
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
