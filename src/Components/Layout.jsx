import MyInfo from "../Components/MyInfo";
import Navbar from "../Components/Navbar";
import { Link, Outlet } from "react-router";
import { useContext } from "react";
import profileImage from "../assets/dp.jpg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaMobileAltSolid } from "react-icons/lia";
import { LuCalendarDays } from "react-icons/lu";
import { MdLocationOn, MdOutlineFileDownload } from "react-icons/md";
import { socialLinks } from "../constants/socialLinks";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaMoon, FaSun, FaXTwitter } from "react-icons/fa6";
import { socialIconSelect } from "../utils/socialIconSelect";
import { MenuProvider } from "../context/MenuContext";
import { ThemeContext } from "../context/ThemeContext";
import BGImgSrc from "../assets/bgImg2.jpeg";
const Layout = () => {
  const Menu = useContext(MenuProvider);
  const Theme = useContext(ThemeContext);
  const { darkTheme, setDarkTheme } = Theme;
  const { isMenuOpen, setIsMenuOpen } = Menu;

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <main className="relative font-roboto-slab flex flex-col lg:flex-row justify-center h-dvh lg:p-10 lg:gap-10 lg:pt-40 overflow-y-auto  ">
      <div className="fixed top-0 left-0 h-full w-full -z-10 brightness-[0.3]">
        <img
          src={BGImgSrc}
          alt="background image"
          className="h-full w-full object-cover"
        />
      </div>
      {isMenuOpen && (
        <div
          className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.5)] z-40"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        ></div>
      )}
      <div
        className={`absolute top-0 transition-all ${
          isMenuOpen ? "left-0" : "-left-[200%]"
        } z-50 bg-secondaryColor p-5 h-dvh w-[80%] sm:w-2/3 md:w-2/4 `}
      >
        <button
          className="absolute top-10 right-8 w-fit rounded-full text-xl bg-[rgba(255,255,255,0.5)]"
          onClick={toggleDarkMode}
        >
          {!darkTheme ? <FaMoon /> : <FaSun />}
        </button>
        <div className="border-b py-2">
          <div className="w-16 h-16 rounded-full group overflow-hidden flex-shrink-0">
            <img
              src={profileImage}
              className=" w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out "
            />
          </div>
          <h1 className=" font-semibold text-textColor text-base mt-5">
            Essifie Prince Bondzie
          </h1>
          <h3 className="text-xs">Frontend Developer</h3>
        </div>

        <div className="flex flex-col gap-5 py-5">
          {/* social links */}
          <div className="flex gap-3 justify-center">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                to={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-primaryColor p-2 text-[${social.color}] text-xl rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-400 ease-in-out`}
              >
                {socialIconSelect(
                  social.social,
                  <FaFacebookF />,
                  <FaXTwitter />,
                  <FaInstagram />,
                  <FaLinkedinIn />
                )}{" "}
              </Link>
            ))}
          </div>

          <div className="bg-primaryColor p-5 rounded-lg space-y-5 min-w-full">
            <div className="flex items-center gap-3 border-b-2 border-b-[#EBEDED] px-3">
              <LiaMobileAltSolid className="text-xl text-[#845050]" />
              <div>
                <span className=" font-thin text-xs ">Phone</span>
                <h3 className=" text-textColor  text-sm">+233 24 123 4567</h3>
              </div>
            </div>

            <div className="flex items-center gap-3 border-b-2 border-b-[#EBEDED] px-3">
              <HiOutlineMailOpen className="text-xl text-[#89B4B6]" />

              <div>
                <span className=" font-thin text-xs ">Email</span>
                <h3 className=" text-textColor  text-sm">
                  essilfieprinceb2301@gmail.com
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 border-b-2 border-b-[#EBEDED] px-3">
              <MdLocationOn className="text-xl text-red-500" />
              <div>
                <span className=" font-thin text-xs ">Location</span>
                <h3 className=" text-textColor  text-sm">Kwabenya Ghana</h3>
              </div>
            </div>
            <div className="flex items-center px-3 gap-3">
              <LuCalendarDays className="text-xl text-[#AD90D7]" />
              <div>
                <span className=" font-thin text-xs ">Birthday</span>
                <h3 className=" text-textColor  text-sm">January 23, 2003</h3>
              </div>
            </div>
          </div>
        </div>

        <Link
          to={
            "https://docs.google.com/document/d/1eVbz_e1tzxN75Z7sawFBbMc7Ma_zfAH-iX94tem4ltU/export?format=pdf"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1B74E4] flex items-center justify-center gap-2 text-primaryColor rounded-md px-5 py-2 text-sm"
        >
          <MdOutlineFileDownload />
          <span>Download CV</span>
        </Link>
      </div>

      <MyInfo />
      <div className="flex-1 flex items-start lg:flex-none  flex-col-reverse lg:flex-col xl:flex-row-reverse lg:gap-8 lg:-mt-28 xl:mt-0 h-fit ">
        <div className=" xl:sticky bottom-0 lg:-top-20 flex xl:flex-col gap-5 items-center justify-center xl:-mt-20 self-end xl:self-start -mt-6">
          <button
            className=" mx-auto w-fit rounded-full text-2xl p-5 bg-[rgba(255,255,255,0.5)]"
            onClick={toggleDarkMode}
          >
            {!darkTheme ? <FaMoon /> : <FaSun />}
          </button>
          <Navbar />
        </div>
        <div className="lg:h-fit lg:w-[700px] w-full flex-1 flex">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
