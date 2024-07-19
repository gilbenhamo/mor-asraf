import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="size-14 border-b-4  rounded-full animate-spin border-black_m"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      ></motion.div>
    </div>
  );
};

export default Spinner;
