import TimeLineEvent from "./TimeLineEvent";
import TimeLinePiller from "./TimeLinePiller";
import TimeLineDate from "./TimeLineDate";
import { useNavigate } from "react-router-dom";

export interface TimeLineItemProps {
  startDate: Date;
  endDate: Date;
  location: string;
  studio: string;
  _id: string;
  fullBooked?: boolean;
}

const TimeLineItem = ({
  location,
  studio,
  startDate,
  endDate,
  _id,
  fullBooked,
}: TimeLineItemProps) => {
  const navigate = useNavigate();
  const available = new Date() < endDate;

  const handleBookNow = () => {
    navigate(`/guest-spot-booking/${_id}`);
    setTimeout(() => {
      scrollTo(0, 0);
    }, 500);
  };

  return (
    <div className="h-[100px] grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
      <TimeLineDate startDate={startDate} endDate={endDate} />
      <TimeLinePiller />
      <TimeLineEvent
        heading={location}
        subHeading={studio}
        available={available}
        onClick={handleBookNow}
        fullBooked={fullBooked}
      />
    </div>
  );
};

export default TimeLineItem;
