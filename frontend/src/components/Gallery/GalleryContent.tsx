import { motion } from "framer-motion";
import Gallery3Items from "./Gallery3Items";
import { galleryPhotos } from "../../assets/GalleryPhotos";
import GalleryOneCenterItem from "./GalleryOneCenterItem";
import Gallery2Items from "./Gallery2Items";
import Gallery3ItemsRow from "./Gallery3ItemsRow";
import Gallery1Item from "./Gallery1Item";

interface Props {
  isOpen?: boolean;
}
const GalleryContent = ({ isOpen }: Props) => {
  return (
    <motion.div
      animate={{ scale: isOpen ? 1 : 1.3 }}
      className="w-full h-[80%] bg-white_m z-30 flex-1 flex-col space-y-4"
    >
      <Gallery3ItemsRow
        img1={galleryPhotos.G_1_1}
        img2={galleryPhotos.G_1_2}
        img3={galleryPhotos.G_1_3}
      />
      <GalleryOneCenterItem img={galleryPhotos.G_2_1} />
      <Gallery3ItemsRow
        img1={galleryPhotos.G_3_1}
        img2={galleryPhotos.G_3_2}
        img3={galleryPhotos.G_3_3}
      />
      <Gallery2Items reverse img1={galleryPhotos.G_4_2} img2={galleryPhotos.G_4_1} />
      <Gallery1Item img={galleryPhotos.G_5_1} />
      <Gallery2Items img1={galleryPhotos.G_6_1} img2={galleryPhotos.G_6_2} />
      <GalleryOneCenterItem img={galleryPhotos.G_7_1} />
      <Gallery3Items
        img1={galleryPhotos.G_8_1}
        img2={galleryPhotos.G_8_3}
        img3={galleryPhotos.G_8_2}
      />
      <Gallery1Item reverse img={galleryPhotos.G_9_1} />
      <Gallery2Items reverse img1={galleryPhotos.G_10_1} img2={galleryPhotos.G_10_2} />

    </motion.div>
  );
};

export default GalleryContent;
