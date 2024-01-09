interface Props {
  img1: string;
  img2: string;
  img3: string;
  description?: string;
}

const Gallery3Items = ({ img1, img2, img3, description }: Props) => (
  <div className="h-fit flex p-4">
    <div className="flex flex-col w-2/4 p-4 justify-start items-start">
      <img src={img1} className="object-contain" />
      <div className="text-black_m font-mono font-medium">{description}</div>
    </div>

    <div className="relative w-2/4 p-4 *:absolute *:object-contain">
      <img
        src={img2}
        className=" w-3/5 rounded-3xl rounded-l-sm  z-10"
      />
      <img
        src={img3}
        className=" w-2/5 rounded-3xl rounded-r-sm  bottom-20 right-2 sm:bottom-10 sm:right-10 z-20"
      />
    </div>
  </div>
);

export default Gallery3Items;
