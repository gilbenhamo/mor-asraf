import { VerticalTimelineElement } from "react-vertical-timeline-component";

const GeustSpotCard = ({ num }: { num: number }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#F76C6C", color: "#fff" }}
      contentArrowStyle={{ borderRight: "tpx solid #232631" }}
      date={"1/1/2022"}
      // iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {/* <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[70%] h-[70%] object-contain"
            /> */}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {/* {experience.title} */}
          {num}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {/* {experience.company_name} */}
          {num}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2"></ul>
    </VerticalTimelineElement>
  );
};

export default GeustSpotCard;
