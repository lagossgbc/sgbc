import { Carousel } from "antd"
import { HomepageWrapper } from "./index.style";
import { AppButton } from "@/components";
import HomepageCarousel from "./home-carousel";
import AboutUs from "./about-us";
import WeeklyActivitiesView from "./weekly-activities";
import UpcomingEvents from "./upcoming-events";
import RecentSermons from "./recent-sermons";

const HomepageScreen = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: 'calc(100vh - 60px)',
    color: '#fff',
    lineHeight: 'calc(100vh - 60px)',
    textAlign: 'center',
    backgroundColor: '#364d79',
  };

  return (
    <HomepageWrapper>
      <HomepageCarousel />
      <AboutUs />
      <WeeklyActivitiesView />
      <UpcomingEvents />
      <RecentSermons/>
    </HomepageWrapper>
  )
};

export default HomepageScreen;