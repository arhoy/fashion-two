import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import { SaleBanner } from './components/SaleBanner';
import { ImageSquare } from './components/ImageSquare';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;
const SubDiv = styled.div`
  min-width: 10rem;
  min-height: 10rem;

  margin: 1rem;
`;

const SubDiv1 = styled(SubDiv)`
  grid-column: 1/4;
  grid-row: 1 / span 2;
  @media (max-width: ${props => props.theme.screenSize.elevenHundred}) {
    grid-column: 1/3;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-column: 1/-1;
  }
`;

const SubDiv2 = styled(SubDiv)`
  grid-column: 4/-1;
  grid-row: 1/2;
  @media (max-width: ${props => props.theme.screenSize.elevenHundred}) {
    grid-column: 3/-1;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-column: 1/-1;
    grid-row: 3/4;
  }
`;
const SubDiv3 = styled(SubDiv)`
  grid-column: 4/-1;
  grid-row: 2/3;
  @media (max-width: ${props => props.theme.screenSize.elevenHundred}) {
    grid-column: 3/-1;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-column: 1/-1;
    grid-row: 4/5;
  }
`;
const SubDiv4 = styled(SubDiv)`
  grid-column: 1 / 2;
  grid-row: 3/4;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-column: 1 / 3;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-column: 1/-1;
    grid-row: 5/6;
  }
`;

const SubDiv5 = styled(SubDiv)`
  grid-column: 2 / 3;
  grid-row: 3/4;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-column: 3 / 5;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-column: 1/-1;
    grid-row: 6/7;
  }
`;
const SubDiv6 = styled(SubDiv)`
  grid-column: 3 / 4;
  grid-row: 3/4;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-row: 4/5;
    grid-column: 1 / 3;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-column: 1/-1;
    grid-row: 7/8;
  }
`;
const SubDiv7 = styled(SubDiv)`
  grid-column: 4 / 5;
  grid-row: 3/4;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    grid-row: 4/5;
    grid-column: 3 / 5;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-column: 1/-1;
    grid-row: 8/9;
  }
`;

export const ElectronicsGrid2 = () => {
  const data = useStaticQuery(graphql`
    {
      picture1: file(
        relativePath: { eq: "megaMenu/electronics/laptop-1.jpg" }
      ) {
        childImageSharp {
          fixed(quality: 90, width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      picture2: file(relativePath: { eq: "superstore/drone.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      picture3: file(relativePath: { eq: "megaMenu/electronics/tv-2.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      picture4: file(relativePath: { eq: "electronics/laptop.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      picture5: file(relativePath: { eq: "watch.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      picture6: file(relativePath: { eq: "apple-iphone-1.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Container>
      <SubDiv1>
        <SaleBanner />
      </SubDiv1>
      <SubDiv2>
        <ImageSquare
          img={data.picture1.childImageSharp.fixed}
          title={'Notebooks'}
        />
      </SubDiv2>
      <SubDiv3>
        <ImageSquare
          img={data.picture2.childImageSharp.fixed}
          title={'Drones'}
        />
      </SubDiv3>
      <SubDiv4>
        <ImageSquare img={data.picture3.childImageSharp.fixed} title={'TVs'} />
      </SubDiv4>
      <SubDiv5>
        {' '}
        <ImageSquare
          img={data.picture4.childImageSharp.fixed}
          title={'Laptops'}
        />
      </SubDiv5>
      <SubDiv6>
        {' '}
        <ImageSquare
          img={data.picture5.childImageSharp.fixed}
          title={'Watches'}
        />
      </SubDiv6>
      <SubDiv7>
        {' '}
        <ImageSquare
          img={data.picture6.childImageSharp.fixed}
          title={'Phones'}
        />
      </SubDiv7>
    </Container>
  );
};
