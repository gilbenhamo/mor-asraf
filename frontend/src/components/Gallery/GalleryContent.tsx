import { motion } from "framer-motion";
import Gallery3Items from "./Gallery3Items";
import GalleryFirstSection from "./GalleryFirstSection";
import { galleryPhotos } from "../../assets/GalleryPhotos";
import GalleryOneCenterItem from "./GalleryOneCenterItem";
import Gallery2Items from "./Gallery2Items";

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
      <Gallery2Items
        img1={galleryPhotos.G_5_2}
        img2={galleryPhotos.G_5_1}
        reverse
        title="`Overcoming`"
        // description="*Optional* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
      />
      <GalleryOneCenterItem
        reverse
        img={galleryPhotos.G_4}
        title="`equal base`"
        description="*Optional* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
      />
      <Gallery2Items
        img1={galleryPhotos.G_6_1}
        img2={galleryPhotos.G_6_2}
        title="`From nothing to nothing`"
        description="*Optional* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
      />
      <Gallery3Items
      reverse
        img1={galleryPhotos.G_7_1}
        img2={galleryPhotos.G_7_2}
        img3={galleryPhotos.G_7_2}
        title="`untitled`"
      />
    </motion.div>
  );
};

export default GalleryContent;
