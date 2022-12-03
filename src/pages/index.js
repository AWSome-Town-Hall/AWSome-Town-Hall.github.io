import * as React from "react";

// Components
import { Header } from "../components";

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

export default IndexPage;

export const Head = () => <title>AWSome Town Hall</title>;
