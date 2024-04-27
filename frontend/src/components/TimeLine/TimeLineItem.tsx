import TimeLineEvent from "./TimeLineEvent";
import TimeLinePiller from "./TimeLinePiller";
import TimeLineDate from "./TimeLineDate";
import { useNavigate } from "react-router-dom";

interface TimeLineItemProps {
  startDate: Date;
  endDate: Date;
  headline: string;
  subHeadline: string;
  _id: string;
}

const TimeLineItem = ({ headline, subHeadline, startDate, endDate, _id }: TimeLineItemProps) => {
  const navigate = useNavigate();
  const available = new Date() < endDate
 
  const handleBookNow = () =>{
    navigate(`/guest-spot-booking/${_id}`)
  }
  return (
    <div className="h-[100px] grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
      <TimeLineEvent heading={headline} subHeading={subHeadline} available={available} onClick={handleBookNow}/>
      <TimeLinePiller />
      <TimeLineDate startDate={startDate} endDate={endDate}/>
    </div>
  );
};

export default TimeLineItem;
