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
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAttr } from "../../redux/slice/booking-reducer";
import { useState } from "react";
import { useSendBookingFormMutation } from "../../services/forms-api";

const BookingIsrael = () => {
  const [referencePhotos, setReferencePhotos] = useState<File[]>([]);
  const [bodyPhotos, setBodyPhotos] = useState<File[]>([]);
  const [referencePhotos64, setReferencePhotos64] = useState<string[]>([]);
  const [bodyPhotos64, setBodyPhotos64] = useState<string[]>([]);
  const [sendBookingForm, {}] = useSendBookingFormMutation();

  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.booking);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    dispatch(setAttr({ attr: name, value: newValue }));
  };

  const handleDateChange = (value: string, name: string) => {
    dispatch(setAttr({ attr: name, value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const {
      date1,
      date2,
      date3,
      date4,
      checkbox18,
      checkboxOpenMinded,
      checkboxPart,
      checkboxReally,
    } = state;
    if (!date1 && !date2 && !date3 && !date4)
      console.log("Must choose at least one date");
    else if (
      !checkbox18 ||
      !checkboxOpenMinded ||
      !checkboxPart ||
      !checkboxReally
    )
      console.log("All checkbox must be checked");
    else {
      //handle error after
      sendBookingForm({
        ...state,
        refPhotos: referencePhotos64,
        bodyPhotos: bodyPhotos64,
      })
        .unwrap()
        .then((payload) => console.log("fulfilled", payload))
        .catch((error) => console.error("rejected", error));
    }
  };

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
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col justify-center items-center gap-8 xl:w-10/12 "
          >
            {/* <input type="hidden" name="form-name" value="tlv-booking-form" /> */}
            <TwoInputsGridContainer>
              <FormInputElement
                id="tlv-form-name"
                name={"name"}
                type={"text"}
                placeholder="Name"
                onChange={handleChange}
              />
              <FormInputElement
                id="tlv-form-phone"
                name={"phone"}
                type={"tel"}
                placeholder="Phone"
                onChange={handleChange}
              />
            </TwoInputsGridContainer>

            <TwoInputsGridContainer>
              <FormInputElement
                id="tlv-form-email"
                name={"email"}
                type={"email"}
                placeholder="Email"
                onChange={handleChange}
              />
              <FormInputElement
                id="tlv-form-country"
                name={"country"}
                type={"text"}
                placeholder={"Country"}
                onChange={handleChange}
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
              onChange={handleChange}
            />
            <div className="flex flex-row w-full">
              <div className="w-10/12">
                <FormTextArea
                  id="tlv-form-reference"
                  label={"Reference"}
                  name={"reference"}
                  rows={1}
                  placeholder={"Links for references / my works that you like"}
                  onChange={handleChange}
                />
              </div>
              <div className="w-2/12 flex justify-end items-end">
                <FormFileUploader
                  maxPhotos={4}
                  photos={referencePhotos}
                  id={"referencePhotos"}
                  setPhotos={setReferencePhotos}
                  set64Photos={setReferencePhotos64}
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-end items-start gap-2">
              {/* Display uploaded photos */}
              {referencePhotos.map((photo, index) => (
                <motion.img
                  className="size-20 object-contain"
                  whileHover={{ scale: 3, zIndex: 40 }}
                  key={index}
                  src={URL.createObjectURL(photo)}
                  alt={`Photo ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex flex-row w-full">
              <div className="w-10/12">
                <FormInputElement
                  id="tlv-form-bodypart"
                  //label={"Body part"}
                  name={"bodyPart"}
                  type={"text"}
                  placeholder={"Preferred body-part?"}
                  onChange={handleChange}
                />
              </div>
              <div className="w-2/12 flex justify-end items-end">
                <FormFileUploader
                  maxPhotos={4}
                  id={"bodyPhotos"}
                  photos={bodyPhotos}
                  setPhotos={setBodyPhotos}
                  set64Photos={setBodyPhotos64}
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-end items-start gap-2">
              {/* Display uploaded photos */}
              {bodyPhotos.map((photo, index) => (
                <motion.img
                  className="size-20 object-contain"
                  whileHover={{ scale: 3, zIndex: 40 }}
                  key={index}
                  src={URL.createObjectURL(photo)}
                  alt={`Photo ${index + 1}`}
                />
              ))}
            </div>

            {/*---------Date Elements----------*/}
            <div className="flex flex-col w-full">
              <span className="text-black_m font-medium mb-2">
                {"Select 4 optional dates"}
              </span>
              <div className="grid grid-cols-2 gap-x-4">
                <DateInput
                  id={"tlv-form-date1"}
                  name={"date1"}
                  label="Date #1"
                  onChange={handleDateChange}
                />
                <DateInput
                  id={"tlv-form-date2"}
                  name={"date2"}
                  label="Date #2"
                  onChange={handleDateChange}
                />
                <DateInput
                  id={"tlv-form-date3"}
                  name={"date3"}
                  label="Date #3"
                  onChange={handleDateChange}
                />
                <DateInput
                  id={"tlv-form-date4"}
                  name={"date4"}
                  label="Date #4"
                  onChange={handleDateChange}
                />
              </div>
            </div>

            <FormTextArea
              label={"Anything else?"}
              name={"anythingElse"}
              rows={1}
              placeholder={"Extra things i need to know?!"}
              id={"tlv-form-anything-else"}
              onChange={handleChange}
            />

            {/*---------Check Box Elements----------*/}
            <div className="flex flex-col w-full gap-2 ">
              <CheckBox
                label="I'm over 18"
                id="18-checkbox"
                name="checkbox18"
                onChange={handleChange}
              />
              <CheckBox
                label="I know my part in the process will be the idea \ story behind it, final drawing\design will be Mor's part."
                id="part-checkbox"
                name="checkboxPart"
                onChange={handleChange}
              />
              <CheckBox
                label="I'm open minded."
                id="minded-checkbox"
                name="checkboxOpenMinded"
                onChange={handleChange}
              />
              <CheckBox
                label="I really am."
                id="really-checkbox"
                name="checkboxReally"
                onChange={handleChange}
              />
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
