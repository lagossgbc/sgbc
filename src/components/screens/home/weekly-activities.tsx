import ActivityCard from "@/components/activity-card";
import { WeeklyActivitiesWrapper } from "./index.style";
import { WorshipServiceImage } from "@/assets";

const WeeklyActivitiesView = () => {
  return (
    <WeeklyActivitiesWrapper className="text-center my-[50px]">
      <h2 className="text-[30px] font-bold w-[217px] mx-auto text-center">Our Weekly Activities</h2>
      <div className="overflow-x-auto whitespace-nowrap py-[20px] activity-card-div">
        <ActivityCard
          title={"Lord's Day Services"}
          subTextArray={["Morning Service 9am", "Evening Service 5pm"]}
          image={WorshipServiceImage}
        />
        <ActivityCard
          title={"Lord's Day Services"}
          subTextArray={["Morning Service 9am", "Evening Service 5pm"]}
          image={WorshipServiceImage}
        />
        <ActivityCard
          title={"Lord's Day Services"}
          subTextArray={["Morning Service 9am", "Evening Service 5pm"]}
          image={WorshipServiceImage}
        />
      </div>
    </WeeklyActivitiesWrapper>
  )
};

export default WeeklyActivitiesView;