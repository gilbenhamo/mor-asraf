  
const Gallery3ItemsRow = ({img1,img2,img3}:Gallery3ItemsProps) => {
  return (
    <div className="h-fit sm:h-[90%] flex ">
      <img src={img1} className="w-1/4 object-contain" />
      <img src={img2} className="w-2/4 p-2 object-contain" />
      <img src={img3} className="w-1/4 object-contain" />
    </div>
  );
};

export default Gallery3ItemsRow;
