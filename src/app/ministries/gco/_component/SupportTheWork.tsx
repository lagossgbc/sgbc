import Button from "@/components/form/Button";
import Image from "next/image";

const SupportTheWork = () => {
  return (
    <>
      <figure className="relative w-full h-64 md:h-96 hidden sm:block">
        <Image
          src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/gco-support.webp"
          alt="GCO Support"
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>
      <figure className="relative w-full h-96 block sm:hidden">
        <Image
          src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/gco-support-mobile.webp"
          alt="GCO Support"
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>
      <section className="text-center mt-20 mb-32 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold px-6 mb-8">
          Support The Work
        </h2>
        <p>
          We are willing to preach God’s inerrant truth on more campuses and
          disciple more students as God opens more windows of opportunities.{" "}
        </p>
        <p className="mt-4">
          For more information and enquiries, Contact us:{" "}
          <a href="tel:+2348064903450">+234 806 490 3450</a>,{" "}
          <a href="tel:+2348090550908">+234 809 055 0908</a>.
        </p>
        <div className="flex justify-center">
          <Button href="https://twitter.com/campus_outreach" target="_blank">
            Follow us on twitter
          </Button>
        </div>
      </section>
    </>
  );
};

export default SupportTheWork;
