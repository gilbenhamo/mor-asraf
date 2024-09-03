import "react-vertical-timeline-component/style.min.css";
import SectionHead from "../UI/SectionHead";
import { SectionWrapper } from "../../containers/SectionWrapper";
import TimeLine from "../TimeLine/TimeLine";
import { useGetAllGuestSpotsQuery } from "../../services/details-api";
import LoadingElement from "../UI/LoadingElement";

const GeustsSpots = () => {
  const { data, isError, isLoading } = useGetAllGuestSpotsQuery(undefined);
  return (
    <>
      <SectionWrapper idName="guest-spots">
        <SectionHead headText={"Geust Spots."} />
        <div className="mt-20 flex flex-col sm:scale-125 ">
          {!data ? (
            <LoadingElement isLoading={isLoading} isError={isError} />
          ) : (
            <TimeLine data={data} isError={isError} isLoading={isLoading} />
          )}
        </div>
      </SectionWrapper>
    </>
  );
};
export default GeustsSpots;
