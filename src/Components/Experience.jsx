import { cardReveal, cardHover } from "../constants/motionSystem";
import { workExperience } from "../constants/workExperience";
import { getIndex } from "../utils/getIndex";
import { AnimatePresence, motion } from "framer-motion";

const Experience = () => {
  const indeces = getIndex(workExperience);
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AnimatePresence>
          {workExperience.map((experience, index) => (
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
                {experience.startDate} - {experience.endDate}
              </span>
              <p className=" text-textColor dark:text-white">
                <span className=" font-bold">{experience.position} -</span>{" "}
                {experience.company}
              </p>
              <p className="text-textColor dark:text-white text-xs font-light">
                {experience.location}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experience;
