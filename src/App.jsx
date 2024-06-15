import { useState } from "react";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import MyInfo from "./Components/MyInfo";
import Navbar from "./Components/Navbar";
import Resume from "./Components/Resume";
import Works from "./Components/Works";

function App() {
  const [selectedLink, setselectedLink] = useState("About");
  const SelectedPortDetails = () => {
    let sl = selectedLink;
    if (sl) {
      switch (sl) {
        case "Resume":
          return <Resume />;
        case "Works":
          return <Works />;
        case "Blogs":
          return <Blogs />;
        case "Contact":
          return <Contact />;

        default:
          return <About />;
      }
    }
    return selectedLink;
  };
  return (
    <main className="relative p-44 font-roboto-slab flex items-center justify-center gap-10  bg-orange-900 min-h-screen">
      {/* <div className="absolute top-0 left-0 w-full h-full -z-50">
        <img src="/public/image.png" className=" h-full w-full" />
      </div> */}
      <div className="fixed left-60 top-44">
        <MyInfo />
      </div>
      <div className="flex gap-20">
        <div className="min-w-96"></div>
        {SelectedPortDetails(selectedLink)}
        <div>
          <Navbar setselectedLink={setselectedLink} />
        </div>
      </div>
    </main>
  );
}

export default App;
