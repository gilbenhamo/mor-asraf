import TimeLineItem from "./TimeLineItem";
import { geustSpotsData } from "../../utils/constants";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const items = geustSpotsData;

const TimeLine = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItemIndex, setVisibleItemIndex] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const itemHeight = container.scrollHeight / items.length;
        const visibleItems = Math.ceil(container.clientHeight / itemHeight);
        const middleIndex = Math.floor(visibleItems / 2);
        const selectedIndex =
          Math.round(container.scrollTop / itemHeight) + middleIndex;

        setVisibleItemIndex(selectedIndex);
      }
    };

    const setInitialMiddleItem = () => {
      let startingIndex = items.findIndex(
        (item) => item.endDate! > new Date()
      );
      startingIndex = startingIndex === -1 ? items.length : startingIndex;
      if (container) {
        container.scrollTop = startingIndex * 60;
        handleScroll();
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      setInitialMiddleItem();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className="no-scrollbar overflow-y-scroll h-[400px] mx-auto"
      style={{
        scrollbarWidth: "thin",
        scrollSnapType: "y mandatory",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
        scrollBehavior: "smooth",
      }}
    >
      {geustSpotsData.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            opacity:
              index === visibleItemIndex
                ? 1
                : index === visibleItemIndex - 1 ||
                  index === visibleItemIndex + 1
                ? 0.5
                : 0.25,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
          }}
          style={{ scrollSnapAlign: "start" }}
        >
          {item.location !== "" ? (
            <TimeLineItem
              headline={item.location}
              subHeadline={item.studio}
              startDate={item.startDate!}
              endDate={item.endDate!}
            />
          ) : (
            <div className="h-[100px]"></div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default TimeLine;
