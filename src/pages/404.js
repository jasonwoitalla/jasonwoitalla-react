import * as React from "react";
import Layout from "../components/layout";

import * as styles from "./404.module.scss";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <h1 className={styles.title}>404 Page Not Found</h1>
      <p>
        Sorry about that, try clicking a link from the header to redirect to a
        page that exists.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
