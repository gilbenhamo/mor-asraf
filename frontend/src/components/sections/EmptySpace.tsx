import { es_plandscape } from "../../assets";
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
        <SectionHead headText={`Empty space`} subText={`tlv studio`} />
        <motion.img
          variants={fadeIn("up", "", 0.5, 0.5)}
          src={es_plandscape}
          className="p-4"
          onClick={handleClick}
        />
        <motion.div
          ref={targetRef}
          id="es-content"
          className=" bg-white"
          animate={{ height: isOpen ? 1100 : 0 }}
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
