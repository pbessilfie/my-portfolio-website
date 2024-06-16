import PropTypes from "prop-types";
import { CiUser } from "react-icons/ci";
import { FaRegFileAlt, FaRegFileCode } from "react-icons/fa";
import { LiaBlogSolid } from "react-icons/lia";
import { LuContact } from "react-icons/lu";
import { PNL } from "../constants";
import { useState } from "react";

const Navbar = ({ setselectedLink }) => {
  const [activeLink, setActiveLink] = useState("About");
  const PLIcon = (link) => {
    let sl = link.name;
    if (sl) {
      switch (sl) {
        case "Resume":
          return <FaRegFileAlt className="mx-auto mb-2 text-2xl" />;
        case "Works":
          return <FaRegFileCode className="mx-auto mb-2 text-2xl" />;
        case "Blogs":
          return <LiaBlogSolid className="mx-auto mb-2 text-2xl" />;
        case "Contact":
          return <LuContact className="mx-auto mb-2 text-2xl" />;

        default:
          return <CiUser className="mx-auto mb-2 text-2xl" />;
      }
    }
    return sl;
  };
  return (
    <ul className=" bg-primaryColor flex gap-4 flex-col p-5 rounded-xl ">
      {PNL.map((link) => (
        <li
          key={link.name}
          className={` rounded-lg p-2 text-sm text-center hover:bg-[#1B74E4] hover:text-secondaryColor transition-all duration-400 ease-in-out cursor-pointer ${
            activeLink === link.name
              ? "bg-[#1B74E4] text-secondaryColor"
              : "bg-secondaryColor text-textColor"
          }`}
          onClick={() => {
            setActiveLink(link.name);
            setselectedLink(link.name);
          }}
        >
          {PLIcon(link)} <span>{link.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
Navbar.propTypes = {
  setselectedLink: PropTypes.func,
};
