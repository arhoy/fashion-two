import React from 'react';
import styled from '@emotion/styled';
import { ButtonStyle2Large } from '../../../../reusableStyles/buttons/Button';

const Container = styled.div`
  padding: 4rem 0.5rem;
  background: ${props => props.theme.colors.white};
  border: 2rem dashed ${props => props.theme.colors.primaryLight};
  margin: 0 auto;

  width: 100%;
  min-height: 63vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
  }

  h2 {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primaryLight};
    padding: 1rem 3rem;
    margin: 2rem 0.5rem;
    text-align: center;
    font-size: 4rem;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      padding: 1rem 1rem;
      font-size: 3.4rem;
    }
  }
  p {
    font-size: 3rem;
    text-align: center;
  }
  span {
    font-size: 7rem;
    font-weight: bold;
    color: ${props => props.theme.colors.primaryDark};
    text-align: center;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      font-size: 5.5rem;
    }
  }
`;

export const SaleBanner = () => {
  return (
    <Container>
      <h2>CLEARANCE</h2>
      <p>Buy One, Get a second</p>
      <span>50% OFF</span>
      <ButtonStyle2Large>Shop Now</ButtonStyle2Large>
    </Container>
  );
};
