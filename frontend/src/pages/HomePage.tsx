import { HomeContainer } from "../containers/HomeContainer";
import { Hero } from "../components/sections/Hero";
import About from "../components/sections/About";
import GeustsSpots from "../components/sections/GeustsSpots";
import Contact from "../components/sections/Contact";
import BookingIsrael from "../components/sections/BookingIsrael";
import Gallery from "../components/sections/Gallery";

export const HomePage = () => {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <Gallery/>
      <GeustsSpots />
      <BookingIsrael/>
      <Contact/>
    </HomeContainer>
  );
};
