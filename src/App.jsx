import About from "./Components/About";
import MyInfo from "./Components/MyInfo";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <main className="relative p-44 font-roboto-slab flex items-center justify-center gap-10  bg-orange-900">
      {/* <div className="absolute top-0 left-0 w-full h-full -z-50">
        <img src="/public/image.png" className=" h-full w-full" />
      </div> */}
      <div className="fixed left-60 top-44">
        <MyInfo />
      </div>
      <div className="flex gap-20">
        <div className="min-w-96"></div>
        <About />

        <div>
          <Navbar />
        </div>
      </div>
    </main>
  );
}

export default App;
