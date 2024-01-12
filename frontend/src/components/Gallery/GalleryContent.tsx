import { motion } from "framer-motion";
import GalleryItemFactory from "../../utils/GalleryItemFactory";
import { galleryItems } from "../../utils/constants";

interface Props {
  isOpen?: boolean;
}

const GalleryContent = ({ isOpen }: Props) => {
  return (
    <motion.div
      animate={{
        scale: isOpen ? 1 : 1.2,
      }}
      className="w-full h-[80%] bg-white_m z-30 flex-1 flex-col space-y-4"
    >
      {galleryItems.map((item, index) => GalleryItemFactory(item, index))}
    </motion.div>
  );
};

export default GalleryContent;
