import React, { useState } from 'react';
import styled from '@emotion/styled';
import * as Scroll from 'react-scroll';
import ReactTyped from 'react-typed';
import { graphql } from 'gatsby';
import Particles from 'react-particles-js';

import MainLayout from '../components/layouts/MainLayout';
import SEO from '../hooks/SEO';
import {
  Section,
  Container800,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';

import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import {
  H2,
  A,
  H2Centered,
} from '../components/reusableStyles/typography/Typography';
import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';

import CatchyBanner from '../components/reusableStyles/banner/CatchyBanner';
import BasicFeatureSection from '../components/features/BasicFeatureSection';

import NoStyleLink from '../components/Links/NoStyleLink';
import {
  ButtonStyle2Large,
  ButtonStyle2,
} from '../components/reusableStyles/buttons/Button';
import {
  CustomHighlight2,
  CustomHighlight2Primary,
} from '../components/reusableStyles/highlights/Highlights';

const P = styled.p`
  margin: 1.5rem 0rem;
  font-family: Poppins;
  font-size: 1.7rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    opacity: 0.9;
    margin: 3rem 0rem;
  }
`;

const HerosContainer = styled.div`
  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const MainHeroCover = styled(HerosContainer)`
  position: relative;
  width: 100%;
  height: 100vh;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 50vh;
  }
`;

const FullNarrowBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  min-height: 25vh;
  max-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomBannerContainer = styled.div`
  padding: 4rem 1rem;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 35rem));
`;

const MainCenterDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    top: 40%;
  }
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.black};
  opacity: 0.9;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const MobileHero = styled.div`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    background: ${props => props.theme.colors.black};
    opacity: 0.9;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    height: 40vh;
  }
`;

const Blurb = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.white};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const FashionDemos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CustomButtonStyle2 = styled(ButtonStyle2)`
  transform: translate(0, 10vh);

  padding: 1rem 2rem;
  opacity: 0;
  border-radius: 50%;

  transition: border-radius 0.2s ease-in 0.2s;
  & span {
    display: flex;
    font-size: 2.4rem;
    justify-content: center;
    text-align: center;
  }
`;
const DemoViewContainer = styled.div`
  height: 47rem;
  width: 30rem;
  background: ${props => props.theme.colors.blackTransparent};
  position: absolute;
  left: 0%;
  top: 0%;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transition: all 0.2s ease-in;
`;

const DemoImage = styled(Img)`
  background-size: contain;
  object-position: 0% 0%;

  width: 100%;
  height: 100%;
`;

const DemoImageContainer = styled.div`
  height: 47rem;
  width: 30rem;
  margin: 2rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & h3 {
    font-family: Poppins;
    font-weight: bold;
    padding: 1rem 2rem;
    background: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.white};
  }

  &:before {
    content: '';
    position: absolute;
    height: 47rem;
    width: 30rem;
    border: 3px solid ${props => props.theme.colors.primary};
    box-sizing: border-box;
    top: -2rem;
    left: -2rem;
    z-index: -1;
  }
  &:hover {
    ${DemoViewContainer} {
      opacity: 1;
    }
    ${CustomButtonStyle2} {
      transform: translate(0, 0);
      border-radius: 1rem;
      opacity: 1;
    }
  }
`;

const whyRipple = () => (
  <>
    <P>
      <strong>RippleJS</strong> themes are blazingly fast website themes for any
      purpose create by Aquasar Web Development. The JAMstack is the future of
      web development, exploiting the power of front end frameworks like Gatsby
      and taking full advantage of powerful APIs and microservices like
      Snipcart, Algolia and Contentful to create a fast, user friendly browser
      experience.
    </P>
    <P>
      <CustomHighlight2> Gatsby </CustomHighlight2> +
      <CustomHighlight2> React </CustomHighlight2> +
      <CustomHighlight2> Contentful </CustomHighlight2> +
      <CustomHighlight2> Netlify </CustomHighlight2> +
      <CustomHighlight2> Algolio </CustomHighlight2> +
      <CustomHighlight2> Snipcart </CustomHighlight2> &
      <CustomHighlight2> Much much more </CustomHighlight2>
    </P>
    <P>
      "Faster and more SEO friendy than any frontend WordPress or Shopify site
      created by the vast majority of web design agencies and at a fraction of
      the cost."
    </P>
  </>
);

const aboutMe = () => (
  <>
    <P>
      My name is <strong>Alex Quasar</strong>. I am professional full stack web
      developer and digital ads consultant. I build websites for local
      businesses and work with companies small and large using the latest and
      greatest technoligies. These include:
    </P>
    <P>
      <CustomHighlight2> JAM Stack </CustomHighlight2> &
      <CustomHighlight2> MERN Stack </CustomHighlight2> &
      <CustomHighlight2> Gatsby </CustomHighlight2> &
      <CustomHighlight2> Contentful </CustomHighlight2>
    </P>
    <P>
      You can read more on my about page:{' '}
      <A href="https://aquasar.io/about/">here</A>
    </P>
  </>
);

const featuresText = () => (
  <P>
    What you get with the Ripple Theme? You will get a fully functional and
    developer supported modern web app like in the demos
    <br />
    <br />
    <CustomHighlight2Primary> Lightning Fast Website </CustomHighlight2Primary>
    <CustomHighlight2Primary> Algolia Search </CustomHighlight2Primary>
    <CustomHighlight2Primary> Website Chat </CustomHighlight2Primary>
    <CustomHighlight2Primary>Built In Dynamic SEO tags</CustomHighlight2Primary>
    <CustomHighlight2Primary> Contentful Product CMS </CustomHighlight2Primary>
    <CustomHighlight2Primary>
      Customized MailChimp Popup
    </CustomHighlight2Primary>
    <CustomHighlight2Primary> Customized Mapbox Map </CustomHighlight2Primary>
    <CustomHighlight2Primary> Optimized Images </CustomHighlight2Primary>
    <CustomHighlight2Primary>
      Conversion Optimized Checkout
    </CustomHighlight2Primary>
    <CustomHighlight2Primary> Hosting </CustomHighlight2Primary>
    <CustomHighlight2Primary>6 Month Developer Support</CustomHighlight2Primary>
    <CustomHighlight2Primary>Subscriber Form</CustomHighlight2Primary>
    <br />
    <br />
    Sounds pretty good? If so, give us a shout! In addition to the features
    above, you will get a local experienced developer who wants to team up with
    you to help grow your business and online presence. Prices for a Ripple
    Theme start at $300 build fee + $10/month for web hosting and support.
  </P>
);

export const query = graphql`
  {
    logoTrans: file(
      relativePath: { eq: "logos/main/RippleJSLogoTransparent.png" }
    ) {
      childImageSharp {
        fixed(quality: 90, width: 400) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    logoTransMobile: file(
      relativePath: { eq: "logos/main/RippleJSLogoTransparent.png" }
    ) {
      childImageSharp {
        fixed(quality: 90, width: 200) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    demos: allContentfulPortfolioDemos {
      nodes {
        demoSlug
        demoTitle
        demoImage {
          fluid(quality: 99, maxWidth: 600, maxHeight: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }

    picture3: file(relativePath: { eq: "purple-blob.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ({ data }) => {
  const [typingComplete, setTypingComplete] = useState(false);

  const typingCompleteHandler = () => {
    setTypingComplete(true);
  };

  return (
    <MainLayout full={true}>
      <SEO title="Fashion two" description="Sample Fashion Store" />
      <MainHeroCover>
        {window.innerWidth > 600 && (
          <StyledParticles
            params={{
              particles: {
                number: {
                  value: 250,
                },
                // color: {
                //   value: 'white',
                // },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 1,
                    color: '#e2e2e2',
                  },
                },
                opacity: {
                  value: 0.2,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 1,
                  },
                },

                size: {
                  value: 5,
                  random: false,
                },
                line_linked: {
                  enable: true,
                  distance: 90,
                  color: '#fff',
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: 'none',
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'repulse',
                  },
                  onclick: {
                    enable: true,
                    mode: 'bubble',
                  },
                },
                modes: {
                  repulse: {
                    distance: 50,
                    duration: 10,
                  },
                  bubble: {
                    distance: 100,
                    size: 50,
                  },
                },
              },
            }}
          />
        )}
        <MobileHero />

        <MainCenterDiv>
          <Img
            fixed={
              window.innerWidth < 600
                ? data.logoTransMobile.childImageSharp.fixed
                : data.logoTrans.childImageSharp.fixed
            }
          />
          <Blurb>
            {typingComplete ? (
              <Scroll.Link
                to="rippleDemos"
                smooth={true}
                duration={500}
                offset={-30}
              >
                <ButtonStyle2Large>Learn More</ButtonStyle2Large>
              </Scroll.Link>
            ) : (
              <ReactTyped
                strings={[
                  'Lightning Fast Development',
                  'Full Ecommerce Solutions',
                  'Optimized Checkout Process',
                  'Chat Integration',
                  'Complete Customization',
                  'Full Support',
                  'Fast, Slick, Modern ',
                  'Quick Development',
                ]}
                typeSpeed={50}
                backSpeed={0}
                smartBackspace
                onComplete={typingCompleteHandler}
              >
                <span type="text" />
              </ReactTyped>
            )}
          </Blurb>
        </MainCenterDiv>
      </MainHeroCover>

      <Section id="rippleDemos">
        <H2Centered> DEMOS</H2Centered>

        <FashionDemos>
          {data.demos.nodes.map((node, i) => (
            <NoStyleLink key={node.demoTitle} to={`/demos/${node.demoSlug}`}>
              <DemoImageContainer>
                <DemoImage fluid={node.demoImage.fluid} />
                <DemoViewContainer>
                  <CustomButtonStyle2>
                    <span>Live</span> <span>Demo</span>
                  </CustomButtonStyle2>
                </DemoViewContainer>
                <h3>{node.demoTitle}</h3>
              </DemoImageContainer>
            </NoStyleLink>
          ))}
        </FashionDemos>
      </Section>
      <Section>
        <H2Centered> Many More Themes Coming Soon </H2Centered>
      </Section>

      <FullNarrowBackgroundImage fluid={data.picture3.childImageSharp.fluid}>
        <CustomBannerContainer>
          <CatchyBanner
            color="white"
            title="Red Tag"
            background="rgb(218, 18, 31)"
          >
            <p
              style={{
                fontWeight: 'bold',
                marginTop: '4px',
                color: 'lightgrey',
                textAlign: 'center',
              }}
            >
              Up to 50% Off
            </p>
          </CatchyBanner>
        </CustomBannerContainer>
      </FullNarrowBackgroundImage>
      <SectionGrey id="whyRipple">
        <Container800>
          <BasicFeatureSection
            heading="Why RippleJS Theme"
            text={whyRipple()}
          />
        </Container800>
      </SectionGrey>
      <Section>
        <Container800>
          <BasicFeatureSection heading="Features" text={featuresText()} />
        </Container800>
      </Section>
      <SectionGrey>
        <Container800>
          <BasicFeatureSection heading="About Me" text={aboutMe()} />
        </Container800>
      </SectionGrey>

      <Section id="contact">
        <Container800>
          <H2>Contact US</H2>
          <SimpleNetlifyForm />
        </Container800>
      </Section>
    </MainLayout>
  );
};
