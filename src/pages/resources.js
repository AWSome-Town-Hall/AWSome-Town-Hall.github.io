import React from "react";

// Components
import { Header } from "../components";

const Resources = () => {
  return (
    <main>
      <Header />
      <section className="resourcesSection_wrapper">
        <div className="resourcesSection_container">
          <h2 className="resourcesSection_heading">Latest resources</h2>
          <div className="resources_cardsWrapper">
            <div className="eachResource_cardBox">
              <div className="cardBox_contentBox">
                <h3 className="resource_title">AWS Whitepapers & Guides</h3>
                <h4 className="resource_subTitle">AWS</h4>
                <p className="resource_description">
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </p>
                <div className="cardBox_contentBox_tagsWrapper">
                  <span className="cardBox_tagsWrapper_eachTag">
                    aws.amazon.com
                  </span>
                  <span className="cardBox_tagsWrapper_eachTag">aws</span>
                  <span className="cardBox_tagsWrapper_eachTag">
                    whitespaper
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;
