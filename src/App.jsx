import "./App.css";
import MyInfo from "./Components/MyInfo";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <main className="font-roboto-slab flex items-start justify-center bg-[#f2f6f2] h-[100dvh] gap-10 pt-40 overflow-y-auto">
      {" "}
      <MyInfo />
      <Outlet />
      <Navbar />
    </main>
  );
}

export default App;
