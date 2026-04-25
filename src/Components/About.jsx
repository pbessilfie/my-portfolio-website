import { CgIfDesign } from "react-icons/cg";
import { FaCode, FaRegCopyright } from "react-icons/fa";
import { MdOutlineApi, MdOutlineSpeed } from "react-icons/md";
import { whatIDoData } from "../constants/whatIDoData";
import nestSoftLogoSrc from "../assets/nestsoft-logo.png";
import xcuxionLogoSrc from "../assets/xcuxion-logo-removebg-preview 1.png";
import mavritechLogoSrc from "../assets/Logo 1.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { slideLeft, slideUp, cardReveal, cardHover, pageTransition } from "../constants/motionSystem";

const About = () => {
  const Theme = useContext(ThemeContext);
  const { darkTheme } = Theme;
  const iconSelect = (title) => {
    switch (title) {
      case "UI/UX Design":
        return <CgIfDesign className="text-[#EA6985]" />;
      case "API Integration":
        return <MdOutlineApi className="text-[#D89D26]" />;
      case "Performance Optimization":
        return <MdOutlineSpeed className="text-[#BE77D8]" />;
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
    <motion.div
      className="w-full dark:text-white overflow-y-auto flex-1"
      variants={pageTransition}
      initial="hidden"
      animate="show"
    >
      <div className=" bg-primaryColor dark:bg-black lg:rounded-t-xl p-5 md:p-10 ">
        <motion.div
          variants={slideLeft(0)}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4 mb-7"
        >
          <h1 className=" text-textColor dark:text-white text-2xl font-bold">
            About
          </h1>
          <hr className=" border-brand border-2 w-32 rounded-full" />
        </motion.div>
        <div className="mb-5 ">
          <motion.p
            variants={slideUp(0.1)}
            initial="hidden"
            animate="show"
            className=" text-sm mb-4"
          >
            I'm a Frontend Engineer and co-founder based in Accra, Ghana, with
            4+ years building production-grade web applications. I specialize in
            React.js and Next.js, turning Figma designs into pixel-perfect,
            responsive interfaces while integrating complex REST APIs and
            third-party services to bring products to life.
          </motion.p>
          <motion.p
            variants={slideUp(0.15)}
            initial="hidden"
            animate="show"
            className=" text-sm "
          >
            I've shipped features across diverse domains — from real-time
            booking platforms and multi-currency UIs at Traaple, to AI-powered
            products at EngineX, and a customer management platform at Ahoma. I
            care deeply about performance, accessibility, and scalable
            architecture, and I thrive in cross-functional teams where design,
            engineering, and product thinking intersect.
          </motion.p>
        </div>

        <div className=" mb-2">
          <motion.h2
            variants={slideUp(0.05)}
            initial="hidden"
            animate="show"
            className=" font-bold text-base mb-7"
          >
            What I Do!
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <AnimatePresence>
              {whatIDoData.map((data, index) => (
                <motion.div
                  variants={cardReveal(index)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  key={index}
                  {...cardHover}
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <footer className=" bg-secondaryColor  dark:bg-black dark:text-white dark:border-t dark:border-slate-600 p-10 lg:rounded-b-xl">
        <motion.h3
          variants={slideUp(0)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          className="font-bold text-lg text-center mb-5"
        >
          Clients
        </motion.h3>
        <div className="flex items-center justify-evenly mb-10">
          {clients.map((client, index) => (
            <motion.img
              variants={cardReveal(index)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="show"
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
            <FaRegCopyright /> {getYear} All Rights Reserved by evolution
            architects
          </span>
        </div>
      </footer>
    </motion.div>
  );
};

export default About;
