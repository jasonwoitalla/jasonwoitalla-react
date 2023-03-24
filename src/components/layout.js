import * as React from "react";

import Footer from "../components/footer";
import Header from "../components/header";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import * as styles from "./layout.module.scss";

const Layout = ({
  pageTitle,
  pageHero,
  active = "home",
  fullHeight = "false",
  children,
}) => {
  library.add(faCirclePlus);

  return (
    <div className={styles.layout} full-height={`${fullHeight}`}>
      {pageHero}
      <Header active={active} title={pageTitle} />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
