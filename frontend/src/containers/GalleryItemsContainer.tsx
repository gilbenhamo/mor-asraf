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
      } flex h-fit sm:pt-6`}
    >
      {children}
    </div>
  );
};

export default GalleryItemsContainer;
