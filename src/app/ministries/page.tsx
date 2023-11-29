import Button from "@/components/form/Button";

import MinistryData from "./_data";
import Image from "next/image";

import classes from "./Ministries.module.scss";
import Banner from "@/components/hero-banner";

export const metadata = {
  title: "SGBC Ministries",
};

const Ministries = () => {
  return (
    <div className="text-base">
      <div>
        <Banner
          imageUrl="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/ministries.webp"
          title="SGBC Ministries"
        />
        <figure className="absolute w-80 h-96 right-[5%] top-[380px] hidden lg:block">
          <Image
            src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/ministry-guys.webp"
            alt="Sovereign publication guys"
            fill
            className=""
          />
        </figure>
      </div>
      <section className="px-4 mx-auto my-20 max-w-5xl">
        {MinistryData.map((item, index) => (
          <article key={index}>
            <h2 className="text-center md:text-left text-3xl font-bold mt-10 first-of-type:max-w-lg">
              {item.section}
            </h2>
            {item?.intro?.map((intro, index) => (
              <p key={index} className={classes.Intro}>
                {intro}
              </p>
            ))}
            {item?.sub?.map((sub, index) => (
              <div key={index}>
                {sub?.title && (
                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    {sub.title}
                  </h3>
                )}
                {sub?.details && (
                  <div>
                    {sub.details.map((detail, index) => (
                      <p key={index} className="text-justify  mb-4">
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
                {sub?.sub &&
                  sub.sub.map((inner, index) => (
                    <div key={index} className="ml-2 lg:ml-16">
                      <h4 className="text-lg font-semibold my-2">
                        {inner?.title}
                      </h4>
                      <p>{inner?.preface}</p>
                      <p className="my-2">{inner?.lead}</p>

                      {inner?.list.length > 0 && (
                        <ul className="mb-4">
                          {inner.list.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 ml-2 before:content-[''] before:w-1 before:h-1 before:inline-block before:rounded-full before:bg-black"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                {sub?.href && (
                  <Button href={sub.href} className="max-w-max -mt-1">
                    Learn more
                  </Button>
                )}
              </div>
            ))}
          </article>
        ))}
      </section>
    </div>
  );
};

export default Ministries;
