interface Props {
  heading: string;
  subHeading: string;
  available?: boolean;
  onClick?: () => void;
}

const TimeLineEvent = ({ heading, subHeading, available, onClick }: Props) => {
  return (
    <div className="h-full flex flex-col justify-center items-end">
      <div className="  flex flex-col justify-start items-end ">
        <h3 className={`text-black_m text-xl font-bold `}>{heading}</h3>
        <p className="text-gray_m text-sm font-semibold">{subHeading}</p>
        {available && (
          <div
            className={` text-black_m  h-auto w-auto  border-b-2 border-black text-center  text-[8px] hover:bg-gray-200 hover:cursor-pointer`}
            onClick={onClick}
          >
            {"Book Now"}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeLineEvent;
