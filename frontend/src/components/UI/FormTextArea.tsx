import { TextareaHTMLAttributes } from "react";
interface textAreadProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  value?: string | number;
}

const FormInputElement = ({ label, ...rest }: textAreadProps) => {
  return (
    <label className="flex flex-col w-full ">
      <span className="text-black_m font-medium">{label}</span>
      <textarea
        required
        {...rest}
        className="text-black_m bg-white py-2 px-6 placeholder:text-gray_m  outline-none border-b-2 border-black_m font-medium rounded-none"
      />
    </label>
  );
};

export default FormInputElement;
