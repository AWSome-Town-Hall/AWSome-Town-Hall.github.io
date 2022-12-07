import * as React from "react";

// Components
import { Header, Timeline } from "../components";

// Styles
import "../styles/index.scss";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <section className="heroSection_wrapper">
        <div className="hero_contentBox">
          <h1 className="hero_contentBox_mainHeading">
            AWSome TownHall Community
          </h1>
          <p className="hero_contentBox_description">
            Explore over 1,000 chapters across 140 countries and meet
            like-minded developers from all levels and backgrounds.
          </p>
          <div className="hero_contentBox_btnsWrapper">
            <button className="hero_btnsWrapper_btn solid">
              Add a resource
            </button>
            <button className="hero_btnsWrapper_btn outline">
              Join the community
            </button>
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="timelineSection_wrapper">
        <div className="timelineSection_container">
          <h2 className="timelineSection_heading">
            Roadmap to gain expertise in AWS
          </h2>
          <p className="timelineSection_subHeading">
            New modules are released monthly. Each one should take a day or two
            to complete.
          </p>
          <div className="timelineSection_timlineBoxes_wrapper">
            <Timeline />
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>AWSome Town Hall</title>;
