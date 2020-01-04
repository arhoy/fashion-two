import React, { useState } from 'react';
import { Link } from 'gatsby';

import { FaAlignRight, FaBluetoothB } from 'react-icons/fa';

import styled from '@emotion/styled';

import { MobileMenu1 } from '../menus-mobile/Electronics/MobileMenu1';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

import NoStyleLink from '../Links/NoStyleLink';

const Header = styled.header`
  height: 7rem;
  position: relative;

  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};

  display: flex;

  margin: 0 auto;

  justify-content: space-around;
  align-items: center;

  z-index: 1;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
  }
`;

const Logo = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
`;
const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding: 0;
  margin: 0;

  text-decoration: none !important;
`;

const LogoSpan2 = styled.span`
  font-size: 2.6rem;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`;

const LogoSpan1 = styled.span`
  color: ${props => props.theme.colors.white};
  transform: translate(0rem, -5px);
`;

const LogoIcon = styled(FaBluetoothB)`
  position: absolute;
  color: ${props => props.theme.colors.primary};
  font-size: 5rem;
  top: 2px;
  left: -46px;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 4rem;
    top: 4px;
    left: -30px;
  }
`;

const NavContainer = styled.nav`
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const BurgerIcon = styled(FaAlignRight)`
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CustomButtonStyle2 = styled(ButtonStyle2)`
  display: flex;
`;

const CustomLink = styled(NoStyleLink)`
  color: ${props => props.theme.colors.white};
  height: 100%;
  padding: 1rem;
  margin: 1rem;
  & :hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const NavElectronics3 = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <Logo>
          <LogoLink to="/">
            <LogoSpan2>QCY</LogoSpan2>
            <LogoSpan1>Deluxe</LogoSpan1>
            <LogoIcon />
          </LogoLink>
        </Logo>

        <NavContainer>
          <CustomLink to="/">Home </CustomLink>
          <CustomLink to="/">Air Buds</CustomLink>
          <CustomLink to="/">Head Phones</CustomLink>

          <CustomButtonStyle2>
            <a href="tel:587-772-5536">587-772-5536</a>
          </CustomButtonStyle2>
        </NavContainer>

        <BurgerIcon onClick={mobileMenuHandler} />
        {mobileMenuOpen ? (
          <MobileMenu1 mobileMenuHandler={mobileMenuHandler} />
        ) : null}
      </Header>
    </>
  );
};

export default NavElectronics3;
