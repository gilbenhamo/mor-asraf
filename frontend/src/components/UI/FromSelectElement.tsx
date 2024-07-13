import { SelectHTMLAttributes } from "react";

interface selectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: string;
  options: { value: string | number; label: string }[];
  value?: string | number;
  onChange: (e: any) => void;
}

const FormSelectElement = ({
  id,
  label,
  options,
  onChange,
  ...rest
}: selectProps) => {
  return (
    <label className="flex flex-col w-full">
      {label && <span className="text-black_m font-medium">{label}</span>}
      <select
        required
        onChange={onChange}
        id={id}
        {...rest}
        className="text-black_m bg-white py-2 mt-1 px-6 placeholder:text-gray_m border-black_m border-b-2 outline-none font-medium rounded-none"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default FormSelectElement;
