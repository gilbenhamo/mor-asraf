import { G_1, G_2 } from "../../assets/GalleryPhotos";

const Gallery3Items = () => (
 <div className="h-full flex ">
   <img src={G_1} className="w-1/4 object-contain" />
     <img src={G_2} className="w-2/4 p-2 object-contain" />
     <img src={G_2} className="w-1/4 object-contain" />
</div>

  );
  

export default Gallery3Items;
