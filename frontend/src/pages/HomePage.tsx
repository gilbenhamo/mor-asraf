import { HomeContainer } from "../containers/HomeContainer";
import { Hero } from "../components/sections/Hero";
import About from "../components/sections/About";
import GeustsSpots from "../components/sections/GeustsSpots";

export const HomePage = () => {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <GeustsSpots />
    </HomeContainer>
  );
};
