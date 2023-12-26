import { motion } from "framer-motion"
import { textVariant } from "../../utils/motion"
import { styles } from "../../utils/styles";

interface Props{
    headText:string;
    motionDelay?:number;
}

const SectionHead = ({headText,motionDelay}:Props) => {
  return (
    <motion.div variants={textVariant(motionDelay || 0.2)}>
    <h2 className={styles.sectionHeadText}>{headText}</h2>
  </motion.div>  )
}
export default SectionHead