import Centres from "./_data";

import "../../ministries/bcm/no-scroll.css";
import Banner from "@/components/hero-banner";

const BibleStudyGroups = () => {
  return (
    <section>
      <Banner
        imageUrl="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/bible-study-groups.webp"
        title="Bible Study Groups"
      />
      <div className="flex flex-col lg:flex-row gap-8 my-20 max-w-6xl mx-auto px-4">
        <div className="flex-1">
          <div className="border-b-2 pb-10">
            <h2 className="text-3xl font-bold px-6 mb-8 text-center md:text-left">
              Bible Study Groups & Prayer Clusters
            </h2>
            <p className="text-justify">
              We currently operate more than six Bible study centers located
              throughout Lagos, where members gather weekly to engage in the
              study of Scripture. To ensure unity and collective growth in
              understanding, all centers simultaneously focus on the same
              subject matter. All bible studies are streamed via zoom
            </p>
          </div>
          <div className="border-b-2 pb-10 my-10 text-center md:text-left">
            <h3 className="text-2xl font-bold">Topic: </h3>
            <h3 className="text-2xl font-bold mb-4">
              The Art of Divine Contentment
            </h3>
            <p>All bible studies are streamed via zoom</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold px-6 mb-8 text-center md:text-left">
              Prayer Clusters
            </h2>
            <p className="text-justify">
              Smaller prayer gatherings are organized according to the
              geographical proximity of participants&apos; residences. To locate
              the nearest prayer cluster, please join a Bible study group. The
              leader of this group will then provide information on the prayer
              cluster group closest to your location.
            </p>
          </div>
        </div>
        <ul className="flex flex-1 gap-4 flex-nowrap py-4 lg:flex-wrap overflow-x-auto whitespace-nowrap w-full max-w-max">
          {Centres.map((centre, i) => (
            <li
              key={i}
              className="bg-[#f9f9f9] p-4 rounded-lg w-[200px] h-44 lg:h-auto flex flex-col items-center justify-center"
              style={{
                boxShadow: "0 4px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h4 className="text-xl font-semibold mb-2">{centre.name}</h4>
              <p className="text-sm">
                Every {centre.day}, <b>{centre.time}</b>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BibleStudyGroups;
