import { useState } from "react";
import { styles } from "../../../utils/styles";
import { motion } from "framer-motion";
import { navLinks } from "../../../utils/constants";
import { Twirl } from "hamburger-react";
import { linksVariants } from "../../../utils/motion";
import { logo } from "../../../assets";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex h-20 items-center py-2 fixed top-0 z-20 bg-white`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.a
          variants={linksVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center gap-2 cursor-pointer"
          href="/#"
        >
          <img src={logo} alt="logo" className="size-24 object-contain" />
          {/* <motion.p
            className={`${styles.linksStyle} text-black_m text-[30px] font-serif font-extrabold z-10`}
          >
            Mor Asraf
          </motion.p> */}

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
              {/* <Link to={`/#${link.id}`}>{link.title}</Link> */}

              <a href={`/#${link.id}`}> {link.title} </a>
            </motion.li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Twirl rounded toggled={isOpen} toggle={setOpen} color="#28282B" />
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
