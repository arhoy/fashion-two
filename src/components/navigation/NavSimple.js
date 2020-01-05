import React, { useState } from 'react';
import { Link } from 'gatsby';

import { FaAlignRight } from 'react-icons/fa';

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

const NavSimple = ({
  title,
  subtitle,
  linkTitle1,
  linkTitle2,
  linkURL1,
  linkURL2,
}) => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <Logo>
          <LogoLink to="/">
            <LogoSpan2>{title}</LogoSpan2>
            <LogoSpan1>{subtitle}</LogoSpan1>
          </LogoLink>
        </Logo>

        <NavContainer>
          <CustomLink to={linkURL1}>{linkTitle1} </CustomLink>
          <CustomLink to={linkURL2}>{linkTitle2} </CustomLink>

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

export default NavSimple;
