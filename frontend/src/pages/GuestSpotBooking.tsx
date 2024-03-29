import { useParams } from "react-router-dom";
import BookingIsrael from "../components/sections/BookingIsrael";
import { HomeContainer } from "../containers/HomeContainer";

const GuestSpotBooking = () => {
  const { id, location, date } = useParams();

  return (
    <HomeContainer>
      <div className="pt-16 sm:pt-12">
        <BookingIsrael location={location} date={date} />
      </div>
    </HomeContainer>
  );
};

export default GuestSpotBooking;
