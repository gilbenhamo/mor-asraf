import { motion } from "framer-motion";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { slideIn } from "../../utils/motion";
import SectionHead from "../UI/SectionHead";
import FormInputElement from "../UI/FormInputElement";
import FormTextArea from "../UI/FormTextArea";
import DateInput from "../UI/DateInput";
import CheckBox from "../UI/CheckBox";
import TwoInputsGridContainer from "../../containers/TwoInputsGridContainer";
import FormFileUploader from "../UI/FormFileUploader";

const BookingIsrael = () => {
  return (
    <SectionWrapper idName="booking-israel">
      <SectionHead headText={"TLV Booking."} />
      <div className=" xl:flex-row flex-col flex items-center justify-center gap-10 p-2 overflow-hidden">
        <motion.div
          variants={slideIn("down", "spring", 0.2, 1)}
          className="flex-[0.75] bg-white   flex flex-col justify-center items-center"
        >
          <form
            name="tlv-booking-form"
            method="POST"
            className="mt-12 flex flex-col justify-center items-center gap-8 xl:w-10/12 "
          >
            {/* <input type="hidden" name="form-name" value="tlv-booking-form" /> */}
            <TwoInputsGridContainer>
              <FormInputElement
                id="tlv-form-name"
                name={"name"}
                type={"text"}
                placeholder="Name"
              />
              <FormInputElement
                id="tlv-form-phone"
                name={"phone"}
                type={"tel"}
                placeholder="Phone"
              />
            </TwoInputsGridContainer>

            <TwoInputsGridContainer>
              <FormInputElement
                id="tlv-form-email"
                name={"email"}
                type={"email"}
                placeholder="Email"
              />
              <FormInputElement
                id="tlv-form-country"
                name={"country"}
                type={"text"}
                placeholder={"Country"}
              />
            </TwoInputsGridContainer>

            <FormTextArea
              id="tlv-form-subject"
              label={"Subject"}
              name={"subject"}
              rows={1}
              placeholder={
                "A story/idea/concept that you would like to express in the tattoo"
              }
            />
            <div className="flex flex-row w-full">
              <div className="w-10/12">
                <FormTextArea
                  id="tlv-form-reference"
                  label={"Reference"}
                  name={"reference"}
                  rows={1}
                  placeholder={"Links for references / my works that you like"}
                />
              </div>
              <div className="w-2/12 flex justify-end items-end">
                <FormFileUploader />
              </div>
            </div>

            <div className="flex flex-row w-full">
              <div className="w-10/12">
                <FormInputElement
                  id="tlv-form-bodypart"
                  //label={"Body part"}
                  name={"body-part"}
                  type={"text"}
                  placeholder={"Preferred body-part?"}
                />
              </div>
              <div className="w-2/12 flex justify-end items-end">
                <FormFileUploader />
              </div>
            </div>

            {/*---------Date Elements----------*/}
            <div className="flex flex-col w-full">
              <span className="text-black_m font-medium mb-2">
                {"Select 4 optional dates"}
              </span>
              <div className="grid grid-cols-2 gap-x-4">
                <DateInput id={"tlv-form-date1"} label="Date #1" />
                <DateInput id={"tlv-form-date2"} label="Date #2" />
                <DateInput id={"tlv-form-date3"} label="Date #3" />
                <DateInput id={"tlv-form-date4"} label="Date #4" />
              </div>
            </div>

            <FormTextArea
              label={"Anything else?"}
              name={"reference"}
              rows={1}
              placeholder={"Extra things i need to know?!"}
              id={"tlv-form-anything-else"}
            />

            {/*---------Check Box Elements----------*/}
            <div className="flex flex-col w-full gap-2 ">
              <CheckBox label="I'm over 18" id="18-checkbox" />
              <CheckBox
                label="I know my part in the process will be the idea \ story behind it, final drawing\design will be Mor's part."
                id="part-checkbox"
              />
              <CheckBox label="I'm open minded." id="minded-checkbox" />
              <CheckBox label="I really am." id="really-checkbox" />
            </div>

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
