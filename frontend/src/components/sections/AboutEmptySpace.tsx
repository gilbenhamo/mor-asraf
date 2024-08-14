import { SectionWrapper } from "../../containers/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, slideFadeIn } from "../../utils/motion";

const AboutEmptySpace = () => {
  return (
    <SectionWrapper idName="about">
      <div className="pt-16 sm:pt-24 h-[50svh] sm:h-[60svh] w-full flex flex-col justify-center">
        <motion.h1
          className="font-serif font-lightbold text-black text-4xl sm:text-[3.5rem] text-center"
          variants={fadeIn("down", "", 0.1, 1)}
        >
          ABOUT
        </motion.h1>
        <motion.p
          variants={slideFadeIn("up", "", 0.3, 1.2)}
          className="p-1 pt-10 sm:pt-20 text-black_m text-sm sm:text-3xl font-light text-center text-pretty"
        >
          Empty Space is a creative space open to all forms of art and design,
          serving as a content hub and gallery for our artists and members.
          <br />
          <br />
          In the physical space, we nurture creativity by connecting local
          culture with contemporary perspectives, particularly in the fields of
          painting, fashion, and dialogue, with the goal of expressing and
          filling the empty spaces within us.
          <br />
          <br />
          You are welcome, there's a space for everyone 🌹
        </motion.p>
      </div>
    </SectionWrapper>
  );
};

export default AboutEmptySpace;
