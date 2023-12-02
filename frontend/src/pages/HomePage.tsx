import { motion } from "framer-motion";
import { HomeContainer } from "../containers/HomeContainer";

export const HomePage = () => {
  return (
    <HomeContainer>
      <motion.p whileHover={{ scale: 1.3 }} className=" text-black">
        Vite and React logos to learn more
      </motion.p>
    </HomeContainer>
  );
};
