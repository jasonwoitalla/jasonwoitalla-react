import * as React from "react";
import Layout from "../../components/layout";

import * as styles from "./sentence-analyzer.module.scss";

const SentenceAnalyzer = () => {
  return (
    <Layout pageTitle="Sentence Analyzer" fullHeight="true">
      <h1 className={styles.title}>Sentence Analyzer</h1>
      <p>
        This is a simple page I developed for an English class I once took. The
        goal of this tool is to analyze the input essay and give data about the
        text. This tool will tell you how many sentences your essay has and
        create a plot of sentence number vs sentence word length. The goal of
        that is to see how varied the sentence length of an essay is. Not a lot
        of development has been spent on the tool but it’s a neat informative
        tool that could easily be expanded in the future.
      </p>
      <textarea
        id="essay"
        row="10"
        cols="100"
        placeholder="Enter Essay Text Here"
      />
      <div id="graphResults" style={{ height: "300px", width: "100%" }}></div>
      <div id="results"></div>
    </Layout>
  );
};

export default SentenceAnalyzer;
