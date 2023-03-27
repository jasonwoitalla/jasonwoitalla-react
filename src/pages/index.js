import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as styles from "./index.module.scss";

import Button from "../components/button";
import Columns from "../components/columns";
import Coursework from "../components/coursework";
import Divider from "../components/divider";
import Layout from "../components/layout";
import PageHero from "../components/page-hero";
import ProjectGrid from "../components/project_grid/project_grid";
import SkillSection from "../components/skill-section";

const IndexPage = () => {
  const data = useStaticQuery(query);
  console.log(data);

  let heroData = data.allDataJson.edges[0].node.hero;
  let skillsData = data.allDataJson.edges[0].node.skills;
  let courseworkData = data.allDataJson.edges[0].node.coursework;
  let experienceData = data.allDataJson.edges[0].node.experience;

  let mainPageHero = (
    <PageHero
      title={heroData.title}
      sub={heroData.sub}
      link={heroData.link}
      buttonText={heroData.buttonText}
      heroImage={heroData.heroImage}
      useGradient={true}
    />
  );

  return (
    <Layout pageTitle="Homepage" pageHero={mainPageHero}>
      <script src="https://gist.github.com/jordienr/64bcf75f8b08641f205bd6a1a0d4ce1d.js"></script>
      <h2>Projects / Achievements</h2>
      <p id="resume">
        Here are some of the projects that I have completed that I would like to highlight. My skills in 
        web development, graphics, and hobby game development are featured here. Click on a project to
        view more about it. There you can see what skills I used to build that project, view source code, and
        try out a live demo for yourself.
      </p>
      <ProjectGrid />

      <Divider />
      <div>
        <h2>Experience</h2>
        <Columns maxColumns="2">
          {experienceData.map((job) => (
            <div className={styles.jobEntry}>
              <p>{job.job}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </Columns>
      </div>

      <Divider />
      <div>
        <h2>Education & Coursework</h2>
        <p>
          These are courses I have completed in peruse of my undergraduate
          degree in computer science at the University of Minnesota.
        </p>
        <Columns maxColumns="2">
          <div>
            <p>
              <span style={{ fontWeight: "bold" }}>Bachelor of Science in Computer Science</span>
              <br/>
              <span style={{ fontStyle:"italic" }}>Minor in Mathematics</span>
            </p>
            <p>
              College of Science and Engineering, University of Minnesota Twin
              Cities
            </p>
            <p style={{ fontWeight: "bold" }}>Graduated in 2023</p>
            <p style={{ fontWeight: "bold" }}>GPA: 3.58 / 4.00</p>
            <Button link="https://www.linkedin.com/in/jason-woitalla/" internal={false}>
              View Me on LinkedIn
            </Button>
          </div>
          <div>
            {courseworkData.map((course) => (
              <Coursework
                title={course.class}
                description={course.description}
                cta={course.cta}
                link={course.cta_link}
              />
            ))}
          </div>
        </Columns>
      </div>

      <Divider />
      <h2>Skills</h2>
      <p>
        English is my first language and I have strong communication skills. I
        have advanced computer skills and can operate Windows, macOS, and Linux
        efficiently.
      </p>
      {skillsData.map((skillSection) => (
        <SkillSection title={skillSection.title} items={skillSection.items} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query HomepageDataQuery {
    allDataJson {
      edges {
        node {
          skills {
            items
            title
          }
          experience {
            description
            job
          }
          coursework {
            class
            cta
            cta_link
            description
          }
          hero {
            buttonText
            heroImage
            link
            sub
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
