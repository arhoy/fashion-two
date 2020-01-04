import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import NoStyleLink from '../../../../Links/NoStyleLink';

const Title = styled(NoStyleLink)`
  font-size: 2.6rem;
  text-transform: uppercase;
  text-align: center;
  opacity: 0;
  position: absolute;
  color: ${props => props.theme.colors.white};
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    text-decoration: underline;
  }
`;

const CustomImage = styled(Image)`
  width: 30rem;
  height: 30rem;
  border-radius: 1rem;
  margin: 0 auto;
`;

const Container = styled.div`
  margin: 1rem;

  display: flex;

  flex-wrap: wrap;
  position: relative;
  cursor: pointer;
  &:hover {
    ${CustomImage} {
      filter: brightness(30%);
      -webkit-filter: brightness(30%);
      -webkit-transition: all 1s ease;
    }

    ${Title} {
      opacity: 1;
    }
  }
`;
export const ImageSquare = ({ img, title }) => {
  return (
    <Container>
      <Title to={`/`}>{title}</Title>
      <CustomImage fixed={img} />
    </Container>
  );
};
