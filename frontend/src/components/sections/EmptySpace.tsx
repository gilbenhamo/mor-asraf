import { es_plandscape, es_portrait } from "../../assets";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { fadeIn } from "../../utils/motion";
import SectionHead from "../UI/SectionHead";
import { AnimatePresence, motion } from "framer-motion";
import BookingIsrael from "./BookingIsrael";
import { useRef, useState } from "react";

const EmptySpace = () => {
  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="sync">
      <SectionWrapper idName="booking-israel">
        <SectionHead headText={`Empty Space`} subText={`tlv studio`} />
        <div className="relative">
          <motion.img
            variants={fadeIn("up", "", 0.5, 0.5)}
            src={es_plandscape}
            className="p-4 hidden md:block w-full h-auto"
          />
          {/* Mobile Image */}
          <motion.img
            variants={fadeIn("up", "", 0.5, 0.5)}
            src={es_portrait}
            className="p-4 block md:hidden w-full h-auto"
          />
          <motion.button
            className="text-lg md:text-xl text-black_m font-bold bg-opacity-50 rounded-xl backdrop-filter backdrop-blur-sm md:p-6 md:py-4 p-2 py-1 absolute z-10 border-gray-600 border-b-2"
            onClick={handleClick}
            variants={{
              hidden: {
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
                top: "50%",
                left: "50%",
              },
              show: {
                opacity: 1,
                scale: 1,
              },
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            Book Now
          </motion.button>
        </div>
        <motion.div
          ref={targetRef}
          id="es-content"
          className=" bg-white"
          animate={{ height: isOpen ? 1300 : 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          {isOpen && <BookingIsrael />}
        </motion.div>
      </SectionWrapper>
    </AnimatePresence>
  );
};

export default EmptySpace;
