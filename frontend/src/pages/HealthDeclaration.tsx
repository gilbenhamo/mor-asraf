import SectionHead from "../components/UI/SectionHead";
import { motion } from "framer-motion";
import SignatureCanvas from "react-signature-canvas";
import { SectionWrapper } from "../containers/SectionWrapper";
import TwoInputsGridContainer from "../containers/TwoInputsGridContainer";
import FormInputElement from "../components/UI/FormInputElement";
import DateInput from "../components/UI/DateInput";
import FormTextArea from "../components/UI/FormTextArea";
import CheckBox from "../components/UI/CheckBox";
import { healthDeclarationBoxs } from "../utils/constants";
import { useRef } from "react";
import { useSendHealthDeclarationFormMutation } from "../services/forms-api";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAttr } from "../redux/slice/health-declaration-reducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutePaths";

//TODO: Change the text area to not be always required
const HealthDeclaration = () => {
  const signatureRef = useRef(null);
  const [sendForm, {}] = useSendHealthDeclarationFormMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const state = useAppSelector((state) => state.health);

  const clearSignature = () => {
    (signatureRef as any).current.clear(); // Clear the signature canvas
  };

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
      name,
      phone,
      email,
      address,
      id,
      date1,
      checkboxes,
      medication,
      disease,
    } = state;
    if (!date1)
      Swal.fire({
        title: "Must enter date of birth",
        confirmButtonColor: "#28282B",
        icon: "info",
      });
    else {
      const signature = (signatureRef as any).current.toDataURL();
      const checkboxes_text = [];
      for (var i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i]) checkboxes_text.push(healthDeclarationBoxs[i]);
      }
      //todo:handle error after
      sendForm({
        name,
        phone,
        email,
        address,
        id,
        date1,
        disease,
        medication,
        checkboxes_text,
        signature,
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
              navigate(RoutePaths.HOME);
              setTimeout(() => {
                scrollTo(0, 0);
              }, 500);
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
    <div className="bg-white">
      <motion.div
        id="booking-israel"
        className="bg-white "
        initial={{
          y: 0,
          opacity: 0,
        }}
        animate={{
          y: 50,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 1.25,
            delay: 0.2,
          },
        }}
      >
        <SectionWrapper idName="booking-israel">
          <SectionHead headText={`Health Declaration`} />
          <div className=" xl:flex-row flex-col flex items-center justify-center gap-10 p-2 overflow-hidden">
            <div className="flex-[0.75] bg-white flex flex-col justify-center items-center">
              <form
                name="health-booking-form"
                method="POST"
                onSubmit={handleSubmit}
                className="sm:mt-12 flex flex-col justify-center items-center gap-8 xl:w-10/12 "
              >
                <TwoInputsGridContainer>
                  <FormInputElement
                    id="health-form-name"
                    name={"name"}
                    type={"text"}
                    placeholder="Name"
                    onChange={handleChange}
                  />
                  <FormInputElement
                    id="health-form-phone"
                    name={"phone"}
                    type={"tel"}
                    placeholder="Phone"
                    onChange={handleChange}
                  />
                </TwoInputsGridContainer>

                <TwoInputsGridContainer>
                  <FormInputElement
                    id="health-form-email"
                    name={"email"}
                    type={"email"}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <FormInputElement
                    id="health-form-country"
                    name={"address"}
                    type={"text"}
                    placeholder={"Address"}
                    onChange={handleChange}
                  />
                </TwoInputsGridContainer>

                <TwoInputsGridContainer>
                  <FormInputElement
                    id="health-form-id"
                    name={"id"}
                    type={"text"}
                    placeholder="ID Number"
                    onChange={handleChange}
                  />

                  <div className="mt-1 flex justify-start">
                    <DateInput
                      id={"health-form-date1"}
                      name={"date1"}
                      label="Date of birth"
                      onChange={handleDateChange}
                      allowPast
                      allowYearDropDown
                    />
                  </div>
                </TwoInputsGridContainer>

                <FormTextArea
                  id="health-form-disease"
                  name={"disease"}
                  rows={1}
                  placeholder={"Do you have any disease or sensitivity?"}
                  onChange={handleChange}
                />

                <FormTextArea
                  name={"medication"}
                  rows={1}
                  placeholder={"Do you take medication regularly?"}
                  id={"health-form-anything-else"}
                  onChange={handleChange}
                />

                {/*---------Check Box Elements----------*/}
                <div className="flex flex-col w-full gap-3 ">
                  {healthDeclarationBoxs.map((elem, index) => (
                    <CheckBox
                      key={index}
                      label={elem.text}
                      id={"health_checkbox_" + elem.id}
                      name={"health_checkbox_" + elem.id}
                      onChange={handleChange}
                    />
                  ))}
                  {/*---------Signature Element----------*/}
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row justify-between w-[20rem] items-center">
                      <div className="text-black_m">Your signature:</div>
                      <div
                        className="border-2 pr-2 pl-2 mt-2 mb-1 text-black_m cursor-pointer"
                        onClick={clearSignature}
                      >
                        X
                      </div>
                    </div>
                    <div className="border-2 w-[20rem] h-32">
                      <SignatureCanvas
                        ref={signatureRef}
                        penColor="black"
                        canvasProps={{ height: 120, width: 320 }}
                      />
                    </div>
                  </div>
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
            </div>
          </div>
        </SectionWrapper>
      </motion.div>
    </div>
  );
};

export default HealthDeclaration;
