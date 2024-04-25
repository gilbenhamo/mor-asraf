// DateInput.tsx
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi"; // You can replace this with your preferred icon library
import "./DateInput.css";
interface DateInputProps {
  label: string;
  id: string;
  name: string;
  allowPast?: boolean;
  allowYearDropDown?: boolean;
  onChange: (value: string, name: string) => void;
}

const DateInput = ({
  id,
  label,
  name,
  allowPast,
  allowYearDropDown,
  onChange,
}: DateInputProps) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (date: Date) => {
    const value = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setSelectedDate(date);
    onChange(value, name);
  };

  return (
    <div className="mb-4 flex items-center flex-col">
      <DatePicker
        onInputClick={() => setIsOpen(true)}
        onClickOutside={() => setIsOpen(false)}
        readOnly
        id={id}
        showIcon
        onSelect={() => setIsOpen(false)}
        onFocus={(e) => (e.target.readOnly = true)}
        selected={selectedDate}
        placeholderText={label}
        onChange={handleChange}
        icon={
          <div className="text-black-200 pr-4" onClick={() => setIsOpen(true)}>
            <FiCalendar size={20} />
          </div>
        }
        dateFormat="dd/MM/yyyy"
        className="w-11/12 sm:w-full text-center text-black_m placeholder:text-black_m px-4 py-2  outline-none border-b-2 border-r-2  border-black_m rounded-r-md rounded-t-none bg-white hover:bg-gray-400"
        popperPlacement="top-start" // Adjust the placement as needed
        minDate={allowPast ? undefined : today} // Disable past dates
        //   onKeyDown={(e) => {
        //     e.preventDefault();
        //  }}
        open={isOpen}
        //showFullMonthYearPicker
        showYearDropdown={allowYearDropDown}
        //handle mobile picker
      />
    </div>
  );
};

export default DateInput;
