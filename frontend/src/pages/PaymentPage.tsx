import SectionHead from "../components/UI/SectionHead";
import { motion } from "framer-motion";
import { SectionWrapper } from "../containers/SectionWrapper";
import TwoInputsGridContainer from "../containers/TwoInputsGridContainer";
import FormInputElement from "../components/UI/FormInputElement";
import { useState } from "react";
import Swal from "sweetalert2";
import { useGetPaymentFrameMutation } from "../services/payment-api";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    amount: 0,
    Custom1: "",
  });
  const [iframeSrc, setframeSrc] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [sendForm, {}] = useGetPaymentFrameMutation();

  const validate = () => {
    const newErrors: any = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.amount) newErrors.amount = "Amount is required";
    else if (isNaN(formData.amount))
      newErrors.amount = "Amount must be a number";

    return newErrors;
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log(newErrors);

      return;
    }
    //wait to response
    sendForm({
      formData,
    })
      .unwrap()
      .then((payload) => {
        console.log("get payment frame fulfilled", payload);
        setframeSrc(payload);
        setTimeout(() => setIsOpen(true), 1000);
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

    console.log("Allgood");
  };

  return (
    <div className="bg-white">
      <motion.div
        id="payment"
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
          <SectionHead headText={`Payment`} subText="checkout" />
          <div className=" xl:flex-row flex-col flex p-2 overflow-hidden justify-center min-h-svh">
            <div className="flex-[0.75] bg-white flex flex-col items-center">
              <form
                name="health-booking-form"
                method="POST"
                onSubmit={handleSubmit}
                className="sm:mt-12 flex flex-col gap-12 xl:w-10/12 "
              >
                <TwoInputsGridContainer>
                  <FormInputElement
                    id="payment-form-fname"
                    name={"firstName"}
                    type={"text"}
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                  <FormInputElement
                    id="payment-form-lname"
                    name={"lastName"}
                    type={"text"}
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </TwoInputsGridContainer>

                <TwoInputsGridContainer>
                  <FormInputElement
                    id="payment-form-email"
                    name={"email"}
                    type={"email"}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <FormInputElement
                    id="payment-form-phone"
                    name={"phone"}
                    type={"tel"}
                    placeholder="Phone"
                    onChange={handleChange}
                  />
                </TwoInputsGridContainer>

                <TwoInputsGridContainer>
                  <FormInputElement
                    id="payment-form-amount"
                    name={"amount"}
                    type={"number"}
                    placeholder="Amount"
                    onChange={handleChange}
                  />

                  {/* <FormSelectElement
                    id="payment-form-method"
                    name="Custom1"
                    options={[
                      { value: "Mor", label: "Mor" },
                      { value: "Guy", label: "Guy" },
                      { value: "Itay", label: "Itay" },
                    ]}
                    onChange={handleChange}
                  /> */}
                </TwoInputsGridContainer>

                {!isOpen && (
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    type="submit"
                    className="bg-gray_m hover:bg-black_m py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-2xl"
                  >
                    {"Continue"}
                  </motion.button>
                )}
              </form>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 840 : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="overflow-hidden w-full sm:w-10/12"
              >
                <iframe
                  className="pt-10 w-full h-full"
                  src={iframeSrc}
                  title="Payment Page"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </motion.div>
    </div>
  );
};

export default PaymentPage;
