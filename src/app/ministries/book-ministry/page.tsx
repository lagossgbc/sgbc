import Image from "next/image";
import { data, feature, partners } from "./_data";

import "../../ministries/bcm/no-scroll.css";
import Button from "@/components/form/Button";

import RecommendedBook from "./_components/recommended.webp";
import BookMinistryForm from "./_components/BookMinistryForm";
import Banner from "@/components/hero-banner";

import classes from "./BookMinistry.module.scss";

const BookMinistry = () => {
  return (
    <section className="relative">
      <Banner
        imageUrl="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/book-ministry.webp"
        title="Book Ministry"
      />
      <div className="px-4 max-w-4xl mx-auto">
        <div className="text-center my-20">
          <h2 className="text-3xl font-bold px-6 mb-8">About Us</h2>
          <p>
            The Book Ministry of Sovereign Grace Bible Church is responsible for
            ensuring the word of God and support for Christian living is
            channeled through physical and digital literature to the glory of
            God alone and for the growth and edification of the church. Our
            ministry is structured around these 4 areas:
          </p>
          <ul className="mt-20 flex gap-6 flex-wrap max-w-2xl items-center justify-center mx-auto">
            {data.map((item, i) => (
              <li
                key={i}
                className="flex flex-col gap-4 items-center justify-center rounded-3xl max-w-[300px] py-4 px-2 h-80"
                style={{ boxShadow: "rgba(0, 0, 0, 0.1) -1px 10px 19px" }}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={130}
                  height={130}
                />
                <h4 className="font-semibold text-xl">{item.title}</h4>
                <p className="text-sm">{item.p}</p>
              </li>
            ))}
          </ul>

          {/* Features */}
          <h2 className="text-2xl sm:text-3xl font-bold px-6 mt-20 mb-8">
            Featured Literature
          </h2>
          <ul className="flex gap-4 items-center flex-nowrap md:flex-wrap md:justify-center mx-auto overflow-x-auto whitespace-nowrap py-10 w-full max-w-max">
            {feature.map((item, i) => (
              <li key={i} className="relative shrink-0 max-w-ma">
                <Image
                  src={item.imageUrl}
                  alt="Feature"
                  width={150}
                  height={320}
                />
                <span className="absolute -top-6 right-2 bg-[#C90101] rounded-full w-12 h-12 font-bold text-sm flex items-center justify-center text-white tracking-tighter">
                  ₦ {item.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-2">
            To order for resources at your events, or purchase any of the books
            named above kindly call{" "}
            <a href="tel:+2349019623070" className="font-bold">
              +2349019623070
            </a>{" "}
            or send an email to{" "}
            <a
              href="mailto:sovereigngracepublications@gmail.com"
              className="font-bold"
            >
              sovereigngracepublications@gmail.com
            </a>
            .
          </p>

          {/* Partners */}
          <h2 className="text-2xl sm:text-3xl font-bold px-6 mt-20 mb-8">
            Our Partners
          </h2>
          <div className="flex gap-1 sm:gap-4 flex-col sm:flex-row items-center flex-nowrap sm:flex-wrap justify-center">
            {partners.map((item, i) => (
              <figure key={i} className="relative w-48 h-32 sm:w-36 sm:h-20">
                <Image
                  src={item}
                  alt="Partners"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </figure>
            ))}
          </div>

          {/* Monthly Recommendation */}
          <div className={classes.InnerContainer}>
            <h2 className="text-3xl font-bold">
              Monthly Recommended Resources
            </h2>
            <div className={classes.Div}>
              <h2 className="text-xl font-semibold mt-6">December</h2>
              <h3 className="text-[#00397F] text-2xl mb-4">
                Title: Pilgrim&apos;s Progress.
              </h3>
            </div>

            <div className={classes.Flexbox}>
              <div className={classes.pDiv}>
                <p className="text-black mb-6 text-justify">
                  “The Pilgrim’s Progress” is a Christian allegorical novel
                  written by John Bunyan and first published in 1678. It tells
                  the story of a character named Christian, who represents an
                  individual’s spiritual journey. The narrative is set in the
                  form of a dream in which Christian embarks on a perilous
                  pilgrimage from the City of Destruction of the Celestial City,
                  which symbolizes Heaven.
                </p>
                <p className="text-black mb-6 text-justify">
                  Throughout his journey, Christian encounters various
                  characters and situations that represent different aspects of
                  the Christian experience, including the Slough of Despond
                  (representing despair), the House Beautiful (representing
                  Christian fellowship), and the Delectable Mountains (
                  representing spiritual joys). He faces numerous trials and
                  temptations, personified by characters like Worldly Wiseman
                  and Giant Despair, which test his faith and resolve.
                </p>
                <p className="text-black mb-6 text-justify">
                  The story serves as a moral and spiritual guide, illustrating
                  the challenges and rewards of a life devoted to Christian
                  faith. It emphasizes themes of salvation, redemption, and the
                  importance of staying on the path of righteousness. “The
                  Pilgrim’s Progress” has been influential in Christian
                  literature and is regarded as one of the most important works
                  of religious fiction in the English language. It continues to
                  be widely read and studied for its enduring allegorical
                  message and timeless lessons on the Christian walk.
                </p>
              </div>
              <Button href="#" className={classes.Btn}>
                Download PDF
              </Button>
              <figure className={classes.Figure}>
                <Image
                  src={RecommendedBook}
                  alt="Recommended Book"
                  width={250}
                  height={350}
                  className="self-start"
                  style={{ objectFit: "contain" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* Waiting List */}
      <div className="bg-[#001734] w-full text-white px-20 py-40 -mt-64 relative">
        <div className="text-center max-w-2xl mx-auto mt-20">
          <p>
            We are currently building a web application that will serve as our
            online bookstore and a platform to make requests for our free
            resources. Kindly join our waiting list to get notified when we
            launch.
          </p>
          <BookMinistryForm />
        </div>
      </div>
    </section>
  );
};

export default BookMinistry;
