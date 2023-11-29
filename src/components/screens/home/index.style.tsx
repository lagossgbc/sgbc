import styled from "styled-components";

export const HomepageWrapper = styled.div`
  .main-carousel {
    height: calc(100vh - 60px);
  }
  .carousel-slide {
    position: relative;
    color: #fff;
    height: calc(100vh - 60px);
    background-color: #000;
    background-image: url(https://websiteimages.nyc3.cdn.digitaloceanspaces.com/sgbc_assets/church.webp);
    background-repeat: no-repeat;
    background-size: cover;

    h3 {
      font-family: Libre Baskerville;
      font-size: 48px;
      font-weight: 700;
    }
  }

  .carousel-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

export const AboutUsWrapper = styled.div`
`;

export const WeeklyActivitiesWrapper = styled.div`
`;