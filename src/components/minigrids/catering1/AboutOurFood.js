import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Bold } from '../../reusableStyles/typography/Typography';
import {
  Container,
  BlurbContainer,
  CustomH2,
  CustomP,
  ImageContainerSlider,
  StyledImage,
  CustomPHome,
} from './HomeStyling';
import { ButtonStyle2 } from '../../reusableStyles/buttons/Button';
import NoStyleLink from '../../Links/NoStyleLink';
import Slider from 'react-slick';
import SliderContainer2 from '../../reusableStyles/slider/SliderContainer2';

const CustomContainer = styled(Container)`
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const AboutOurFood = ({ data }) => {
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
  const myImages = useStaticQuery(graphql`
    query {
      heroCarousel: allFile(
        filter: { relativePath: { regex: "/catering1_slider/" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `);

  return (
    <CustomContainer>
      <ImageContainerSlider>
        <Slider {...settings}>
          {myImages.heroCarousel.nodes.map((image, i) => (
            <SliderContainer2 key={i}>
              <StyledImage fluid={image.childImageSharp.fluid} fadeIn={true} />
            </SliderContainer2>
          ))}
        </Slider>
      </ImageContainerSlider>

      <BlurbContainer>
        <CustomH2>About Our Food</CustomH2>
        <CustomP>From Our Kitchen to Your Table</CustomP>
        <CustomPHome>
          Interdum varius sit amet mattis. Eu volutpat odio facilisis mauris sit
          amet massa. Lorem mollis aliquam ut porttitor. Eget mauris pharetra et
          ultrices. Etiam erat velit scelerisque in. A cras semper auctor neque
          vitae tempus. Potenti nullam ac tortor vitae. Non diam phasellus
          vestibulum lorem. Sit amet mattis vulputate enim nulla aliquet
          porttitor lacus luctus. <Bold>Magna</Bold> fermentum iaculis eu non
          diam phasellus vestibulum. Porta nibh venenatis cras sed felis eget
          velit aliquet sagittis. Morbi tempus iaculis urna id volutpat lacus
          laoreet non. Natoque penatibus et magnis dis parturient montes. Ut
          consequat semper viverra nam.
        </CustomPHome>
        <CustomPHome>
          Erat velit scelerisque in dictum non consectetur a. Faucibus ornare
          suspendisse sed nisi lacus sed viverra. Sit amet aliquam id diam
          maecenas. Euismod quis viverra nibh cras pulvinar mattis nunc sed.
          Volutpat odio facilisis mauris sit amet massa vitae. Nisl tincidunt
          eget nullam non nisi est. Consequat ac felis donec et odio
          pellentesque diam <Bold>volutpat</Bold> . Integer eget aliquet nibh
          praesent tristique magna sit amet. Amet purus gravida quis blandit
          turpis cursus in. Ut placerat orci nulla pellentesque dignissim enim
          sit amet venenatis.
          <span role="img" aria-label="">
            ❤️
          </span>
        </CustomPHome>
        <ButtonStyle2>
          <NoStyleLink to="#">View Recipes</NoStyleLink>
        </ButtonStyle2>
      </BlurbContainer>
    </CustomContainer>
  );
};

export default AboutOurFood;
