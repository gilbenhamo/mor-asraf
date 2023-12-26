interface Props {
  name: string;
  type: string;
  //value: string | number;
  label: string;
  //onChnage: (event:any) => void;
  placeholder: string;
}

const FormInputElement = ({
  name,
  type,
  //value,
  //onChnage,
  placeholder,
  label,
}: Props) => {
  return (
    <label className="flex flex-col md:w-6/12 w-full lg:w-7/12">
      <input
        required
        type={type}
        name={name}
        //value={value}
        //onChange={onChnage}
        placeholder={label}
        className="text-black_m bg-white py-2 px-6 placeholder:text-gray_m border-black_m border-b-2 outline-none font font-medium"
      />
    </label>
  );
};

export default FormInputElement;
