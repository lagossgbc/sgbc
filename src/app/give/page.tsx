import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Give | SGBC",
};

const GivePage = () => {
  return (
    <section>
      <figure className="relative w-full h-72 -z-10">
        <Image
          src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/give.webp"
          alt="give"
          fill
          className="object-cover w-auto"
          priority
        />
        <h2 className="text-5xl absolute text-white left-1/2 bottom-20 -translate-x-1/2 text-center">
          Give
        </h2>
      </figure>
      <div className="max-w-[800px] mx-auto text-justify mb-16 px-4">
        <h2 className="text-4xl font-semibold mb-7 mt-16 text-center lg:text-left">
          Giving is an Act of Worship
        </h2>
        <article>
          <p className="mb-7">
            At Sovereign Grace Bible Church, we aim to worship God in our giving
            by covenanting together “to contribute cheerfully and regularly (see
            2 Corinthians 9:6–7) to the support of the ministry, the expenses of
            the church, the relief of the poor, and the spread of the gospel
            through all nations,” as we strive to honor the Lord with the
            “firstfruits” (Proverbs 3:9) of all our labour.
          </p>
          <p className="mb-7">
            As a church, we trust God to provide for His work; However we
            encourage people to give themselves to God first before they seek to
            give their resources to God, because the sacrifices of a sinner are
            an abomination to the Lord (2 Corinthians 8:3-5, Proverbs 15:8). How
            can a person give themselves to the Lord, find out{" "}
            <Link
              href="/what-is-the-gospel"
              className="underline text-blue-400"
            >
              here
            </Link>
            . If the Lord lays it on your heart to support our ministry efforts,
            use the following accounts as applicable:
          </p>
          <div className="mb-7">
            <p>Account Name: Sovereign Grace Bible Church</p>
            <p>Offering: 0026649081 – Access Bank Plc.</p>
            <p>Building: 0666872732 – Guaranty Trust Bank Plc.</p>
            <p>Missions: 0782710638 – Access Bank Plc.</p>
            <p>We appreciate your donation!</p>
          </div>
          <h3 className="text-2xl font-semibold mb-2">
            Giving outside Nigeria?
          </h3>
          <p>
            You can still send to any of the bank accounts listed above, using
            payment services like “Lemonade Financial” (available on both the
            Google Playstore and the Apple App store). Services like these allow
            for instant cross-border payments.
          </p>
        </article>
      </div>
    </section>
  );
};

export default GivePage;
