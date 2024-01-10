import TimeLineEvent from "./TimeLineEvent";
import TimeLinePiller from "./TimeLinePiller";
import TimeLineDate from "./TimeLineDate";

interface TimeLineItemProps {
  startDate: Date;
  endDate: Date;
  headline: string;
  subHeadline: string;
}

const TimeLineItem = ({ headline, subHeadline, startDate, endDate }: TimeLineItemProps) => {
  const available = new Date() < endDate
  return (
    <div className="h-[100px] grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
      <TimeLineEvent heading={headline} subHeading={subHeadline} available={available} />
      <TimeLinePiller />
      <TimeLineDate startDate={startDate} endDate={endDate}/>
    </div>
  );
};

export default TimeLineItem;
