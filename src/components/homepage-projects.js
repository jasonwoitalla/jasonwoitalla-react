import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Columns from "./columns";
import HomepageProjectItem from "./homepage-project-item";

const HomepageProjects = () => {
  const data = useStaticQuery(graphql`
    query HomepageProjectQuery {
      allHomepageProjectsJson {
        edges {
          node {
            title
            description
            linkText
            imageAlt
            href
            imagePath {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Columns>
      {data.allHomepageProjectsJson.edges.map((project) => (
        <HomepageProjectItem
          title={project.node.title}
          description={project.node.description}
          linkText={project.node.linkText}
          href={project.node.href}
          image={
            <GatsbyImage
              image={getImage(project.node.imagePath)}
              alt={project.node.imageAlt}
            />
          }
        />
      ))}
    </Columns>
  );
};

export default HomepageProjects;
