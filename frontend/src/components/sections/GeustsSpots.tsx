import { VerticalTimeline } from "react-vertical-timeline-component";
// import { experiences } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import SectionHead from "../UI/SectionHead";
import GeustSpotCard from "../UI/GeustSpotCard";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { geustSpotsData } from "../../utils/constants";

const GeustsSpots = () => (
  <>
    <SectionWrapper idName="guest-spots">
      <SectionHead pText={"Where you can find me?"} headText={"Geust Spots."} />
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline lineColor="black" className="" >
          {geustSpotsData.map((elem, index) => (
            <GeustSpotCard key={index} index={index} {...elem} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  </>
);
export default GeustsSpots;
