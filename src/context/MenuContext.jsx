import PropTypes from "prop-types";
import { createContext, useState } from "react";

const MenuProvider = createContext();
const MenuContext = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MenuProvider.Provider value={{isMenuOpen, setIsMenuOpen}}>
      {children}
    </MenuProvider.Provider>
  );
};

MenuContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export { MenuProvider };
export default MenuContext;
