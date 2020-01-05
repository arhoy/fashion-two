import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Bold } from '../../reusableStyles/typography/Typography';
import {
  Container,
  BlurbContainer,
  CustomH2,
  CustomP,
  ImageContainer,
  StyledImage,
  CustomPHome,
} from './HomeStyling';
import { ButtonStyle2 } from '../../reusableStyles/buttons/Button';
import NoStyleLink from '../../Links/NoStyleLink';

const AboutUs = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "catering/catering1/about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Container>
      <BlurbContainer>
        <CustomH2>About Us</CustomH2>
        <CustomP>My Roots...</CustomP>
        <CustomPHome>
          Interdum varius sit amet mattis. Eu volutpat odio facilisis mauris sit
          amet massa. Lorem mollis aliquam ut porttitor. Eget mauris pharetra et
          ultrices. Etiam erat velit scelerisque in. A cras semper auctor neque
          vitae tempus. Potenti nullam ac tortor vitae. Non diam phasellus
          vestibulum lorem. Sit amet mattis vulputate enim nulla aliquet
          porttitor lacus luctus. Magna fermentum iaculis eu non diam phasellus
          vestibulum. Porta nibh venenatis cras sed felis eget velit aliquet
          sagittis. Morbi tempus iaculis urna id volutpat lacus laoreet non.
          Natoque penatibus et magnis dis parturient montes. Ut consequat semper
          viverra nam.
        </CustomPHome>
        <CustomPHome>
          <Bold> "LOREM"</Bold>. The phrase, "VIA LA VIE" Lacus sed turpis
          tincidunt id aliquet. Amet nisl purus in mollis nunc sed id. Sed sed
          risus pretium quam vulputate dignissim. Urna et pharetra pharetra
          massa massa. Erat nam at lectus urna duis convallis convallis tellus.
          Ac tortor vitae purus faucibus ornare suspendisse sed. Sed euismod
          nisi porta lorem mollis aliquam ut. Orci porta non pulvinar neque.
          Turpis in eu mi bibendum neque egestas congue quisque egestas. Quis
          auctor elit sed vul
        </CustomPHome>
        <CustomPHome>
          Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Morbi
          tempus iaculis urna id volutpat lacus laoreet non. Natoque penatibus
          et magnis dis parturient montes. Ut consequat semper viverra nam.
        </CustomPHome>
        <ButtonStyle2>
          <NoStyleLink to="/recipes">View Recipes</NoStyleLink>
        </ButtonStyle2>
      </BlurbContainer>
      <ImageContainer>
        <StyledImage fluid={image.sharp.fluid} fadeIn={true} />
      </ImageContainer>
    </Container>
  );
};

export default AboutUs;
