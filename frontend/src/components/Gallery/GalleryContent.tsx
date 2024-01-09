import { motion } from "framer-motion";
import Gallery3Items from "./Gallery3Items";
import GalleryFirstSection from "./GalleryFirstSection";
import { galleryPhotos } from "../../assets/GalleryPhotos";
import GalleryOneCenterItem from "./GalleryOneCenterItem";

interface Props {
  isOpen?: boolean;
}
const GalleryContent = ({ isOpen }: Props) => {
  return (
    <motion.div
      animate={{ scale: isOpen ? 1 : 1.3 }}
      className="w-full h-[80%] bg-white_m z-30 flex-1 flex-col space-y-4"
    >
      <GalleryFirstSection
        img1={galleryPhotos.G_1}
        img2={galleryPhotos.G_2}
        img3={galleryPhotos.G_2}
      />
      <Gallery3Items
        img1={galleryPhotos.G_3_1}
        img2={galleryPhotos.G_3_2}
        img3={galleryPhotos.G_3_3}
        title="`The process to the great relief`"
        description="*Optional* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
      />
      <GalleryOneCenterItem img={galleryPhotos.G_4}
       title="`equal base`"
       description="*Optional* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
/>
      {/* <div className="flex  gap-4">
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
      </div> */}
    </motion.div>
  );
};

export default GalleryContent;
