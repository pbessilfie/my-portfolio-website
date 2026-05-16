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
import { motion } from "framer-motion";
import { slideUp, cardReveal } from "../constants/motionSystem";

const MyInfo = () => {
  const Menu = useContext(MenuProvider);
  const { setIsMenuOpen } = Menu;

  return (
    <div className="sticky top-0 bg-primaryColor dark:bg-black lg:rounded-xl flex lg:flex-col items-center justify-between gap-8 p-5 md:p-8 xl:px-7 xl:py-10 h-fit w-full lg:w-fit">
      <motion.div
        variants={slideUp(0)}
        initial="hidden"
        animate="show"
        className="w-16 h-16 lg:w-52 lg:h-52 rounded-xl group overflow-hidden lg:-mt-36 shrink-0"
      >
        <img
          src={profileImage}
          alt="Essifie Prince Bondzie - Frontend Developer"
          className=" w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out "
          loading="lazy"
        />
      </motion.div>
      {/* my details */}
      <div className="flex flex-col gap-2">
        <motion.h1
          variants={slideUp(0.05)}
          initial="hidden"
          animate="show"
          className=" font-semibold text-textColor text-base xl:text-xl text-center dark:text-white"
        >
          Essifie Prince Bondzie
        </motion.h1>
        <motion.h3
          variants={slideUp(0.1)}
          initial="hidden"
          animate="show"
          className="text-xs xl:text-sm text-center dark:text-white"
        >
          Frontend Developer
        </motion.h3>

        <motion.div
          variants={slideUp(0.15)}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-1.5 mt-1"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] text-green-600 dark:text-green-400 font-medium">
            Available for opportunities
          </span>
        </motion.div>

        {/* social links */}
        <div className="lg:flex gap-3 justify-center hidden">
          {socialLinks.map((social, index) => (
            <motion.div
              className="bg-secondaryColor dark:bg-darkBg p-2 text-xl rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-400 ease-in-out"
              style={{ color: social.color }}
              key={index}
              variants={cardReveal(index)}
              initial="hidden"
              animate="show"
            >
              {" "}
              <Link to={social.link} target="_blank" rel="noopener noreferrer">
                {socialIconSelect(
                  social.social,
                  <FaFacebookF className="dark:text-white" />,
                  <FaXTwitter className="dark:text-white" />,
                  <FaInstagram className="dark:text-white" />,
                  <FaLinkedinIn className="dark:text-white" />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hidden bg-secondaryColor dark:bg-darkBg p-5 rounded-lg lg:flex flex-col gap-5 min-w-full">
        <motion.div
          variants={slideUp(0.15)}
          initial="hidden"
          animate="show"
          className="flex gap-3 border-b-2 border-b-[#EBEDED] pb-3"
        >
          <div className=" dark:bg-black dark:text-white bg-primaryColor rounded-md p-3 text-xl text-[#845050] font-bold">
            <LiaMobileAltSolid />
          </div>
          <div>
            <span className=" font-thin text-xs  dark:text-white">Phone</span>
            <h3 className="dark:text-white text-textColor  text-sm">
              +233 20 244 9478
            </h3>
          </div>
        </motion.div>
        <motion.div
          variants={slideUp(0.2)}
          initial="hidden"
          animate="show"
          className="flex gap-3 border-b-2 border-b-[#EBEDED] pb-3"
        >
          <div className=" dark:bg-black dark:text-white bg-primaryColor rounded-md p-3 text-xl text-[#89B4B6] font-bold">
            <HiOutlineMailOpen />
          </div>
          <div>
            <span className=" font-thin text-xs  dark:text-white">Email</span>
            <h3 className="dark:text-white text-textColor  text-sm">
              essilfieprinceb2301@gmail.com{" "}
            </h3>
          </div>
        </motion.div>
        <motion.div
          variants={slideUp(0.25)}
          initial="hidden"
          animate="show"
          className="flex gap-3 border-b-2 border-b-[#EBEDED] pb-3"
        >
          <div className=" dark:bg-black dark:text-white bg-primaryColor rounded-md p-3 text-xl text-red-500 font-bold">
            <MdLocationOn />
          </div>
          <div>
            <span className=" font-thin text-xs  dark:text-white">
              Location
            </span>
            <h3 className="dark:text-white text-textColor  text-sm">
              East Airport, Accra GH
            </h3>
          </div>
        </motion.div>
        <motion.div
          variants={slideUp(0.3)}
          initial="hidden"
          animate="show"
          className="flex gap-3"
        >
          <div className=" dark:bg-black dark:text-white bg-primaryColor rounded-md p-3 text-xl text-[#AD90D7] font-bold">
            <LuCalendarDays />
          </div>
          <div>
            <span className=" font-thin text-xs  dark:text-white">
              Birthday
            </span>
            <h3 className="dark:text-white text-textColor  text-sm">
              January 23, 2003
            </h3>
          </div>
        </motion.div>
      </div>

      <motion.div variants={slideUp(0.35)} initial="hidden" animate="show">
        <Link
          to={
            "https://docs.google.com/document/d/1eVbz_e1tzxN75Z7sawFBbMc7Ma_zfAH-iX94tem4ltU/export?format=pdf"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="hidden bg-brand lg:flex items-center gap-2 text-primaryColor rounded-md px-5 py-2 text-sm"
        >
          <MdOutlineFileDownload />
          <span>Download CV</span>
        </Link>
      </motion.div>

      <button
        className="text-2xl lg:hidden dark:text-white"
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
