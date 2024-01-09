import GalleryItemsContainer from "../../containers/GalleryItemsContainer";

interface Props extends GalleryItemBaseProps {
  img: string;
}

const GalleryOneCenterItem = ({ img, title, description, reverse }: Props) => {
  return (
    <GalleryItemsContainer rowReverse={reverse}>
      <div className="w-1/12" />
      <img src={img} className="w-7/12 object-contain" />
      <div className="w-4/12 flex flex-col justify-center pl-2 lg:pl-10">
        <div className="text-black_m text-pretty font-mono text-xs md:text-lg lg:text-3xl font-semibold">
          {title}
        </div>
        <p className="text-gray_m pt-1 text-[8px] md:text-sm text-pretty">
          {description}
        </p>
      </div>
    </GalleryItemsContainer>
  );
};

export default GalleryOneCenterItem;
