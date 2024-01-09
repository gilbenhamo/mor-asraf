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
  title?: string;
  description?: string;
  reverse?: boolean;
}
