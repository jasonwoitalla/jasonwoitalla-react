import * as React from "react";

import Button from "../../components/button";
import Divider from "../../components/divider";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import PageHero from "../../components/page-hero";
import Project from "../../components/project";

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query ProjectPageQuery {
      allProjectPageDataJson {
        edges {
          node {
            section
            projects {
              project
              description
              buttonText
              ctaLink
              imageAlt
              toolAlt
              image {
                childImageSharp {
                  gatsbyImageData(width: 300, quality: 75)
                }
              }
              tool {
                childImageSharp {
                  gatsbyImageData(width: 175)
                }
              }
            }
          }
        }
      }
    }
  `);

  let pageHero = (
    <PageHero
      title="Projects"
      heroImage="computer-code"
      sub="Explore my project library here"
      customHeight="35vh"
    />
  );

  return (
    <Layout pageTitle="My Projects" pageHero={pageHero} active="project">
      {data.allProjectPageDataJson.edges.map((section) => {
        return (
          <>
            <h2>{section.node.section}</h2>
            {section.node.projects.map((project) => {
              let cta = (
                <Button link={project.ctaLink}>{project.buttonText}</Button>
              );
              let tool = (
                <GatsbyImage
                  image={getImage(project.tool)}
                  alt={project.toolAlt}
                />
              );
              let image = (
                <GatsbyImage
                  image={getImage(project.image)}
                  alt={project.imageAlt}
                />
              );
              return (
                <Project
                  title={project.project}
                  image={image}
                  tool={tool}
                  description={project.description}
                  cta={cta}
                  link={project.ctaLink}
                />
              );
            })}
            <Divider />
          </>
        );
      })}
    </Layout>
  );
};

export default ProjectsPage;
