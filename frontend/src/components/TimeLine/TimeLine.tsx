import TimeLineItem from "./TimeLineItem";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useGetAllGuestSpotsQuery } from "../../services/details-api";

// interface QueryResult {
//   data: GuestSpotType[]; // Assuming useGetAllGuestSpotsQuery returns an array of GuestSpot objects
//   isError: boolean;
//   isLoading: boolean;
// }

const TimeLine = () => {
  const { data, isError, isLoading } = useGetAllGuestSpotsQuery(undefined);

  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItemIndex, setVisibleItemIndex] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const itemHeight = container.scrollHeight / data.length;
        const visibleItems = Math.ceil(container.clientHeight / itemHeight);
        const middleIndex = Math.floor(visibleItems / 2);
        const selectedIndex =
          Math.round(container.scrollTop / itemHeight) + middleIndex;

        setVisibleItemIndex(selectedIndex);
      }
    };

    const setInitialMiddleItem = () => {
      let startingIndex = data.findIndex(
        (item: any) => new Date(item.endDate!) > new Date()
      );
      startingIndex = startingIndex === -1 ? data.length : startingIndex;

      if (container) {
        const itemHeight = container.scrollHeight / data.length;
        const middleIndex = Math.floor(
          container.clientHeight / (2 * itemHeight)
        );
        container.scrollTop =
          startingIndex * itemHeight - middleIndex * itemHeight;
        handleScroll();
      }
    };

    if (container && data) {
      container.addEventListener("scroll", handleScroll);
      setInitialMiddleItem();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [data]);
  return (
    <div
      ref={containerRef}
      className="no-scrollbar overflow-y-scroll h-[400px] mx-auto"
      style={{
        scrollSnapType: "y mandatory",
        WebkitOverflowScrolling: "touch",
        scrollBehavior: "smooth",
      }}
    >
      {isLoading ? (
        <div> Loading... </div>
      ) : isError ? (
        <div> ERROR </div>
      ) : (
        data.map((item: any, index: number) => (
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
                _id={item._id}
                headline={item.location}
                subHeadline={item.studio}
                startDate={new Date(item.startDate!)}
                endDate={new Date(item.endDate!)}
              />
            ) : (
              <div className="h-[100px]"></div>
            )}
          </motion.div>
        ))
      )}
    </div>
  );
};

export default TimeLine;
