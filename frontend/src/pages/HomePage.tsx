import Header from "../components/layout/Header";
import { HomeContainer } from "../containers/HomeContainer";
import { EmptySpaceNavLinks } from "../utils/constants";
import HeroEmptySpace from "../components/sections/HeroEmptySpace";
import Contact from "../components/sections/Contact";
import EmptySpace from "../components/sections/EmptySpace";
import Events from "../components/sections/Events";
import Artists from "../components/sections/Artists";
import AboutEmptySpace from "../components/sections/AboutEmptySpace";

export const HomePage = () => {
  return (
    <>
      <Header navLinks={EmptySpaceNavLinks} pageBaseUrl="" />
      <HomeContainer>
        <HeroEmptySpace />
        <AboutEmptySpace />
        <Artists />
        <Events />
        <EmptySpace />
        <Contact />
      </HomeContainer>
    </>
  );
};
