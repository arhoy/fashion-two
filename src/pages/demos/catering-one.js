import React from 'react';
import styled from '@emotion/styled';

import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CateringLayout1 from '../../components/layouts/CateringLayout1';
import {
  Section,
  SectionGrey,
} from '../../components/reusableStyles/sections/Sections';
import { H1 } from '../../components/reusableStyles/typography/Typography';

import Contact from '../../components/minigrids/catering1/Contact';
import Catering from '../../components/minigrids/catering1/Catering';
import AboutUs from '../../components/minigrids/catering1/AboutUs';
import AboutOurFood from '../../components/minigrids/catering1/AboutOurFood';
import Slider from 'react-slick';
import SliderContainer2 from '../../components/reusableStyles/slider/SliderContainer2';

const HerosContainer = styled.div`
  z-index: -1;

  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 92vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
  background-size: cover;
  background-position: top;
  align-items: top;
  opacity: 1 !important;
  @media (max-width: ${props => props.theme.screenSize.nineHundred}) {
    height: 70vh;
  }
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    height: 60vh;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 40vh;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    height: 35vh;
  }
`;

const HeroBackgroundImage2 = styled(HeroBackgroundImage)`
  background-position: center;
`;

const HeroContentContainer = styled.div`
  min-width: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HeroContent = styled.div`
  color: ${props => props.theme.colors.white};
  max-width: 80rem;
  margin: 0 auto;

  padding: 3rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

const CustomH1 = styled(H1)`
  text-align: center;
  color: ${props => props.theme.colors.white};
  text-shadow: -3px 3px 0 ${props => props.theme.colors.black};
  padding: 0.75rem 1rem;
  background: ${props => props.theme.colors.blackTransparent};
  & span {
    display: block;
  }
`;

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "catering/catering1/hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    heroImage2: file(
      relativePath: { eq: "catering/catering1/food_invite_2.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CateringLayout1 full={true}>
      <Slider {...settings}>
        <SliderContainer2>
          <HerosContainer>
            <HeroBackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
              <HeroContentContainer>
                <HeroContent>
                  <CustomH1>
                    <span>Welcome To</span>
                    <span>Sunshine Breakfast</span>
                  </CustomH1>
                </HeroContent>
              </HeroContentContainer>
            </HeroBackgroundImage>
          </HerosContainer>
        </SliderContainer2>
        <SliderContainer2>
          <HerosContainer>
            <HeroBackgroundImage2 fluid={data.heroImage2.childImageSharp.fluid}>
              <HeroContentContainer>
                <HeroContent>
                  <CustomH1>
                    <span>Now Open</span>
                    <span>24 Hours A Day</span>
                  </CustomH1>
                </HeroContent>
              </HeroContentContainer>
            </HeroBackgroundImage2>
          </HerosContainer>
        </SliderContainer2>
      </Slider>

      <SectionGrey>
        <AboutUs />
      </SectionGrey>
      <Section>
        <AboutOurFood />
      </Section>
      <SectionGrey>
        <Catering />
      </SectionGrey>
      <Section>
        <Contact />
      </Section>
    </CateringLayout1>
  );
};

export default Home;
