import React, { useState } from 'react';
import { Link } from 'gatsby';

import { FaAlignRight, FaBlog } from 'react-icons/fa';

import styled from '@emotion/styled';

import MyMenu3 from '../menus/MyMenu3';

import { Container1200 } from '../reusableStyles/sections/Sections';

import MegaMenu2 from '../menus/MegaMenus/MegaMenu2';

import SuperStoreList1 from '../menus/MegaMenus/MegaMenuLists/Style2/SuperStoreList1';

import Search from '../algolia/Search';
import { MobileMenu1 } from '../menus-mobile/Electronics/MobileMenu1';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import SuperStoreList2 from '../menus/MegaMenus/MegaMenuLists/Style2/SuperStoreList2';

const Header = styled.header`
  height: 10rem;
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
  font-size: 2.9rem;
  padding: 0;
  margin: 0;

  text-decoration: none !important;
`;

const LogoSpan2 = styled.span`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`;

const LogoSpan1 = styled.span`
  color: ${props => props.theme.colors.white};
  transform: translate(0rem, -5px);
`;

const LogoIcon = styled(FaBlog)`
  position: absolute;
  color: ${props => props.theme.colors.white};
  font-size: 5rem;
  top: 5px;
  left: -46px;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 4rem;
    top: 10px;
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

const SearchContainerMobile = styled.div`
  margin: 0 auto;
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CustomButtonStyle2 = styled(ButtonStyle2)`
  display: flex;
`;

const NavElectronics2 = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <Logo>
          <LogoLink to="/">
            <LogoSpan2>Famous</LogoSpan2>
            <LogoSpan1>electronics</LogoSpan1>
            <LogoIcon />
          </LogoLink>
        </Logo>

        <NavContainer>
          <MyMenu3
            dropDownHeightTop={'100px'}
            color={'white'}
            title={`SHOP`}
            buttonPadding={`3rem 3rem`}
          >
            <Container1200>
              <MegaMenu2 background={'white'}>
                <SuperStoreList1 />
              </MegaMenu2>
            </Container1200>
          </MyMenu3>
          <MyMenu3
            dropDownHeightTop={'100px'}
            color={'white'}
            title={`BRANDS`}
            buttonPadding={`3rem 3rem`}
          >
            <Container1200>
              <MegaMenu2 background={'white'}>
                <SuperStoreList2 />
              </MegaMenu2>
            </Container1200>
          </MyMenu3>

          <CustomButtonStyle2>
            <a href="tel:587-772-5536">587-772-5536</a>
          </CustomButtonStyle2>
        </NavContainer>

        <BurgerIcon onClick={mobileMenuHandler} />
        {mobileMenuOpen ? (
          <MobileMenu1 mobileMenuHandler={mobileMenuHandler} />
        ) : null}
      </Header>
      <SearchContainerMobile>
        <Search />
      </SearchContainerMobile>
    </>
  );
};

export default NavElectronics2;
