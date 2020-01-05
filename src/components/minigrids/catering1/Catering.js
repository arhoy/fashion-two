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

const Catering = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "catering/catering1/food-invite.jpg" }) {
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
        <CustomH2>CATERING</CustomH2>
        <CustomP>Let us Cater to your Next Event...</CustomP>
        <CustomPHome>
          Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.
          Enim diam vulputate ut pharetra sit. Neque gravida in fermentum et
          sollicitudin ac orci. Odio morbi quis commodo odio aenean sed
          adipiscing diam. Sit amet commodo nulla facilisi nullam vehicula ipsum
          a arcu. Velit laoreet id donec ultrices tincidunt arcu non. Vitae et
          leo duis ut. Est pellentesque elit ullamcorper dignissim cras
          tincidunt lobortis feugiat vivamus. Nisi quis eleifend quam adipiscing
          vitae proin. Tristique sollicitudin nibh sit amet commodo nulla
          facilisi.
        </CustomPHome>
        <CustomPHome>
          Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
          In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Quam
          lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
          Fringilla urna porttitor rhoncus dolor purus non. Mauris commodo quis
          imperdiet massa tincidunt nunc pulvinar sapien et. Phasellus
          vestibulum lorem sed risus ultricies tristique nulla. Lacus vestibulum
          sed arcu non odio euismod lacinia at quis.
        </CustomPHome>

        <ButtonStyle2>
          <NoStyleLink to="#">View Recipes</NoStyleLink>
        </ButtonStyle2>
      </BlurbContainer>
      <ImageContainer>
        <StyledImage fluid={image.sharp.fluid} fadeIn={true} />
      </ImageContainer>
    </Container>
  );
};

export default Catering;
