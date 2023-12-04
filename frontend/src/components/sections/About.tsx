import { SectionWrapper } from "../../containers/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, slideFadeIn } from "../../utils/motion";
import { about_pic } from "../../assets";

const About = () => (
  <SectionWrapper idName="about">
    {/* <div className="h-12"></div> */}
    <div className="flex flex-row items-center mt-28">
      <motion.p
        // variants={fadeIn("", "", 0.5, 0.2)}
        variants={slideFadeIn("up","spring",0.8,1.2)}
        className="mt-2 text-black_m text-sm sm:text-[17px] max-w-3xl leading-[30px] text-center"
      >
        Artist and tattooer <br /> I truly believe that art is supposed to make
        a difference. Either if it's presented in the finest museums or laying
        dusty in the back of the garage – a good art piece is judged by the
        message it's carrying, or the artistic character it's wearing proudly.{" "}
        <br />
        <br />​ My most ambitious goal is to implement those core artistic
        values that I am so passionate about in the world of tattooing, or at
        least in my own personal surroundings and clientele. With the humility
        to do so, I'm endlessly working to develop and nurture my own personal
        language that sways away from the ink mainstream. All to create timeless
        crafts that are forever relevant regardless of any seasonal fads. <br />
        <br />
        How I wish to do that:
        <br /> • Co-creation with the client, based on his own personal idea,
        experiences, deep emotions, fears, and life story. Allowing me to enter
        their world and present it visually based on my own interpretations and
        preferences <br /> • My own creations. All of them are 1 piece and
        hand-drawn, based on my own experiences, perspective, and art.
        Translated to a tattoo design waiting for the right human canvas.
      </motion.p>
      <motion.img
        variants={slideFadeIn("right", "spring", 0.4, 1.2)}
        src={about_pic}
        className="h-[600px]"
      />
    </div>
  </SectionWrapper>
);

export default About;
