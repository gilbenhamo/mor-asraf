interface Props {
  img1: string;
  img2: string;
  img3: string;
  description?: string;
}

const Gallery3Items = ({ img1, img2, img3, description }: Props) => (
  <div className="h-full flex p-4">
    <div className="flex flex-col w-2/4 p-4 justify-start items-start">
      <img src={img1} className="object-contain" />
      <div className="text-black_m font-mono font-medium">{description}</div>
    </div>

    <div className="relative w-2/4 p-4">
      <img
        src={img2}
        className="absolute top-0 w-3/5 object-contain rounded-r-sm rounded-t-3xl z-10"
      />
      <img
        src={img3}
        className="absolute w-2/5 bottom-48  sm:bottom-56  lg:bottom-20 right-10 object-contain z-20"
      />
    </div>
  </div>
);

export default Gallery3Items;
