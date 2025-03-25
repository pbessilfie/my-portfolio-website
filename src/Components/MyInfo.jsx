import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaMobileAltSolid } from "react-icons/lia";
import { LuCalendarDays } from "react-icons/lu";
import { MdLocationOn, MdOutlineFileDownload } from "react-icons/md";
import profileImage from "../assets/dp.jpg";
import { Link } from "react-router";

const MyInfo = () => {
  const socialLinks = [
    {
      social: "Facebook",
      icon: <FaFacebookF />,
      color: "#206CEA",
      link: "https://www.facebook.com/prince.essilfiebondzie",
    },
    {
      social: "Twitter",
      icon: <FaXTwitter />,
      color: "#000",
      link: "https://x.com/paakow_2301",
    },
    {
      social: "Instagram",
      icon: <FaInstagram />,
      color: "#845050",
      link: "https://www.instagram.com/prince.essilfiebondzie/?next=%2F",
    },
    {
      social: "Linkedin",
      icon: <FaLinkedinIn />,
      color: "#2D4275",
      link: "https://www.linkedin.com/in/prince-essilfie-bondzie-600aa322a",
    },
  ];
  return (
    <div className="sticky top-0 border bg-primaryColor rounded-xl flex flex-col items-center gap-8 px-10 py-12 h-fit">
      <div className=" w-40 h-40 rounded-xl group overflow-hidden  -mt-36">
        <img
          src={profileImage}
          className=" w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out "
        />
      </div>
      {/* my details */}
      <div className="flex flex-col gap-4">
        <h1 className=" font-semibold text-textColor text-xl">
          Essifie Prince Bondzie
        </h1>
        <h3 className=" text-sm text-center ">Frontend Developer</h3>

        {/* social links */}
        <div className="flex gap-3 justify-center">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              to={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-secondaryColor p-2 text-[${social.color}] text-xl rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-400 ease-in-out`}
            >
              {social.icon} 
            </Link>
          ))}
        </div>
      </div>

      <div className=" bg-secondaryColor p-5 rounded-lg flex flex-col gap-5 min-w-full">
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

      <button className=" bg-[#1B74E4] flex items-center gap-2 text-primaryColor rounded-md px-5 py-2 text-sm">
        <MdOutlineFileDownload />
        <span>Download CV</span>
      </button>
    </div>
  );
};

export default MyInfo;
