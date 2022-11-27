import * as React from "react";

// Components
import { Header } from "../components";

// Styles
import "../styles/index.scss";

const IndexPage = () => {
  return (
    <main>
      <Header />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>AWSome Town Hall</title>;
