import { SectionWrapper } from "../../containers/SectionWrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import GalleryContent from "../Gallery/GalleryContent";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SectionWrapper idName="gallery">
        <motion.div
          className={`h-[calc(100svh-100px)] sm:h-[calc(100vh-250px)]  bg-white_m  relative cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: "0.5rem",
            //boxShadow: isOpen ? "inset 0 0 0.5rem rgba(0, 0, 0, 0.5)" : "none", // Add a shadow for the window effect
            boxShadow: "inset 0 0 0.5rem rgba(0, 0, 0, 0.5)",
            transition: "box-shadow 0.3s ease, padding 0.3s ease", // Add transition to both boxShadow and padding properties
          }}
        >
          <motion.div
            className="font-serif font-bold text-black text-5xl sm:text-7xl z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ opacity: isOpen ? 0 : 1 }}
          >
            <div>Gallery</div>
            <div className="flex justify-center text-sm sm:text-base text-center text-black_m">
              Tap to view
              {/* <video className="w-10" autoPlay muted loop>
                <source src={clickWebm} type="video/webm" />
              </video> */}
            </div>
          </motion.div>

          <motion.div
            animate={{
              filter: isOpen ? "blur(0px)" : "blur(8px)",
              transition: {
                duration: 0.3,
              },
            }}
            className={`h-full   cursor-pointer ${
              isOpen ? "overflow-y-auto no-scrollbar " : "overflow-hidden " // Add overflow-y-auto when isOpen is true
            }`}
          >
            <GalleryContent isOpen={isOpen} />
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
};

export default Gallery;
