import { HomeContainer } from "../containers/HomeContainer";
import { Hero } from "../components/sections/Hero";
import About from "../components/sections/About";
import GeustsSpots from "../components/sections/GeustsSpots";
import Contact from "../components/sections/Contact";
import Gallery from "../components/sections/Gallery";
import EmptySpace from "../components/sections/EmptySpace";

export const HomePage = () => {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <Gallery />
      <GeustsSpots />
      <EmptySpace />
      <Contact />
    </HomeContainer>
  );
};
