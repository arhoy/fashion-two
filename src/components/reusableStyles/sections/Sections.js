// Emotion Styled Element
import styled from '@emotion/styled';

const Section = styled.div`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8rem 4rem;
  @media (max-width: ${props => props.theme.screenSize.mobileVS}) {
    padding: 6rem 2rem;
  }
`;

const SectionPrimary = styled(Section)`
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.white};
`;

const SectionWhite = styled(Section)`
  background: ${props => props.theme.colors.white};
`;

const SectionGrey = styled(Section)`
  background: ${props => props.theme.colors.lightgrey};
`;

const SectionPrimaryTransparent = styled(Section)`
  background: ${props => props.theme.colors.primaryTransparent};
`;

const SectionHexaGrey = styled(Section)`
  margin: 4rem 0;

  background: ${props => props.theme.colors.lightgrey};
  -webkit-clip-path: polygon(
    50% 0%,
    75% 5%,
    100% 0,
    100% 100%,
    75% 96%,
    50% 100%,
    25% 95%,
    0 100%,
    0 0,
    25% 4%
  );
  clip-path: polygon(
    50% 0%,
    75% 5%,
    100% 0,
    100% 100%,
    75% 96%,
    50% 100%,
    25% 95%,
    0 100%,
    0 0,
    25% 4%
  );

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    -webkit-clip-path: polygon(
      50% 0%,
      75% 3%,
      100% 0,
      100% 100%,
      75% 98%,
      50% 100%,
      24% 98%,
      0 100%,
      0 0,
      24% 3%
    );
    clip-path: polygon(
      50% 0%,
      75% 3%,
      100% 0,
      100% 100%,
      75% 98%,
      50% 100%,
      24% 98%,
      0 100%,
      0 0,
      24% 3%
    );
  }
`;

const SectionParallelGrey = styled(Section)`
  background: ${props => props.theme.colors.lightgrey};
  -webkit-clip-path: polygon(0 0, 100% 7%, 100% 100%, 0 93%);
  clip-path: polygon(0 0, 100% 7%, 100% 100%, 0 93%);
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    -webkit-clip-path: polygon(0 0, 100vw 5vw, 100vw 100vw, 0 95vw);
    clip-path: polygon(0 0, 100vw 5vw, 100vw 100vw, 0 95vw);
  }
`;

const ProductPageTopSection = styled(Section)`
  background: ${props => props.theme.colors.primaryTransparent};
  padding: 2rem 6rem;
  @media (max-width: ${props => props.theme.screenSize.mobileVS}) {
    padding: 2rem 2rem;
  }

  & p {
    font-weight: bold;
  }
`;

const TopSection = styled(Section)`
  padding-top: 2rem;
`;

const Container1500 = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Container1200 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container1000 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Container800 = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContainerCenterFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export {
  Section,
  SectionWhite,
  SectionGrey,
  SectionPrimaryTransparent,
  SectionHexaGrey,
  SectionParallelGrey,
  TopSection,
  Container1500,
  Container1200,
  Container1000,
  Container800,
  ContainerCenterFlex,
  ProductPageTopSection,
  SectionPrimary,
};
