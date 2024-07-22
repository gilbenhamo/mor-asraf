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
          Empty Space is a shared creative space open to all
          <br />
          types of art and craft, and a house of content for our
          <br />
          artists and clients members.
          <br />
          <br />
          In our physical empty space we will both create and
          <br />
          bring our new and old mental empty space, through the
          <br />
          connection between locality and culture to modern
          <br />
          perceptions of style and knowledge such as fashion,
          <br />
          music, and dialogue.
        </motion.p>
      </div>
    </SectionWrapper>
  );
};

export default AboutEmptySpace;
