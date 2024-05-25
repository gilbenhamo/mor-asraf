import { SectionWrapper } from "../../containers/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, slideFadeIn } from "../../utils/motion";
import { about_pic } from "../../assets";

const About = () => (
  <SectionWrapper idName="about">
    <motion.h1
      className="font-serif font-bold text-black text-5xl sm:text-8xl text-center"
      variants={fadeIn("down", "", 0.1, 1)}
    >
      Mor Asraf
    </motion.h1>
    <div className="flex flex-col lg:flex-row items-center mt-3">
      <motion.img
        variants={slideFadeIn("left", "", 0.3, 1)}
        src={about_pic}
        className="h-[300px] sm:h-[400px] m-10"
      />
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
       className="lg:h-72 w-1 bg-gradient-to-t from-black/25 via-black/75 to-black/25 "></motion.div>
      <motion.p
        variants={slideFadeIn("up", "", 0.3, 1.2)}
        className="m-10 xs:m-6 sm:pt-12 text-black_m text-sm sm:text-[17px] max-w-3xl leading-[30px] text-left"
      >
        Mor Asraf,
        <br />
        27-year-old Artist and Tattooist, Tel Aviv, Israel.
        <br />
        <br />
        My artistic journey began when I found myself in a new environment,
        distinct from where I was raised. There, I discovered the potential
        beauty in blending perspectives. My passion for aesthetics and design
        converges with my desire to tackle meaningful topics in unexpected
        contexts, aiming to spark broader conversations.
        <br />
        <br />
        As a tattooist, I bring this vision to life by creating art that goes
        beyond traditional galleries and museums. By placing art on the body, I
        challenge the transient nature of art and the often superficial views of
        tattoos as merely temporary aesthetic choices.
        <br />
        <br />
        This connection between my artistic worlds is shaped by my personal
        experiences and those of my clients, guiding all my works.
      </motion.p>
    </div>
  </SectionWrapper>
);

export default About;
