import Image from "next/image";
import Banner from "@/components/hero-banner";
import TeachingMaterialImages from "./_data";

import "./no-scroll.css";

export const metadata = {
  title: "Ministries - Blessed Children Ministry",
};

const BCM = () => {
  return (
    <section>
      <Banner
        imageUrl="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/bcm-banner.webp"
        title="Blessed Children Ministry"
      />
      <div className="py-20 px-4 max-w-5xl mx-auto">
        <div className="flex gap-10 md:gap-[5%] flex-col md:flex-row items-center md:items-start">
          <div className="text-justify" style={{ flex: 2 }}>
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
              About Us
            </h2>
            <p className="mb-6">
              Blessed Children Ministry is a ministry to children who attend
              Sovereign Grace Bible Church and also an outreach ministry
              dedicated to serving children outside the church community. The
              ministry is under the direct supervision and guidance of the
              Eldership of Sovereign Grace Bible Church.
            </p>
            <p>
              We hold age-appropriate Sunday school classes for children that
              attend our Lord’s Day worship service at 9 am. We have also
              established and currently operate in five locations across Lagos
              with over 500 children, namely Anifowoshe, Aboru, Omole, Ipaja,
              Shomolu and Mowe. These locations serve as hubs for our ministry
              outreach to children within their respective communities.
            </p>
          </div>
          <figure
            className="relative w-full h-full sm:w-96 sm:h-[400px]"
            style={{ flex: 1, maxHeight: "270px" }}
          >
            <Image
              src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/bcm-one.webp"
              alt="BCM"
              width={700}
              height={900}
              style={{ objectFit: "contain" }}
            />
          </figure>
        </div>
        {/* Weekly Activities */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            Weekly Activities
          </h2>
          <p className="mb-10 text-center md:text-justify">
            We hold age-appropriate Sunday school classes for children that
            attend our Lord’s Day worship service at 9 am. We have also
            established and currently operate in five locations across Lagos
            with over 500 children, namely Anifowoshe, Aboru, Omole, Ipaja,
            Shomolu and Mowe. These locations serve as hubs for our ministry
            outreach to children within their respective communities.
          </p>
          <Image
            src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/grid-desktop.webp"
            alt="bcm grid"
            width={1000}
            height="400"
            className="hidden md:block"
          />
          <figure className="relative mx-auto w-80 h-full">
            <Image
              src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/grid-mobile.webp"
              alt="bcm grid"
              width={500}
              height="1000"
              className="md:hidden"
            />
          </figure>
        </div>
        {/* Programs and Events */}
        <div className="mt-20 md:mt-20 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            Programs and Events
          </h2>
          <div className="flex gap-8 md:gap-16 flex-col md:flex-row items-center md:items-start">
            <figure
              className="relative w-full h-full sm:w-96 sm:h-[400px]"
              style={{ flex: 2 }}
            >
              <Image
                width={700}
                height={900}
                style={{ objectFit: "contain" }}
                src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/bcm-progs.webp"
                alt="BCM Programs and Events"
              />
            </figure>
            <ol
              style={{ flex: 3 }}
              className="-order-1 md:order-none text-justify"
            >
              <li className="list-decimal mb-4">
                Workers Retreat: We arrange a quarterly retreat program designed
                to provide training and encouragement for all workers in BCM
              </li>
              <li className="list-decimal mb-4">
                Open Day: This is a platform for engaging with parents and
                guardians of the children at the start of the year and during
                the mid-year period
              </li>
              <li className="list-decimal mb-4">
                Children Outings: We arrange Bible-centered events that provide
                an opportunity for children to relax and interact with peers
                from various centers.
              </li>
              <li className="list-decimal mb-4">
                Teenage Outing & Retreat: Teenagers from all centers are brought
                together to receive teachings on biblical principles and their
                practical applications. Additionally, they are given the
                opportunity to visit parks and notable landmarks within the city
                of Lagos.
              </li>
              <li className="list-decimal mb-4">
                End of the Year Prize Giving Day: Towards the end of the year,
                we host a special event to acknowledge and reward children who
                have demonstrated exceptional performance in their classes
              </li>
            </ol>
          </div>
        </div>
        {/* Teaching Materials */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            Teaching Materials
          </h2>
          <p>
            In our teaching curriculum, we primarily utilize &apos;Lessons for
            Life&apos; by Jill Masters. For our Sunday school, the older class
            uses &apos;Bible Doctrine Simply Explained&apos; by B.A. Ramsbottom.
            Younger classes engage with &apos;Leading Little Ones to God&apos;
            by Marian M. Schoolland. Additionally, we incorporate teachings from
            &apos;Pilgrim&apos;s Progress&apos; by John Bunyan
          </p>
          <ul className="flex gap-6 flex-nowrap md:flex-wrap md:justify-center mt-10  overflow-x-auto whitespace-nowrap w-full max-w-max">
            {TeachingMaterialImages.map((mat, i) => (
              <li key={i} className="shrink-0 max-w-max">
                <Image src={mat} alt="Lessons" width={200} height={350} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BCM;
