// DateInput.tsx
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi'; // You can replace this with your preferred icon library

interface DateInputProps {
  label: string;
  onChange?: (date: Date | null) => void;
}

const DateInput = ({ label, onChange }:DateInputProps) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);


  return (
    <div className="mb-4 flex items-center flex-col">
      <DatePicker
      showIcon
        selected={selectedDate}
        placeholderText={label}
        onChange={setSelectedDate}
        icon={<div className='text-black-200 pr-4'><FiCalendar size={20}  /></div>}
        dateFormat="dd/MM/yyyy"
        className=" text-center text-black_m placeholder:text-black_m px-4 py-2  outline-none border-b-2 border-r-2  border-black_m rounded-r-md rounded-t-none bg-white hover:bg-gray-400"
        popperPlacement="top-start" // Adjust the placement as needed
        minDate={today} // Disable past dates
      />
    </div>
  );
};



export default DateInput;
