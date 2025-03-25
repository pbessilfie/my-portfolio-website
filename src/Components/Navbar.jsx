import { CiUser } from "react-icons/ci";
import { FaRegFileAlt, FaRegFileCode } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { PNL } from "../constants";
import { NavLink } from "react-router";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useState } from "react";


const Navbar = () => {
    const [darkTheme, setDarkTheme] = useState(false);

  const PLIcon = (link) => {
    let sl = link.name;
    if (sl) {
      switch (sl) {
        case "Resume":
          return <FaRegFileAlt  />;
        case "Works":
          return <FaRegFileCode  />;

        case "Contact":
          return <LuContact  />;

        default:
          return <CiUser  />;
      }
    }
    return sl;
  };

  return (
    <ul className="sticky top-0 bg-primaryColor flex gap-4 flex-col p-5 rounded-xl w-fit">
      <button
        className="mx-auto w-fit rounded-full text-2xl p-5 bg-[rgba(255,255,255,0.5)] absolute -top-20"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        {!darkTheme ? <FaMoon /> : <FaSun />}
      </button>
      {PNL.map((link) => (
        <li
          key={link.name}
          className="transition-all duration-400 ease-in-out cursor-pointer
"
        >
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "bg-[#1B74E4] text-secondaryColor p-2 flex flex-col items-center rounded-lg text-sm text-center hover:bg-[#1B74E4] hover:text-secondaryColor  "
                : "bg-secondaryColor text-textColor p-2 flex flex-col items-center rounded-lg text-sm text-center hover:bg-[#1B74E4] hover:text-secondaryColor  "
            }
          >
            <div className="text-2xl mb-2">{PLIcon(link)}</div>{" "}
            <span>{link.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;

