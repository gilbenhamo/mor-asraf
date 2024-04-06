import SectionHead from "../components/UI/SectionHead";
import { motion } from "framer-motion";
import { HomeContainer } from "../containers/HomeContainer";
import SignatureCanvas from "react-signature-canvas";
import { SectionWrapper } from "../containers/SectionWrapper";
import { slideIn } from "../utils/motion";
import TwoInputsGridContainer from "../containers/TwoInputsGridContainer";
import FormInputElement from "../components/UI/FormInputElement";
import DateInput from "../components/UI/DateInput";
import FormTextArea from "../components/UI/FormTextArea";
import CheckBox from "../components/UI/CheckBox";
import { healthDeclarationBoxs } from "../utils/constants";
import { useRef } from "react";

const HealthDeclaration = () => {
  const signatureRef = useRef(null);

  const clearSignature = () => {
    (signatureRef as any).current.clear(); // Clear the signature canvas
  };
  const saveSignature = () => {
    const signature = (signatureRef as any).current.toDataURL();
    // Do something with the signature, such as save it to state or send it to a server
    console.log(signature);
  };
  
  const handleChange = (e: any) => {};

  return (
    <div className="bg-white h-full mt-10">
      <SectionWrapper idName="booking-israel">
        <SectionHead headText={`Health Declaration`} />
        <div className=" xl:flex-row flex-col flex items-center justify-center gap-10 p-2 overflow-hidden">
          <motion.div
            variants={slideIn("down", "spring", 0.2, 1)}
            className="flex-[0.75] bg-white   flex flex-col justify-center items-center"
          >
            <form
              name="tlv-booking-form"
              method="POST"
              onSubmit={() => {}}
              className="mt-12 flex flex-col justify-center items-center gap-8 xl:w-10/12 "
            >
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
                  name={"address"}
                  type={"text"}
                  placeholder={"Address"}
                  onChange={handleChange}
                />
              </TwoInputsGridContainer>

              <TwoInputsGridContainer>
                <FormInputElement
                  id="tlv-form-name"
                  name={"id"}
                  type={"text"}
                  placeholder="ID Number"
                  onChange={handleChange}
                />

                <div className="mt-1 flex justify-start">
                  <DateInput
                    id={"tlv-form-date1"}
                    name={"date1"}
                    label="Date of birth"
                    onChange={handleChange}
                  />
                </div>
              </TwoInputsGridContainer>

              <FormTextArea
                id="tlv-form-subject"
                name={"subject"}
                rows={1}
                placeholder={"Do you have any disease or sensitivity?"}
                onChange={handleChange}
              />

              <FormTextArea
                name={"anythingElse"}
                rows={1}
                placeholder={"Do you take medication regularly?"}
                id={"tlv-form-anything-else"}
                onChange={handleChange}
              />

              {/*---------Check Box Elements----------*/}
              <div className="flex flex-col w-full gap-3 ">
                {healthDeclarationBoxs.map((elem, index) => (
                  <CheckBox
                    key={index}
                    label={elem.text}
                    id="18-checkbox"
                    name="checkbox18"
                    onChange={handleChange}
                  />
                ))}
                <div className="flex flex-col items-center">
                  <div className="flex flex-row justify-between w-[20rem] items-center">
                    <div className="text-black_m">Your signature:</div>
                    <div
                      className="border-2 pr-2 pl-2 mt-2 mb-1 text-black_m cursor-pointer"
                      onClick={saveSignature}
                    >
                      X
                    </div>
                  </div>
                  <div className="border-2 w-[20rem]">
                    <SignatureCanvas
                      ref={signatureRef}
                      penColor="green"
                      canvasProps={{ height: 100 }}
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
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HealthDeclaration;
