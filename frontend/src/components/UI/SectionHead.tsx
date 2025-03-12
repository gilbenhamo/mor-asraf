import { motion } from "framer-motion"
import { textVariant } from "../../utils/motion"
import { styles } from "../../utils/styles";

interface Props{
    headText:string;
    motionDelay?:number;
    subText?:string;
    withMargin?:string;
}

const SectionHead = ({headText,motionDelay,subText,withMargin}:Props) => {
  return (
    <motion.div variants={textVariant(motionDelay || 0.2)}>
    <p className={styles.sectionSubText}>{subText}</p>
    <h2 className={`${styles.sectionHeadText} ${withMargin || ""}`.trim()}>{headText}</h2>
  </motion.div>  )
}
export default SectionHead
