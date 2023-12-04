import { VerticalTimeline } from "react-vertical-timeline-component";
// import { experiences } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import SectionHead from "../UI/SectionHead";
import GeustSpotCard from "../UI/GeustSpotCard";
import { SectionWrapper } from "../../containers/SectionWrapper";

const GeustsSpots = () => (
  <>
    <SectionWrapper idName="guest-spots">
      <SectionHead pText={"Where you can find me?"} headText={"Geust Spots."} />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {[1, 2, 3].map((e, index) => (
            <GeustSpotCard key={index} num={e} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  </>
);
export default GeustsSpots;
