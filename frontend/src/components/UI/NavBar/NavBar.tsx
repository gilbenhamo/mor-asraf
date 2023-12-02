import { useState } from "react";
import { styles } from "../../../utils/styles";
import { motion } from "framer-motion";
// import { while_hover_repeat } from "../../../utils/motion";
import { navLinks } from "../../../utils/constants";
import { Twirl } from "hamburger-react";
import { logo } from "../../../assets";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-white`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
        className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          <motion.p
            // whileHover={while_hover_repeat}
            className={`${styles.linksStyle} font-bold md:block hidden italic`}
          >
            / mor asraf&nbsp;
            {/* <span className="md:block hidden">| &nbsp;Software Engineer</span> */}
          </motion.p>
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              className={`${
                active === link.title ? "text-blue_p" : "text-secondary"
              } ${styles.linksStyle}`}
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
