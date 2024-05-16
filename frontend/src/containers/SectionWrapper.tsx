import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../utils/styles";

export const SectionWrapper = (
  { children ,idName}: sectionWrapperProps
) => {
  return (
    <motion.section
      variants={staggerContainer(true)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`${styles.padding}  max-w-7xl mx-auto relative z-auto bg-white`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};
