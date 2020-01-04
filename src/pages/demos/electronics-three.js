import React from 'react';
import styled from '@emotion/styled';

import { graphql } from 'gatsby';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ElectronicsLayout3 from '../../components/layouts/ElectronicsLayout3';
import {
  Section,
  Container1200,
} from '../../components/reusableStyles/sections/Sections';


import SliderContainer1 from '../../components/reusableStyles/slider/SliderContainer1';

import RenderAmazonProducts from '../../hooks/apiHooks/RenderAmazonProducts';
import { ElectronicsGrid3 } from '../../components/minigrids/electronics3/home/ElectronicsGrid3';

const CustomSection = styled(Section)`
  background: ${props => props.theme.colors.primaryVeryLight};
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
  }
`;

const ElectornicsThree = ({ data }) => {
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
    <ElectronicsLayout3 full={true}>
      <CustomSection style={{ padding: '1rem', paddingBottom: '0' }}>
        <Container1200>
          <ElectronicsGrid3 />
        </Container1200>
      </CustomSection>

      <Section style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <Slider {...settings}>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/QCY-Bluetooth-wireless-earbuds-headphones/dp/B07J9MLYCW/ref=sr_1_3?keywords=qcy&amp;qid=1578128455&amp;sr=8-3&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=c025b28f349a64ab9d6268ffbc62453b&camp=15121&creative=330641"
            title={`QCY Black`}
            subtitle={`Best Deals on Now`}
          ></SliderContainer1>
        <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/QCY-Bluetooth-Headphones-Earphones-Cancelling/dp/B07L4VHK4H/ref=sr_1_5?keywords=qcy&amp;qid=1578128455&amp;sr=8-5&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=78240dd80ec0bb71dde0c9b3c1b7777b&camp=15121&creative=330641"
            title={`QCY 6.0`}
            subtitle={`Best Deals on Now`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/QCY-Headphones-Auto-Pairing-Cancelling-Supporting/dp/B07Q4W49P7/ref=sr_1_9?gclid=EAIaIQobChMIkM6ohMrp5gIViddkCh2ZSQlPEAAYAiAAEgLrB_D_BwE&amp;hvadid=208283958362&amp;hvdev=c&amp;hvlocphy=9001369&amp;hvnetw=g&amp;hvpos=1t2&amp;hvqmt=e&amp;hvrand=13604271948386617947&amp;hvtargid=kwd-492223732472&amp;hydadcr=4513_9156514&amp;keywords=qcy&amp;qid=1578128720&amp;sr=8-9&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=6deef8b5376223ead49cb426561cd678&camp=15121&creative=330641"
            title={`QCY Deluxe`}
            subtitle={`On Prime`}
          ></SliderContainer1>
                 <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/QCY-Bluetooth-wireless-earbuds-headphones/dp/B07J9MLYCW/ref=sr_1_3?keywords=qcy&amp;qid=1578128455&amp;sr=8-3&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=c025b28f349a64ab9d6268ffbc62453b&camp=15121&creative=330641"
            title={`QCY Black`}
            subtitle={`Best Deals on Now`}
          ></SliderContainer1>
        <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/QCY-Bluetooth-Headphones-Earphones-Cancelling/dp/B07L4VHK4H/ref=sr_1_5?keywords=qcy&amp;qid=1578128455&amp;sr=8-5&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=78240dd80ec0bb71dde0c9b3c1b7777b&camp=15121&creative=330641"
            title={`QCY 6.0`}
            subtitle={`Moise Canceling`}
          ></SliderContainer1>
          <SliderContainer1
            background={`linear-gradient(to right bottom, #000000, #434343);`}
            href="https://www.amazon.ca/QCY-Headphones-Auto-Pairing-Cancelling-Supporting/dp/B07Q4W49P7/ref=sr_1_9?gclid=EAIaIQobChMIkM6ohMrp5gIViddkCh2ZSQlPEAAYAiAAEgLrB_D_BwE&amp;hvadid=208283958362&amp;hvdev=c&amp;hvlocphy=9001369&amp;hvnetw=g&amp;hvpos=1t2&amp;hvqmt=e&amp;hvrand=13604271948386617947&amp;hvtargid=kwd-492223732472&amp;hydadcr=4513_9156514&amp;keywords=qcy&amp;qid=1578128720&amp;sr=8-9&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=6deef8b5376223ead49cb426561cd678&camp=15121&creative=330641"
            title={`QCY Deluxe`}
            subtitle={`On Prime`}
          ></SliderContainer1>
 
        </Slider>
      </Section>

      <RenderAmazonProducts
        limit={3}
        keyword={'qcy black'}
        title="QCY Deals"
        subtitle="View All"
        href="https://www.amazon.ca/s?k=qcy+black&_encoding=UTF8&camp=15121&creative=330641&linkCode=ur2&linkId=8ed51b45a03f3971b380223c4fe4e9bd&tag=fashionfive-20"
        background="rgb(234, 237, 237)"
      />

      <RenderAmazonProducts
        limit={3}
        keyword={'qcy'}
        subtitle="See Deals"
        href="https://www.amazon.ca/s?k=qcy&_encoding=UTF8&camp=15121&creative=330641&linkCode=ur2&linkId=a94be228d0112520e15357a3e37d5f8d&tag=fashionfive-20"
        title="iphones on sale"
        background="rgb(234, 237, 237)"
      />
    
    </ElectronicsLayout3>
  );
};

export default ElectornicsThree;




