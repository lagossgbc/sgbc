import ElderCard from "./_component/ElderCard";
import data from "./_data";

export const metadata = {
  title: "About Us - Our Leadership",
};

const OurLeadership: React.FC<any> = () => {
  return (
    <div>
      <p className="text-justify mb-2 text-base">
        The character and effectiveness of any church is directly related to the
        quality of its leadership. That’s why Scripture stresses the importance
        of godly overseers and delineates specific standards for evaluating
        those who would serve in that position. At SGBC our leadership comprises
        of Elders and Deacons, men who have been tested and proven faithful, and
        we thank the Lord for the qualified, able men who provide pastoral and
        administrative oversight to our church family.
      </p>
      {data.map((section, index) => (
        <div key={index} className="mt-12 text-center">
          <h2 className="text-4xl font-semibold border-y border-gray-200 p-2 pl-4 mb-12 bg-blue-200 md:bg-white md:text-left">
            {section.section}
          </h2>
          {section.leaders.map((leader) => (
            <ElderCard key={leader.name} {...leader} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default OurLeadership;
