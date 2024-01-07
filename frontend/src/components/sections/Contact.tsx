import { motion } from "framer-motion";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { slideIn } from "../../utils/motion";
import SectionHead from "../UI/SectionHead";
import FormInputElement from "../UI/FormInputElement";
import FormTextArea from "../UI/FormTextArea";

const Contact = () => {
  return (
    <SectionWrapper idName="contact">
      <SectionHead headText={"Contact Us."} />
      <div className=" xl:flex-row flex-col flex justify-center gap-10 overflow-hidden mb-10">
        <motion.div
          variants={slideIn("down", "spring", 0.2, 1)}
          className="flex-[0.75] bg-white  flex justify-center items-center"
        >
          <form
            name="contactV2"
            method="POST"
            className="mt-12 flex flex-col gap-8 items-center xs:w-7/12 w-10/12"
            //data-netlify="true"
          >
            <FormInputElement
              name={"name"}
              type={"text"}
              placeholder={"Name"}
              id={"contact-name"}
            />

            <FormInputElement
              name={"email"}
              type={"email"}
              placeholder={"Email"}
              id={"contact-email"}
            />

            <FormInputElement
              name={"subject"}
              type={"subject"}
              placeholder={"Subject"}
              id={"contact-subject"}
            />
            <FormTextArea
              name={"message"}
              rows={2}
              placeholder={"Message"}
              id={"contact-message"}
            />
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

export default Contact;
