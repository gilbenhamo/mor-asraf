interface galleryItemsContainerProps extends containerBaseProps {
  rowReverse?: boolean;
  colReverse?: boolean;
}

const GalleryItemsContainer = ({
  children,
  rowReverse,
  colReverse,
}: galleryItemsContainerProps) => {
  return (
    <div
      className={`${rowReverse ? "flex-row-reverse" : ""} ${
        colReverse ? "flex-col-reverse" : ""
      } flex h-fit pt-2 sm:pt-6 pb-2 sm:pb-6`}
    >
      {children}
    </div>
  );
};

export default GalleryItemsContainer;
