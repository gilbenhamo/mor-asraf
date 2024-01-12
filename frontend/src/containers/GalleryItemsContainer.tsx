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
      } flex mt-12 pb-24 sm:pb-32`}
    >
      {children}
    </div>
  );
};

export default GalleryItemsContainer;
