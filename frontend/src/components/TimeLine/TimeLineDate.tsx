interface Props {
  startDate: Date;
  endDate: Date;
}

const TimeLineDate = ({ startDate, endDate }: Props) => {
  
    // Formatting the date
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  const startMonth = startDate.toLocaleString("en-US", { month: "long" });
  const endMonth = endDate.toLocaleString("en-US", { month: "long" });
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();

  return (
    <div className="text-black text-xs sm:text-sm">
      {startMonth !== endMonth ? (
        startYear !== endYear ? (
          <>
            {`${startDay} ${startMonth} ${startYear} -`}
            <br/>
            {`${endDay} ${endMonth} ${endYear}`}
          </>
        ) : (
          <>{`${startDay} ${startMonth} - ${endDay} ${endMonth} ${endYear}`}</>
        )
      ) : (
        <>{`${startDay} - ${endDay} ${startMonth} ${startYear}`}</>
      )}
    </div>
  );
};

export default TimeLineDate;
