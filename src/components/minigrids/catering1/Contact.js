import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

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

const CustomContainer = styled(Container)`
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Contact = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "catering/catering1/eggs.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <CustomContainer>
      <ImageContainer>
        <StyledImage fluid={image.sharp.fluid} fadeIn={true} />
      </ImageContainer>
      <BlurbContainer>
        <CustomH2>Contact</CustomH2>
        <CustomP>We would love to hear from you</CustomP>
        <CustomPHome>
          We can be reached via email <Bold>aquasar2020@gmail.com</Bold>
        </CustomPHome>
        <CustomPHome>
          For a quicker response text or call <Bold>(587) 772 5536 </Bold>
        </CustomPHome>
        <CustomPHome>
          We are a team of passionate developers, designers, SEO specialists,
          Google and Facebook Ads Experts and would love to help you with your
          next website or web app.
        </CustomPHome>
        <CustomPHome>
          If you have any question please reach out to us. This site was made
          using Gatsby and React, web technologies that are used and sought
          after by Silicon Valley Startups and other tech companies around the
          world to create fast, SEO friendly and amazing websites.
        </CustomPHome>
      </BlurbContainer>
    </CustomContainer>
  );
};

export default Contact;
