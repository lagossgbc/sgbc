import Image from "next/image";
import EventList from "./_components/EventList";

export const metadata = {
  title: "Events | SGBC",
};

const EventsPage = () => {
  return (
    <section className="md:flex md:items-start gap-2 min-h-[100vh] relative pb-20 md:pb-0">
      <div className="absolute w-screen md:w-2/5 bg-blue-400 text-white min-h-[40vh] md:min-h-[100vh] md:sticky md:top-0 overflow-hidden">
        <Image
          src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/conference%201.webp"
          alt="Contact Background"
          fill
          className="absolute w-full object-cover md:z-10 blur-[1px]"
          priority
        />
        <div className="absolute flex flex-col pl-4 text-3xl z-30 w-full text-center md:w-auto md:text-left mt-20 md:mt-0 md:top-1/4 md:left-1/4 after:absolute after:content-[''] after:bg-yellow-500 after:h-full after:w-1 after:-left-4">
          <h2>Upcoming</h2>
          <h2>Events</h2>
        </div>
        <div className="bg-black w-full min-h-[80vh] md:min-h-[100vh] z-20 relative opacity-70"></div>
      </div>
      <EventList />
    </section>
  );
};

export default EventsPage;
