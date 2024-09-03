interface Props {
  heading: string;
  subHeading: string;
  available?: boolean;
  onClick?: () => void;
  fullBooked?: boolean;
}

const TimeLineEvent = ({
  heading,
  subHeading,
  available,
  onClick,
  fullBooked,
}: Props) => {
  return (
    <div className="h-full flex flex-col justify-center items-start">
      <div className="  flex flex-col justify-start items-start ">
        <h3 className={`text-black_m text-xl font-bold `}>{heading}</h3>
        <p className="text-gray_m text-xs font-light overflow-hidden w-10/12">
          {subHeading}
        </p>
        {available &&
          (fullBooked ? (
            <div className=" text-black_m  h-auto w-auto  border-b-2 border-grey_m text-center  text-[8px] ">
              {"Fully Booked"}
            </div>
          ) : (
            <div
              className={` text-black_m  h-auto w-auto  border-b-2 border-black text-center  text-[8px] hover:bg-gray-200 hover:cursor-pointer`}
              onClick={onClick}
            >
              {"Book Now"}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TimeLineEvent;
