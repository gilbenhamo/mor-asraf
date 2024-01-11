import GalleryItemsContainer from "../../containers/GalleryItemsContainer";

interface Props extends GalleryItemBaseProps {
  img1: string;
  img2: string;
}

const Gallery2Items = ({ img1, img2, title, description, reverse }: Props) => {
  return (
    <GalleryItemsContainer rowReverse={reverse}>
      <div className="flex flex-col w-5/12 p-2 ">
        <img src={img2} className="object-contain" />
        <div className="text-black_m mt-1 sm:mt-3  font-mono text-[10px] md:text-base lg:text-xl font-semibold">
          {title}
        </div>
        <p className="text-gray_m pt-1 text-[6px] md:text-sm text-pretty">
          {description}
        </p>
      </div>
      <div className="w-7/12 flex justify-center items-start p-2 ">
        <img src={img1} className="w-10/12  object-contain " />
      </div>
    </GalleryItemsContainer>
  );
};

export default Gallery2Items;
