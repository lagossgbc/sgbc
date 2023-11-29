"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { BsPlayFill } from "react-icons/bs";

import data from "./_data";

const AboutNav = () => {
  const path = usePathname();
  const [Active, setActive] = useState(path);

  return (
    <nav className="relative shrink-0">
      <div className="sticky top-4 hidden invisible pointer-events-none md:block md:visible md:pointer-events-auto">
        <ul>
          <h3 className="mb-4 font-semibold">
            Who We Are <br /> & What We Believe
          </h3>

          {data.map((item, i) => (
            <Link key={i} scroll={false} href={item.url}>
              <li
                className={`relative text-md font-normal cursor-pointer mt-2  pl-6 transition-all ${
                  Active === item.url ? "text-blue-600" : "text-blue-200"
                }`}
                onClick={() => setActive(item.url)}
              >
                {Active == item.url && (
                  <BsPlayFill className="text-yellow-400 absolute left-0 top-1" />
                )}{" "}
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <ul className="mb-14 md:mb-auto md:hidden md:pointer-events-none md:invisible flex flex-wrap justify-center relative">
        {data.map((item, index) => (
          <Link
            scroll={false}
            href={item.url}
            key={index}
            className="text-blue-400 font-semibold underline inline-block px-4 py-2"
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default AboutNav;
