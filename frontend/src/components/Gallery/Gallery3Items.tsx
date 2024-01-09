import GalleryItemsContainer from "../../containers/GalleryItemsContainer";

interface Props extends GalleryItemBaseProps{
  img1: string;
  img2: string;
  img3: string;
}

const Gallery3Items = ({
  img1,
  img2,
  img3,
  title,
  description,
  reverse,
}: Props) => (
  <GalleryItemsContainer rowReverse={reverse}>
    <div className="flex flex-col w-2/4 sm:p-2 justify-start items-start">
      <img src={img1} className="object-contain" />
      <div className="text-black_m text-pretty font-mono text-xs lg:text-base font-semibold">
        {title}
      </div>
      <p className="text-gray_m text-[8px] sm:text-xs text-pretty">
        {description}
      </p>
    </div>

    <div className="relative w-2/4 p-2 *:absolute *:object-contain">
      <img src={img2} className=" w-3/5 z-10" />
      <img
        src={img3}
        className=" w-2/5 top-20 xs:top-28 sm:top-32 md:top-44 lg:top-64 right-6 sm:right-10 z-20"
      />
    </div>
  </GalleryItemsContainer>
);

export default Gallery3Items;
