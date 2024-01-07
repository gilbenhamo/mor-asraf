import { InputHTMLAttributes } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  label?: string;
  value?: string | number;
}

const FormInputElement = ({ id, label, type, ...rest }: inputProps) => {
  return (
    <label className="flex flex-col w-full ">
      {label && <span className="text-black_m font-medium">{label}</span>}
      <input
        required
        id={id}
        type={type}
        {...rest}
        className="text-black_m bg-white py-2 px-6 placeholder:text-gray_m border-black_m border-b-2 outline-none font-medium rounded-none"
      />
    </label>
  );
};

export default FormInputElement;
