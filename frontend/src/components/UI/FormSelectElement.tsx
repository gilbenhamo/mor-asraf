import { useState } from "react";

interface selectProps {
  id: string;
  placeHolder?: string;
  label?: string;
  // options: string[];
  options: { label: string; value: number | string }[];
  value?: { label: string; value: number | string };
  onChange: (e: { label: string; value: string | number }) => void;
}

const FormSelectElement = ({
  options,
  value,
  placeHolder,
  onChange,
}: selectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: { label: string; value: number | string }) => {
    setIsOpen(false);
    onChange(option); // Callback to parent component
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full border-b-2 border-black_m shadow-sm pl-4 py-2  bg-white font-medium text-black_m hover:bg-gray-50 focus:outline-none"
          onClick={toggleDropdown}
        >
          {value?.label || <p className="text-gray_m">{placeHolder}</p>}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-36 sm:w-40 md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <button
                key={index}
                className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormSelectElement;
