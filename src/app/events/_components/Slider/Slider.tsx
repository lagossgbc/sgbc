"use client";
import { useEffect, useState, useCallback } from "react";
import eventsData from "../eventsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slide from "./Slide";

const Slider = () => {
  const [Index, setIndex] = useState(0);

  const moveRight = useCallback(() => {
    setIndex((prev) => (Index === eventsData.length - 1 ? 0 : prev + 1));
  }, [Index]);
  const moveLeft = () => {
    setIndex((prev) => (Index === 0 ? eventsData.length - 1 : prev - 1));
  };

  useEffect(() => {
    // for auto change
    let slide = setInterval(() => {
      moveRight();
    }, 5000);

    return () => {
      clearInterval(slide);
    };
  }, [Index, moveRight]);

  return (
    <section className="relative z-50 pt-48 max-w-[300px] mx-auto">
      <div className="relative">
        {eventsData.length > 1 && (
          <>
            {" "}
            <FaChevronLeft
              className="absolute top-1/2 -translate-y-1/2 -left-10 text-4xl cursor-pointer text-yellow-500"
              onClick={() => moveLeft}
            />
            <FaChevronRight
              className="absolute top-1/2 -translate-y-1/2 -right-10 text-4xl cursor-pointer text-yellow-500"
              onClick={() => moveRight}
            />
          </>
        )}

        {eventsData.map((data, index) => (
          <Slide key={index} {...data} isActive={Index === index} />
        ))}
      </div>
    </section>
  );
};

export default Slider;
