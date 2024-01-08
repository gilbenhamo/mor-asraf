import { OvalNextSection } from "../UI/OvalNextSection";
import { heroBackgrounds } from "../../assets/index.js";

export const Hero = () => {
  const randomBackground =
    heroBackgrounds[Math.floor(Math.random() * heroBackgrounds.length)];
  return (
    <div
      id="hero"
      className="relative flex-col flex h-svh sm:min-h-screen bg-white  bg-contain bg-no-repeat  bg-center z-10"
      style={{ backgroundImage: `url(${randomBackground})` }}
    >
      <OvalNextSection />
    </div>
  );
};
