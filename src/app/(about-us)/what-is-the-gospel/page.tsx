import data from "./_data";

export const metadata = {
  title: "About Us - What is The Gospel",
};
const Gospel = () => {
  return (
    <>
      <h2 className="text-center md:text-left text-4xl font-bold mb-4">
        What Is The Gospel
      </h2>
      {data.map((item, index) => (
        <p
          key={index}
          className={`text-justify mb-8 ${
            index == 5
              ? `px-6 font-semibold  after:content-['"'] before:content-['"']`
              : ""
          }`}
        >
          {item}
        </p>
      ))}
    </>
  );
};

export default Gospel;
