import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ProjectGridComponent from "./project_grid_comp";
import * as styles from "./project_grid.module.scss";

const ProjectGrid = ({}) => {
    const dataQuery = useStaticQuery(graphql`
        query ProjectGridQuery {
            allProjectGridDataJson {
            edges {
                node {
                project
                tagLine
                link
                bgImage {
                    childImageSharp {
                    gatsbyImageData(quality: 60)
                    }
                }
                imageAlt
                gridWidth
                }
            }
            }
        }
    `);

    return (
        <div className={styles.projectGrid}>
            {dataQuery.allProjectGridDataJson.edges.map((project) => (
                <ProjectGridComponent
                    projectName={project.node.project}
                    tagLine={project.node.tagLine}
                    link={project.node.link}
                    image={
                        <GatsbyImage
                            image={getImage(project.node.bgImage)}
                            alt={project.node.imageAlt}
                        />
                    }
                    gridWidth={project.node.gridWidth}
                />
            ))}
        </div>
    );
} 

export default ProjectGrid;
