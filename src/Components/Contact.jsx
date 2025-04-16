import { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "12444507-846c-49fa-a79a-d303135eeba9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Message sent successfully!");
    } else {
      toast.error("Message not sent!");
    }
  };
  console.log(formData);
  return (
    <div className="w-full flex-1 flex flex-col">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />
      <div className=" bg-primaryColor lg:rounded-t-xl p-8 flex-1
      ">
        <div className="flex items-center gap-4 mb-7">
          <h1 className=" text-textColor text-2xl font-bold">Contact</h1>
          <hr className=" border-[#1B74E4]  border-2 w-32 rounded-full" />
        </div>

        {/* contact form */}
        <div className=" bg-secondaryColor rounded-2xl p-10">
          <h4 className=" text-base text-gray-600 mb-10">
            I’m Always Open To Discussing Product <br />
            <span className=" font-semibold text-textColor ">
              design word of partnerships.
            </span>
          </h4>
          <form onSubmit={onSubmit}>
            <div className="relative w-full h-5 mb-10 ">
              <label
                className={`absolute  text-sm font-normal transition-all duration-500 ease-in-out ${
                  isNameFocused || formData.name
                    ? "-top-4 left-1 scale-75 text-[#1B74E4]"
                    : "top-0 left-3 text-[#303132]"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormData}
                className=" w-full h-full border-b border-b-[#484A4B] focus:border-b-[#1B74E4] outline-none bg-transparent p-3 text-[#303132] text-sm"
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
                required
              />
            </div>
            <div className="relative w-full  h-5 mb-10 ">
              <label
                className={`absolute  text-sm font-normal transition-all duration-500 ease-in-out ${
                  isEmailFocused || formData.email
                    ? "-top-4 left-1 scale-75 text-[#1B74E4]"
                    : "top-0 left-3 text-[#303132]"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormData}
                className=" w-full h-full border-b border-b-[#484A4B] focus:border-b-[#1B74E4] outline-none bg-transparent p-3 text-[#303132] text-sm"
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                required
              />
            </div>
            <div className="relative w-full  h-20 mb-10 ">
              <label
                className={`absolute  text-sm font-normal transition-all duration-500 ease-in-out ${
                  isMessageFocused || formData.message
                    ? "-top-4 left-1 scale-75 text-[#1B74E4]"
                    : "top-0 left-3 text-[#303132]"
                }`}
              >
                Message
              </label>
              <textarea
                type="text"
                name="message"
                value={formData.message}
                onChange={handleFormData}
                rows={5}
                cols={10}
                className=" w-full h-full border-b border-b-[#484A4B] focus:border-b-[#1B74E4] outline-none bg-transparent p-3 text-[#303132] text-sm"
                onFocus={() => setIsMessageFocused(true)}
                onBlur={() => setIsMessageFocused(false)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={()=>{
                formData.name && formData.email && formData.message ? onSubmit : toast.error("Please fill all fields")
              }}
              className=" border border-textColor rounded-xl text-sm px-8 py-2 hover:bg-[#1B74E4] hover:text-secondaryColor transition-all duration-500 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <footer className=" bg-secondaryColor p-8 lg:rounded-b-xl">
        <div className="flex justify-center text-[9px] font-thin text-gray-600 text-center ">
          <span className="flex items-center gap-1">
            <FaRegCopyright className="" /> 2024 All Rights Reserved by
            evolution architects
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
