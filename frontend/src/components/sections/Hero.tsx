import { motion, useScroll, useTransform } from "framer-motion";
import { OvalNextSection } from "../UI/OvalNextSection";

export const Hero = () => {
  let hero_height_proportion = 1;

  window.onload = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      hero_height_proportion =
        heroSection.offsetHeight / document.body.scrollHeight;
    }
  };

  const screen_height = window.innerHeight;
  const { scrollYProgress } = useScroll();

  const scale = useTransform(
    scrollYProgress,
    [0, hero_height_proportion],
    [1, 1.4]
  );
  const y = useTransform(
    scrollYProgress,
    [0, hero_height_proportion],
    [1, screen_height / 2 + 48]
  );
  return (
    <div
      id="hero"
      className="relative flex-col flex min-h-screen bg-white  md:bg-cover bg-contain bg-no-repeat bg-hero-pattern bg-center z-10"
    >
      <div className="flex justify-center items-center min-h-screen">
        <motion.h1
          style={{ scale: scale, y: y }}
          className="font-serif font-bold text-black text-5xl sm:text-8xl z-10"
        >
          Mor Asraf
        </motion.h1>
      </div>
      <OvalNextSection />
    </div>
  );
};
