import GalleryItemsContainer from "../../containers/GalleryItemsContainer";
import {Gallery2ItemsProps} from "../../utils/prop.ts";


const Gallery2Items = ({ img1, img2, title, description, reverse }: Gallery2ItemsProps) => {
  return (
    <GalleryItemsContainer rowReverse={reverse}>
      <div className="flex flex-col w-5/12  justify-center">
        <img src={img2} className="object-contain" />
        <div className="text-black_m mt-1 sm:mt-3  font-mono text-[10px] md:text-base lg:text-xl font-semibold">
          {title}
        </div>
        <p className="text-gray_m pt-1 text-[6px] md:text-sm text-pretty">
          {description}
        </p>
      </div>
      <div className={`w-7/12 flex ${reverse ? 'justify-start' : 'justify-end'}`}>
        <img src={img1} className="w-[95%] object-contain " />
      </div>
    </GalleryItemsContainer>
  );
};

export default Gallery2Items;
