import React from 'react';
import styled from '@emotion/styled';
import {
  FaGlobeAfrica,
  FaSearch,
  FaAmazon,
  FaCcAmazonPay,
  FaEnvira,
} from 'react-icons/fa';

import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ElectronicsLayout2 from '../../components/layouts/ElectronicsLayout2';
import {
  Section,
  Container1200,
  Container1500,
  SectionGrey,
} from '../../components/reusableStyles/sections/Sections';
import {
  Bold,
  H2CenteredLight2,
  H1,
} from '../../components/reusableStyles/typography/Typography';

import SliderContainer1 from '../../components/reusableStyles/slider/SliderContainer1';

import { ElectronicsGrid2 } from '../../components/minigrids/electronics2/home/ElectronicsGrid2';
import RenderAmazonProducts from '../../hooks/apiHooks/RenderAmazonProducts';

const CustomH2 = styled(H2CenteredLight2)`
  font-size: 4.2rem;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primaryLight};
  padding: 1rem;
`;

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "superstore/hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slider1: file(relativePath: { eq: "superstore/slider1.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slider2: file(relativePath: { eq: "superstore/slider2.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slider3: file(relativePath: { eq: "superstore/slider3.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    picture4: file(relativePath: { eq: "watch.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    picture5: file(relativePath: { eq: "tv.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    picture6: file(relativePath: { eq: "apple-iphone-1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    heroCarousel: allFile(
      filter: { relativePath: { regex: "/carouselArray1/" } }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`;

const ElectronicsTwo = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <ElectronicsLayout2 full={true}>
      <Section style={{ padding: '1rem', paddingBottom: '0' }}>
        <Container1200>
          <ElectronicsGrid2 />
        </Container1200>
      </Section>

      <Section style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <CustomH2>
          <Bold>Featured</Bold> Products
        </CustomH2>
        <Slider {...settings}>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/s?k=monitors+asus&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=8ed51b45a03f3971b380223c4fe4e9bd&camp=15121&creative=330641"
            title={`Monitors`}
            subtitle={`Premium ASUS Monitors`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/s?k=iphone&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=a94be228d0112520e15357a3e37d5f8d&camp=15121&creative=330641"
            title={`iphones`}
            subtitle={`Reburbished at Great Prices`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/s?k=amazon+drones&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=412603aabc1e3fcd6b0f20c2efdbf384&camp=15121&creative=330641"
            title={`Drones`}
            subtitle={`Starting at $39.99`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/s?k=monitors+asus&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=8ed51b45a03f3971b380223c4fe4e9bd&camp=15121&creative=330641"
            title={`Monitors`}
            subtitle={`Premium ASUS Monitors`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/s?k=iphone&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=a94be228d0112520e15357a3e37d5f8d&camp=15121&creative=330641"
            title={`iphones`}
            subtitle={`Reburbished at Great Prices`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/s?k=amazon+drones&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=412603aabc1e3fcd6b0f20c2efdbf384&camp=15121&creative=330641"
            title={`Drones`}
            subtitle={`Starting at $39.99`}
          ></SliderContainer1>
        </Slider>
      </Section>

      <RenderAmazonProducts
        limit={3}
        keyword={'asus monitors'}
        title="Asus Deals"
        subtitle="View All"
        href="https://www.amazon.ca/s?k=monitors+asus&_encoding=UTF8&camp=15121&creative=330641&linkCode=ur2&linkId=8ed51b45a03f3971b380223c4fe4e9bd&tag=fashionfive-20"
        background="rgb(234, 237, 237)"
      />

      <RenderAmazonProducts
        limit={3}
        keyword={'iphone'}
        subtitle="See Deals"
        href="https://www.amazon.ca/s?k=iphone&_encoding=UTF8&camp=15121&creative=330641&linkCode=ur2&linkId=a94be228d0112520e15357a3e37d5f8d&tag=fashionfive-20"
        title="iphones on sale"
        background="rgb(234, 237, 237)"
      />
      <RenderAmazonProducts
        limit={3}
        keyword={'drones'}
        subtitle="View More"
        href="https://www.amazon.ca/s?k=amazon+drones&_encoding=UTF8&camp=15121&creative=330641&linkCode=ur2&linkId=412603aabc1e3fcd6b0f20c2efdbf384&tag=fashionfive-20"
        title="Drone Deals"
        background="rgb(234, 237, 237)"
        padding={`2rem 0 10rem 0`}
      />
    </ElectronicsLayout2>
  );
};

export default ElectronicsTwo;
