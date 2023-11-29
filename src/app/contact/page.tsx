import Image from "next/image";

import ContactForm from "./_components/ContactForm";
import ContactLeftSide from "./_components/ContactLeftSide";

export const metadata = {
  title: "Contact us | SGBC",
};

const ContactPage = () => {
  return (
    <div style={{ minHeight: "80vh" }} className="relative">
      <Image
        src="https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/contact-bg.webp"
        alt="Contact Background"
        fill
        className="absolute inset-0 w-full h-64 object-cover z-10"
        priority
      />
      <div className="bg-black w-full h-full z-20 absolute opacity-60"></div>
      <div className="relative mx-auto z-30 flex flex-col gap-8 py-20 text-white px-3 sm:items-center md:flex-row md:max-w-5xl md:gap-4">
        <ContactLeftSide />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
