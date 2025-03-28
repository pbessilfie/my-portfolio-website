import PropTypes from "prop-types";
import { createContext, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
export { ThemeContext };
export default ThemeProvider;
