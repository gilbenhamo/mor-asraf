interface containerBaseProps {
  children: React.ReactNode;
}

interface sectionWrapperProps extends containerBaseProps {
  idName: string;
}

interface geustSpotsProps {
  location: string;
  studio: string;
  date: string;
  icon:string;
}
