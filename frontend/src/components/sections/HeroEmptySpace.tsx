import { es_logo } from "../../assets";

const HeroEmptySpace = () => {
  return (
    <div
      id="hero-es"
      className="relative flex-col flex h-svh sm:min-h-screen bg-white  bg-contain bg-no-repeat  bg-center z-10"
    >
      <img
        src={es_logo}
        alt="logo"
        className="absolute bottom-0 left-0 p-4 object-contain w-56 sm:w-72"
      />
    </div>
  );
};

export default HeroEmptySpace;
