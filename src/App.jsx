import "./App.css";
import Layout from "./Components/Layout";
import MenuContext from "./context/MenuContext";
import ThemeProvider from "./context/ThemeContext";





function App() {
  return (
    <ThemeProvider>
      <MenuContext>
        <Layout />
      </MenuContext>
    </ThemeProvider>
  );
}

export default App;
