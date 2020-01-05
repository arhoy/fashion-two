import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import NoStyleLink from '../../Links/NoStyleLink';

const Logo = () => {
  const data = useStaticQuery(
    graphql`
      {
        logoNavigation: file(
          relativePath: { eq: "logos/main/RippleJSLogoTransparent.png" }
        ) {
          childImageSharp {
            fixed(quality: 90, width: 120) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `,
  );

  return (
    <NoStyleLink to="/">
      <Img fixed={data.logoNavigation.childImageSharp.fixed} />
    </NoStyleLink>
  );
};

export default Logo;
