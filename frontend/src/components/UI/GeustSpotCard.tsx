import { VerticalTimelineElement } from "react-vertical-timeline-component";

const GeustSpotCard = ({ num }: { num: number }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#28282B", color: "#000000" }}
    contentArrowStyle={{ borderRight: "tpx solid #ffffff" }}
    date={"1/1/2022"}
    // iconStyle={{ background: experience.iconBg }}
    iconStyle={{fill:"#000000",backgroundColor:"#7B7B7C" }}
    iconClassName=""
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
        Spot num: {num}
      </h3>
      <p
        className="text-white text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {/* {experience.company_name} */}
        blablabla{num}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2"></ul>
  </VerticalTimelineElement>
);

export default GeustSpotCard;
