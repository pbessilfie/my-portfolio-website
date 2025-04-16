import { educationData } from "../constants/educationData"
import { getIndex } from "../utils/getIndex"

const Education = () => {
    const indeces = getIndex(educationData)
  return (
    <div className="flex-1"><ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {educationData.map((education, index) => (
                  <div
                    key={index}
                    className={`text-sm flex flex-col gap-2 p-4  rounded-xl ${
                      indeces.includes(index)? "bg-secondaryColor2" : "bg-secondaryColor4"
                    }`}
                  >
                    <span className=" text-gray-700">{education.year}</span>
                    <p className=" text-textColor">
                      <span className=" font-bold">{education.certificate} -</span>{" "}
                      {education.institution}
                    </p>
                  </div>
                ))}
              </ul></div>
  )
}

export default Education