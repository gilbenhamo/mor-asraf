import { useState } from "react";
import { styles } from "../../../utils/styles";
import { motion } from "framer-motion";
// import { while_hover_repeat } from "../../../utils/motion";
import { navLinks } from "../../../utils/constants";
import { Twirl } from "hamburger-react";
import { logo } from "../../../assets";
import { linksVariants } from "../../../utils/motion";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-white border-b-2 border-black_m`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.a
          variants={linksVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center gap-2 cursor-pointer"
          href="/#"
        >
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          <p
            className={`${styles.linksStyle} text-gray_m text-[15px] font-bold md:block hidden italic`}
          >
            / MOR ASRAF&nbsp;
          </p>
        </motion.a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              variants={linksVariants}
              whileHover="hover"
              whileTap="tap"
              className={`${styles.linksStyle} ${
                active === link.title ? "text-black_m underline" : "text-gray_m"
              }`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title} </a>
            </motion.li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Twirl rounded toggled={isOpen} toggle={setOpen} />
          {/* <MobileNavLink
            isOpen={isOpen}
            active={active}
            setActive={setActive}
            setOpen={setOpen}
          /> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
