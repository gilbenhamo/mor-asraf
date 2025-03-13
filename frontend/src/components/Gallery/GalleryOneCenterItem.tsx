import GalleryItemsContainer from "../../containers/GalleryItemsContainer";
import {GalleryItemBaseProps} from "../../utils/prop.ts";


const GalleryOneCenterItem = ({ img1}: GalleryItemBaseProps) => {
  return (
    <GalleryItemsContainer>
      <div className="w-1/6 sm:w-1/4" />
      <img src={img1} className="w-4/6 sm:w-2/4" />
      <div className="w-1/6 sm:w-1/4" />
    </GalleryItemsContainer>
  );
};

export default GalleryOneCenterItem;
