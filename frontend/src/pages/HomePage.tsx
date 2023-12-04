import { HomeContainer } from "../containers/HomeContainer";
import { Hero } from "../components/sections/Hero";
import About from "../components/sections/About";

export const HomePage = () => {
  return (
    <HomeContainer>
      <Hero />
      <About />
    </HomeContainer>
  );
};
