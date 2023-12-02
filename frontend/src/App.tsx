import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <>
      <motion.p whileHover={{scale:1.3}} className=" text-black">the Vite and React logos to learn more</motion.p>
    </>
  );
}

export default App;
