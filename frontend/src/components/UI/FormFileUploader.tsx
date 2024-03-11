import React, { ChangeEvent } from "react";

interface FormFileUploaderProps {
  maxPhotos: number;
  photos: File[];
  id: string;
  setPhotos: React.Dispatch<React.SetStateAction<File[]>>;
  set64Photos: React.Dispatch<React.SetStateAction<string[]>>;
}

const FormFileUploader: React.FC<FormFileUploaderProps> = ({
  maxPhotos,
  id,
  setPhotos,
  set64Photos,
}) => {
  const convertToBase64 = (file: File) => {
    const fileReader = new FileReader();
    fileReader.onload = (upload) => {
      const base64String = upload.target?.result as string;
      set64Photos((prevState) => {
        const newPhotos = [...prevState, base64String];
        return newPhotos.slice(0, maxPhotos);
      });
    };
    fileReader.readAsDataURL(file);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    // Filter out non-image files
    const imageFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );

    setPhotos((prevPhotos) => {
      const newPhotos: File[] = [...imageFiles, ...prevPhotos];
      return newPhotos.slice(0, maxPhotos);
    });

    imageFiles.map((elem) => convertToBase64(elem));
  };

  // const handleSubmit = () => {
  //   // Create a FormData object to hold the files
  //   const formData = new FormData();
  //   photos.forEach((photo, index) => {
  //     formData.append(`photo_${index}`, photo);
  //   });
  // };

  return (
    <>
      <input
        type="file"
        id={id}
        accept="image/*"
        className="hidden"
        multiple // Allow multiple file selection
        onChange={handleFileChange}
      />
      <div className=" bg-white  outline-none font font-medium relative overflow-hidden text-center flex items-center justify-center">
        <div className="w-8 border-black_m border-b-2 border-r-2 rounded-b-md rounded-l-none hover:bg-gray-200">
          <span className="text-black_m  text-[20px] ">+</span>
          <label
            htmlFor={id}
            className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
          ></label>
        </div>
      </div>
    </>
  );
};

export default FormFileUploader;
