import { Variants } from "framer-motion";

export const linksVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
export const slideFadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,

      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeIn",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: boolean,
  delayChildren: number = 0,
): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerChildren ? 1 : 0,
      delayChildren,
    },
  },
});

// export const while_hover_repeat: any = {
//   scale: [1, 1.05],
//   transition: {
//     duration: 1,
//     repeat: Infinity,
//     repeatType: "mirror",
//   },
// };

export const staggerContainer2 = () => {
  return {
    hidden: {},
    show: {
      transition: {
        delayChildren: 2,
        duration: 2,
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };
};

export const staggerChildren = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};
