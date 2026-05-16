import { Link } from "react-router";
import { motion } from "framer-motion";
import { pageTransition, slideUp } from "../constants/motionSystem";
import usePageTitle from "../utils/usePageTitle";

const NotFound = () => {
  usePageTitle("404 — Page Not Found");

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-5 p-10 text-center bg-primaryColor dark:bg-black"
    >
      <motion.p
        variants={slideUp(0)}
        initial="hidden"
        animate="show"
        className="text-8xl font-bold text-brand"
      >
        404
      </motion.p>

      <motion.h1
        variants={slideUp(0.08)}
        initial="hidden"
        animate="show"
        className="text-lg font-semibold text-textColor dark:text-white"
      >
        Page not found
      </motion.h1>

      <motion.p
        variants={slideUp(0.14)}
        initial="hidden"
        animate="show"
        className="text-sm text-gray-500 dark:text-gray-400 max-w-xs"
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <motion.div variants={slideUp(0.2)} initial="hidden" animate="show">
        <Link
          to="/"
          className="inline-block bg-brand text-white px-6 py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
        >
          Back to home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
