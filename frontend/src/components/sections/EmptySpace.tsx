import { es_plandscape } from "../../assets";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { fadeIn } from "../../utils/motion";
import SectionHead from "../UI/SectionHead";
import { motion } from "framer-motion";
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
      >
        {isOpen && <BookingIsrael />}
      </motion.div>
    </SectionWrapper>
  );
};

export default EmptySpace;
