import { SampleSermonImage1, SampleSermonImage2, SampleSermonImage3, SampleSermonImage4 } from "@/assets";
import { AppButton } from "@/components";
import SermonTile from "@/components/sermon-tile";

const RecentSermons = () => {
  return (
    <div className="text-center my-[50px]">
      <h2 className="text-[30px] font-bold mx-auto text-center">Recent Sermons</h2>
      <div className="md:w-[50%] md:mx-auto overflow-x-auto md:overflow-hidden md:grid md:gap-6 md:grid-cols-2 md:items-center whitespace-nowrap py-[20px]">
        <SermonTile
          image={SampleSermonImage1}
        />
        <SermonTile
          image={SampleSermonImage2}
        />
        <SermonTile
          image={SampleSermonImage3}
        />
        <SermonTile
          image={SampleSermonImage4}
        />
      </div>
      <div>
        <AppButton
          text="Learn More"
        />
      </div>
    </div>
  )
};

export default RecentSermons;