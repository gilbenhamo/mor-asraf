import { motion } from "framer-motion";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { slideIn } from "../../utils/motion";
import SectionHead from "../UI/SectionHead";
import FormInputElement from "../UI/FormInputElement";
import FormTextArea from "../UI/FormTextArea";
import { useSendContactFormMutation } from "../../services/forms-api";

const Contact = () => {
  const [sendContactForm, {}] = useSendContactFormMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submited");
    //TODO: HANDLE REAL DATA
    const data = {
      name: "moris",
      email: "a@bcccc.com",
      subject: "asdasdasd",
      message: "zxcxczxcz",
    };
    sendContactForm(data);
  };
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
            onSubmit={handleSubmit}
            //data-netlify="true"
          >
            <FormInputElement
              name={"name"}
              type={"text"}
              placeholder={"Name"}
              id={"contact-name"}
              onChange={() => {}}
            />

            <FormInputElement
              name={"email"}
              type={"email"}
              placeholder={"Email"}
              id={"contact-email"}
              onChange={() => {}}
            />

            <FormInputElement
              name={"subject"}
              type={"subject"}
              placeholder={"Subject"}
              id={"contact-subject"}
              onChange={() => {}}
            />
            <FormTextArea
              name={"message"}
              rows={2}
              placeholder={"Message"}
              id={"contact-message"}
              onChange={() => {}}
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
