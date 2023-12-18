import { HomeContainer } from "../containers/HomeContainer";
import { Hero } from "../components/sections/Hero";
import About from "../components/sections/About";
import GeustsSpots from "../components/sections/GeustsSpots";
import Contact from "../components/sections/Contact";
import BookingIsrael from "../components/sections/BookingIsrael";

export const HomePage = () => {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <GeustsSpots />
      <BookingIsrael/>
      <Contact/>
    </HomeContainer>
  );
};
