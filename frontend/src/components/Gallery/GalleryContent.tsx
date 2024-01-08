import { motion } from "framer-motion";
import Gallery3Items from "./Gallery3Items";

interface Props {
    isOpen?:boolean
}
const GalleryContent = ({isOpen}:Props) => {
  return (
    <motion.div
    animate={{scale: isOpen ? 1 : 1.3}}
    className="w-full h-full bg-white_m z-30 flex flex-col gap-4">
      <Gallery3Items/>
      <Gallery3Items/>
    </motion.div>
  );
};

export default GalleryContent;
