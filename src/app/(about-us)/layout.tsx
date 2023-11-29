import AboutBanner from "./_components/AboutBanner";
import AboutNav from "./_components/AboutNav";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col mx-auto max-w-7xl">
      <AboutBanner />
      <div className="flex flex-col md:flex-row justify-center gap-8 w-6/10 xl:w-7/10 my-20 p-3 md:p-6">
        <AboutNav />
        <section className="flex gap-8 item max-w-2xl mb-20 mx-auto">
          <article className="text-justify">{children}</article>
        </section>
      </div>
    </section>
  );
}
