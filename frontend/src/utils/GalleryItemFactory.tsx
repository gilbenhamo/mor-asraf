import { GalleryItemTypes } from "./constants";
import Gallery1Item from "../components/Gallery/Gallery1Item";
import GalleryOneCenterItem from "../components/Gallery/GalleryOneCenterItem";
import Gallery2Items from "../components/Gallery/Gallery2Items"; // Assuming this import is needed
import Gallery3ItemsRow from "../components/Gallery/Gallery3ItemsRow"; // Assuming this import is needed
import Gallery3Items from "../components/Gallery/Gallery3Items";

const GalleryItemFactory = (item: GalleryItemBaseProps, key?: number) => {
  switch (item.type) {
    case GalleryItemTypes.One:
      return <Gallery1Item key={key} {...item} />;

    case GalleryItemTypes.CenterOne:
      return <GalleryOneCenterItem key={key} {...item} />;

    case GalleryItemTypes.Two:
      return <Gallery2Items key={key} {...(item as Gallery2ItemsProps)} />;

    case GalleryItemTypes.Three:
      return <Gallery3Items key={key} {...(item as Gallery3ItemsProps)} />;

    case GalleryItemTypes.ThreeRow:
      return <Gallery3ItemsRow key={key} {...(item as Gallery3ItemsProps)} />;

    default:
      return <div></div>;
  }
};

export default GalleryItemFactory;
