interface Props {
    name: string;
    rows: number;
    //value: string | number;
    label:string;
    //onChnage: (event:any) => void;
    placeholder: string;
  }
  
  const FormInputElement = ({
    name,
    rows,
    //value,
    //onChnage,
    placeholder,
    label
  }: Props) => {
    return (
      <label className="flex flex-col md:w-6/12 w-full lg:w-7/12">
        <span className="text-black_m font-medium">{label}</span>
        <textarea
        required
        rows={rows}
          name={name}
          //value={value}
          //onChange={onChnage}
          placeholder={placeholder}
          className="text-black_m bg-white py-2 px-6 placeholder:text-gray_m rounded-lg outline-none border-b-4 border-black_m font-medium"
        />
      </label>
    );
  };
  
  export default FormInputElement;
  