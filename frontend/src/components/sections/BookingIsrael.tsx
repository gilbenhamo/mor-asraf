import { motion } from "framer-motion";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { slideIn } from "../../utils/motion";
import SectionHead from "../UI/SectionHead";
import FormInputElement from "../UI/FormInputElement";
import FormTextArea from "../UI/FormTextArea";
import DateInput from "../UI/DateInput";
import CheckBox from "../UI/CheckBox";

const BookingIsrael = () => {
  //   const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  //   const handleDateChange = (date: Date | null) => {
  //     console.log(date?.toString());
  //     setSelectedDate(date);
  //     if (date) setSelectedDates([...selectedDates, date]);
  //   };
  return (
    <SectionWrapper idName="contact">
      <div className=" xl:flex-row flex-col flex items-center justify-center gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("down", "spring", 0.2, 1)}
          className="flex-[0.75] bg-white p-8 rounded-2xl"
        >
          <SectionHead
            pText={"Get your appointment"}
            headText={"TLV Booking."}
          />
          {/* <//</div>EmailForm /> */}
          <form
            name="contactV2"
            method="POST"
            className="mt-12 flex flex-col gap-8 items-center"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contactV2" />

            <div className="flex flex-row gap-8">
              <FormInputElement
                label={"Name"}
                name={"name"}
                type={"text"}
                // value={dataEntered.name}
                // onChnage={onChangeHandler}
                placeholder={"What's your full name?"}
              />
              <FormInputElement
                label={"Phone"}
                name={"phone"}
                type={"tel"}
                // value={dataEntered.email}
                // onChnage={onChangeHandler}
                placeholder={"e.g. +972 50-1234567"}
              />
            </div>
            <div className="flex flex-row gap-8">
              <FormInputElement
                label={"Email"}
                name={"email"}
                type={"email"}
                // value={dataEntered.email}
                // onChnage={onChangeHandler}
                placeholder={"What's your email?"}
              />
              <FormInputElement
                label={"Country"}
                name={"country"}
                type={"text"}
                // value={dataEntered.name}
                // onChnage={onChangeHandler}
                placeholder={"Where are you from?"}
              />
            </div>

            <FormTextArea
              label={"Subject"}
              name={"subject"}
              rows={2}
              // value={dataEntered.email}
              // onChnage={onChangeHandler}
              placeholder={
                "A story/idea/concept that you would like to express in the tattoo"
              }
            />
            <div className="flex gap-8">
              <FormTextArea
                label={"Reference"}
                name={"reference"}
                rows={2}
                // value={dataEntered.email}
                // onChnage={onChangeHandler}
                placeholder={"Links for references / my works that you like"}
              />
              <label className="flex flex-col items-center justify-center">
                <span className="text-black_m font-medium mb-2">
                  {"Add up 5 photos"}
                </span>
                <input
                  required
                  type="file"
                  id="photoInput"
                  accept="image/*"
                  className="hidden" // Hide the default file input
                  // className="w-48 text-black_m bg-white py-2 px-6 placeholder:text-gray_m rounded-md border-black_m border-b-4 outline-none font font-medium"
                />
                <div className="w-52 bg-white  outline-none font font-medium relative overflow-hidden text-center flex items-center justify-center">
                  <div className="w-16 p-[5px] rounded-lg border-black_m border-4 border-t-0 hover:bg-gray-200">
                    <span className="text-black_m font-mono text-[20px] font-semibold">
                      +
                    </span>
                    <label
                      htmlFor="photoInput"
                      className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0" // Make the label cover the entire button
                    ></label>
                  </div>
                </div>
              </label>
            </div>

            <div className="flex flex-row gap-8">
              <FormInputElement
                label={"Body part"}
                name={"body-part"}
                type={"text"}
                // value={dataEntered.email}
                // onChnage={onChangeHandler}
                placeholder={"Preferred body-part?"}
              />
              <label className="flex flex-col items-center justify-center">
                <span className="text-black_m font-medium mb-2">
                  {"Add up to 3 photos"}
                </span>
                <input
                  required
                  type="file"
                  id="photoInput"
                  accept="image/*"
                  className="hidden" // Hide the default file input
                  // className="w-48 text-black_m bg-white py-2 px-6 placeholder:text-gray_m rounded-md border-black_m border-b-4 outline-none font font-medium"
                />
                <div className="w-52 bg-white  outline-none font font-medium relative overflow-hidden text-center flex items-center justify-center">
                  <div className="w-16 p-[5px] rounded-lg border-black_m border-4 border-t-0 hover:bg-gray-200">
                    <span className="text-black_m font-mono text-[20px] font-semibold">
                      +
                    </span>
                    <label
                      htmlFor="photoInput"
                      className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0" // Make the label cover the entire button
                    ></label>
                  </div>
                </div>
              </label>
              {/* <label className="flex flex-col md:w-6/12 w-full lg:w-7/12">
                <span className="text-black_m font-medium mb-2">
                  {"Select up to 4 dates"}
                </span>
                <input
                  type="file"
                  id="photoInput"
                  accept="image/*"
                  className="text-black_m md:w-6/12 w-full lg:w-7/12 bg-white py-2 px-6 placeholder:text-gray_m rounded-md border-black_m border-b-4 outline-none font font-medium"
                />
              </label> */}
              {/* <FormInputElement
                label={"Body-part photos"}
                name={"body-part-photos"}
                type={"text"}
                // value={dataEntered.name}
                // onChnage={onChangeHandler}
                placeholder={"Body part images (up to 3 images)"}
              /> */}
            </div>
            <div className="flex flex-col md:w-6/12 w-full lg:w-7/12">
              <span className="text-black_m font-medium mb-2">
                {"Select up to 4 dates"}
              </span>
              <div className="grid grid-cols-2 gap-x-4">
                <DateInput label="Date #1" />
                <DateInput label="Date #2" />
                <DateInput label="Date #3" />
                <DateInput label="Date #4" />
              </div>
            </div>
            <FormTextArea
              label={"Anything else?"}
              name={"reference"}
              rows={1}
              // value={dataEntered.email}
              // onChnage={onChangeHandler}
              placeholder={"Extra things i need to know?!"}
            />
            <div className="flex flex-col gap-2 items-start justify-start ">
              <CheckBox label="I'm over 18" />
              <CheckBox label="I know my part in the process will be the idea\story behind it, final drawing\design will be Mor's part." />
              <CheckBox label="I'm open minded." />
              <CheckBox label="I really am." />
            </div>

            <label className="md:w-6/12 w-full lg:w-7/12"></label>
            {/* <div className="flex flex-row">
                {selectedDates.map((date,index) => (
                  <div key={ index} className="m-2">{date.toDateString()}</div>
                ))}
              </div> */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              type="submit"
              className="bg-gray_m hover:bg-black_m py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-2xl"
            >
              {"Send"}
              {/* {loading ? "Sending..." : "Send"} */}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default BookingIsrael;
