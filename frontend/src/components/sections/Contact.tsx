import { motion } from "framer-motion";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { slideIn } from "../../utils/motion";
import SectionHead from "../UI/SectionHead";
import FormInputElement from "../UI/FormInputElement";
import FormTextArea from "../UI/FormTextArea";
import { useSendContactFormMutation } from "../../services/forms-api";
import Swal from "sweetalert2";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [sendContactForm, {}] = useSendContactFormMutation();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    sendContactForm(data)
      .unwrap()
      .then((payload) => {
        console.log("contact fulfilled", payload);
        Swal.fire({
          title: "Contact form submited!",
          text: "We will be in touch!",
          confirmButtonColor: "#28282B",
          icon: "success",
        });
        setFormData(initialState);
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
  };
  return (
    <SectionWrapper idName="contact">
      <SectionHead headText={"Contact."} />
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
              value={formData.name}
              id={"contact-name"}
              onChange={handleChange}
            />

            <FormInputElement
              name={"email"}
              type={"email"}
              placeholder={"Email"}
              value={formData.email}
              id={"contact-email"}
              onChange={handleChange}
            />

            <FormInputElement
              name={"subject"}
              type={"subject"}
              placeholder={"Subject"}
              value={formData.subject}
              id={"contact-subject"}
              onChange={handleChange}
            />
            <FormTextArea
              name={"message"}
              rows={2}
              placeholder={"Message"}
              value={formData.message}
              id={"contact-message"}
              onChange={handleChange}
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
