
interface Props {
    label:string
}

const CheckBox = ({label}:Props) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="text-black h-6 w-6 accent-gray-300 rounded-lg bg-white border-2  border-l-0 border-black focus:ring-0"
      />

      <label
        htmlFor="checked1"
        className="ms-2 text-sm font-medium text-black_m w-96"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
