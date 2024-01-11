import GalleryItemsContainer from "../../containers/GalleryItemsContainer";

interface Props extends GalleryItemBaseProps {
  img: string;
}

const GalleryOneCenterItem = ({ img }: Props) => {
  return (
    <GalleryItemsContainer>
      <div className="w-1/4 object-contain " />
      <img src={img} className="w-2/4 object-contain" />
      <div className="w-1/4 " />
    </GalleryItemsContainer>
  );
};

export default GalleryOneCenterItem;
