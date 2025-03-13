export interface containerBaseProps {
  children: React.ReactNode;
}

export interface sectionWrapperProps extends containerBaseProps {
  idName: string;
}

export interface geustSpotsProps {
  index?:number;
  location: string;
  studio: string;
  date: string;
  icon:string;
}

export interface GalleryItemBaseProps {
  type:number;
  title?: string;
  description?: string;
  reverse?: boolean;
  img1: string;

}

export interface Gallery2ItemsProps extends GalleryItemBaseProps{
  img2: string;
}

export interface Gallery3ItemsProps extends GalleryItemBaseProps{
  img2: string;
  img3: string;
}

export interface GuestSpotType {
  id:string;
  location: string;
  studio: string;
  startDate: Date;
  endDate: Date;
}
