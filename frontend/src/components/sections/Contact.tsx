import { motion } from "framer-motion";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { slideIn } from "../../utils/motion";
import SectionHead from "../UI/SectionHead";
import FormInputElement from "../UI/FormInputElement";
import FormTextArea from "../UI/FormTextArea";

const Contact = () => {
  return (
    <SectionWrapper idName="contact">
      <div className=" xl:flex-row flex-col flex items-center justify-center gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("down", "spring", 0.2, 1)}
          className="flex-[0.75] bg-white p-8 rounded-2xl"
        >
          <SectionHead pText={"Get in touch"} headText={"Contact Us."} />
          {/* <//</div>EmailForm /> */}
          <form
            name="contactV2"
            method="POST"
            className="mt-12 flex flex-col gap-8 items-center"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contactV2" />

            <FormInputElement
              label={"Name"}
              name={"name"}
              type={"text"}
              // value={dataEntered.name}
              // onChnage={onChangeHandler}
              placeholder={"What's your name?"}
            />
            <FormInputElement
              label={"Email"}
              name={"email"}
              type={"email"}
              // value={dataEntered.email}
              // onChnage={onChangeHandler}
              placeholder={"What's your email?"}
            />
            <FormInputElement
              label={"Subject"}
              name={"subject"}
              type={"subject"}
              // value={dataEntered.email}
              // onChnage={onChangeHandler}
              placeholder={"What's the subject?"}
            />
            <FormTextArea
              label={"Your Message"}
              name={"message"}
              rows={2}
              // value={dataEntered.message}
              // onChnage={onChangeHandler}
              placeholder={"What do you want to say?"}
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{scale:1.1}}
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
