import { CgIfDesign } from "react-icons/cg";
import { FaCode, FaRegCopyright } from "react-icons/fa";
import { MdOutlineDeveloperMode, MdOutlineWeb } from "react-icons/md";
import { whatIDoData } from "../constants/whatIDoData";
import nestSoftLogoSrc from "../assets/nestsoft-logo.png";
import xcuxionLogoSrc from "../assets/xcuxion-logo-removebg-preview 1.png";
import mavritechLogoSrc from "../assets/Logo 1.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
   const Theme = useContext(ThemeContext);
   const { darkTheme } = Theme;
  const iconSelect = (title) => {
    switch (title) {
      
      case "UI/UX Design":
        return <CgIfDesign className="text-[#EA6985]" />;
      case "Mobile App development":
        return <MdOutlineDeveloperMode className="text-[#D89D26]" />;
      case "Web Design":
        return <MdOutlineWeb className="text-[#BE77D8]" />;
      default:
        return <FaCode className="text-[#BE77D8]" />;
    }
  };

  const clients = [
    { name: "NestSofts", logo: nestSoftLogoSrc },
    { name: "Mavritech", logo: mavritechLogoSrc },
    { name: "Xcuxion", logo: xcuxionLogoSrc },
  ];
  const getYear = new Date().getFullYear();
  return (
    <div className="w-full dark:text-white overflow-y-auto flex-1">
      <div className=" bg-primaryColor dark:bg-black lg:rounded-t-xl p-5 md:p-10 ">
        <div className="flex items-center gap-4 mb-7">
          <h1 className=" text-textColor dark:text-white text-2xl font-bold">
            About
          </h1>
          <hr className=" border-[#1B74E4]  border-2 w-32 rounded-full" />
        </div>
        <div
          className="mb-5
      "
        >
          <p className=" text-sm mb-4">
            I’m a Frontend Developer based in Sydney, Australia, specializing in
            building and optimizing user-focused, responsive websites and
            applications. With a strong background in HTML, CSS, and JavaScript
            (including modern library like React and framework like Next), I
            combine clean, efficient code with an eye for design to create
            seamless digital experiences.
          </p>
          <p className=" text-sm ">
            My goal is to bring your vision to life in the most intuitive and
            engaging way possible. Over the years, I’ve worked with diverse
            teams and notable brands, transforming complex requirements into
            elegant solutions. I’m passionate about web performance,
            accessibility, and creating interfaces that not only look great but
            also deliver outstanding user experiences.
          </p>
        </div>

        <div className=" mb-2">
          <h2 className=" font-bold text-base mb-7">What I Do!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whatIDoData.map((data, index) => (
              <div
                key={index}
                className={`${data.bgColor} dark:bg-darkBg p-6 rounded-lg space-y-4`}
              >
                <div className={`flex gap-3 items-center text-3xl `}>
                  {iconSelect(data.title)}
                  <h3 className=" font-semibold text-base text-black dark:text-white">
                    {data.title}
                  </h3>
                </div>
                <div>
                  <p className=" text-sm font-light">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className=" bg-secondaryColor  dark:bg-black dark:text-white dark:border-t dark:border-slate-600 p-10 lg:rounded-b-xl">
        <h3 className="font-bold text-lg text-center mb-5">Clients</h3>
        <div className="flex items-center justify-evenly mb-10">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              style={{ filter: darkTheme ? "brightness(1)" : "brightness(0)" }}
              className={`w-12 ${index === 0 && "w-14"}`}
            />
          ))}
        </div>

        <div className="flex justify-center text-[9px] font-thin dark:text-white text-gray-600 text-center ">
          <span className="flex items-center gap-1">
            <FaRegCopyright className="" /> {getYear} All Rights Reserved by
            evolution architects
          </span>
        </div>
      </footer>
    </div>
  );
};

export default About;
