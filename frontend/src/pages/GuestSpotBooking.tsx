import { useParams } from "react-router-dom";
import BookingIsrael from "../components/sections/BookingIsrael";
import { HomeContainer } from "../containers/HomeContainer";
import { useGetGuestSpotByIdQuery } from "../services/details-api";

const GuestSpotBooking = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetGuestSpotByIdQuery(id);

  return (
    <>
      <HomeContainer>
        <div className="pt-16 sm:pt-12">
          {isLoading ? (
            <div className=" text-black text-3xl h-screen text-center pt-20">
              404<br></br> Loading...{" "}
            </div>
          ) : isError ? (
            <div className=" text-black text-3xl h-screen text-center pt-20">
              404<br></br> Page Not Found{" "}
            </div>
          ) : (
            <BookingIsrael
              location={data.location}
              date={new Date(data.startDate).toDateString()}
            />
          )}
        </div>
      </HomeContainer>
    </>
  );
};

export default GuestSpotBooking;
