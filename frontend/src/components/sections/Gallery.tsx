import { SectionWrapper } from "../../containers/SectionWrapper";
import { motion } from "framer-motion";
import { horses } from "../../assets";
import { useState } from "react";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SectionWrapper idName="gallery">
        {/* Background div with id 'asd' */}
        {isOpen && (
          <div
            id="asd"
            className="bg-gray-100 opacity-90 h-screen w-full z-30 fixed top-0 left-0"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        <motion.div
          className={`h-[700px] relative p-4 cursor-pointer ${
            isOpen ? "overflow-y-auto" : "" // Add overflow-y-auto when isOpen is true
          } hover:z-30`}
          onClick={() => setIsOpen(!isOpen)}
          animate={{
            scale: isOpen ? 1.2 : 1,
            zIndex: isOpen ? 30 : 10,
          }}
        >
          {isOpen && (
            <button
              className="fixed top-4 left-4 text-black z-30 text-2xl cursor-pointer ml-2 mt-2 w-10 h-10 rounded-full   border-black"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          )}

          <motion.img
            src={horses}
            className={`w-full h-[700px] object-cover ${
              isOpen ? "blur-none" : "blur-sm"
            } relative`}
          />
          {/* {!isOpen && (
            <motion.div className="bg-white h-[500px] rounded-md  w-14 opacity-80  items-center justify-center flex flex-col gap-3 font-serif font-bold text-black text-3xl sm:text-4xl z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span>G</span>
              <span>A</span>
              <span>L</span>
              <span>L</span>
              <span>E</span>
              <span>R</span>
              <span>Y</span>
              {/* <span>a</span>
            <span>l</span>
            <span>l</span>
            <span>e</span>
            <span>r</span>
            <span>y</span> 
            </motion.div>
            
          )} */}
          <motion.div className="font-serif font-bold text-black text-5xl sm:text-7xl z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Gallery
          </motion.div>
          {isOpen && (
            <div className="w-full h-[1000px] bg-white_m z-30 flex flex-col gap-4">
              <div className="flex  gap-4">
                <div className="h-[300px] border-4 border-black_m w-5/12 flex items-center justify-center text-black_m text-center">
                  Picture
                </div>
                <div className="h-[400px] mt-4 border-4 border-black_m w-7/12 flex items-center justify-center text-black_m text-center">
                  Picture
                </div>
              </div>
              <div className="flex  gap-4">
                <div className=" m-4 h-[550px] mt-4 border-4 border-black_m w-3/12 flex items-center justify-center text-black_m text-center">
                  Picture
                </div>
                <div className=" m-4 h-[300px] border-4 border-black_m w-5/12 flex items-center justify-center text-black_m text-center">
                  Picture
                </div>
                <div className=" m-4 h-[400px] border-4 border-black_m w-4/12 flex items-center justify-center text-black_m text-center">
                  Picture
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </SectionWrapper>
    </>
  );
};

export default Gallery;
