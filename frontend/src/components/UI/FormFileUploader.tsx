const FormFileUploader = () => {
  return (
    <>
      <input
        required
        type="file"
        id="photoInput"
        accept="image/*"
        className="hidden" // Hide the default file input
      />
      <div className=" bg-white  outline-none font font-medium relative overflow-hidden text-center flex items-center justify-center">
        <div className="w-8 border-black_m border-b-2 border-r-2 rounded-b-md rounded-l-none hover:bg-gray-200">
          <span className="text-black_m  text-[20px] ">+</span>
          <label
            htmlFor="photoInput"
            className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0" // Make the label cover the entire button
          ></label>
        </div>
      </div>
    </>
  );
};

export default FormFileUploader;
