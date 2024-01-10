import "react-vertical-timeline-component/style.min.css";
import SectionHead from "../UI/SectionHead";
import { SectionWrapper } from "../../containers/SectionWrapper";
import TimeLine from "../TimeLine/TimeLine";

const GeustsSpots = () => (
  <>
    <SectionWrapper idName="guest-spots">
      <SectionHead headText={"Geust Spots."} />
      <div className="mt-20 flex flex-col sm:scale-125 ">
        <TimeLine/>
      </div>
    </SectionWrapper>
  </>
);
export default GeustsSpots;
