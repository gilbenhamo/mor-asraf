import { motion } from "framer-motion";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { slideIn } from "../../utils/motion";
import SectionHead from "../UI/SectionHead";
import FormInputElement from "../UI/FormInputElement";
import FormTextArea from "../UI/FormTextArea";

const BookingIsrael = () => {
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

            <FormTextArea
              label={"Reference"}
              name={"reference"}
              rows={1}
              // value={dataEntered.email}
              // onChnage={onChangeHandler}
              placeholder={"Links for references / my works that you like"}
            />

            <div className="flex flex-row gap-8">
              <FormInputElement
                label={"Body part"}
                name={"body-part"}
                type={"text"}
                // value={dataEntered.email}
                // onChnage={onChangeHandler}
                placeholder={"Preferred body-part?"}
              />
              <FormInputElement
                label={"Body-part photos"}
                name={"body-part-photos"}
                type={"text"}
                // value={dataEntered.name}
                // onChnage={onChangeHandler}
                placeholder={"Body part images (up to 3 images)"}
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
