interface Props {
  label: string;
  id: string;
  name: string;
  onChange: (e: any) => void;
}

const CheckBox = ({ label, id, name, onChange }: Props) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        name={name}
        className="text-black h-6 w-6 accent-gray-300 rounded-lg bg-white border-2 border-l-0 border-black focus:ring-0 flex-shrink-0"
        onChange={onChange}
      />

      <label
        htmlFor={id}
        className="ms-2 text-xs sm:text-sm font-medium text-black_m flex-shrink"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
