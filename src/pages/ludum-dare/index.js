import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import LudumDareItem from "../../components/ludum-dare-item";
import PageHero from "../../components/page-hero";

const LudumDare = () => {
  const data = useStaticQuery(graphql`
    query LudumDarePageQuery {
      allLudumDareDataJson {
        edges {
          node {
            date
            description
            game
            githubLink
            language
            playLink
            theme
            imageAlt
            imagePath {
              childImageSharp {
                gatsbyImageData(width: 275, quality: 90)
              }
            }
          }
        }
      }
    }
  `);

  let pageHero = (
    <PageHero
      title="Ludum Dare Competition"
      heroImage="computer-code"
      sub="View my submissions here"
    />
  );

  return (
    <Layout pageTitle="Ludum Dare" pageHero={pageHero} active="project">
      <p>
        Ludum Dare is a game jam competition. This means I need to create a
        fully featured game that fits a given theme and submit it by a certain
        deadline. For Ludum Dare, I have to submit my entries within 48 hours of
        receiving the theme. To date, I have competed in 5 of these.
      </p>
      {data.allLudumDareDataJson.edges.map((game) => {
        let image = (
          <GatsbyImage
            image={getImage(game.node.imagePath)}
            alt={game.node.imageAlt}
          />
        );
        return (
          <LudumDareItem
            title={game.node.game}
            date={game.node.date}
            theme={game.node.theme}
            language={game.node.language}
            description={game.node.description}
            gitHubLink={game.node.githubLink}
            playLink={game.node.playLink}
            image={image}
          />
        );
      })}
    </Layout>
  );
};

export default LudumDare;
