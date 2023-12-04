import { SectionWrapper } from "../../containers/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const About = () => {
  return (
    <SectionWrapper idName="about">
     <motion.p
        variants={fadeIn("", "", 0.5, 0.2)}
        className="mt-2 text-black_m text-sm sm:text-[17px] max-w-3xl leading-[30px] text-center"
      >
        Artist and tattooer <br/> I truly believe that art is supposed to make a
        difference. Either if it's presented in the finest museums or laying
        dusty in the back of the garage – a good art piece is judged by the
        message it's carrying, or the artistic character it's wearing proudly. <br/><br/>​
        My most ambitious goal is to implement those core artistic values that I
        am so passionate about in the world of tattooing, or at least in my own
        personal surroundings and clientele. With the humility to do so, I'm
        endlessly working to develop and nurture my own personal language that
        sways away from the ink mainstream. All to create timeless crafts that
        are forever relevant regardless of any seasonal fads. <br/><br/>How I wish to do
        that:<br/> • Co-creation with the client, based on his own personal idea,
        experiences, deep emotions, fears, and life story. Allowing me to enter
        their world and present it visually based on my own interpretations and
        preferences <br/> • My own creations. All of them are 1 piece and hand-drawn,
        based on my own experiences, perspective, and art. Translated to a
        tattoo design waiting for the right human canvas.
      </motion.p>
    </SectionWrapper>
  );
};

export default About;
