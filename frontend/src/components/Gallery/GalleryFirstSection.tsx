interface Props {
    img1: string;
    img2: string;
    img3: string;
  }
  
const GalleryFirstSection = ({img1,img2,img3}:Props) => {
  return (
    <div className="h-[90%] flex ">
      <img src={img1} className="w-1/4 object-contain" />
      <img src={img2} className="w-2/4 p-2 object-contain" />
      <img src={img3} className="w-1/4 object-contain" />
    </div>
  );
};

export default GalleryFirstSection;
