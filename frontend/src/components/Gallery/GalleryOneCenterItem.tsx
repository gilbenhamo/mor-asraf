import GalleryItemsContainer from "../../containers/GalleryItemsContainer";


const GalleryOneCenterItem = ({ img1}: GalleryItemBaseProps) => {
  return (
    <GalleryItemsContainer>
      <div className="w-1/4 object-contain " />
      <img src={img1} className="w-2/4 object-contain" />
      <div className="w-1/4 " />
    </GalleryItemsContainer>
  );
};

export default GalleryOneCenterItem;
