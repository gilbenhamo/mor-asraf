interface containerBaseProps {
  children: React.ReactNode;
}

interface sectionWrapperProps extends containerBaseProps {
  idName: string;
}

interface geustSpotsProps {
  index?:number;
  location: string;
  studio: string;
  date: string;
  icon:string;
}

interface GalleryItemBaseProps {
  type:number;
  title?: string;
  description?: string;
  reverse?: boolean;
  img1: string;

}

interface Gallery2ItemsProps extends GalleryItemBaseProps{
  img2: string;
}

interface Gallery3ItemsProps extends GalleryItemBaseProps{
  img2: string;
  img3: string;
}