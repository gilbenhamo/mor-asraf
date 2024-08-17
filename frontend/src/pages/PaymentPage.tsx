import SectionHead from "../components/UI/SectionHead";
import { motion } from "framer-motion";
import { SectionWrapper } from "../containers/SectionWrapper";
import TwoInputsGridContainer from "../containers/TwoInputsGridContainer";
import FormInputElement from "../components/UI/FormInputElement";
import { useState } from "react";
import Swal from "sweetalert2";
import { useGetPaymentFrameMutation } from "../services/payment-api";
import FormSelectElement from "../components/UI/FormSelectElement";
import ThreeInputsGridContainer from "../containers/ThreeInputsGridContainer";
import CheckBox from "../components/UI/CheckBox";
import { ARTISTS, CURRENCIES, termsAndAgreements } from "../utils/constants";

interface Option {
  label: string;
  value: string | number;
}

const termsAndConditionsPopUp = () =>
  Swal.fire({
    title: "Terms & Conditions",
    html: termsAndAgreements,
    confirmButtonColor: "#28282b",
    customClass:{
      popup:'my-popup'
    }
  });

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    amount: 0,
  });
  const [selectedArtistOption, setSelectedArtistOption] = useState<
    Option | undefined
  >(undefined);

  const [selectedCurrencyOption, setSelectedCurrencyOption] = useState<
    Option | undefined
  >(undefined);

  const [conditions, setConditions] = useState(false);
  const [iframeSrc, setframeSrc] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sendForm, {}] = useGetPaymentFrameMutation();

  const handleConditionsCheckbox = (e: any) => {
    setConditions(e.target.checked);
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.amount) newErrors.amount = "Amount is required";
    else if (formData.amount <= 0)
      newErrors.amount = "Amount must be greater than 0";
    else if (isNaN(formData.amount))
      newErrors.amount = "Amount must be a number";

    if (!selectedArtistOption) newErrors.artist = "Artist must be selected";
    if (!selectedCurrencyOption)
      newErrors.currency = "Currency must be selected";

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
      console.log(newErrors);
      let errorStr = "";
      Object.values(newErrors).forEach((_) => {
        errorStr += "<li>" + _ + "</li>";
      });
      Swal.fire({
        title: "Something went wrong!",
        html: errorStr,
        confirmButtonColor: "#D61A3C",
        icon: "error",
      });
      return;
    }
    if (!conditions) {
      Swal.fire({
        text: "Must agree to Terms & Conditions!",
        confirmButtonColor: "#28282b",
        icon: "warning",
      });
      return;
    }
    const Items = [
      {
        CatalogNumber: 1,
        Quantity: 1,
        UnitPrice: formData.amount,
        Description: "General",
      },
    ];
    //wait to response
    sendForm({
      ...formData,
      Custom1: selectedArtistOption?.value,
      Currency: selectedCurrencyOption?.value,
      Items,
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
    <div className="bg-white pt-4">
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
          <div className=" xl:flex-row flex-col flex p-2 overflow-hidden xl:justify-center mt-2 min-h-svh">
            <div className="flex-[0.75] bg-white flex flex-col items-center">
              <motion.form
                name="health-booking-form"
                method="POST"
                onSubmit={handleSubmit}
                className="sm:mt-12 flex flex-col gap-10 xl:w-10/12 "
                style={
                  isOpen
                    ? {
                        opacity: 0.6,
                        pointerEvents: "none",
                        cursor: "not-allowed",
                      }
                    : {}
                }
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

                <ThreeInputsGridContainer>
                  <FormInputElement
                    id="payment-form-amount"
                    name={"amount"}
                    type={"number"}
                    placeholder="Amount"
                    min={1}
                    onKeyDown={(e) => {
                      if (e.key == "-") e.preventDefault();
                    }}
                    onChange={handleChange}
                  />

                  <FormSelectElement
                    id="payment-form-currency"
                    value={selectedCurrencyOption}
                    placeHolder={"Currency"}
                    options={CURRENCIES}
                    onChange={setSelectedCurrencyOption}
                  />

                  <FormSelectElement
                    id="payment-form-artist"
                    value={selectedArtistOption}
                    placeHolder={"Artist"}
                    options={ARTISTS}
                    onChange={setSelectedArtistOption}
                  />
                </ThreeInputsGridContainer>
                <div className="flex flex-row ">
                  <CheckBox
                    key={0}
                    label={""}
                    id={"conditions_checkbox"}
                    name={"conditions_checkbox_"}
                    onChange={handleConditionsCheckbox}
                  />
                  <div className="text-black_m text-sm">
                    I have read{" "}
                    <a
                      className="underline font-bold cursor-pointer"
                      onClick={termsAndConditionsPopUp}
                    >
                      Terms & Conditions
                    </a>
                  </div>
                </div>

                {!isOpen && (
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    type="submit"
                    className=" hover:bg-black_m hover:text-white_m py-2 px-2  w-fit text-black_m border-black_m border-2 font-bold shadow-md shadow-primary rounded-2xl"
                  >
                    {"Continue"}
                  </motion.button>
                )}
              </motion.form>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 900 : 0, opacity: isOpen ? 1 : 0 }}
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
