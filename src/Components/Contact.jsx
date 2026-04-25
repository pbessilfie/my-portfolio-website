import { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { slideLeft, slideUp, pageTransition } from "../constants/motionSystem";

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

  const year = new Date().getFullYear();

  return (
    <motion.div
      className="w-full flex-1 flex flex-col"
      variants={pageTransition}
      initial="hidden"
      animate="show"
    >
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
      />
      <div
        className=" bg-primaryColor dark:bg-black lg:rounded-t-xl p-5 lg:p-8 flex-1
      "
      >
        <motion.div
          variants={slideLeft(0)}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4 mb-7"
        >
          <h1 className=" text-textColor dark:text-white text-2xl font-bold">
            Contact
          </h1>
          <hr className=" border-brand border-2 w-32 rounded-full" />
        </motion.div>

        {/* contact form */}
        <div className=" bg-secondaryColor dark:bg-darkBg rounded-2xl px-5 py-8 md:p-8 lg:p-10">
          <motion.h4
            variants={slideUp(0.05)}
            initial="hidden"
            animate="show"
            className=" text-base dark:text-gray-400 text-gray-600 mb-10"
          >
            I'm Always Open To Discussing Product <br />
            <span className=" font-semibold text-textColor dark:text-white">
              design word of partnerships.
            </span>
          </motion.h4>
          <form onSubmit={onSubmit}>
            <motion.div
              variants={slideUp(0.1)}
              initial="hidden"
              animate="show"
              className="relative w-full h-5 mb-10 "
            >
              <label
                htmlFor="contact-name"
                className={`absolute  text-sm font-normal transition-all duration-400 ease-in-out ${
                  isNameFocused || formData.name
                    ? "-top-4 left-1 scale-75 text-brand"
                    : "top-0 left-3 text-[#303132] dark:text-white"
                }`}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormData}
                className=" w-full h-full border-b border-b-[#484A4B]  dark:border-b-white focus:border-b-brand outline-none bg-transparent p-3 text-[#303132] dark:text-white text-sm"
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
                required
              />
            </motion.div>
            <motion.div
              variants={slideUp(0.15)}
              initial="hidden"
              animate="show"
              className="relative w-full  h-5 mb-10 "
            >
              <label
                htmlFor="contact-email"
                className={`absolute  text-sm font-normal transition-all duration-400 ease-in-out ${
                  isEmailFocused || formData.email
                    ? "-top-4 left-1 scale-75 text-brand"
                    : "top-0 left-3 text-[#303132] dark:text-white"
                }`}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormData}
                className=" w-full h-full border-b border-b-[#484A4B]  dark:border-b-white focus:border-b-brand outline-none bg-transparent p-3 text-[#303132] dark:text-white text-sm"
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                required
              />
            </motion.div>
            <motion.div
              variants={slideUp(0.2)}
              initial="hidden"
              animate="show"
              className="relative w-full  h-20 mb-10 "
            >
              <label
                htmlFor="contact-message"
                className={`absolute  text-sm font-normal transition-all duration-400 ease-in-out ${
                  isMessageFocused || formData.message
                    ? "-top-4 left-1 scale-75 text-brand"
                    : "top-0 left-3 text-[#303132] dark:text-white"
                }`}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleFormData}
                rows={5}
                cols={10}
                className=" w-full h-full border-b border-b-[#484A4B]  dark:border-b-white focus:border-b-brand outline-none bg-transparent p-3 text-[#303132] dark:text-white text-sm"
                onFocus={() => setIsMessageFocused(true)}
                onBlur={() => setIsMessageFocused(false)}
                required
              ></textarea>
            </motion.div>
            <motion.button
              variants={slideUp(0.25)}
              initial="hidden"
              animate="show"
              type="submit"
              className=" border border-textColor dark:border-white dark:text-white rounded-xl text-sm px-8 py-2 hover:bg-brand hover:text-secondaryColor transition-all duration-500 ease-in-out"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>

      <footer className=" bg-secondaryColor dark:bg-black dark:border-t dark:border-t-slate-600 p-8 lg:rounded-b-xl">
        <motion.div
          variants={slideUp(0)}
          initial="hidden"
          animate="show"
          className="flex justify-center text-[9px] font-thin dark:text-white text-gray-600 text-center "
        >
          <span className="flex items-center gap-1">
            <FaRegCopyright /> {year} All Rights Reserved by evolution
            architects
          </span>
        </motion.div>
      </footer>
    </motion.div>
  );
};

export default Contact;
