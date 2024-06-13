import MyInfo from "./Components/MyInfo";

function App() {
  return (
    <main className="relative p-44 font-roboto-slab">
      <div className="absolute top-0 left-0 w-full h-full -z-50">
        <img src="/public/image.png" className=" h-full w-full"/>
      </div>
      <MyInfo />
    </main>
  );
}

export default App;
