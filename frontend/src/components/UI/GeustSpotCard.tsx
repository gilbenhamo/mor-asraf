import { motion } from "framer-motion";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const GeustSpotCard = ({ location, studio, date, icon }: geustSpotsProps) => {
  return (
    <VerticalTimelineElement
      className="font-mono"
      contentStyle={{
        background: "#ffffff",
        borderBottomWidth: 0,
        color: "#000000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #28282B" }}
      date={date}
      // iconStyle={{ background: experience.iconBg }}
      iconStyle={{ fill: "#000000", backgroundColor: "#7B7B7C" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={studio}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      }
    >
      <motion.div className="flex justify-start items-center flex-col">
        <motion.div
          whileHover={{ scale: 1.2}}
          className="  w-56 p-4 flex flex-col justify-start items-center border-r-2 border-t-2 border-black_m rounded-r-xl rounded-b-xl "
        >
          <h3 className="text-black_m text-[24px] font-bold ">
            {/* {experience.title} */}
            {location}
          </h3>
          <p
            className="text-gray_m text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {/* {experience.company_name} */}
            {studio}
          </p>
          <div className="mt-1 h-auto w-auto rounded-full border-2 border-black text-center p-1 text-[10px] hover:bg-gray-200 hover:cursor-pointer">
            {"Book Now"}
          </div>
        </motion.div>
      </motion.div>

      <ul className="mt-5 list-disc ml-5 space-y-2"></ul>
    </VerticalTimelineElement>
  );
};

export default GeustSpotCard;
