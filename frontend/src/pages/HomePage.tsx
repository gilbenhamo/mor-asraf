import Header from "../components/layout/Header";
import { HomeContainer } from "../containers/HomeContainer";
import { EmptySpaceNavLinks } from "../utils/constants";
import HeroEmptySpace from "../components/sections/HeroEmptySpace";
import Contact from "../components/sections/Contact";
import Events from "../components/sections/Events";
import Artists from "../components/sections/Artists";
import AboutEmptySpace from "../components/sections/AboutEmptySpace";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { es_movie_landscape, es_portrait } from "../assets";

export const HomePage = () => {
  return (
    <>
      <Header navLinks={EmptySpaceNavLinks} pageBaseUrl="" />
      <HomeContainer>
        <HeroEmptySpace />
        <AboutEmptySpace />
        <Artists />
        <Events />
        <>
          <div className="relative"></div>
          <video className="p-4 hidden md:block w-full h-auto"  autoPlay loop muted>
            <source src={es_movie_landscape} type="video/mp4" />
          </video>
          {/* Mobile Image */}
          <motion.img
            variants={fadeIn("up", "", 0.5, 0.5)}
            src={es_portrait}
            className="p-4 block md:hidden w-full h-auto"
          />
        </>
        <Contact />
      </HomeContainer>
    </>
  );
};
