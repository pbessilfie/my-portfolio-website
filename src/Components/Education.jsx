import { educationData } from "../constants/educationData";
import { cardReveal, cardHover } from "../constants/motionSystem";
import { getIndex } from "../utils/getIndex";
import { AnimatePresence, motion } from "framer-motion";

const Education = () => {
  const indeces = getIndex(educationData);
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AnimatePresence>
          {educationData.map((education, index) => (
            <motion.div
              variants={cardReveal(index)}
              initial="hidden"
              animate="show"
              exit="hidden"
              key={index}
              {...cardHover}
              className={`text-sm flex flex-col gap-2 p-4 rounded-xl dark:bg-darkBg ${
                indeces.includes(index)
                  ? "bg-secondaryColor2"
                  : "bg-secondaryColor4"
              }`}
            >
              <span className=" text-gray-700 dark:text-slate-400">
                {education.year}
              </span>
              <p className=" text-textColor dark:text-white">
                <span className=" font-bold">{education.certificate} -</span>{" "}
                {education.institution}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Education;
