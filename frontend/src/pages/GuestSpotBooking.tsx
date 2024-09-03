import { useParams } from "react-router-dom";
import BookingIsrael from "../components/sections/BookingIsrael";
import { HomeContainer } from "../containers/HomeContainer";
import { useGetGuestSpotByIdQuery } from "../services/details-api";
import LoadingElement from "../components/UI/LoadingElement";

const GuestSpotBooking = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetGuestSpotByIdQuery(id);

  return (
    <>
      <HomeContainer>
        <div className="pt-16 sm:pt-12">
          {!data ? (
            <LoadingElement isLoading={isLoading} isError={isError} />
          ) : (
            <BookingIsrael
              location={data.location}
              date={new Date(data.startDate).toDateString()}
              studio={data.studio}
            />
          )}
        </div>
      </HomeContainer>
    </>
  );
};

export default GuestSpotBooking;
