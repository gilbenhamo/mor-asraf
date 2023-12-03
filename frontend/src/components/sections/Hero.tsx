import { OvalNextSection } from "../UI/OvalNextSection";

export const Hero = () => {
  return (
<div className="relative flex-col flex min-h-screen bg-white overflow-hidden md:bg-cover bg-contain bg-no-repeat bg-hero-pattern bg-center">
  <div className="flex justify-center items-center  ">
    {/* <img src={horses} alt="Your Image" className=""   /> */}
  </div>
  <OvalNextSection/>
</div>
  );
};
