import MyInfo from "../Components/MyInfo";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import { useContext, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeContext";
import BGImgSrc from "../assets/bgImg2.jpeg";
import SideMenu from "./SideMenu";
const Layout = () => {
  const Theme = useContext(ThemeContext);
  const { darkTheme, setDarkTheme } = Theme;

  const toggleDarkMode = () => {
    setDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkTheme);
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  return (
    <main className="relative font-roboto-slab flex flex-col lg:flex-row justify-center h-dvh lg:p-10 lg:gap-10 lg:pt-40 overflow-y-auto  ">
      <div
        className={`fixed top-0 left-0 h-full w-full -z-10 ${
          darkTheme ? "brightness-[0.1]" : "brightness-[0.3]"
        }`}
      >
        <img
          src={BGImgSrc}
          alt="background image"
          className="h-full w-full object-cover"
        />
      </div>
      <SideMenu />

      <MyInfo />

      <div className="flex-1 flex items-start lg:flex-none  flex-col-reverse lg:flex-col xl:flex-row-reverse lg:gap-8 lg:-mt-28 xl:mt-0 h-fit overflow-y-auto lg:overflow-visible">

        <div className="xl:sticky bottom-0 lg:-top-20 lg:flex xl:flex-col lg:gap-5 items-center justify-center xl:-mt-20 self-end xl:self-start -mt-6 w-full lg:w-fit ">
          <button
            className="hidden lg:inline-block mx-auto w-fit rounded-full text-2xl p-5 bg-[rgba(255,255,255,0.5)] cursor-pointer"
            onClick={toggleDarkMode}
          >
            {!darkTheme ? <FaMoon /> : <FaSun />}
          </button>
          <Navbar />
        </div>

        <div className="lg:h-fit lg:w-[600px] xl:w-[700px] w-full flex-1 flex overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
