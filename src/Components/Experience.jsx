import { workExperience } from "../constants/workExperience";
import { getIndex } from "../utils/getIndex";

const Experience = () => {
    const indeces = getIndex(workExperience)
  return (
    <div className="flex-1">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {workExperience.map((experience, index) => (
          <div
            key={index}
            className={`text-sm flex flex-col gap-2 p-4  rounded-xl dark:bg-darkBg ${
              indeces.includes(index) ? "bg-secondaryColor2" : "bg-secondaryColor4"
            }`}
          >
            <span className=" text-gray-700 dark:text-slate-400">
              {experience.startDate} - {experience.endDate}
            </span>
            <p className=" text-textColor dark:text-white">
              <span className=" font-bold">{experience.position} -</span>{" "}
              {experience.company}
            </p>
            <p className="text-textColor dark:text-white text-xs font-light">{experience.location}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Experience