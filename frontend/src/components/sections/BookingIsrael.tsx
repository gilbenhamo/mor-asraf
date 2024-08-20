import { motion } from "framer-motion";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { slideFadeIn } from "../../utils/motion";
import SectionHead from "../UI/SectionHead";
import FormInputElement from "../UI/FormInputElement";
import FormTextArea from "../UI/FormTextArea";
import DateInput from "../UI/DateInput";
import CheckBox from "../UI/CheckBox";
import TwoInputsGridContainer from "../../containers/TwoInputsGridContainer";
import FormFileUploader from "../UI/FormFileUploader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { init, setAttr } from "../../redux/slice/booking-reducer";
import { useState } from "react";
import { useSendBookingFormMutation } from "../../services/forms-api";
import Swal from "sweetalert2";
interface Props {
  location?: string;
  date?: string;
  studio?: string;
}

//todo: check case that the file is not image
const BookingIsrael = ({ location, date, studio }: Props) => {
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
      Swal.fire({
        title: "Must choose at least one date",
        confirmButtonColor: "#28282B",
        icon: "info",
      });
    else if (
      !checkbox18 ||
      !checkboxOpenMinded ||
      !checkboxPart ||
      !checkboxReally
    )
      Swal.fire({
        title: "All checkbox must be checked",
        confirmButtonColor: "#28282B",
        icon: "info",
      });
    else {
      //handle error after
      sendBookingForm({
        ...state,
        refPhotos: referencePhotos64,
        bodyPhotos: bodyPhotos64,
        location,
        date,
        artist: "Mor"
      })
        .unwrap()
        .then((payload) => {
          console.log("contact fulfilled", payload);
          Swal.fire({
            title: "Booking request submited!",
            text: "We will be in touch!",
            confirmButtonColor: "#28282B",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(init());
              setBodyPhotos64([]);
              setReferencePhotos64([]);
            }
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "Something went wrong!",
            text: "Please try again later!",
            confirmButtonColor: "#D61A3C",
            icon: "error",
          });
          console.error("rejected", error);
        });
    }
  };

  return (
    <SectionWrapper idName="booking-israel2">
      <SectionHead
        headText={`${location ? location : "TLV"} Booking.`}
        subText={location ? `${date} - ${studio}` : ""}
      />
      <div className=" xl:flex-row flex-col flex items-center justify-center gap-10 p-2 overflow-hidden">
        <motion.div
          variants={slideFadeIn("down", "spring", 0.2, 1.5)}
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
                value={state.name}
              />
              <FormInputElement
                id="tlv-form-phone"
                name={"phone"}
                type={"tel"}
                placeholder="Phone"
                value={state.phone}
                onChange={handleChange}
              />
            </TwoInputsGridContainer>

            <TwoInputsGridContainer>
              <FormInputElement
                id="tlv-form-email"
                name={"email"}
                type={"email"}
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
              />
              <FormInputElement
                id="tlv-form-country"
                name={"country"}
                type={"text"}
                placeholder={"Country"}
                value={state.country}
                onChange={handleChange}
              />
            </TwoInputsGridContainer>

            <FormTextArea
              id="tlv-form-subject"
              label={"Subject"}
              name={"subject"}
              rows={1}
              value={state.subject}
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
                  value={state.reference}
                  onChange={handleChange}
                />
              </div>
              <div className="w-2/12 flex justify-end items-end">
                <FormFileUploader
                  maxPhotos={4}
                  id={"referencePhotos"}
                  setPhotos64={setReferencePhotos64}
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-end items-start gap-2">
              {/* Display uploaded photos */}
              {referencePhotos64.map((photo, index) => (
                <motion.img
                  className="size-20 object-contain"
                  whileHover={{ scale: 3, zIndex: 40 }}
                  key={index}
                  src={photo}
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
                  value={state.bodyPart}
                  onChange={handleChange}
                />
              </div>
              <div className="w-2/12 flex justify-end items-end">
                <FormFileUploader
                  maxPhotos={4}
                  id={"bodyPhotos"}
                  setPhotos64={setBodyPhotos64}
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-end items-start gap-2">
              {/* Display uploaded photos */}
              {bodyPhotos64.map((photo, index) => (
                <motion.img
                  className="size-20 object-contain"
                  whileHover={{ scale: 3, zIndex: 40 }}
                  key={index}
                  src={photo}
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
              value={state.anythingElse}
              onChange={handleChange}
            />

            {/*---------Check Box Elements----------*/}
            <div className="flex flex-col w-full gap-2 ">
              <CheckBox
                label="I'm over 18"
                id="18-checkbox"
                name="checkbox18"
                isChecked={state.checkbox18}
                onChange={handleChange}
              />
              <CheckBox
                label="I know my part in the process will be the idea \ story behind it, final drawing\design will be Mor's part."
                id="part-checkbox"
                name="checkboxPart"
                isChecked={state.checkboxPart}
                onChange={handleChange}
              />
              <CheckBox
                label="I'm open minded."
                id="minded-checkbox"
                name="checkboxOpenMinded"
                isChecked={state.checkboxOpenMinded}
                onChange={handleChange}
              />
              <CheckBox
                label="I really am."
                id="really-checkbox"
                name="checkboxReally"
                isChecked={state.checkboxReally}
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
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default BookingIsrael;
