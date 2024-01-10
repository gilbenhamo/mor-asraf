import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const items = ['','', 'A', 'F', 'B', 'C', 'D', 'B', 'C', 'D', ' '];

const ScrollingList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItemIndex, setVisibleItemIndex] = useState<number>(3);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const itemHeight = container.scrollHeight / items.length;
        const visibleItems = Math.ceil(container.clientHeight / itemHeight);
        const middleIndex = Math.floor(visibleItems / 2);
        const selectedIndex = Math.round(container.scrollTop / itemHeight) + middleIndex;

        setVisibleItemIndex(selectedIndex);
      }
    };

    const setInitialMiddleItem = () => {
      const middleIndex = Math.floor(items.length / 2);

      if (container) {
        container.scrollTop = middleIndex * (container.scrollHeight / items.length);
        handleScroll();
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      setInitialMiddleItem();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const itemStyle = {
    scrollSnapAlign: 'start',
  };

  return (
    <div
      ref={containerRef}
      className="overflow-y-scroll h-[400px] w-4/6 mx-auto"
      style={{
        scrollbarWidth: 'thin',
        scrollSnapType: 'y mandatory',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`text-black bg-blue-200 h-[100px] w-full flex items-center justify-center ${
            index === visibleItemIndex ? 'opacity-100' : 'opacity-50'
          }`}
          style={itemStyle}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollingList;
