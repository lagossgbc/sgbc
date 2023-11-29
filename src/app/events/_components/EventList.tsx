"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import Card from "./Card";
import eventsData from "./eventsData";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Slider from "./Slider/Slider";

const EventList = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (e: any) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  if (isMobile) {
    return <Slider />;
  }

  return (
    <div className="md:w-3/5 flex flex-col items-center p-8 gap-16 mt-10 mb-16">
      {eventsData.map((event, i) => (
        <Card
          key={i}
          className="flex flex-col gap-4 items-center max-w-[250px] lg:flex-row"
        >
          <figure className="relative">
            <Image
              src={event.imageUrl}
              alt="Event Title"
              width={200}
              height={200}
              className="object-cover w-[300px] lg:max-w-[200px] shrink-0 rounded-t-xl lg:rounded-none "
            />
          </figure>
          <div className="text-base self-start flex flex-col gap-4 text-justify">
            <p>{event.info}</p>
            <p>
              {event.date} | {event.time}
            </p>
            <Link
              href="#"
              className="text-yellow-500 text-lg flex gap-4 items-center lg:ml-6 justify-center lg:justify-normal"
            >
              Learn More <BsArrowRight />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default EventList;
