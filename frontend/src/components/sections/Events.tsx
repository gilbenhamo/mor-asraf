import { SectionWrapper } from "../../containers/SectionWrapper";
import TimeLine from "../TimeLine/TimeLine";
import SectionHead from "../UI/SectionHead";

const Events = () => {
  //   const { data, isError, isLoading } = useGetAllGuestSpotsQuery(undefined);
  const data = [
    {
      id: "1",
      location: "ALMA'S SALON",
      studio: ` Salon conversation with Alma Hanegbi.
      An hour and a half session on the connection between popular culture and art.
      From Beyoncé and Renaissance to Magritte and Kendrick Lamar.
      `,
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  return (
    <SectionWrapper idName="guest-spots">
      <SectionHead headText={"Events"} />
      <div className="mt-20 flex flex-col sm:scale-125 ">
        <TimeLine data={data} isError={false} isLoading={false} />
      </div>
    </SectionWrapper>
  );
};

export default Events;
