import { FaRegCopyright } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="w-[700px]">
      <div className=" bg-primaryColor rounded-t-xl p-8 ">
        <div className="flex items-center gap-4 mb-7">
          <h1 className=" text-textColor text-2xl font-bold">Blogs</h1>
          <hr className=" border-[#1B74E4]  border-2 w-32 rounded-full" />
        </div>
      </div>

      <footer className=" bg-secondaryColor p-4 rounded-b-xl">
        <div className="flex justify-center text-[9px] font-thin text-gray-600 text-center ">
          <span className="flex items-center gap-1">
            <FaRegCopyright className="" /> 2024 All Rights Reserved by
            evolution architects
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Blogs