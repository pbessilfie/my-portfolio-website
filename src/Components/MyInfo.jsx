import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaBars, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaMobileAltSolid } from "react-icons/lia";
import { LuCalendarDays } from "react-icons/lu";
import { MdLocationOn, MdOutlineFileDownload } from "react-icons/md";
import profileImage from "../assets/dp.jpg";
import { Link } from "react-router";
import { useContext } from "react";
import { MenuProvider } from "../context/MenuContext";
import { socialLinks } from "../constants/socialLinks";
import { socialIconSelect } from "../utils/socialIconSelect";

const MyInfo = () => {
  const Menu = useContext(MenuProvider);
  const { setIsMenuOpen } = Menu;

  return (
    <div className="sticky top-0 bg-primaryColor lg:rounded-xl flex lg:flex-col items-center justify-between gap-8 p-5 xl:px-7 xl:py-10 h-fit w-full lg:w-fit">
      <div className="w-16 h-16 lg:w-52 lg:h-52 rounded-xl group overflow-hidden lg:-mt-36 shrink-0">
        <img
          src={profileImage}
          className=" w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out "
        />
      </div>
      {/* my details */}
      <div className="flex flex-col gap-2">
        <h1 className=" font-semibold text-textColor text-base xl:text-xl text-center">
          Essifie Prince Bondzie
        </h1>
        <h3 className="text-xs xl:text-sm text-center ">Frontend Developer</h3>

        {/* social links */}
        <div className="lg:flex gap-3 justify-center hidden">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              to={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-secondaryColor p-2 text-[${social.color}] text-xl rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-400 ease-in-out`}
            >
              {socialIconSelect(
                social.social,
                <FaFacebookF />,
                <FaXTwitter />,
                <FaInstagram />,
                <FaLinkedinIn />
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden bg-secondaryColor p-5 rounded-lg lg:flex flex-col gap-5 min-w-full">
        <div className="flex gap-3 border-b-2 border-b-[#EBEDED] pb-3">
          <div className=" bg-primaryColor rounded-md p-3 text-xl text-[#845050] font-bold">
            <LiaMobileAltSolid />
          </div>
          <div>
            <span className=" font-thin text-xs ">Phone</span>
            <h3 className=" text-textColor  text-sm">+233 24 123 4567</h3>
          </div>
        </div>
        <div className="flex gap-3 border-b-2 border-b-[#EBEDED] pb-3">
          <div className=" bg-primaryColor rounded-md p-3 text-xl text-[#89B4B6] font-bold">
            <HiOutlineMailOpen />
          </div>
          <div>
            <span className=" font-thin text-xs ">Email</span>
            <h3 className=" text-textColor  text-sm">
              essilfieprinceb2301@gmail.com{" "}
            </h3>
          </div>
        </div>
        <div className="flex gap-3 border-b-2 border-b-[#EBEDED] pb-3">
          <div className=" bg-primaryColor rounded-md p-3 text-xl text-red-500 font-bold">
            <MdLocationOn />
          </div>
          <div>
            <span className=" font-thin text-xs ">Location</span>
            <h3 className=" text-textColor  text-sm">Kwabenya Ghana</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div className=" bg-primaryColor rounded-md p-3 text-xl text-[#AD90D7] font-bold">
            <LuCalendarDays />
          </div>
          <div>
            <span className=" font-thin text-xs ">Birthday</span>
            <h3 className=" text-textColor  text-sm">January 23, 2003</h3>
          </div>
        </div>
      </div>

      <Link
        to={
          "https://docs.google.com/document/d/1eVbz_e1tzxN75Z7sawFBbMc7Ma_zfAH-iX94tem4ltU/export?format=pdf"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="hidden bg-[#1B74E4] lg:flex items-center gap-2 text-primaryColor rounded-md px-5 py-2 text-sm"
      >
        <MdOutlineFileDownload />
        <span>Download CV</span>
      </Link>
      <button
        className="text-2xl lg:hidden"
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
      >
        <FaBars />
      </button>
    </div>
  );
};
export default MyInfo;
