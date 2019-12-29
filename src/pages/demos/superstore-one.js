import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  FaGlobeAfrica,
  FaSearch,
  FaAmazon,
  FaCcAmazonPay,
  FaEnvira,
  FaDollarSign,
  FaCarAlt,
} from 'react-icons/fa';

import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SuperStoreLayout from '../../components/layouts/SuperStoreLayout';
import {
  Section,
  SectionGrey,
  Container1200,
} from '../../components/reusableStyles/sections/Sections';
import {
  Bold,
  H2CenteredLight2,
  H1,
} from '../../components/reusableStyles/typography/Typography';

import SliderContainer1 from '../../components/reusableStyles/slider/SliderContainer1';
import HerosCard1 from '../../components/reusableStyles/cards/HerosCard1';
import FeatureSection from '../../components/features/FeatureSection';
import { ButtonStyle1 } from '../../components/reusableStyles/buttons/Button';
import { getAmazonProductAPI } from '../../hooks/apiHooks/amazonproducts';
import AmazonProductAPI from '../../components/amazonproducts/AmazonProductAPI';

const HerosContainer = styled.div`
  z-index: -1;

  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const HerosCardContainer = styled.div`
  margin-top: -20vh;

  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: flex-end;
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 70vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.5)
  );
  background-size: cover;
  background-position: top;
  align-items: center;
  opacity: 1 !important;
`;

const HeroContentContainer = styled.div`
  margin-top: 1rem;

  flex-direction: column;
`;
const HeroContent = styled.div`
  color: ${props => props.theme.colors.white};
  max-width: 80rem;
  margin: 0 auto;

  padding: 3rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;
const IconContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledIcon = styled(FaGlobeAfrica)`
  font-size: 25rem;
  opacity: 0.35;
  color: ${props => props.theme.colors.white};
`;

const CustomH1 = styled(H1)`
  text-align: center;
  color: ${props => props.theme.colors.white};
  text-shadow: -3px 3px 0 ${props => props.theme.colors.black};
`;

const CustomH2 = styled(H2CenteredLight2)`
  font-size: 3.2rem;
  color: ${props => props.theme.colors.primary};
  text-shadow: -3px 3px 0 rgba(10, 14, 39, 0.1);
`;

const Blurb = styled.p`
  text-align: center;
  font-weight: bolder;
  & i {
    text-decoration: underline;
  }
`;
const Blurb2 = styled(Blurb)`
  font-weight: 500;
  margin-top: 1rem;
`;

const textVehicles = () => (
  <p>
    You can also purchase cars through us. If you have found a car you would
    like to purchase and ship it to Africa, please fill out the form below with
    the URL of the vehicle you would like to purchase. We will follow up with
    you shortly. Our shipping rates depend on each country and the weight of the
    car. Costs typically vary between <Bold> $500 to $900 </Bold>per car.
  </p>
);

const textAmazonProducts = () => (
  <p>
    For Amazon related products, you pay for the product on Amazon after finding
    it on this site, or going to this site first. After your order is shipped to
    our warehouse, we will call you to confirm and ship your product. Our fees
    for shipping and processing are <Bold>10% of your order + $20. </Bold>
  </p>
);

const textOurWarehouse1 = () => (
  <>
    <p>
      We are a Amazon Associate Partner When checking out on Amazon, use our
      warehouse address
      <br />
      <ButtonStyle1> XX XXX on address line 1</ButtonStyle1>
    </p>
    <p style={{ marginTop: '1rem' }}>
      You can reach our support team if you are having difficulty with purchases
      or if you have any other questions
    </p>
  </>
);

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

const SuperstoreOne = ({ data }) => {
  const [results, setResults] = useState({}); // set results to empty array

  try {
    useEffect(() => {
      const fetchData = async () => {
        const results = await getAmazonProductAPI();

        setResults(results);
      };
      fetchData();
    }, []); // only run on componentDidMount and componentUnmount and query state change
  } catch (error) {
    console.error(error);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <SuperStoreLayout full={true}>
      <HerosContainer>
        <HeroBackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
          <HeroContentContainer>
            <HeroContent>
              <CustomH1>The Amazon Store For Africa</CustomH1>
              <Blurb>
                We will deliver to <i>any</i> African country when Amazon won't
              </Blurb>
              <Blurb2>
                Just add our Warehouse on address line 1 during checkout
              </Blurb2>
            </HeroContent>

            <IconContainer>
              <StyledIcon />
            </IconContainer>
          </HeroContentContainer>
        </HeroBackgroundImage>
      </HerosContainer>
      <HerosCardContainer>
        <HerosCard1
          title={`Find Your Product`}
          blurb={`    We are a Ecommerce Store Shipping products to Africa from Amazon,
            Best Buy, Autotrader and more`}
          icon={<FaSearch />}
        />
        <HerosCard1
          title={`Checkout Via Amazon`}
          blurb={`             Amazon will fullfill the orders, send it to our warehouse. We will
          ship your product with tracking number to your location immediately`}
          icon={<FaAmazon />}
        />
        <HerosCard1
          title={`Safe Secure Transactions`}
          blurb={`            Your orders are 100% guaranteed by Amazon and by Alliances119 to
          arrive in a fast and timely manner.`}
          icon={<FaCcAmazonPay />}
        />

        <HerosCard1
          title={`Many Brands & Growing!`}
          blurb={`   We are the fastest growing new kid on the block, delivering
          ecommerce products to the entire African continent. Providing
          unparalled customer service.`}
          icon={<FaEnvira />}
        />
      </HerosCardContainer>

      <SectionGrey>
        <Container1200>
          {results.data > 0 &&
            results.data.map(result => <AmazonProductAPI item={result} />)}
        </Container1200>
      </SectionGrey>
      <Section>
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
            href="https://www.google.com"
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

      {/* <Section id="inventory">
        <AmazonProducts
          title={'Our Inventory'}
          products={results.data}
          pagination={results.pagination}
        />
      </Section> */}

      <SectionGrey>
        <Container1200>
          <FeatureSection
            heading="Amazon Products"
            subheading="Our Pricing"
            text={textAmazonProducts()}
            icon={FaDollarSign()}
            rotate="rotate(12deg)"
          />
        </Container1200>
      </SectionGrey>

      <Section>
        <Container1200>
          <FeatureSection
            heading="Vehicles"
            subheading="Our Process"
            text={textVehicles()}
            icon={FaCarAlt()}
            rotate="rotate(-15deg)"
            iconSize="10rem"
          />
        </Container1200>
      </Section>

      <SectionGrey>
        <Container1200>
          <FeatureSection
            heading="Our Warehouse"
            subheading="Amazon Associate Partner"
            text={textOurWarehouse1()}
            icon={FaAmazon()}
            rotate="rotate(0deg)"
          />
        </Container1200>
      </SectionGrey>
    </SuperStoreLayout>
  );
};

export default SuperstoreOne;
