import { motion } from "framer-motion";

interface Props {
    isOpen?:boolean
}
const GalleryContent = ({isOpen}:Props) => {
  return (
    <motion.div
    animate={{scale: isOpen ? 1 : 1.3}}
    className="w-full h-[1000px] bg-white_m z-30 flex flex-col gap-4">
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
    </motion.div>
  );
};

export default GalleryContent;
